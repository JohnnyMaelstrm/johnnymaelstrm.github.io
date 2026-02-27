---
layout: post
title: "Smart Serverless C2 Redirector"
permalink: /Redirector/
icon: fas fa-network-wired
order: 2
date: 2026-01-20 20:00:00 +0300
categories: [Red Teaming, Infrastructure]
tags: [cloudflare, serverless, javascript, opsec, defense evasion, c2, mitre att&ck]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

  <p align="center">
    <img src="{{ '/assets/RedTeam/ProofOFSLIVER1.png' | relative_url }}" 
         alt="Curl Redirect Proof" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p align="center"><em>Figure 1: Unauthorized traffic gets redirected to Google (302), while whitelisted paths receive a masqueraded response.</em></p>

  <h1>The Invisible Gatekeeper: Serverless Edge C2</h1>

  <p>In <a href="/Sliver/">Part I</a> of this project, I focused on hardening the C2 binary and host. However, a hardened server is useless if its IP address is flagged by Blue Teams within minutes. For Part II, I engineered a <strong>Smart Serverless Redirector</strong> using <strong>Cloudflare Workers</strong>.</p>

  <p>Instead of a traditional dumb TCP-pipe (like socat or iptables), this redirector acts as an intelligent programmable gatekeeper at the network edge. It inspects HTTP traffic <em>before</em> it ever reaches the backend infrastructure, effectively making the C2 server invisible to scanners.</p>
  
  <p><strong>Status:</strong> Operational / Stealthy<br>
  <strong>Tech Stack:</strong> Cloudflare Workers (JavaScript), HTTP/2, TLS 1.3</p>

  <div class="highlight-box">
    <h3>Capabilities Implemented</h3>
    <p>The logic is deployed on the network edge, providing global coverage and zero-trust filtering for the C2 backend.</p>
    <ul>
      <li><strong>Smart Whitelisting:</strong> Only specific, pre-defined paths (e.g., <code>/js/jquery.min.js</code>) are forwarded. Everything else is dropped.</li>
      <li><strong>Active Deception (Decoy):</strong> Unauthorized IPs or scanners are immediately redirected (HTTP 302) to legitimate sites like Google.</li>
      <li><strong>Heuristic Evasion:</strong> The worker rewrites error codes to mimic broken JavaScript libraries (503) instead of revealing standard C2 access-denied errors (403).</li>
    </ul>
  </div>

  <h2>Technical Deep Dive</h2>

  <h3>1. The Logic: "Whitelisting" vs "Blacklisting"</h3>
  <p>Most simple redirectors try to blacklist known scanners. This is a losing battle. My implementation uses a strict <strong>Allow-List</strong> approach. The Worker script validates the <code>request.url</code> against a hardcoded array of allowed paths.</p>

  <pre><code class="language-javascript">// Simplified Logic from the Worker
const ALLOWED_PATHS = ["/js/jquery.min.js", "/api/v1/update"];

if (!ALLOWED_PATHS.includes(url.pathname)) {
  // If you are not on the list, you go to Google.
  return Response.redirect("https://www.google.com", 302);
}</code></pre>

  <h3>2. OpSec: Header Sanitization & Masquerading</h3>
  <p>Even if a request is allowed, the backend C2 server might leak identifying headers (e.g., <code>X-Sliver-Version</code>). The Cloudflare Worker acts as a sanitization proxy:</p>

  <ul>
    <li><strong>Strip Headers:</strong> Removes all C2-specific headers before sending the response to the client.</li>
    <li><strong>Inject Camouflage:</strong> Adds standard CDN headers like <code>CF-Cache-Status: HIT</code> and <code>Server: cloudflare</code>.</li>
    <li><strong>Symmetry:</strong> To the network analyst, the traffic looks indistinguishable from a user downloading a jQuery library from a CDN.</li>
  </ul>

  <h3>3. The "503" Deception</h3>
  <p>A common mistake in C2 setups is returning a <code>403 Forbidden</code> or <code>404 Not Found</code> when a session is invalid. This creates a pattern. I programmed the Worker to intercept backend rejections and rewrite them as <strong>believable application errors</strong>.</p>
  
  <p>If a request hits a valid path but lacks a valid session ID, the Worker returns a custom <code>503 Service Unavailable</code> with a body containing jQuery comments. This tricks automated analysis tools into thinking the target is just a broken script file, not a secure C2 interface.</p>

  <h2>MITRE ATT&CK® Mapping</h2>
  <div class="highlight-box" style="padding: 0; overflow: hidden; border-color: rgba(255, 82, 82, 0.3);">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85em;">
      <thead style="background: rgba(255, 82, 82, 0.1);">
        <tr>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Tactic</th>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Technique ID</th>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Implementation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Command and Control</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1090.002</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">External Proxy: Using Cloudflare Workers to hide origin.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Defense Evasion</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1071.001</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Web Protocols: Masquerading traffic as jQuery/CDN downloads.</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Resource Development</td>
          <td style="padding: 10px;">T1583.006</td>
          <td style="padding: 10px;">Web Services: Leveraging Serverless infrastructure for redirection.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Technical Verification</h2>
  <p>To verify the logic, I performed manual <code>curl</code> requests against the infrastructure. The screenshot below (Figure 1) demonstrates the dual-nature of the redirector:</p>
  
  <ul>
    <li><strong>Test A (Top):</strong> Accessing <code>/admin_login</code> triggers the default rule -> <strong>Redirect to Google</strong>.</li>
    <li><strong>Test B (Bottom):</strong> Accessing <code>/js/jquery.min.js</code> (without a valid implant session) triggers the deception rule -> <strong>503 Service Unavailable (Cloudflare)</strong>.</li>
  </ul>

  <h2>Conclusion</h2>
