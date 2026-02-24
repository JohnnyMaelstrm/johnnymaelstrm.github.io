---
layout: post
title: "Phase I: Deploying the Active Directory Target"
permalink: /activedirectory/
icon: fas fa-network-wired
order: 1
date: 2025-12-06 13:27:00 +0300
categories: [Active Directory, Lab-Setup]
tags: [active directory, lab, virtualbox, hacking, pentesting, netexec, bloodhound, impacket, networking, nat]
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
                <strong style="color: #d8b4fe;">DEPLOYMENT CONFIRMED:</strong> Hack Academy's OSCP Active Directory Chain Practice Lab.
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

    <div class="hero-section" style="padding: 1rem 0; border: none;">
        <div class="hero-text">
            <h1>System Deployment</h1>
        </div>
    </div>

    <p>Although this project was originally scheduled to begin in January, I felt a strong urge to dive in early. I simply couldn't wait to start deploying and pentesting Active Directory environments. I am currently deeply fascinated by the entire AD ecosystem and my goal is to learn as much as possible. After all, it remains the industry standard for enterprise identity management, making it a critical area of study.</p>

    <div class="ad-card" style="margin-bottom: 2rem;">
        <div class="ad-card-header">
            <span class="ad-card-title">:: TARGET INTELLIGENCE: ACTIVE DIRECTORY</span>
            <span class="ad-badge" style="border-color: #facc15; color: #facc15;">PRIORITY: HIGH</span>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <p style="margin-top: 0.5rem;"><strong>Definition:</strong> Microsoft's proprietary directory service acting as the centralized database for network identity, authentication, and policy management.</p>
            <p><strong>Why is this critical for Red Teaming?</strong></p>
            <ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 8px;">
                    <span style="color: #facc15; margin-right: 8px;">[!]</span> 
                    <strong>The Standard:</strong> Used by 95% of Fortune 500 companies. To hack enterprise networks, you must speak AD.
                </li>
                <li style="margin-bottom: 8px;">
                    <span style="color: #facc15; margin-right: 8px;">[!]</span> 
                    <strong>Keys to the Kingdom:</strong> AD controls "who can do what." Compromising a Domain Admin account grants total control over every server, workstation, and user in the environment.
                </li>
                <li style="margin-bottom: 8px;">
                    <span style="color: #facc15; margin-right: 8px;">[!]</span> 
                    <strong>Attack Surface:</strong> It relies on legacy protocols (Kerberos, NTLM, LDAP) which are often misconfigured. This allows for attacks like <em>Kerberoasting</em>, <em>DCSync</em>, and <em>Pass-the-Hash</em>.
                </li>
            </ul>
        </div>
    </div>

    <div class="ad-card" style="margin-bottom: 2rem; border-left: 3px solid #d8b4fe;">
        <div class="ad-card-header">
            <span class="ad-card-title">:: MISSION RESOURCE: HACK ACADEMY</span>
            <span class="ad-badge" style="border-color: #d8b4fe; color: #d8b4fe;">TARGET: OSCP EXAM</span>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <p style="margin-top: 0.5rem;">
                <strong style="color: #d8b4fe;">Asset Acquired:</strong> OSCP Active Directory Chain Practice Lab
            </p>
            <p>This is not a random setup. This lab is a downloadable VM pack purpose-built to replicate an <strong>OSCP-style Active Directory environment</strong>. It simulates real attack chains, forcing us to move beyond simple exploits and practice the full lifecycle:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 1rem 0;">
                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                    <span style="color: #d8b4fe;">[>]</span> <strong>Discovery:</strong><br>
                    <span style="color: var(--text-dim); font-size: 0.8rem;">Initial enumeration & footing.</span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                    <span style="color: #d8b4fe;">[>]</span> <strong>PrivEsc:</strong><br>
                    <span style="color: var(--text-dim); font-size: 0.8rem;">Vertical movement to Admin.</span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                    <span style="color: #d8b4fe;">[>]</span> <strong>Lateral Move:</strong><br>
                    <span style="color: var(--text-dim); font-size: 0.8rem;">Pivot between workstations.</span>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px;">
                    <span style="color: #d8b4fe;">[>]</span> <strong>Dominance:</strong><br>
                    <span style="color: var(--text-dim); font-size: 0.8rem;">Full Post-Exploitation.</span>
                </div>
            </div>
            <blockquote>
                <p style="border-left: 2px solid #d8b4fe; padding-left: 1rem; color: var(--text-dim); font-style: italic;">
                    "The network topology, host roles, and vulnerabilities are arranged so you practice the same steps you will encounter during exam-style AD challenges. Everything is designed for learning by doing, not just reading."
                </p>
            </blockquote>
            <p style="margin-bottom: 0;">
                <span style="color: #d8b4fe;">>></span> <strong>Objective:</strong> Use this high-fidelity simulation to build the confidence needed to crush the exam.
            </p>
        </div>
    </div>

    <div class="ad-card" style="margin-bottom: 2rem;">
        <div class="ad-card-header">
            <span class="ad-card-title">:: PROJECT OBJECTIVES</span>
            <span class="ad-badge">STATUS: IN PROGRESS</span>
        </div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--text);">
            <p style="margin-top: 0.5rem;"><strong>Goal:</strong> Construct a high-fidelity target range for adversary simulation.</p>
            <ul style="list-style: none; padding-left: 0; margin-bottom: 0;">
                <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Infrastructure:</strong> Deploy Domain Controller & Workstations on virtualized environment.</li>
                <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Red Teaming:</strong> Simulate attack scenarios and master standard AD attack vectors.</li>
                <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Verification:</strong> Validate domain connectivity and replication services.</li>
            </ul>
        </div>
    </div>

    <p>For this lab environment, I chose to import the appliances directly. The setup consists of a Windows Server acting as the Domain Controller (DC01) and two Windows 10 client workstations.</p>

    <p>My priority was to establish a realistic but isolated network; I configured the network adapters to use an internal "NAT Network." This ensures the machines can communicate with each other and reach the internet for necessary updates, while keeping the vulnerable Active Directory services segregated from my main home network.</p>

    <div class="ad-card" style="margin-bottom: 2rem; border: 1px solid #d8b4fe; padding: 5px;">
        <div class="ad-card-header" style="background: rgba(216, 180, 254, 0.1); margin-bottom: 0;">
            <span class="ad-card-title">:: NETWORK TOPOLOGY</span>
            <span class="ad-badge" style="background: #d8b4fe; color: black;">VISUALIZATION</span>
        </div>
        <img src="{{ '/assets/Active_Directory/topology1.png' | relative_url }}" alt="Active Directory Network Topology" style="width: 100%; display: block; border-radius: 0 0 4px 4px;">
        <div style="padding: 8px; font-size: 0.75rem; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
            FIGURE 1.0: Virtualized Attack Surface Configuration. The Lab is configured in VirtualBox.
        </div>
    </div>

    <p>With the network configured, the next step is to verify that our Attack Box (Kali) can communicate with the target domain. I used a tool called <strong>NetExec</strong> on this part.</p>

    <div class="section-header">:: INFRASTRUCTURE STATUS</div>

    <div style="margin-bottom: 1.5rem;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); margin-bottom: 5px;">
            <span style="color: #3b82f6;">[CLIENT01]</span> Internal Domain Connectivity Check
        </div>
        <div class="ps-console">
            <div class="ps-prompt">
                <span class="ps-path">PS C:\Users\Administrator></span> 
                <span class="ps-cmd">Test-NetConnection -ComputerName DC01 -CommonTCPPort SMB</span>
            </div>
            <pre class="ps-output">
