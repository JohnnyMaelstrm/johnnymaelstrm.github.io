---
layout: post
date: 2025-12-15 09:27:00 +0200
title: "SIEM Environment: Wazuh & Suricata"
permalink: /siem-wazuh-suricata/
order: 1
categories: [SIEM, Wazuh]
tags: [siem, wazuh, suricata, blue team, malware, threatactor]
---

<link rel="stylesheet" href="{{ '/assets/css/wazuh.css' | relative_url }}">

<!-- Mermaid CDN -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ 
    startOnLoad: true, 
    theme: 'dark',
    securityLevel: 'loose'
  });
</script>

<div class="hacker-page">

  <h1>Project Report: Auto-Defense Lab</h1>

  <div class="intro-section" style="margin-bottom: 2.5rem; border-bottom: 1px dashed #444; padding-bottom: 1.5rem;">
    <p style="font-size: 1.1rem; line-height: 1.6; color: #e5e5e5;">
      <strong style="color: #60a5fa;">&gt;&gt; MISSION:</strong> 
      To design and deploy an automated defense system (IPS) capable of detecting and neutralizing active threats in a mixed OS environment. The goal was to move beyond passive log monitoring to <strong>real-time remediation</strong>.
    </p>
    
    <div style="margin-top: 1.5rem;">
      <strong style="color: #60a5fa;">&gt;&gt; KEY TAKEAWAYS:</strong>
      <ul style="list-style: none; padding-left: 0; margin-top: 0.5rem; color: #a3a3a3;">
        <li style="margin-bottom: 0.5rem;">
          🔹 <strong>Performance Engineering:</strong> Learned that default configurations fail under stress. Troubleshooting the "Agent Buffer Flood" was a critical lesson in resource management.
        </li>
        <li style="margin-bottom: 0.5rem;">
          🔹 <strong>Purple Teaming:</strong> Acting as both the Attacker (Kali VM /Hydra) and Defender (Wazuh) provided a complete view of the cyber kill chain.
        </li>
        <li style="margin-bottom: 0.5rem;">
          🔹 <strong>Infrastructure as Code:</strong> Gained deep understanding of modifying Wazuh XML configurations and Windows Agent policies.
        </li>
      </ul>
    </div>
  </div>


  <div class="ad-card" style="padding: 0.75rem 1rem; margin-bottom: 2rem; border-left-color: #22c55e;">
    <div class="ad-card-header" style="margin-bottom: 0; border-bottom: none;">
      <span class="ad-card-title" style="color: #22c55e;">:: PROJECT STATUS</span>
      <span class="ad-badge" style="background: rgba(34, 197, 94, 0.1); color: #22c55e; border-color: #22c55e;">
        ✅ COMPLETED
      </span>
    </div>
    <div style="margin-top: 0.5rem; color: #a3a3a3; font-size: 0.9rem;">
      Full implementation of Detection (IDS) and Prevention (IPS) systems successful.
    </div>
  </div>

  <div class="section-header">1. Environment Setup</div>
  <p>The following infrastructure was deployed for the project to simulate a realistic attack scenario:</p>

  <!-- Mermaid Diagram -->
  <div style="background: #1a1a1a; padding: 1.5rem; border-radius: 6px; margin: 2rem 0;">
    <pre class="mermaid">
