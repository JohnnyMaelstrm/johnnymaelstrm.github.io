---
layout: post
title: "Custom Sliver C2-Framework"
permalink: /Sliver/
icon: fas fa-terminal
order: 1
date: 2026-01-12 20:00:00 +0300
categories: [Red Teaming, Infrastructure]
tags: [ansible, automation, iac, linux, devsecops, red teaming, sliver, golang, opsec, cloudflare]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

  <p align="center">
    <img src="{{ '/assets/RedTeam/Terminal.png' | relative_url }}" 
         alt="Sliver Terminal Screenshot" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p align="center"><em>Customized Sliver C2-Framework running on a hardened VPS with Serverless Redirector</em></p>

  <h1>Automated & Hardened C2 Infrastructure</h1>

  <p>In modern Red Teaming, infrastructure must be disposable, reproducible, and stealthy. For this project, I engineered a fully automated <strong>Infrastructure as Code (IaC)</strong> pipeline using <strong>Ansible</strong> to deploy a highly customized <a href="https://github.com/BishopFox/sliver" target="_blank">Sliver C2</a> server.</p>

  <p>The objective was to move away from default binaries and build a custom-compiled infrastructure optimized for cost-effective <strong>ARM64</strong> cloud instances, protected by serverless edge redirectors to mask the backend origin and evade detection.</p>
  
  <p><strong>Status:</strong> Operational / Fully Hardened<br>
  <strong>Tech Stack:</strong> Ansible, Go (1.23+), Cloudflare Workers, Linux (Debian), Sliver, Systemd Sandboxing</p>

  <div class="highlight-box">
    <h3>Project Highlights</h3>
    <p>This pipeline orchestrates source code mutation <em>before</em> compilation and implements multi-layer network obfuscation.</p>
    <ul>
      <li><strong>Polymorphism:</strong> Automated source-code injection for unique binary hashes and randomized database artifacts.</li>
      <li><strong>Stealth:</strong> Serverless Edge Redirectors (Cloudflare Workers) for origin IP masking and granular traffic filtering.</li>
      <li><strong>Hardening:</strong> Static analysis resistance via <code>-trimpath</code> and strict Systemd process sandboxing.</li>
    </ul>
  </div>

  <h2>Technical Deep Dive</h2>

  <h3>1. Polymorphic Infrastructure (Anti-Forensics)</h3>
  <p>Standard C2 installations leave predictable artifacts like <code>sliver.db</code>. My Ansible playbook acts as a pre-compiler modification engine to break static signatures and forensic patterns:</p>

  <ul>
    <li><strong>Source Code Mutation:</strong> The playbook uses <code>sed</code> to inject random strings into the Go source code, renaming the core database (e.g., <code>core_oohhukam.db</code>) and internal structures.</li>
    <li><strong>Service Randomization:</strong> The Systemd service is deployed with randomized names (e.g., <code>sys-yotipt.service</code>), blending into standard background system processes.</li>
    <li><strong>Binary Stripping:</strong> All binaries are compiled with <code>-ldflags="-s -w"</code> and <code>-trimpath</code>, removing debug symbols and build-machine path metadata that could leak developer environment details.</li>
  </ul>

  <h3>2. Serverless Edge Redirectors (Cloudflare Workers)</h3>
  <p>To prevent direct exposure of the C2 server's IP address, I implemented a <strong>Serverless Redirector</strong> using Cloudflare Workers. This layer acts as an intelligent proxy and the primary line of defense.</p>

  <ul>
    <li><strong>Traffic Blending:</strong> The redirector is configured to allow only specific paths (e.g., <code>/js/jquery.min.js</code>), mimicking a legitimate JavaScript CDN.</li>
    <li><strong>Request Filtering:</strong> Any unauthorized access or scanning attempts are met with a <code>403 Forbidden</code> or a <code>302 Redirect</code> to a decoy site, preventing backend fingerprinting.</li>
    <li><strong>Origin Masking:</strong> The implant only communicates with the edge domain, making it virtually impossible for blue teams to identify the backend VPS IP without edge-level logs.</li>
  </ul>

  <h3>3. Operational Hardening via Systemd</h3>
  <p>The C2 server runs in a highly restricted <strong>Systemd Sandbox</strong>. Instead of root privileges, the process is managed by a low-privileged user (<code>sliver-svc</code>) with zero interactive login capability.</p>
  
  <ul>
    <li><code>NoNewPrivileges=true</code>: Enforces that the process and its children can never gain new privileges via suid bits.</li>
    <li><code>PrivateTmp=true</code>: Provides an isolated, non-persistent <code>/tmp</code> namespace.</li>
    <li><code>ProtectHome=true</code>: Ensures the service cannot access any user home directories, limiting the impact of a potential process compromise.</li>
  </ul>

  <h3>4. ARM64 Compilation & Traffic Masquerading</h3>
  <p>The server is optimized for ARM64 architecture, utilizing architecture-specific build tools and <code>-tags "cgo_sqlite"</code> for database stability. The C2-server is further hardened with <strong>HTTP Masquerading</strong>, where the backend server headers are spoofed to return <code>Server: cloudflare</code>, ensuring perfect header symmetry with the redirector layer.</p>

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
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Resource Development</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1583.003</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Automated VPS provisioning & configuration via Ansible.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Defense Evasion</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1027.002</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Binary stripping and -trimpath to remove build metadata.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Defense Evasion</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1564.001</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Renaming of critical DB and service artifacts (Polymorphism).</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Command and Control</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1071.001</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Application Layer Masquerading via jQuery CDN traffic.</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Command and Control</td>
          <td style="padding: 10px;">T1090.002</td>
          <td style="padding: 10px;">External Proxying through Serverless Edge Redirectors.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Technical Validation (Proof of Hardening)</h2>
  <p>To verify the efficacy of the hardening measures, I performed technical checks on the production binary. The following evidence confirms the absence of symbols, path metadata, and the successful deployment of the polymorphic database.</p>

  <p align="center">
    <img src="{{ '/assets/RedTeam/PoC.png' | relative_url }}" 
         alt="Terminal Verification of Binary Hardening" 
         style="max-width:100%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 1: Terminal verification showing no symbols (nm), zero path leaks (strings), and custom DB artifacts.</em></p>

  <pre><code># Manual verification commands:
$ nm sliver-server | grep "sliver" # Expected: no symbols
$ strings sliver-server | grep "/opt/" # Expected: empty
$ ls /opt/Ghost-Sliver/sliver/.sliver/*.db # Expected: core_[random].db</code></pre>

  <h2>Conclusion</h2>
  <p>This project demonstrates that effective Red Teaming infrastructure requires a blend of offensive security research and defensive DevOps principles. By combining <strong>Infrastructure as Code</strong>, <strong>Source Mutation</strong>, and <strong>Serverless Edge Computing</strong>, I created a C2 environment that is resilient against both network-based heuristics and host-based forensic analysis.</p>

  <div class="highlight-box" style="border-left: 3px solid #bb1f1fff;">
    <h3> Continue to Part II</h3>
    <p>The infrastructure is built, but now it needs a gatekeeper. In the next part, I deploy a Smart Serverless Redirector to make the backend completely invisible.</p>
    <p><a href="/Redirector/"><strong>Read Part II: The Serverless C2 Redirector &rarr;</strong></a></p>
  </div>

</div>

<style>
/* --- Font & Global --- */
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