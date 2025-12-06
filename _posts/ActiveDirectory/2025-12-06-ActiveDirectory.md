---
layout: post
title: "Building an Active Directory Lab"
permalink: /activedirectory/
icon: fas fa-network-wired
order: 1
date: 2025-12-06 13:27:00 +0300
categories: [Active Directory, Lab-Setup]
tags: [active directory, lab, virtualbox, hacking, pentesting]
---
<link rel="stylesheet" href="{{ '/assets/css/ad.css' | relative_url }}">

<div class="hacker-page">

  <div class="hero-section" style="padding: 1rem 0; border: none;">
      <div class="hero-text">
          <h1>Infrastructure Setup</h1>
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
        <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Infrastructure:</strong> Deploy Domain Controller & Workstations on virtualized environments.</li>
        <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Red Teaming:</strong> Simulate attack scenarios and master standard AD attack vectors.</li>
        <li style="margin-bottom: 5px;"><span style="color: var(--green-dim); margin-right: 8px;">[+]</span> <strong>Verification:</strong> Validate domain connectivity and replication services.</li>
      </ul>
    </div>
  </div>
<p>Although this project was originally scheduled to begin in January, I felt a strong urge to dive in early. I simply couldn't wait to start deploying and pentesting Active Directory environments. I am currently deeply fascinated by the entire AD ecosystem and my goal is to learn as much as possible. After all, it remains the industry standard for enterprise identity management, making it a critical area of study.</p>

<p>Hack-Academy offered some intriguing Active Directory virtual machine packages, so I decided to acquire two of them. While all the VMs are primarily designed for VirtualBox, they can also be utilized with VMware.</p>

<p>For this lab environment, I chose to import the appliances directly. The setup consists of a Windows Server acting as the Domain Controller (DC01) and two Windows 10 client workstations.</p>
 My priority was to establish a realistic but isolated network; I configured the network adapters to use an internal "NAT Network." This ensures the machines can communicate with each other and reach the internet for necessary updates, while keeping the vulnerable Active Directory services segregated from my main home network.

<div class="ps-console">
  <div class="ps-prompt">
    <span class="ps-path">PS C:\Lab-Setup></span> 
    <span class="ps-cmd">Get-VM | Just-Simple-View </span>
  </div>
  <div class="ps-output">
Name            State             NetworkAdapters
----            -----             ---------------
DC01            Running           {NAT-Network}
Client01        Running           {NAT-Network}
Client02        Running           {NAT-Network}
  </div>
</div>


<p>With the infrastructure booting up, the next step is to verify the domain connectivity and begin enumerating the environment.</p>







</div>