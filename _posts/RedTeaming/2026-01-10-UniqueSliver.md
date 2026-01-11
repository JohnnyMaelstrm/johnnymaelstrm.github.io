---
layout: post
title: "Custom Sliver C2-Framework"
permalink: /Sliver/
icon: fas fa-terminal
order: 1
date: 2026-01-11 11:00:00 +0300
categories: [Red Teaming, Infrastructure]
tags: [ansible, automation, iac, linux, devsecops, red teaming, sliver, golang, opsec]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

  <p align="center">
    <img src="{{ '/assets/RedTeam/Terminal.png' | relative_url }}" 
         alt="Sliver Terminal Screenshot" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p align="center"><em>Sliver C2-Framework terminal running on a hardened ARM64 VPS</em></p>

  <h1>Automated & Hardened C2 Infrastructure</h1>

  <p>In modern Red Teaming, infrastructure must be disposable, reproducible, and stealthy. For this project, I engineered a fully automated <strong>Infrastructure as Code (IaC)</strong> pipeline using <strong>Ansible</strong> to deploy a highly customized <a href="https://github.com/BishopFox/sliver" target="_blank">Sliver C2</a> server.</p>

  <p>The goal was to move away from default binaries (which are easily flagged by EDRs) and build a custom-compiled infrastructure optimized for cost-effective <strong>ARM64</strong> cloud instances. This required solving complex dependency challenges between Go, CGO, and Systemd security policies.</p>
  
  <p><strong>Status:</strong> Operational<br>
  <strong>Tech Stack:</strong> Ansible, Go (1.23+), Linux (Debian), Sliver, Systemd Hardening</p>

  <div class="highlight-box">
    <h3>Project Highlights</h3>
    <p>Unlike a standard installation, this pipeline modifies the C2 source code <em>before</em> compilation and locks down the operating system.</p>
    <ul>
      <li><strong>Polymorphism:</strong> Unique binary hashes and random artifact names for every deployment.</li>
      <li><strong>Architecture:</strong> ARM64 Native Compilation with CGO support.</li>
      <li><strong>Hardening:</strong> Service runs with restricted Linux Capabilities and Systemd sandboxing.</li>
    </ul>
  </div>

  <h2>Technical Deep Dive</h2>

  <h3>1. Polymorphic Infrastructure (Anti-Forensics)</h3>
  <p>Standard C2 installations leave predictable artifacts like <code>sliver.db</code> or default service names on the disk. My Ansible playbook acts as a pre-compiler modification engine:</p>

  <p align="center">
    <img src="{{ '/assets/RedTeam/grep.png' | relative_url }}" alt="Anti-Forensics Proof" style="max-width:90%; height:auto;" />
  </p>

  <p><strong>The Mechanism:</strong></p>
  <ul>
    <li><strong>Source Code Mutation:</strong> Before building, the playbook uses <code>sed</code> to inject random strings into the source code, renaming critical files (e.g., <code>core_oohhukam.db</code> instead of <code>sliver.db</code>).</li>
    <li><strong>Service Randomization:</strong> The Systemd service name is randomized (e.g., <code>sys-yotipt.service</code>), blending in with legitimate system processes.</li>
    <li><strong>Result:</strong> Every deployment results in a completely unique binary hash (SHA256), blinding static analysis tools.</li>
  </ul>

  <h3>2. Operational Hardening via Systemd</h3>
  <p>Security is not just about the implant; it's about the server itself. Instead of running the C2 as root, I implemented a strict <strong>Systemd Sandbox</strong> configuration.</p>
  
  <p>The service runs under a low-privileged user (<code>sliver-svc</code>) with minimal capabilities:</p>
  <ul>
    <li><code>NoNewPrivileges=true</code>: Prevents privilege escalation.</li>
    <li><code>PrivateTmp=true</code>: Isolates the process temp files.</li>
    <li><code>CapabilityBoundingSet=CAP_NET_BIND_SERVICE</code>: Allows binding to port 80/443 without granting full root access.</li>
  </ul>
  <p><em>Challenge solved:</em> Debugging the interaction between Go's runtime and Systemd's <code>ProtectHome</code> policies required precise configuration of environment variables and read/write paths to ensure the database could initialize within the sandbox.</p>

  <h3>3. ARM64 Compilation & Traffic Masquerading</h3>
  <p>To optimize for cloud costs, the server runs on ARM64. The pipeline handles the installation of architecture-specific build tools (GCC for ARM) and compiles the binary with <code>-tags "cgo_sqlite"</code> to ensure database stability. Additionally, the server is pre-configured with <strong>HTTP C2 profiles</strong> that mimic legitimate jQuery CDN traffic (headers, structure) to evade network heuristics.</p>

  <h2>Conclusion & Roadmap</h2>
  
  <p>This project demonstrates that effective Red Teaming infrastructure requires a blend of offensive knowledge and defensive DevOps principles. The result is a C2 server that is not only functional but resilient against forensic analysis and safe from compromise.</p>

  <p><strong>Next Steps:</strong> The project roadmap includes deploying <strong>Nginx redirectors</strong> to sit in front of the C2, completely hiding the server's true IP address. I will also be working on advanced profile customization to further blend traffic into corporate background noise.</p>

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

/* --- Paragraphs & Lists --- */
.hacker-page p {
  margin: 1rem 0;
}

.hacker-page ul {
  list-style-type: square;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.hacker-page li {
  margin-bottom: 0.5rem;
  color: #d4d4d8;
}

.hacker-page a {
  color: #e4e4e7;
  text-decoration: underline;
}

.hacker-page a:hover {
  color: #bb1f1fff;
}

/* --- Headings --- */
.hacker-page h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: #bb1f1fff; /* Red accent matching your Thesis page */
}

.hacker-page h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #e4e4e7;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.hacker-page h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.8rem;
  color: #e4e4e7;
}

/* --- Images --- */
.hacker-page img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  border-radius: 4px;
}

/* --- Highlight box --- */
.hacker-page .highlight-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 2rem 0;
}

/* --- Code snippets inline --- */
.hacker-page code {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.9em;
    color: #ff5252;
}

/* --- Responsive --- */
@media (max-width: 600px) {
  .hacker-page h1 { font-size: 1.5rem; }
  .hacker-page h2 { font-size: 1.2rem; }
  .hacker-page h3 { font-size: 1rem; }
}
</style>