ComputerName     : DC01
RemoteAddress    : 10.0.2.4
RemotePort       : 445
InterfaceAlias   : Ethernet
SourceAddress    : 10.0.2.5
TcpTestSucceeded : True
            </pre>
        </div>
    </div>

    <div style="margin-bottom: 2rem;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); margin-bottom: 5px;">
            <span style="color: #a3e635;">[ATTACKER VM]</span> Connectivity Check (NetExec)
        </div>
        <div class="ad-card" style="padding: 0; border: 1px solid var(--border); overflow: hidden;">
            <img src="{{ '/assets/Active_Directory/netexec2.png' | relative_url }}" alt="NetExec SMB Scan Results" style="width: 100%; display: block;">
        </div>
    </div>

    <p>With connectivity established and services responding, the environment is ready for the enumeration phase.</p>

    <div class="section-header">:: MISSION ARSENAL</div>

    <p>To successfully compromise and audit the domain, we need a specific set of tooling. This lab relies on standard offensive security tools found in Kali Linux, with a focus on network enumeration and protocol abuse.</p>

    <div class="skills-grid" style="margin-bottom: 2rem;">
        <div class="skill-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>NetExec (NXC)</h3>
                <span style="color: var(--green-dim); font-size: 0.8rem;">v1.4.0</span>
            </div>
            <p>The "Smooth Operator." The modern fork of CrackMapExec. It is the swiss-army knife for enumerating AD protocols (SMB, LDAP, MSSQL, WinRM).</p>
            <span class="skill-tag">ENUMERATION</span>
            <span class="skill-tag">SPRAYING</span>
        </div>
        <div class="skill-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>Impacket</h3>
                <span style="color: var(--text-dim); font-size: 0.8rem;">LIBRARY</span>
            </div>
            <p>A collection of Python classes for working with network protocols. Essential for executing attacks like <em>SecretsDump</em>, <em>GetNPUsers</em>, and <em>SMBRelay</em>.</p>
            <span class="skill-tag">EXPLOITATION</span>
            <span class="skill-tag">KERBEROS</span>
        </div>
        <div class="skill-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>BloodHound</h3>
                <span style="color: var(--text-dim); font-size: 0.8rem;">VISUALIZATION</span>
            </div>
            <p>Uses graph theory to reveal hidden relationships and attack paths within an Active Directory environment (e.g., shortest path to Domain Admin).</p>
            <span class="skill-tag">AUDIT</span>
            <span class="skill-tag">MAPPING</span>
        </div>
        <div class="skill-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3>VirtualBox</h3>
                <span style="color: var(--text-dim); font-size: 0.8rem;">HYPERVISOR</span>
            </div>
            <p>Hosting the infrastructure. Configured with "NAT Network" to allow internal routing between the DC and Clients while maintaining internet access.</p>
            <span class="skill-tag">INFRASTRUCTURE</span>
        </div>
    </div>

    <div class="ad-card">
        <div class="ad-card-header">
            <span class="ad-card-title">:: TOOL VERIFICATION</span>
            <span class="ad-badge">CHECK: PASS</span>
        </div>
        <div style="padding: 1rem;">
            <p style="font-size: 0.85rem; margin-bottom: 1rem; color: var(--text);">
                Verifying the installation of <strong>NetExec</strong> on the attack box (Kali Linux). The tool is initialized and ready for SMB protocol database interactions.
            </p>
            <img src="{{ '/assets/Active_Directory/netexec.png' | relative_url }}" alt="NetExec Terminal Output" style="width: 100%; border: 1px solid var(--border); border-radius: 4px; opacity: 0.9;">
            <div style="margin-top: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim);">
                <span style="color: var(--green-dim);">root@kali:~$</span> nxc --version <br>
                <span style="color: var(--accent);">Codename: SmoothOperator</span>
            </div>
        </div>
    </div>

    <div class="ad-card" style="margin-top: 3rem; margin-bottom: 2rem; border: 1px dashed rgba(216, 180, 254, 0.4);">
        <div class="ad-card-header" style="background: rgba(0,0,0,0.3);">
            <span class="ad-card-title">:: OPERATION ROADMAP</span>
            <span class="ad-badge" style="background: transparent; border: 1px solid var(--text-dim); color: var(--text-dim);">SYNCING...</span>
        </div>

        <div style="padding: 0 1rem;">
            <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; opacity: 0.5;">
                <span style="color: var(--green); margin-right: 15px; font-family: 'JetBrains Mono', monospace;">[COMPLETE]</span>
                <div>
                    <strong style="display: block; color: var(--text);">Phase I: Infrastructure Deployment</strong>
                    <span style="font-size: 0.8rem; font-family: 'JetBrains Mono', monospace;">Target Deployment & Connectivity Verification</span>
                </div>
            </div>

            <div style="padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center;">
                <span style="color: #facc15; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[QUEUED]</span>
                <div>
                    <strong style="display: block; color: #d8b4fe; font-size: 1.1rem;">Phase II: Foothold & Enumeration</strong>
                    <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                        Objective: Exploit misconfigurations to gain initial domain user access.
                        <br>
                        <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                        > Enumeration | AS-REP Roasting | Password Cracking | Local Admin
                        </span>
                    </p>
                </div>
            </div>
            
            <div style="padding: 1rem 0; display: flex; align-items: center; opacity: 0.7;">
                <span style="color: #f87171; margin-right: 15px; min-width: 85px; font-family: 'JetBrains Mono', monospace;">[LOCKED]</span>
                <div>
                    <strong style="display: block; color: var(--text); font-size: 1rem;">Phase III: Lateral Movement & Dominance</strong>
                    <p style="font-size: 0.85rem; margin: 5px 0 0 0; color: var(--text);">
                        Objective: Escalate privileges to Domain Admin via protocol abuse.
                        <br>
                        <span style="color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;">
                        >  Service Hijacking | Mimikatz | LSA Secrets | Persistence
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <a href="{{ '/activedirectory/phase2/' | relative_url }}" style="text-decoration: none;">
        <div class="ad-card" style="margin-top: 3rem; border: 1px solid #d8b4fe; transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.background='rgba(216, 180, 254, 0.05)'" onmouseout="this.style.background='transparent'">
            <div class="ad-card-header" style="background: rgba(216, 180, 254, 0.1); border-bottom: 1px solid #d8b4fe;">
                <span class="ad-card-title">:: MISSION UPDATE AVAILABLE</span>
                <span class="ad-badge" style="background: #d8b4fe; color: black;">NEXT STAGE UNLOCKED!</span>
            </div>
            <div style="padding: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <strong style="display: block; color: #d8b4fe; font-size: 1.2rem; font-family: 'JetBrains Mono', monospace; margin-bottom: 0.5rem;">
                        INITIATE PHASE II: ENUMERATION & FOOTHOLD
                    </strong>
                    <p style="margin: 0; font-size: 0.9rem; color: var(--text-dim); font-family: 'JetBrains Mono', monospace;">
                        Infrastructure deployed. Proceed to Enumeration & Initial Access operations.
                    </p>
                </div>
                <div style="font-size: 2rem; color: #d8b4fe; padding-left: 20px;">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </a>

</div>