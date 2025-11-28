---
layout: page
title: Home
permalink: /
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --accent-glow: rgba(255, 255, 255, 0.05);
  --bg-dark: #09090b;
  --bg-card: rgba(255, 255, 255, 0.02);
  --border: rgba(255, 255, 255, 0.08);
  --text: #d4d4d8;
  --text-dim: #52525b;
  --green-dim: #22c55e;
}

/* --- Overall Page --- */
.hacker-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* --- Hero Section --- */
.hero-section {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem 0;
  border-bottom: 1px solid var(--border);
}

.profile-pic {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid var(--border);
  box-shadow: 0 0 30px var(--accent-glow);
  object-fit: cover;
  object-position: center top;
  flex-shrink: 0;
  display: block;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 0.25rem;
  text-decoration: none;
  border-bottom: none;
  opacity: 0;
  animation: fadeIn 0.9s ease-in 0.5s forwards;
}

.hero-text .tagline {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent-dim);
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeIn 1.0s ease-in 1.5s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.hero-text .bio {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text);
}

.status-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--green-dim);
}

.status-dot {
  width: 10px;
  height: 10px;
  background: var(--green-dim);
  border-radius: 50%;
  animation: pulse 1.7s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

/* --- Section Headers --- */
.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2.5rem 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-dim);
}

.section-header::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border), transparent);
}


/* --- Timeline --- */
.timeline {
  position: relative;
  /* NEW: Reset list styles */
  list-style: none;
  margin: 0;
  padding: 0;
  /* Padding left creates space for the line */
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 1.8rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeSlide 0.5s forwards;
}

/* Staggered Animations */
.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.3s; }
.timeline-item:nth-child(3) { animation-delay: 0.5s; }
.timeline-item:nth-child(4) { animation-delay: 0.7s; }
.timeline-item:nth-child(5) { animation-delay: 0.9s; }
.timeline-item:nth-child(6) { animation-delay: 1.1s; }

.timeline-item:last-child {
  padding-bottom: 0;
}

@keyframes fadeSlide {
  to { opacity: 1; transform: translateX(0); }
}

.timeline-item::before {
  content: "";
  position: absolute;
  /* Adjusts the dot position relative to the new UL padding */
  left: -2rem; 
  top: 4px;
  width: 10px;
  height: 10px;
  background: var(--bg-dark);
  border: 2px solid var(--accent-dim);
  border-radius: 50%;
  /* Ensure the dot sits on top of the line */
  z-index: 1; 
  transition: border-color 0.3s ease, background 0.3s ease;
}

/* Interactive Hover Effect for Timeline Dots */
.timeline-item:hover::before {
    background: var(--green-dim);
    border-color: var(--green-dim);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
}

.timeline-date {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.timeline-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.timeline-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.timeline-title a:hover {
  text-decoration: underline;
  color: var(--green-dim);
}

.timeline-desc {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 0.6rem;
}

.timeline-metadata {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--text);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 2px solid var(--green-dim);
  padding: 0.5rem 0.85rem;
  border-radius: 3px;
  margin-top: 0.6rem;
}

.timeline-keyword {
  color: var(--green-dim);
  font-weight: 600;
}

/* Updated Mobile Media Query */
@media (max-width: 600px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  .profile-pic {
    width: 120px;
    height: 120px;
  }
  .nav-link {
    width: 100%;
    justify-content: center;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  /* Timeline Adjustments for Mobile */
  .timeline {
      padding-left: 1.5rem; /* Tighten padding */
  }
  .timeline::before {
      left: 0; /* Move line to edge */
  }
  .timeline-item::before {
      left: -1.5rem; /* Re-align dot with line */
  }
}

/* --- Skills Grid --- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: var(--accent-dim);
}

.skill-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0 0 0.5rem;
}

.skill-card p {
  font-size: 0.85rem;
  color: var(--text);
  margin: 0;
  line-height: 1.5;
}

.skill-tag {
  display: inline-block;
  font-size: 0.7rem;
  color: var(--text-dim);
  border: 1px solid var(--border);
  padding: 0.2rem 0.5rem;
  margin-top: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* --- Certifications --- */
.certifications-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.certification-item {
  width: 120px;
  text-align: center;
}

.certification-item img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
  border: none;
  transition: transform 0.2s, border-color 0.2s, opacity 0.2s;
  opacity: 0.85;
}

.certification-item img:hover {
  transform: scale(1.1);
  opacity: 1;
  border-color: var(--accent-dim);
}

.certification-name {
  font-size: 0.80rem;
  font-weight: 500;
  color: var(--text-dim);
  margin-top: 0.25rem;
}

