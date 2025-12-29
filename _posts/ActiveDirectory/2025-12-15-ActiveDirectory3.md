---
layout: post
title: "Phase III: Lateral Movement & Privilege Escalation"
permalink: /activedirectory/phase3/
icon: fas fa-network-wired
order: 3
date: 2025-12-29 13:27:00 +0300
categories: [Active Directory, Phase III]
tags: [active directory, lateral movement, privilege escalation, mimikatz, netexec, hacking, pentesting]
---

<link rel="stylesheet" href="{{ '/assets/css/ad.css' | relative_url }}">

<div class="hacker-page">

<div style="border: 1px solid #d8b4fe; margin-bottom: 2rem; background: rgba(0,0,0,0.2); box-shadow: 0 0 15px rgba(216, 180, 254, 0.05);">
    <div style="background: #d8b4fe; color: #000; padding: 4px 10px; font-weight: bold; font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; font-family: 'JetBrains Mono', monospace;">
        <span>:: SYSTEM_BROADCAST ::</span>
        <span>[MSG_ID: 0X100]</span>
    </div>
    <div style="padding: 1rem; color: var(--text);">
        <p style="margin: 0; line-height: 1.6; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
            <strong style="color: #d8b4fe;">PHASE III CONFIRMED:</strong> LATERAL MOVEMENT 
            <br>
            <span style="opacity: 0.8; font-size: 0.75rem;">From Workstation Foothold to Domain Controller</span><br>
            <span style="display: inline-block; margin-top: 8px;">
            > ACTIVE VERSION: <span style="background: #d8b4fe; color: #000; padding: 2px 6px; font-weight: bold;">CHAIN #3</span>
            </span>
            <span style="display: inline-block; margin-left: 0.5rem;">
            > QUEUED: <span style="border: 1px solid #d8b4fe; color: #d8b4fe; padding: 1px 5px; opacity: 0.7;">CHAIN #4</span>
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
                <span style="color: #facc15;">[T1003.001]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">LSASS Memory</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1003.002]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">SAM Database</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1003.004]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">LSA Secrets</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1550.002]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Pass the Hash</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1569.002]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Service Execution</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1134]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Token Impersonation</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1574.010]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Service Hijacking</span>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                <span style="color: #facc15;">[T1098]</span><br>
                <span style="color: var(--text-dim); font-size: 0.75rem;">Account Manip</span>
            </div>
        </div>
    </div>
</div>

<div class="hero-section" style="padding: 1rem 0; border: none; margin-top: 2rem;">
    <div class="hero-text">
        <h1>Recap from Phase II</h1>
    </div>
</div>
<p>
    The perimeter has been breached. In Phase II, we successfully transitioned from a blind vantage point to a verified foothold. By leveraging <strong>AS-REP Roasting</strong>, we cracked the credentials for the user <code>clee</code> and established <strong>Local Administrator</strong> access on <strong>CLIENT-2 (10.0.2.9)</strong>.
</p>
<p>
    We are no longer knocking on the door: we are inside the building. The objective for Phase III is <strong>Lateral Movement</strong>. We must now turn our compromised workstation into a pivot point, harvesting credentials from memory and the network to hunt for the keys to the kingdom: the Domain Controller.
</p>

<div class="ad-card" style="margin-bottom: 2rem; margin-top: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: MISSION PARAMETERS</span>
        <span class="ad-badge" style="border-color: #facc15; color: #facc15;">PHASE III OBJECTIVES</span>
    </div>
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
        <p style="margin-top: 0.5rem;">
            <strong>Scenario:</strong> We have successfully compromised the <code>clee</code> account, granting us Local Administrator rights on <strong>CLIENT-2</strong>. Our objective is to leverage this foothold to harvest high-privilege credentials and pivot to the Domain Controller.
        </p>
        <div style="background: rgba(255, 255, 255, 0.05); padding: 8px; border-left: 2px solid #facc15; margin-bottom: 1rem;">
            <span style="color: #facc15;">[CURRENT ASSETS]:</span><br>
            User: <strong>clee</strong> <span style="color: var(--green); font-size: 0.75rem;">(COMPROMISED)</span><br>
            Pass: <strong>!!XzUfrog69</strong><br>
            Access: <strong>Local Admin @ CLIENT-2 (10.0.2.9)</strong>
        </div>
        <ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Credential Harvesting:</strong> Dump LSASS and SAM on CLIENT-2 to find new identities.
            </li>
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Privilege Escalation:</strong> Identify and exploit paths to Domain Admin.
            </li>
            <li style="margin-bottom: 8px;">
                <span style="color: #facc15; margin-right: 8px;">[>]</span> 
                <strong>Lateral Movement:</strong> Pivot from the workstation to the Domain Controller (DC01).
            </li>
        </ul>
    </div>