graph TD
    classDef attacker fill:#f87171,stroke:#333,stroke-width:2px,color:#000;
    classDef victim fill:#60a5fa,stroke:#333,stroke-width:2px,color:#000;
    classDef siem fill:#22c55e,stroke:#333,stroke-width:2px,color:#000;

    A[Kali Linux<br/>Attacker]:::attacker
    B[Windows 10<br/>Agent + Firewall]:::victim
    C[Wazuh Server<br/>Manager + Analysis]:::siem

    A -->|1. RDP Brute Force| B
    B -->|2. Fwd Security Logs| C
    C -->|3. Alert: Rule 60204| C
    C -->|4. Active Response Cmd| B
    B -->|5. Drop Connection| A
    </pre>
  </div>

  <div class="tech-table-wrapper">
    <table class="tool-table">
      <thead>
        <tr>
          <th>Machine</th>
          <th>Role</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linux VM</td>
          <td><span class="highlight">Wazuh Manager</span></td>
          <td>Central SIEM server for log correlation &amp; analysis</td>
        </tr>
        <tr>
          <td>Windows 10</td>
          <td><span class="highlight">Endpoint</span></td>
          <td>Victim machine (Agent + Suricata)</td>
        </tr>
        <tr>
          <td>Kali Linux</td>
          <td><span class="highlight">Threat Actor</span></td>
          <td>Red Team operations (Hydra, Nmap)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr style="border-color: #333; margin: 2rem 0;">

  <div class="section-header">2. The Challenge: Performance Tuning</div>
  <p>
    <strong>The Obstacle:</strong> Before deploying security rules, I conducted stress tests using Nmap. 
    The initial results showed a critical bottleneck: the Wazuh Agent's internal buffer flooded immediately, causing log data to be dropped.
  </p>
  
  <div class="ad-card" style="border-left-color: #facc15;">
    <div class="ad-card-header">
      <span class="ad-card-title" style="color: #facc15;">:: ERROR LOG ANALYSIS</span>
    </div>
    <div class="ad-card-body">
      <p><i>"Agent event queue is flooded. Check the agent configuration."</i></p>
      <img src="/assets/BlueTeam/really_flood.png" alt="Wazuh Agent Buffer Flood Error" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
    </div>
  </div>

  <p>
    <strong>The Solution:</strong> I analyzed the <code>ossec.log</code> and modified the agent configuration. 
    I increased the <code>client_buffer</code> queue size to <strong>100,000 events</strong>. 
    This adjustment allowed the system to withstand massive bursts of traffic without losing a single packet.
  </p>

  <div class="section-header">3. Engineering the Response (IPS)</div>
  <p>
    To move from Detection to Prevention, I configured the Wazuh Manager backend. 
    I edited the XML configuration to trigger an <strong>Active Response</strong> script when specific criteria are met.
  </p>

  <div class="ad-card">
    <div class="ad-card-header">
      <span class="ad-card-title">:: BACKEND CONFIGURATION (XML)</span>
    </div>
    <div class="ad-card-body">
      <img src="/assets/BlueTeam/ossec_conf.png" alt="Wazuh Active Response Configuration" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
      <p style="margin-top: 1rem;">
        I linked <strong>Rule ID 60204</strong> (Brute Force Detection) to the <code>netsh</code> command, 
        instructing the Windows agent to block the attacker's IP for 60 seconds.
      </p>
    </div>
  </div>

  <div class="section-header">4. Red Team Ops: Brute Force</div>
  <p>
    Using <strong>Kali Linux</strong>, I launched a dictionary attack against the Windows RDP port (3389) using <strong>Hydra</strong>.
  </p>

  <div class="ad-card">
    <div class="ad-card-header">
      <span class="ad-card-title">:: ATTACKER TERMINAL (KALI)</span>
    </div>
    <div class="ad-card-body">
      <img src="/assets/BlueTeam/hydra.png" alt="Hydra Brute Force Attack" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
      <code style="display:block; margin-top:10px; background:#111; padding:10px;">$ hydra -l Administrator -x 4:6:a rdp://TARGET_IP -t 4 -V</code>
    </div>
  </div>

  <div class="section-header">5. Detection &amp; Correlation</div>
  <p>
    Wazuh SIEM ingested the Windows Security logs in real-time. The correlation engine successfully identified 
    the pattern of multiple failed logins and triggered a high-severity alert.
  </p>

  <div class="ad-card">
    <div class="ad-card-header">
      <span class="ad-card-title">:: SIEM DASHBOARD</span>
    </div>
    <div class="ad-card-body">
      <img src="/assets/BlueTeam/hydra_brute_force.png" alt="Wazuh Detection Dashboard" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
      <p><strong>Rule ID 60204:</strong> Multiple Windows Logon Failures (Severity 10)</p>
    </div>
  </div>

  <div class="section-header">6. Automated Defense (Success)</div>
  <p>
    <span class="highlight">The Climax:</span> The system reacted automatically without human intervention.
    Within milliseconds of the detection, Wazuh executed the firewall block.
  </p>

  <div class="ad-card" style="border-left-color: #f87171;">
    <div class="ad-card-header">
      <span class="ad-card-title" style="color: #f87171;">:: IPS ACTIVATION</span>
    </div>
    <div class="ad-card-body">
      <img src="/assets/BlueTeam/active_response.png" alt="Active Response Execution" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
      <p>The log shows <code>active-response/bin/netsh.exe - add</code>. The attacker's connection was immediately dropped.</p>
    </div>
  </div>

  <div class="section-header">7. Recovery Lifecycle</div>
  <p>
    To prevent permanent IP conflicts, the system automatically lifted the ban after the configured timeout period.
  </p>
  
  <div class="ad-card">
    <div class="ad-card-body">
      <img src="/assets/BlueTeam/response_delete.png" alt="Active Response Unblock" style="width: 100%; border: 1px solid #333; border-radius: 4px;">
      <p>Log entry <code>netsh.exe - delete</code> confirms the automated cleanup process.</p>
    </div>
  </div>

  <div style="margin-top: 3rem; padding: 1rem; background: rgba(34, 197, 94, 0.05); border: 1px solid #22c55e; border-radius: 6px; text-align: center;">
    <h3 style="color: #22c55e; margin: 0;">🛡️ System Secured.</h3>
    <p style="margin: 0.5rem 0 0; color: #a3a3a3;">Detection, Correlation, and Prevention verified.</p>
  </div>

</div>