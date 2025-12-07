---
layout: page
title: Home
permalink: /
credits_done: 154
credits_total: 240
---
<link rel="stylesheet" href="/assets/css/mainpage.css">

<div class="hacker-page">

 <!-- Hero Section -->
  <div class="hero-section">
    <img src="/assets/img/favicons/roundpic.png" alt="Jaakko Oja" class="profile-pic">
    <div class="hero-text">
      <h1>Jaakko Oja</h1>
      <div class="tagline">Red Team Apprentice // Network Security Enthusiast</div>
      <p class="bio">Third-year IT engineering student at Tampere University of Applied Sciences specializing in telecommunications, computer networks, and cybersecurity.</p>
      <p class="bio bio-small">
        Currently open for roles: ICT Trainee · Cybersecurity Trainee · SOC Specialist · Junior Networking · Threat Hunter ·
      </p>
    <div class="summary">
  Call-to-Action? Sure thing! Contact me on 
  <a href="https://www.linkedin.com/in/jaakkooja/" target="_blank">LinkedIn</a> 
  or by email:
  <span id="emailBtn" class="email-copy-wrapper">
  <span class="email-text">jaakko.oja029@gmail.com</span>
  <span class="copy-tooltip" id="copyTooltip">Email!</span>
</span>
</div>
      <div class="status-line">
        <span class="status-dot"></span>
        <span> Available for opportunities · Tampere, Finland </span>
      </div>
    </div>
    
  </div>

<link rel="stylesheet" href="/assets/css/bar.css">

{% assign percent = page.credits_done | times: 100.0 | divided_by: page.credits_total | round: 1 %}

<div class="progress-wrapper">
  <div class="progress-info">
    <span>Degree Progress (TAMK)</span>
    <span>{{ page.credits_done }} / {{ page.credits_total }} ECTS ({{ percent }}%)</span>
  </div>
  <div class="progress-bg">
    <div class="progress-bar" style="--target-width: {{ percent }}%;"></div>
  </div>
</div>


  <!-- Timeline -->
 <div class="section-header">Timeline</div>
<ul class="timeline">

  <li class="timeline-item">
    <div class="timeline-date">2026 · Planned</div>
    <div class="timeline-title">Evilginx: Reverse-Proxy Phishing</div>
    <p class="timeline-desc">
      Researching and building a controlled lab to understand and demonstrate session hijacking and Multi-Factor Authentication (MFA) bypass mechanisms via reverse-proxy phishing attacks.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Focus:</span> Web Security, Credential Harvesting, Session Management. <br>
      <span class="timeline-keyword">Tools:</span> Evilginx
    </div>
  </li>

 <li class="timeline-item">
    <div class="timeline-date">2025 · Present</div>
    <div class="timeline-title">
    <a href="/activedirectory/">Active Directory: Red Team Labs & OSCP</a>
    </div>
    <p class="timeline-desc">
      A dual-focus project: 1) Using the "Game of Active Directory" environment to master AD architecture's standard attack vectors, and 2) Executing full kill-chain attacks on Hack Academy's custom OSCP VMs.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Focus:</span> Post-exploitation, Lateral Movement, Domain Dominance. <br>
      <span class="timeline-keyword">Tools:</span> Impacket, BloodHound, NetExec.
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-date">2025 · Planned (Q4 Goal)</div>
    <div class="timeline-title">
        <a href="/siem-wazuh-suricata/">SIEM Environment: Wazuh & Suricata</a>
    </div>
    <p class="timeline-desc">
      Implementing a Security Information and Event Management (SIEM) solution using Wazuh and Suricata for real-time monitoring, alerting, and security incident response practice.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Concepts:</span> Log Analysis, IDS/IPS Configuration, Incident Response. <br>
      <span class="timeline-keyword">Tools:</span> Wazuh, Suricata, Mythic C2, Metasploit.
    </div>
  </li>
  
  <li class="timeline-item">
    <div class="timeline-date">Summer 2025 · Project</div>
    <div class="timeline-title">
        <a href="/CaribouLite/">Software-Defined Radio (SDR) with CaribouLite</a>
    </div>
    <p class="timeline-desc">
      Completed a practical SDR project using CaribouLite and Raspberry Pi 4. Focused on configuring and utilizing open-source tools to analyze and interact with the SDR world.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Tools:</span> Raspberry Pi 4, Python, SDR++, SDRAngel, SoapySDR, Linux.
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-date">2025 · Thesis Research</div>
    <div class="timeline-title">
        <a href="/mythic/">Thesis: Command & Control Frameworks</a>
    </div>
    <p class="timeline-desc">
      In-depth thesis research exploring modern Command & Control (C2) frameworks (with Mythic) used in Red Team operations.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Domain:</span> Offensive / Defensive Security, Threat Hunting, Network Forensics.
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-date">2022 - Present</div>
    <div class="timeline-title">Tampere University of Applied Sciences</div>
    <p class="timeline-desc">
      Bachelor of Engineering in ICT Telecommunications and Computer Networks. Core focus on network security, infrastructure, and protocol analysis.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Foundations:</span> Networking, Routing/Switching, OSI Model, Telecommunications.
    </div>
  </li>

</ul>

<!-- HONEYPOT WIDGET: Live Feed -->




<div class="section-header">🛡 Honeypot</div>
<div style="margin: 2rem 0;">
    <iframe src="/test.html" 
            style="width: 100%; height: 420px; border: none; overflow: hidden; background: #09090b; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    </iframe>
    <!-- Upota kuvaaja -->
<iframe src="/chart_widget.html" 
        style="width: 100%; height: 200px; border: 1px solid #333; border-radius: 8px; background: #09090b;">
</iframe>
</div>