</div>

<div class="section-header" style="margin-top: 3rem;">:: RECONNAISSANCE & WEAPONIZATION</div>

<p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text); margin-bottom: 1.5rem;">
    Before we can move laterally, we must secure full control over our current foothold. A PowerUp scan identified a critical vulnerability in a third-party service: <code>ElevationService</code> (Wondershare Dr.Fone). The first step is to verify the root cause by inspecting the Access Control Lists (ACLs).
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: VULNERABILITY CONFIRMATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1574.010]</span></span>
        <span class="ad-badge">Tool: icacls</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Verify file permissions on the service binary.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/icalc.png" alt="Checking file permissions with icacls" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[ANALYSIS]:</span> 
            The <code>icacls</code> output confirms that the 'Everyone' group holds <strong>Full Control (F)</strong> permissions over the service binary. This is a critical misconfiguration allowing any user to overwrite the executable.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: PAYLOAD GENERATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1059]</span></span>
        <span class="ad-badge">Tool: msfvenom</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Create a malicious reverse shell binary to replace the legitimate service.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/shell.exe.png" alt="Creating payload with msfvenom" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[WEAPONIZATION]:</span> 
            Generated a Windows x64 reverse TCP shell configured to connect back to our Kali machine on port 443 (HTTPS) to blend in with legitimate traffic.
        </div>
    </div>
</div>

<div class="section-header" style="margin-top: 3rem;">:: EXPLOITATION: SERVICE HIJACKING</div>

<p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text); margin-bottom: 1.5rem;">
    With the payload ready, we proceed to exploit the weak permissions. Since we cannot stop the service directly without admin rights, we will rename the running binary and place our trap.
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: BINARY REPLACEMENT <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1574.010]</span></span>
        <span class="ad-badge" style="border-color: #f87171; color: #f87171;">TRAP SET</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Swap the legitimate <code>ElevationService.exe</code> with our malicious <code>shell.exe</code>.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/rdp_shell.png" alt="RDP Context view" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/hijack.png" alt="Replacing the service binary" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #f87171;">
            <span style="color: #f87171;">[EXPLOIT]:</span> 
            Using RDP for visual confirmation and PowerShell for execution, we successfully moved the original binary to <code>.bak</code> and copied our payload into place. The trap is now set to trigger on the next system reboot.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: PRIVILEGE ESCALATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1068]</span></span>
        <span class="ad-badge" style="border-color: var(--green); color: var(--green);">SYSTEM SHELL</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Catch the reverse shell upon system reboot.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/session.png" alt="Catching the reverse shell" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/shell2.png" alt="Verifying SYSTEM access" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/shell3.png" alt="Detailed privilege view" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid var(--green);">
            <span style="color: var(--green);">[SUCCESS]:</span> 
            The system rebooted, the service started, and our payload executed. We have successfully elevated privileges from local user to <strong>NT AUTHORITY\SYSTEM</strong> with SID S-1-5-18.
        </div>
    </div>
</div>

<div class="section-header" style="margin-top: 3rem;">:: POST-EXPLOITATION: CREDENTIAL HARVESTING</div>