/* --- Navigation Links --- */
.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-link:hover {
  background: var(--accent-glow);
  border-color: var(--accent-dim);
  color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.nav-link:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.highlight-box {
  background: var(--bg-card);
  border-left: 4px solid var(--accent-dim);
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.nav-button {
  display: inline-block;
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: var(--accent-glow);
  text-decoration: none;
}

@media (max-width: 600px) {
  .nav-link {
    width: 100%;
    justify-content: center;
  }
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  .profile-pic {
    width: 120px;
    height: 120px;
  }
}
/* 1. Force the wrapper to hug the text tightly */
.email-copy-wrapper {
  position: relative;
  display: inline-block; /* <--- THIS IS THE CRITICAL FIX */
  cursor: pointer;
  color: var(--green-dim);
  border-bottom: 1px dashed var(--green-dim);
  transition: all 0.2s;
  margin-left: 5px;
}

.email-copy-wrapper:hover {
  background: rgba(34, 197, 94, 0.1);
}

/* 2. Position the tooltip centered ABOVE the text */
.copy-tooltip {
  visibility: hidden;
  width: 70px;
  background-color: var(--bg-dark);
  color: var(--text);
  text-align: center;
  border: 1px solid var(--green-dim);
  border-radius: 4px;
  padding: 4px 0;
  
  /* POSITIONING: Moves it UP */
  position: absolute;
  z-index: 100;
  bottom: 100%; /* Align to the top of the email */
  left: 50%;    /* Center horizontally */
  transform: translateX(-50%) translateY(-8px); /* Center align + move up slightly */
  
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  pointer-events: none; /* Prevents tooltip from flickering if cursor hits it */
}

/* 3. The little arrow pointing down */
.copy-tooltip::after {
  content: "";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--green-dim) transparent transparent transparent;
}

/* 4. Hover State */
.email-copy-wrapper:hover .copy-tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-10px); /* Slight float-up animation */
}

.skill-card {
  /* Keep your existing styles, but add transition */
  transition: all 0.3s ease;
  cursor: default;
}

.skill-card:hover {
  border-color: var(--green-dim);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.15); /* Green glow using your var color */
  transform: translateY(-3px);
}

.skill-card:hover h3 {
  color: var(--green-dim); /* Turn the title green on hover */
}

.skill-card:hover::before {
  background: var(--green-dim);
  box-shadow: 0 0 10px var(--green-dim);
}


</style>

<div class="hacker-page">

 <!-- Hero Section -->
  <div class="hero-section">
    <img src="/assets/img/favicons/roundpic.png" alt="Jaakko Oja" class="profile-pic">
    <div class="hero-text">
      <h1>Jaakko Oja</h1>
      <div class="tagline">Red Team Apprentice // Network Security Enthusiast</div>
      <p class="bio">Third-year IT student at Tampere University of Applied Sciences specializing in telecommunications, computer networks, and cybersecurity.</p>
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
        <span>Available for opportunities · Tampere, Finland</span>
      </div>
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
      <span class="timeline-keyword">Focus:</span> Web Security, Credential Harvesting, Session Management.
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-date">2026 · Planned (Q1 Goal)</div>
    <div class="timeline-title">Game Of Active Directory</div>
    <p class="timeline-desc">
      Designing a challenging, vulnerable AD environment to simulate realistic red team exercises. Focusing on: Post-exploitation, lateral movement, and privilege escalation techniques.
    </p>
    <div class="timeline-metadata">
      <span class="timeline-keyword">Tools:</span> Impacket, BloodHound, Kerberoasting.
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
      <span class="timeline-keyword">Concepts:</span> Log Analysis, IDS/IPS Configuration, Incident Response.
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
      <span class="timeline-keyword">Tools:</span> Raspberry Pi 4, Python, SDR++, SDRAngel, SoapySDR Linux.
    </div>
  </li>

  <li class="timeline-item">
    <div class="timeline-date">2025 · Thesis Research</div>
    <div class="timeline-title">
        <a href="/mythic/">Thesis: Command & Control Frameworks</a>
    </div>
    <p class="timeline-desc">
      In-depth thesis research exploring modern Command & Control (C2) frameworks (with Mythic) used in red team operations.
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
    My deep dive into the <strong>Mythic C2 Framework</strong> for Red Team operations. 
    I researched modular command-and-control architectures and successfully demonstrated 
    <strong>fileless execution</strong> (using Linux’s <code>memfd_create</code>) to bypass traditional security mechanisms.
  </p>
  <p>
    The project also utilized <strong>Bincrypter</strong> for payload encryption.
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


