---
layout: post
date: 2025-12-05 08:27:00 +0300
title: "SIEM Environment: Wazuh & Suricata"
permalink: /siem-wazuh-suricata/
order: 1
categories: [SIEM, Wazuh]
tags: [siem, wazuh, suricata, blue team, malware, threatactor]
---

<link rel="stylesheet" href="{{ '/assets/css/wazuh.css' | relative_url }}">


<div class="hacker-page">

  <h1>Project starts here!</h1>

  <div class="ad-card" style="padding: 0.75rem 1rem; margin-bottom: 2rem; border-left-color: #facc15;">
    <div class="ad-card-header" style="margin-bottom: 0; border-bottom: none;">
      <span class="ad-card-title" style="color: #facc15;">:: CURRENT STATE</span>
      <span class="ad-badge" style="background: rgba(250, 204, 21, 0.1); color: #facc15; border-color: #facc15;">
        🚧 W.I.P 
      </span>
    </div>
  </div>
  <div class="evidence-list">
    <div class="section-header">Environment Setup</div>
    <h3>Tools listed</h3>
    <p>The following infrastructure was deployed for the project:</p>

    <div class="tech-table-wrapper">
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
            <td>Simulates threat actor on the network</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>

</div>