<p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text); margin-bottom: 1.5rem;">
    Now operating as SYSTEM, we have unrestricted access to the machine's memory and secrets. We deploy Mimikatz to harvest credentials that will allow us to pivot to other machines in the network.
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: TOKEN MANIPULATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1134]</span></span>
        <span class="ad-badge">Mimikatz</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Impersonate the SYSTEM token to ensure full control over LSASS.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/mimikatz.png" alt="Starting Mimikatz" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/token_elevate.png" alt="Mimikatz token elevation" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[TRADE]:</span> 
            We loaded the binary directly to memory. Using <code>token::elevate</code> allows Mimikatz to interact with protected system processes without access violations.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: LSA PATCHING ATTEMPT <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1003.001]</span></span>
        <span class="ad-badge" style="border-color: #f87171; color: #f87171;">BLOCKED</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Attempt to patch LSASS memory to retrieve cleartext credentials.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/lsadump lsa patch.png" alt="LSA patch failure" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #f87171;">
            <span style="color: #f87171;">[DEFENSE]:</span> 
            Access Denied (0x5). This indicates LSA Protection (RunAsPPL) is likely enabled, preventing direct memory patching. We must pivot to alternative extraction methods.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: SAM DATABASE DUMP <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1003.002]</span></span>
        <span class="ad-badge">NTLM HASHES</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Extract local NTLM hashes from the Security Account Manager (SAM) database via Registry.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/lsadump sam1.png" alt="Dumping SAM Keys" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/lsadump sam2.png" alt="Dumping SAM hashes" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[INTEL]:</span> 
            Successfully recovered NTLM hashes for local users, including the built-in <strong>Administrator (RID 500)</strong> and user <strong>David</strong>. These hashes can be used for Pass-the-Hash attacks.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: LSA SECRETS EXFILTRATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1003.004]</span></span>
        <span class="ad-badge" style="border-color: #f87171; color: #f87171;">CRITICAL FIND</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Dump LSA Secrets to find cached credentials and machine keys.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/lsadump secrets.png" alt="Mimikatz LSA Secrets dump" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #f87171;">
            <span style="color: #f87171;">[JACKPOT]:</span> 
            Deep inspection revealed a cleartext <strong>DefaultPassword</strong> (<code>Password112233!</code>), machine Kerberos keys, and cached (DCC2) credentials.
        </div>
    </div>
</div>

<div class="section-header" style="margin-top: 3rem;">:: PERSISTENCE & NETWORK PIVOT</div>

<p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text); margin-bottom: 1.5rem;">
    With credentials secured, we establish persistence and verify our administrative reach across the network using NetExec.
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: PERSISTENCE ESTABLISHED <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1098]</span></span>
        <span class="ad-badge">Local Admin</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Add the compromised user <code>clee</code> to the local Administrators group for permanent access.
        </p>
        
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[BACKDOOR]:</span> 
             We successfully added <code>clee</code> to the Administrators group directly from our SYSTEM shell.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: LATERAL MOVEMENT VERIFICATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1021.002]</span></span>
        <span class="ad-badge" style="border-color: var(--green); color: var(--green);">PWN3D!</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Verify administrative access remotely using NetExec with corrected credentials.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/cleepwn!.png" alt="NetExec Pwn3d status" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid var(--green);">
            <span style="color: var(--green);">[DOMINANCE]:</span> 
            The <strong>(Pwn3d!)</strong> flag confirms full administrative control over CLIENT-2 via SMB.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: AUTOMATED EXFILTRATION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1003]</span></span>
        <span class="ad-badge">NetExec</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Use our new access to remotely dump SAM and LSA secrets to validate findings.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/sam_hash.png" alt="Remote SAM Dump" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        <img src="/assets/Active_Directory/Phase3/lsa_secrets.png" alt="Remote LSA Dump" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[LOOT]:</span> 
            Verified capture of DCC2 hashes for user <code>mross</code> and the machine keys via remote execution.
        </div>
    </div>
</div>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: REMOTE EXECUTION <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1569.002]</span></span>
        <span class="ad-badge">NT AUTHORITY\SYSTEM</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Execute arbitrary commands remotely as SYSTEM.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/authority.png" alt="Remote execution as SYSTEM" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[COMPLETE]:</span> 
            Remote code execution confirmed. We have successfully pivoted from a standard user foothold to full remote system authority.
        </div>
    </div>
</div>

<div class="section-header" style="margin-top: 3rem;">:: PHASE III CONCLUSION</div>

