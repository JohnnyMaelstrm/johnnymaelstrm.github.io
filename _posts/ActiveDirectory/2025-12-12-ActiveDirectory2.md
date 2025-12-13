---
layout: post
title: "Phase II: Enumeration & Foothold"
permalink: /activedirectory/phase2/
icon: fas fa-network-wired
order: 2
date: 2025-12-12 13:27:00 +0300
categories: [Active Directory, Lab-Setup]
tags: [active directory, lab, virtualbox, hacking, pentesting, netexec, bloodhound, impacket, networking, nat, kerberoasting, silverticket, goldenticket, dsync]
---

<link rel="stylesheet" href="{{ '/assets/css/ad.css' | relative_url }}">

<div class="hacker-page">

<div style="border: 1px solid #d8b4fe; margin-bottom: 2rem; background: rgba(0,0,0,0.2); box-shadow: 0 0 15px rgba(216, 180, 254, 0.05);">
    <div style="background: #d8b4fe; color: #000; padding: 4px 10px; font-weight: bold; font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace;">
        <span>:: SYSTEM_BROADCAST ::</span>
        <span>[MSG_ID: 0X99]</span>
    </div>
    <div style="padding: 1rem; color: var(--text);">
        <p style="margin: 0; line-height: 1.6; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
            <strong style="color: #d8b4fe;">PHASE II CONFIRMED:</strong> ENUMERATION & FOOTHOLD STARTED
            <br>
            <span style="display: inline-block; margin-top: 8px;">
            > ACTIVE VERSION: <span style="background: #d8b4fe; color: #000; padding: 2px 6px; font-weight: bold;">CHAIN #2</span>
            </span>
            <span style="display: inline-block; margin-left: 0.5rem;">
            > QUEUED: <span style="border: 1px solid #d8b4fe; color: #d8b4fe; padding: 1px 5px; opacity: 0.7;">CHAIN #3</span>
            </span>
        </p>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem; border-left: 3px solid #d8b4fe;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: MITRE ATT&CK MAPPING</span>
        <span class="ad-badge" style="border-color: #d8b4fe; color: #d8b4fe;">TACTICS DETECTED</span>
    </div>
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-top: 0.5rem;">
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1595]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Active Scanning</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1046]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Service Discovery</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1087]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Account Discovery</span>
            </div>
             <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1558.004]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">AS-REP Roasting</span>
            </div>
             <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1110]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Brute Force</span>
            </div>
             <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1069]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Group Discovery</span>
            </div>
        </div>
    </div>
</div>

<div class="hero-section" style="padding: 1rem 0; border: none; margin-top: 2rem;">
    <div class="hero-text">
        <h1>Initial Reconnaissance</h1>
    </div>
</div>

<p>
    The infrastructure is live. The Domain Controller (DC01) and workstations are humming quietly in their virtualized network. In Phase I, we played the role of the <strong>Architect</strong>, carefully building the environment. Now, we must shift our mindset to that of the <strong>Adversary</strong>.
</p>

<p>
    Enumeration is arguably the most critical phase of any Red Team engagement. You cannot exploit what you cannot see. In this phase, we are not just "running scans"; we are mapping the digital terrain, identifying users, and listening for the silent whispers of insecure protocols.
</p>

<div class="ad-card" style="margin-bottom: 2rem; margin-top: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: MISSION PARAMETERS</span>
        <span class="ad-badge" style="border-color: #facc15; color: #facc15;">INTELLIGENCE RECEIVED</span>
    </div>
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
        <p style="margin-top: 0.5rem;">
            <strong>Scenario:</strong> We have been provided with low-level domain credentials. Our objective is to validate this access and use it to map the attack surface.
        </p>
        <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-left: 2px solid #facc15; margin-bottom: 1rem;">
            <span style="color: #facc15;">[CREDENTIALS]:</span><br>
            User: <strong>egreen</strong><br>
            Pass: <strong>!!pLaYa!!90</strong>
        </div>
        <ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Connectivity:</strong> Identify live hosts (DC & Clients).
            </li>
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Validation:</strong> Confirm credential access levels against identified targets.
            </li>
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Enumeration:</strong> Leverage valid user access to map shares, users, and groups.
            </li>
        </ul>
    </div>
</div>

<h2>The Silence Before the Storm</h2>
<p>
    With credentials in hand(provided by HA), we bypass the initial "blind" exploitation phase. However, noise discipline is still key. We need to verify where these credentials work without triggering excessive authentication failure alerts.
