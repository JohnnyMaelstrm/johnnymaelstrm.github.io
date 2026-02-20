---
layout: post
title: "HackSmarter: BuildingMagic - Active Directory Lab"
permalink: /BuildingMagic/
icon: fas fa-network-wired
order: 2
date: 2026-02-20 20:00:00 +0300
categories: [Red Teaming, Active Directory]
tags: [netexec, watering hole, kerberoasting, pass-the-hash, impacket, mitre att&ck]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/root_flag.png' | relative_url }}" 
         alt="Root Flag Capture" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p align="center"><em>Figure 1: Final objective achieved - Reading the root flag via WMIexec.</em></p>

  <h1>Anatomy of an Active Directory Compromise</h1>

  <p>In this engagement, I targeted the "BuildingMagic" Active Directory lab by HackSmarter. The objective was to simulate a real-world internal threat scenario, starting with zero access and pivoting through the network to achieve total Domain Compromise. This report details the kill chain, emphasizing not just the tools used, but the tactical reasoning behind every step.</p>
  
  <p><em>Note: During the engagement, the target IP address changed due to a lab reset. This is reflected in the screenshots.</em></p>

  <p><strong>Status:</strong> Domain Compromised<br>
  <strong>Tools Used:</strong> NetExec, Responder, Hashcat, Impacket, BloodHound, Hashgrab, bloodyAD</p>

  <div class="highlight-box">
    <h3>Executive Summary (The Impact)</h3>
    <p>By exploiting weak SMB permissions and capturing internal authentication traffic, I was able to escalate privileges from a guest perspective to Domain Administrator. The critical vulnerabilities exploited were:</p>
    <ul>
      <li><strong>Excessive Permissions:</strong> Write access to a public share for unprivileged users.</li>
      <li><strong>Insecure Protocols:</strong> LLMNR/NBT-NS and SMB authentication allowing for forced authentication attacks.</li>
      <li><strong>Weak Passwords:</strong> Service accounts utilized weak passwords crackable via Kerberoasting.</li>
    </ul>
  </div>

  <h2>Phase 1: Reconnaissance & Initial Enumeration</h2>

  <h3>The Action</h3>
  <p>I began with a standard Nmap scan to identify the Domain Controller and open services.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/nmap.png' | relative_url }}" 
         alt="Nmap Scan" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 2: Port 88 (Kerberos), 389 (LDAP), and 445 (SMB) confirm this is a Domain Controller.</em></p>

  <p>Using <strong>Kerbrute</strong>, I performed user enumeration against the Domain Controller to validate active usernames from a wordlist. This identified <code>r.widdleton</code> as a valid user.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/kerbrute.png' | relative_url }}" 
         alt="Kerbrute Enumeration" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>Further password spraying revealed credentials for <code>r.widdleton</code> and eventually <code>h.potch</code>. I also cracked some initial hashes found during enumeration.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/first_hashcat.png' | relative_url }}" 
         alt="MD5 Crack" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>With valid credentials, I used <strong>NetExec</strong> to enumerate SMB shares. I discovered a share named <code>File-Share</code> that was readable and <strong>writable</strong>.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/nxc2.png' | relative_url }}" 
         alt="SMB Share Enumeration" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 3: NetExec reveals READ,WRITE permissions on 'File-Share'.</em></p>

  <h2>Phase 2: Initial Access via SMB Watering Hole</h2>

  <h3>The Action</h3>
  <p>This is where the attack shifted from passive enumeration to active coercion. I used a tool called <code>hashgrab.py</code> to generate malicious files (.scf, .url, .lnk). These files are designed to force Windows Explorer to authenticate to a remote server when the folder is viewed.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/hashgrab_py.png' | relative_url }}" 
         alt="Hashgrab Payload Generation" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 4: Uploading the malicious payloads to the writable share.</em></p>

  <p>Simultaneously, I ran <strong>Responder</strong> on my attacker machine. When a victim user (in this case, <code>h.grangon</code>) browsed the shared folder, their machine automatically sent their NetNTLMv2 hash to my listener.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/ntlm.png' | relative_url }}" 
         alt="Responder Capture" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 5: Capturing the NTLMv2 hash for user h.grangon.</em></p>

  <h3>Why This Was Done</h3>
  <p><strong>Watering Hole Attacks</strong> are highly effective in internal networks. Instead of noisily brute-forcing a user, we place a trap in a legitimate location and wait for the user to come to us. This often bypasses IDS signatures looking for active scanning.</p>

  <h3>The Impact</h3>
  <p>I captured the hash and cracked it offline using <strong>Hashcat</strong>.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/hashcat3.png' | relative_url }}" 
         alt="Cracking NTLMv2" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 6: Password cracked: 'magic4ever'.</em></p>

  <h2>Phase 3: Enumeration & Kerberoasting</h2>

  <h3>The Action</h3>
  <p>With <code>h.grangon</code>'s credentials, I verified my access using WinRM.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/nxc_winrm.png' | relative_url }}" 
         alt="WinRM Validation" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>I then gathered user information using <strong>Evil-WinRM</strong>.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/evil1.png' | relative_url }}" 
         alt="Initial Access Shell" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>To identify the path to Domain Admin, I ran <strong>BloodHound</strong> (python ingestor) to map the AD relationships.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/bloodhound-ce-python.png' | relative_url }}" 
         alt="BloodHound Ingestion" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>I then performed a <strong>Kerberoasting</strong> attack. I requested Service Principal Names (SPNs) for service accounts. I successfully retrieved a TGS ticket for the user <code>r.haggard</code>.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/impacket1.png' | relative_url }}" 
         alt="GetUserSPNs" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>Using Hashcat (mode 13100), I cracked the service ticket to reveal the plaintext password.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/hashcat2.png' | relative_url }}" 
         alt="Cracking Kerberos Ticket" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 10: r.haggard's password cracked: 'rubeushagrid'.</em></p>

  <h2>Phase 4: Lateral Movement & Privilege Escalation</h2>

  <h3>The Action</h3>
  <p>With <code>r.haggard</code>'s access, I intended to use <strong>BloodHound</strong> to map the privilege escalation path. The Python ingestor ran successfully and collected the AD data, but the BloodHound GUI failed to render the attack paths correctly during this engagement. Based on manual analysis, I identified that <code>r.haggard</code> had Write permissions over <code>h.potch</code>, which I abused using <code>bloodyAD</code> to reset their password.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/bloodyAD.png' | relative_url }}" 
         alt="BloodyAD Abuse" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>With <code>h.potch</code>'s credentials confirmed via NetExec, I logged in using <strong>Evil-WinRM</strong> and dumped the SAM and SYSTEM hives to extract local hashes.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/evil2.png' | relative_url }}" 
         alt="Dumping Hives" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <p>The SAM dump revealed the NTLM hash for <code>a.flatch</code>. NetExec confirmed this account had "Pwn3d!" status, indicating Local Administrator privileges on the Domain Controller.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/impacket2.png' | relative_url }}" 
         alt="Pwn3d Confirmation" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <h2>Phase 5: Domain Dominance (DCSync)</h2>

  <h3>The Action</h3>
  <p>Using the high-privileged access of <code>a.flatch</code>, I performed a DCSync attack using <code>impacket-secretsdump</code>. This mimics a Domain Controller and asks AD to replicate all user hashes, including the <strong>Administrator</strong> and <strong>krbtgt</strong>.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/domain_control.png' | relative_url }}" 
         alt="Secretsdump DCSync" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>
  <p align="center"><em>Figure 13: Total compromise. Administrator NTLM hash retrieved.</em></p>

  <p>Finally, I utilized <strong>Pass-the-Hash</strong> with <code>impacket-wmiexec</code> to log in as the Administrator and retrieve the final flag.</p>

  <p align="center">
    <img src="{{ '/assets/Active_Directory/BuildingMagic/root_flag.png' | relative_url }}" 
         alt="Root Flag" 
         style="max-width:90%; height:auto; border:1px solid rgba(255,255,255,0.1);" />
  </p>

  <h2>MITRE ATT&CK® Mapping</h2>
  <div class="highlight-box" style="padding: 0; overflow: hidden; border-color: rgba(255, 82, 82, 0.3);">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85em;">
      <thead style="background: rgba(255, 82, 82, 0.1);">
        <tr>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Tactic</th>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Technique ID</th>
          <th style="padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">Technique Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Initial Access</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1187</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Forced Authentication (Watering Hole)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Credential Access</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1558.003</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Kerberoasting</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">Credential Access</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">T1003.003</td>
          <td style="padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">NTDS Cloning (DCSync)</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Lateral Movement</td>
          <td style="padding: 10px;">T1550.002</td>
          <td style="padding: 10px;">Pass the Hash</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

<style>
/* --- Inherits same styles from previous templates --- */
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