<p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text); margin-bottom: 1.5rem;">
    We close this phase by cracking the final piece of the puzzle: the cached credentials found in LSA secrets.
</p>

<div class="ad-card" style="margin-bottom: 2rem;">
    <div class="ad-card-header">
        <span class="ad-card-title">:: OFFLINE CRACKING <span style="color: #a1a1aa; font-weight: normal; margin-left: 8px;">[T1110]</span></span>
        <span class="ad-badge">John the Ripper</span>
    </div>
    <div style="padding: 1rem;">
        <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <strong>Objective:</strong> Crack the MSCache2 (DCC2) hash for user <code>mross</code> found in LSA secrets.
        </p>
        
        <img src="/assets/Active_Directory/Phase3/hash2.png" alt="Cracking mross password" style="width: 100%; border: 1px solid var(--border); margin-bottom: 0.5rem;">
        
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); background: rgba(0,0,0,0.3); padding: 10px; border-left: 2px solid #d8b4fe;">
            <span style="color: #d8b4fe;">[RESULT]:</span> 
            Successfully cracked the hash.
            <br>User: <strong>mross</strong>
            <br>Password: <strong>!!TWIZtid11</strong>
        </div>
    </div>
</div>

<div class="ad-card" style="margin-top: 3rem; margin-bottom: 2rem; border: 1px dashed rgba(216, 180, 254, 0.4);">
    <div class="ad-card-header" style="background: rgba(0,0,0,0.3);">
        <span class="ad-card-title">:: OPERATION ROADMAP</span>
        <span class="ad-badge" style="background: transparent; border: 1px solid var(--text-dim); color: var(--text-dim);">STATUS: UPDATED</span>
    </div>

    <div style="padding: 0 1rem;">
        <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; opacity: 0.5;">
            <span style="color: var(--green); margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[COMPLETE]</span>
            <div>
                <strong style="display: block; color: var(--text);">Phase I: Infrastructure Deployment</strong>
            </div>
        </div>

        <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; opacity: 0.5;">
            <span style="color: var(--green); margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[COMPLETE]</span>
            <div>
                <strong style="display: block; color: var(--text);">Phase II: Foothold & Enumeration</strong>
            </div>
        </div>
        
        <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center;">
            <span style="color: var(--green); margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[COMPLETE]</span>
            <div>
                <strong style="display: block; color: #d8b4fe; font-size: 1.1rem;">Phase III: Lateral Movement</strong>
                <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                    Objective Achieved: Local Privilege Escalation & Credential Harvesting.
                    <br>
                    <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                    > Service Hijacking | Mimikatz | LSA Secrets | Persistence
                    </span>
                </p>
            </div>
        </div>
        
        <div style="padding: 1rem 0; display: flex; align-items: center;">
            <span style="color: #3b82f6; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[ACTIVE]</span>
            <div>
                <strong style="display: block; color: var(--text); font-size: 1rem;">Phase IV: Domain Dominance</strong>
                <span style="font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; color: var(--text-dim);">Target: Domain Controller...</span>
            </div>
        </div>
    </div>
</div>

<div class="ad-card" style="margin-top: 3rem; border: 1px solid #d8b4fe; opacity: 0.8; cursor: default;">
    <div class="ad-card-header" style="background: rgba(216, 180, 254, 0.1); border-bottom: 1px solid #d8b4fe;">
        <span class="ad-card-title">:: MISSION UPDATE INCOMING</span>
        <span class="ad-badge" style="background: #d8b4fe; color: black;">NEXT STAGE COOKING</span>
    </div>
    <div style="padding: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
            <strong style="display: block; color: #d8b4fe; font-size: 1.2rem; font-family: 'JetBrains Mono', monospace; margin-bottom: 0.5rem;">
                PREPARING PHASE IV
            </strong>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-dim); font-family: 'JetBrains Mono', monospace;">
                ASSETS ACQUIRED: mross, David, DefaultPassword...
            </p>
        </div>
        <div style="font-size: 2rem; color: #d8b4fe; padding-left: 20px; opacity: 0.5;">
            <i class="fas fa-hourglass-half"></i> 
        </div>
    </div>
</div>

</div>