</p>

<div class="section-header" style="margin-top: 3rem;">:: INTEL LOG: NETWORK MAPPING</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: TARGET DISCOVERY <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1595]</span></span>
        <span class="ad-badge">Tool: fping</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Identify live hosts within the target subnet range (Active Scanning).
        </p>
        
        <img src="/assets/Active_Directory/Phase2/fping.png" alt="FPing Network Discovery" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[ANALYSIS]:</span> 
            Executing a ping sweep confirms active hosts at 10.0.2.4 (DC01), 10.0.2.7 (Client-1), and 10.0.2.9 (Client-2).
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: CREDENTIAL & SMB CHECK <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1078]</span></span>
        <span class="ad-badge" style="border-color: var(--green); color: var(--green);">VALID ACCESS</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Verify validity of provided credentials (Valid Accounts) against targets.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/nxc_smb.png" alt="Credential Validation" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid var(--green);">
            <span style="color: var(--green);">[SUCCESS]:</span> 
            Credentials valid across the domain! 
            <br>1. DC01 (10.0.2.4): <span style="color: var(--green);">[+]</span> (Standard Access)
            <br>2. Client-2 (10.0.2.9): <span style="color: var(--green);">[+]</span> (Standard Access)
            <br>Signing is <span style="color: var(--green);">True</span> on DC, <span style="color: #facc15;">False</span> on clients.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: WINRM DISCOVERY <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1046]</span></span>
        <span class="ad-badge">Port: 5985</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Check for Windows Remote Management availability (Network Service Discovery).
        </p>
        
        <img src="/assets/Active_Directory/Phase2/smb_winrm.png" alt="WinRM Discovery" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[INTEL]:</span> 
            WinRM is listening on all targets. This confirms that if we escalate privileges, we can obtain a shell using Evil-WinRM.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: RID CYCLING & GROUPS <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1087]</span></span>
        <span class="ad-badge">Technique: T1087</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Dump domain users and groups by cycling Security Identifiers (SIDs).
        </p>
        
        <img src="/assets/Active_Directory/Phase2/rid_brute.png" alt="RID Brute Force" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[INTEL]:</span> 
            Successful dump of the Domain Database via RID Cycling. Identified critical SIDs:
            <br>1. <strong>Domain Admins</strong> (SID 512)
            <br>2. <strong>Enterprise Admins</strong> (SID 519)
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: SHARE ENUMERATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1135]</span></span>
        <span class="ad-badge">Permissions: READ</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Map accessible network shares (Network Share Discovery).
        </p>
        
        <img src="/assets/Active_Directory/Phase2/nxc_shares.png" alt="Share Enumeration" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[ANALYSIS]:</span> 
            User <code>egreen</code> has READ access to default shares (IPC$, NETLOGON, SYSVOL). No non-standard shares were discovered.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: DOMAIN CARTOGRAPHY <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1069]</span></span>
        <span class="ad-badge">BloodHound</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Collect all domain data (users, groups, sessions, trusts) using NetExec for visualization in BloodHound.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/bloodhound.png" alt="BloodHound Collection" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[INTEL]:</span> 
            Using <code>--bloodhound --collection All</code>, we extracted the full domain schema. This zip file was then ingested into the Dockerized BloodHound CE instance for path analysis.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: VULNERABILITY ANALYSIS <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1087]</span></span>
        <span class="ad-badge">BloodHound GUI</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Analyze the collected graph data to identify specific user misconfigurations using BloodHound's built-in queries.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/bloodhound3.png" alt="BloodHound AS-REP Query" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[INTEL]:</span> 
            By running the <em>"AS-REP Roastable Users (DontReqPreAuth)"</em> query, we instantly filter the noise.
            <br>
            <strong>Result:</strong> The user <code>CLEE@HACK-ACADEMY.LOCAL</code> is flagged as vulnerable. This specific finding authorizes the execution of the AS-REP Roasting attack in the next phase.
        </div>
    </div>
</div>

