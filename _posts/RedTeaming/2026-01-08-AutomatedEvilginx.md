---
layout: post
title: "Project: Automated Evilginx2 Infrastructure"
permalink: /redteam-infra-automation/
icon: fas fa-network-wired
order: 2
date: 2026-01-08 17:00:00 +0300
categories: [Red Teaming, Infrastructure]
tags: [ansible, evilginx2, automation, iac, linux, devsecops, red teaming]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

  <p align="center">
    <img src="{{ '/assets/RedTeam/Ansible_playbook.png' | relative_url }}" 
         alt="Ansible Execution" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p align="center"><em>Automated Provisioning: From Zero to Phishing-Ready in &lt;3 minutes</em></p>

  <h1>Infrastructure as Code: Evilginx2</h1>

  <p>Modern Red Team operations require speed and reproducibility. Manual setup of phishing infrastructure is slow, error-prone, and leaves inconsistent forensic footprints. This project transitions the deployment of <strong>Evilginx2</strong>—the premier AiTM (Adversary-in-the-Middle) framework—entirely to code.</p>

  <p><strong>Goal:</strong> Eliminate manual configuration, ensure operational persistence via <code>tmux</code> + <code>systemd</code>, and enable rapid "burn and rebuild" capabilities.</p>
  
  <p><strong>Status:</strong> 🟢 Operational<br>
  <strong>Tech Stack:</strong> Ansible, Evilginx 3.3, Go, ARM64/Linux</p>

  <div class="highlight-box">
    <h3>Operational Advantages</h3>
    <p>By defining the infrastructure as code (IaC), we achieve:</p>
    <ul>
      <li><strong>Immutable Infrastructure:</strong> Every deployment is mathematically identical. No configuration drift.</li>
      <li><strong>OpSec Agility:</strong> If an IP is flagged, I can tear down the server and redeploy on a fresh node in under 3 minutes.</li>
      <li><strong>Persistence:</strong> Custom systemd units keep the session alive while allowing interactive operator access.</li>
    </ul>
  </div>

  <h2>Technical Architecture</h2>

  <h3>1. The Blueprint (Ansible)</h3>
  <p>The entire environment is defined in a modular Ansible playbook structure. This separates sensitive data (hosts) from the logic (roles).</p>

  <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
    RedTeam-Automation/<br>
    ├── hosts.ini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Target Inventory<br>
    ├── setup_evilginx.yml &nbsp;&nbsp;&nbsp;&nbsp;# Master Playbook<br>
    └── roles/<br>
    &nbsp;&nbsp;&nbsp;&nbsp;├── golang-arm64 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Runtime Dependencies<br>
    &nbsp;&nbsp;&nbsp;&nbsp;├── evilginx-build &nbsp;&nbsp;&nbsp;&nbsp;# Source Compilation<br>
    &nbsp;&nbsp;&nbsp;&nbsp;└── persistence-layer &nbsp;# Systemd & Tmux<br>
  </div>

  <h3>2. Advanced Persistence (The Tmux-Systemd Bridge)</h3>
  <p>Running Evilginx as a background service is standard, but Red Teamers need to see the console to capture live tokens. I engineered a solution where <strong>Systemd</strong> manages a <strong>Tmux</strong> session.</p>

  <p align="center">
    <img src="{{ '/assets/RedTeam/tmux.png' | relative_url }}" alt="Evilginx Console in Tmux" style="max-width:90%; height:auto;" />
  </p>

  <p><strong>The Mechanism:</strong></p>
  <ul>
    <li>Systemd ensures the service auto-starts on boot (persistence).</li>
    <li>Instead of running the binary directly, it spawns a named <code>tmux</code> session.</li>
    <li>Operators can SSH in and attach to the session (<code>tmux attach -t evilginx</code>) to interact with the console, and detach without killing the process.</li>
  </ul>

  <h2>Tradecraft Acquired</h2>

  <ul>
    <li><strong>Enterprise Automation:</strong> Translating manual hacking procedures into idempotent Ansible roles.</li>
    <li><strong>Service Orchestration:</strong> manipulating Linux init systems (systemd) for offensive persistence.</li>
    <li><strong>ARM64 Optimization:</strong> Compiling Go-based attack tooling for cost-effective cloud architectures.</li>
  </ul>

  <h2>Credits & Disclaimer</h2>
  <p>This project automates <strong>Evilginx2</strong>, developed by <a href="https://github.com/kgretzky" target="_blank">Kuba Gretzky</a>. It is a tool for authorized security testing and educational purposes only.</p>

  <p><strong>Roadmap (Phase 2):</strong> Development of custom YAML phishlets for modern MFA providers. Stay tuned!</p>

</div>

<style>
/* --- Local Overrides (matches Sliver/Mythic style) --- */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

.hacker-page, .hacker-page * {
  font-family: 'JetBrains Mono', monospace !important;
  color: #d4d4d8;
  line-height: 1.6;
}

.hacker-page h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: #bb1f1fff; /* Red Team Accent */
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

.hacker-page .highlight-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 2rem 0;
}

.hacker-page a {
  color: #e4e4e7;
  text-decoration: underline;
}
.hacker-page a:hover { color: #bb1f1fff; }
</style>