---
layout: post
title: "Custom Sliver C2-Framework"
permalink: /Sliver/
icon: fas fa-terminal
order: 1
date: 2026-01-10 11:00:00 +0300
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

  <p align="center"><em>Sliver C2-Framework terminal</em></p>

  <h1>Automated C2 Infrastructure</h1>

  <p>In modern Red Teaming, infrastructure must be disposable. For this project, I engineered a fully automated <strong>Infrastructure as Code (IaC)</strong> pipeline using <strong>Ansible</strong> to deploy a hardened <a href="https://github.com/BishopFox/sliver" target="_blank">Sliver C2</a> server.</p>

  <p>The goal was to move away from default binaries (which are easily flagged by EDRs) and build a custom-compiled, stealthy infrastructure optimized for cost-effective <strong>ARM64</strong> cloud instances. This required solving complex dependency challenges between Go, CGO, and the ARM architecture.</p>
  
  <p><strong>Status:</strong> Operational<br>
  <strong>Tech Stack:</strong> Ansible, Go, Linux (Debian), Sliver, Systemd</p>

  <div class="highlight-box">
    <h3>Project Highlights</h3>
    <p>Unlike a standard installation, this pipeline modifies the C2 source code <em>before</em> compilation to evade forensics.</p>
    <ul>
      <li><strong>Architecture:</strong> ARM64 Native (Custom Cross-Compilation)</li>
      <li><strong>Automation:</strong> "Zero-to-Hero" deployment in < 5 minutes</li>
      <li><strong>OpSec:</strong> Automated Anti-Forensics & Binary Stripping</li>
    </ul>
  </div>

  <h2>Technical Deep Dive: ARM64 & Hardening</h2>

  <h3>1. Escaping Dependency Hell</h3>
  <p>Standard builds of Sliver fail on ARM64 architectures due to incompatibilities with <code>gvisor</code> and <code>sqlite</code> drivers. Instead of falling back to x86, I engineered a solution within the build pipeline.</p>

  <p>By forcing the <strong>Master branch</strong> and identifying specific build tags (<code>-tags "wizard,cgo_sqlite"</code>), I managed to properly link the C-based drivers. This allows the C2 to run natively and efficiently on modern ARM cloud infrastructure.</p>

  <h3>2. Automated Anti-Forensics</h3>
  <p>A key objective was <strong>Signature Evasion</strong>. Default C2 installations leave obvious artifacts like <code>sliver.db</code> on the disk. My Ansible playbook uses <code>sed</code> to inject changes directly into the source code before the compiler runs.</p>

  <p align="center">
    <img src="{{ '/assets/RedTeam/grep.png' | relative_url }}" alt="Anti-Forensics Proof" style="max-width:90%; height:auto;" />
  </p>

  <p><strong>The Mechanism:</strong></p>
  <ul>
    <li><strong>Source Mod:</strong> The playbook renames critical artifacts (e.g., <code>sliver.db</code> → <code>core_integrity.db</code>).</li>
    <li><strong>Unique Hash:</strong> Because the source code changes, every single deployment results in a completely unique binary hash (SHA256).</li>
    <li><strong>Verification:</strong> As seen in the <code>grep</code> output above, the compiled binary now contains our obfuscated filename, effectively blinding basic forensic analysis.</li>
  </ul>

  <h3>3. Binary Stripping</h3>
  <p>To further hinder reverse engineering, the build command applies custom linker flags (<code>-s -w</code>). This strips the symbol table and DWARF debug information, significantly reducing the file size and removing human-readable function names from the binary.</p>

  <h2>Conclusion</h2>
  
  <p>This project demonstrates that in Red Teaming, automation is about more than just speed—it is about <strong>resilience and security</strong>. By combining DevOps principles with offensive security knowledge, I created a C2 infrastructure that is unique, hardened, and ready for operation at the push of a button.</p>

<p><strong>Next Steps:</strong> The project roadmap includes deploying Nginx redirectors behind Cloudflare to further obscure the network infrastructure. Additionally, I will focus on modifying Sliver's C2 profiles at the code level. This results in a significantly more resilient and obfuscated infrastructure compared to standard "out-of-the-box" deployments. Stay tuned for part 2!</p>

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