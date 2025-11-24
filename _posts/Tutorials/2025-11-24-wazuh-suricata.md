---
layout: post
date: 2025-11-24 08:27:00 +0300
title: "SIEM Environment: Wazuh & Suricata"
permalink: /siem-wazuh-suricata/
order: 1
categories: [SIEM, Wazuh, Suricata]
tags: [SIEM, wazuh, suricata, blue team, malware, threatactor]
---


<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --bg-dark: #09090b;
  --border: rgba(110, 16, 16, 0.08);
  --text: #d4d4d8;
  --text-dim: #cfcfcf;
}

.project-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.8rem;
  line-height: 1.6;
}

.project-intro {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.score-badge {
  display: inline-block;
  background: rgba(250, 204, 21, 0.15);
  color: #b6854eff;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.highlight {
  background: rgba(250, 204, 21, 0.15) !important;
  padding: 0.1rem 0.3rem !important;
  border-radius: 3px !important;
  color: #b6854eff !important;
  font-weight: 500 !important;
}

.evidence-list {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.evidence-list h3 {
  color: var(--accent);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.evidence-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.evidence-list li {
  padding: 0.5rem 0;
  color: var(--text-dim);
  font-size: 0.85rem;
}

.evidence-list li::before {
  content: "▸";
  color: #b6854eff;
  margin-right: 0.5rem;
}

.pdf-container {
  margin: 2rem 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.pdf-container iframe {
  width: 100%;
  height: 700px;
  border: none;
}

@media (max-width: 600px) {
  .pdf-container iframe {
    height: 500px;
  }
}

</style>

# Project starts here!

<div class="evidence-list">
  <h3>Tools listed</h3>

<table class="tool-table">
  <thead>
    <tr>
      <th>Machine</th>
      <th>Role</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Linux VM</td>
      <td><span class="highlight">Wazuh server</span></td>
      <td>Central server for collecting logs</td>
    </tr>
    <tr>
      <td>Linux / Microsoft VM</td>
      <td><span class="highlight">User workstation</span></td>
      <td>For installing Wazuh agent</td>
    </tr>
    <tr>
      <td>Kali VM</td>
      <td><span class="highlight">Threat actor</span></td>
      <td>Simulates attacks on the network</td>
    </tr>
  </tbody>
</table>