<!-- Core Skills -->
<div class="section-header">Core Skills</div>
<div class="skills-grid">
    <div class="skill-card">
      <h3>Red Teaming</h3>
      <p>Adversary simulation and offensive security operations</p>
      <span class="skill-tag">Offensive Security</span>
    </div>
    <div class="skill-card">
      <h3>Ethical Hacking</h3>
      <p>Authorized security assessments and vulnerability research</p>
      <span class="skill-tag">Penetration Testing</span>
    </div>
    <div class="skill-card">
      <h3>SOC Operations</h3>
      <p>Security monitoring, incident response, and threat intelligence</p>
      <span class="skill-tag">Defensive Security</span>
      <span class="skill-tag">Blue Teaming</span>
    </div>
    <div class="skill-card">
      <h3>Networking & SDR</h3>
      <p>Network security, protocols, and software-defined radio</p>
      <span class="skill-tag">Infrastructure</span>
      <span class="skill-tag">SDR</span>
      <span class="skill-tag">Networking</span>
    </div>
  </div>
</div>

<!-- Thesis and Intern Project -->

<div class="section-header">Thesis: Command & Control Frameworks</div>

<div class="highlight-box">
  <h3>Bachelor's Thesis</h3>
  <p>
    My deep dive into the <strong>Mythic C2 Framework</strong>. I constructed a complete attack infrastructure from scratch to simulate modern adversary tradecraft against both Windows and Linux targets.
  </p>
  <p>
    The research focused on <strong>evasion techniques</strong>. I successfully demonstrated <strong>fileless execution</strong> on Linux by deploying the <strong>Poseidon agent</strong> via <strong>Bincrypter</strong>. This method utilized the <code>memfd_create</code> syscall to execute the payload directly from RAM, effectively bypassing disk-based detection mechanisms.
  </p>
  
  <p style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.5rem; font-style: italic;">
    * Note: The attached thesis document is currently in Finnish.
  </p>
  
  <a href="{{ '/assets/Thesis/Opinnaytetyo_Oja_Jaakko_2025.pdf' | relative_url }}" target="_blank" style="text-decoration: none; display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border: 1px solid var(--border); border-radius: 4px; margin: 1rem 0;">
    <div style="font-size: 2rem;">📄</div> 
    <div>
      <div style="color: var(--accent); font-weight: 600;">Click here for the Thesis Research!</div>
      <div style="color: var(--text-dim); font-size: 0.8rem;">PDF • Research Paper</div>
    </div>
  </a>
</div>

<div class="section-header">🌟 Intern Project: CaribouLite & Raspberry Pi 4</div>

<div class="highlight-box">
  <h3>Summer 2025 Intern Project</h3>
  <p>
    This was my intern project at Tampere University of Applied Sciences. 
    Really an eye-opening exploration into the world of Software-Defined Radio (SDR).
  </p>
  
  <a href="{{ '/assets/docs/Project.pdf' | relative_url }}" target="_blank" style="text-decoration: none; display: flex; align-items: center; gap: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border: 1px solid var(--border); border-radius: 4px; margin: 1rem 0;">
    <div style="font-size: 2rem;">📄</div> 
    <div>
      <div style="color: var(--accent); font-weight: 600;">Click here for the official project report!</div>
      <div style="color: var(--text-dim); font-size: 0.8rem;">PDF • 2.5 MB</div>
    </div>
  </a>

  <a href="{{ '/assets/docs/Project.pdf' | relative_url }}" class="nav-button" download>
    📥 Download PDF
  </a>
</div>

<div class="section-header">🏅 Certifications</div>

<div class="certifications-grid">
  <div class="certification-item">
    <a href="https://www.credly.com/badges/d029163a-b59e-4365-a18f-705467e7e885/public_url" target="_blank">
      <img src="https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png" 
           alt="Introduction to Cybersecurity" />
    </a>
    <div class="certification-name">Introduction to Cybersecurity</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/fc86f74b-c531-45a6-8427-c29a8678e753/public_url" target="_blank">
      <img src="https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png" 
           alt="Ethical Hacker" />
    </a>
    <div class="certification-name">Ethical Hacker</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/27a5850d-bcf2-4937-9eb2-c5dbaef30fe1/public_url" target="_blank">
      <img src="https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png" 
           alt="CCNA SRWE" />
    </a>
    <div class="certification-name">CCNA SRWE</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/624b96dd-cfe1-4605-a6a3-0b544c928757/public_url" target="_blank">
      <img src="https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png" 
           alt="CCNA ENSA" />
    </a>
    <div class="certification-name">CCNA ENSA: Enterprise Networking, Security & Automation</div>
  </div>

  <div class="certification-item">
    <a href="https://openbadgefactory.com/obv3/credentials/e6a1584fac59c20eaa84f82a1fab045dc51bf7e1" target="_blank">
      <img src="https://openbadgefactory.com/v1/badge/_/RR37SAa5V4a9XY.png?event=T5ETSZaNXGXaDGT" 
           alt="Azure Fundamentals" />
    </a>
    <div class="certification-name">Azure Fundamentals</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/9f5d0c10-1f34-48b0-b352-b413a9ad1ada/public_url" target="_blank">
      <img src="https://images.credly.com/size/220x220/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png" 
           alt="ISC2 Candidate" />
    </a>
    <div class="certification-name">ISC2 Candidate</div>
  </div>
</div>

<div class="section-header">🔗 My links!</div>
<div class="nav-buttons">
<a href="/about/" class="nav-link">📖 About Me</a>
<a href="/categories/" class="nav-link">📂 Categories</a>
<a href="https://github.com/JohnnyMaelstrm" target="_blank" class="nav-link">💻 GitHub</a>
<a href="https://www.linkedin.com/in/jaakkooja" target="_blank" class="nav-link">💼 LinkedIn</a>
</div>