<p>
By moving the redirection logic to a Layer 3 tunnel, I have effectively decoupled the C2 infrastructure from its public footprint. Unlike the previous serverless approach, this architecture provides full protocol flexibility—allowing TCP, UDP, and ICMP to flow through the redirector while the backend IP remains entirely hidden from the public internet. This setup forces defenders to move beyond simple IP reputation and analyze complex traffic patterns, significantly increasing the cost of detection.
</p>

<div class="highlight-box" style="border-left: 3px solid #bb1f1fff;">
<h3>Now Live: Version 3 - The "Rootless" Infrastructure</h3>
<p>
The project has evolved. In Version 3, I’ve moved away from Layer 7 serverless workers and implemented a robust Layer 3 tunneling solution using <strong>Ligolo-ng</strong>.
</p>
<ul>
<li>
<strong>Rootless Execution:</strong> Leveraged Linux Capabilities (<code>CAP_NET_ADMIN</code>) to manage networking without requiring full root privileges.
</li>
<li>
<strong>Infrastructure as Code:</strong> Fully automated deployment via Ansible, with Terraform orchestration for a disposable redirector fleet.
</li>
<li>
<strong>Hardened Resilience:</strong> Implemented self-healing tunnels and kernel-enforced sandboxing via AppArmor and Systemd.
</li>
</ul>

<p><a href="/Ghost-Sliver-V3/"><strong>Read Part III: Rootless C2 & Layer 3 Tunneling &rarr;</strong></a></p>
</div>

<style>
/* --- Inherits same styles from Part 1 --- */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

.hacker-page, .hacker-page * {
  font-family: 'JetBrains Mono', monospace !important;
  color: #d4d4d8;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.hacker-page p { margin: 1rem 0; }
.hacker-page ul { list-style-type: square; margin-left: 1.5rem; margin-bottom: 1.5rem; }
.hacker-page li { margin-bottom: 0.5rem; color: #d4d4d8; }
.hacker-page a { color: #e4e4e7; text-decoration: underline; }
.hacker-page a:hover { color: #bb1f1fff; }

.hacker-page h1 { font-size: 2rem; font-weight: 700; margin: 1.5rem 0 1rem; color: #bb1f1fff; }
.hacker-page h2 { font-size: 1.5rem; font-weight: 600; margin: 2rem 0 1rem; color: #e4e4e7; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 0.5rem; }
.hacker-page h3 { font-size: 1.2rem; font-weight: 600; margin: 1.5rem 0 0.8rem; color: #e4e4e7; }

.hacker-page pre { background: rgba(0,0,0,0.3); padding: 1rem; border-left: 3px solid #bb1f1fff; overflow-x: auto; margin: 1.5rem 0; }
.hacker-page code { font-size: 0.9em; color: #ff5252; }

.hacker-page .highlight-box { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); padding: 1.5rem; border-radius: 6px; margin: 2rem 0; }

@media (max-width: 600px) {
  .hacker-page h1 { font-size: 1.5rem; }
  .hacker-page h2 { font-size: 1.2rem; }
}
</style>