<h2>The Attack Chain: AS-REP Roasting</h2>
<p>
    Following the enumeration, we pivot to exploitation. The previous scans revealed a list of domain users. We can now filter this data to generate a clean target list and attempt <strong>AS-REP Roasting</strong>, a technique that exploits users who have "Do not require Kerberos preauthentication" enabled.
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: TARGET LIST REFINEMENT <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1087]</span></span>
        <span class="ad-badge">Tradecraft</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Parse the NetExec output to create a clean list of usernames for use with Impacket.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/netexec_ldap.png" alt="NetExec User Filtering" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[TRADE]:</span> 
            Using <code>grep</code> and <code>awk</code> to strip away logs and table formatting, isolating just the usernames into a <code>users</code> file. This file is now weaponized for the next stage.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: AS-REP ROASTING <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1558.004]</span></span>
        <span class="ad-badge" style="border-color: #f87171; color: #f87171;">HASH CAPTURED</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Query the KDC for users with pre-auth disabled and capture the TGT hash.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/as_rep_roast.png" alt="Impacket GetNPUsers" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #f87171;">
            <span style="color: #f87171;">[VULNERABILITY]:</span> 
            User <code>clee</code> is vulnerable! The Domain Controller responded with an encrypted TGT hash because Pre-Authentication is disabled for this account.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: CRACKING THE HASH <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1110]</span></span>
        <span class="ad-badge" style="border-color: #f87171; color: #f87171;">PWNED</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Offline cracking of the captured krb5asrep hash using John the Ripper.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/kerb_krack.png" alt="John the Ripper Cracking" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #f87171;">
            <span style="color: #f87171;">[CRITICAL]:</span> 
            The password was weak and found in the RockYou-wordlist.
            <br>User: <strong>clee</strong>
            <br>Password: <strong>!! XzUfrog69</strong>
           
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: ACCESS VERIFICATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1078]</span></span>
        <span class="ad-badge" style="border-color: var(--green); color: var(--green);">PRIVILEGE CHECK</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Step 5:</strong> We verify the cracked credentials against the network. NetExec differentiates between standard user access (marked with <span style="color: var(--green);">[+]</span>) and administrative access.
        </p>
        
        <img src="/assets/Active_Directory/Phase2/cleepawn.png" alt="NetExec Pwn3d" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid var(--green);">
            <span style="color: var(--green);">[RESULT]:</span> 
            NetExec returns the <strong style="color: #facc15;">(Pwn3d!)</strong> flag. 
            <br>
            In NetExec terminology, this confirms <strong>administrative privileges</strong> on the target (typically <strong>Local Administrator</strong>), which include access to the <strong>ADMIN$</strong> share and the ability to perform admin-level actions. 
            A standard user would only be marked with a green plus sign.
        </div>
    </div>
</div>


<div class="ad-card" style="margin-top: 3rem; margin-bottom: 2rem; border: 1px dashed rgba(216, 180, 254, 0.4);">
    <div class="ad-card-header" style="background: rgba(0,0,0,0.3);">
        <span class="ad-card-title">:: OPERATION ROADMAP</span>
        <span class="ad-badge" style="background: transparent; border: 1px solid var(--text-dim); color: var(--text-dim);">LIVE FEED...</span>
    </div>

    <div style="padding: 0 1rem;">
        <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; background: rgba(216, 180, 254, 0.05);">
            <span style="color: #facc15; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[ACTIVE]</span>
            <div>
                <strong style="display: block; color: #d8b4fe; font-size: 1.1rem;">Phase II: Foothold & Enumeration</strong>
                <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                    Current Objective: Map the attack surface and exploit users for initial access.
                    <br>
                    <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                    > Responder | IPv6 | BloodHound | SMB Relay
                    </span>
                </p>
            </div>
        </div>

        <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; opacity: 0.8;">
            <span style="color: #3b82f6; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[QUEUED]</span>
            <div>
                <strong style="display: block; color: var(--text); font-size: 1rem;">Phase III: Lateral Movement</strong>
                <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                    Objective: Escalate privileges to Domain Admin via protocol abuse.
                    <br>
                    <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                    > Kerberoasting | Golden Tickets | DCSync
                    </span>
                </p>
            </div>
        </div>

        <div style="padding: 1rem 0; display: flex; align-items: center; opacity: 0.5;">
            <span style="color: #f87171; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[LOCKED]</span>
            <div>
                <strong style="display: block; color: var(--text); font-size: 1rem;">Phase IV: Persistence & Exfiltration</strong>
                <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                    Objective: Extract domain hashes and maintain access.
                    <br>
                    <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                    > Silver Tickets | NTDS Dumping | Mimikatz
                    </span>
                </p>
            </div>
        </div>
    </div>
</div>

</div>