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
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
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
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, var(--accent-dim), var(--text-dim), transparent);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeSlide 0.5s forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.3s; }
.timeline-item:nth-child(3) { animation-delay: 0.5s; }
.timeline-item:nth-child(4) { animation-delay: 0.7s; }
.timeline-item:nth-child(5) { animation-delay: 0.9s; }
.timeline-item:nth-child(6) { animation-delay: 1.1s; }

@keyframes fadeSlide {
  to { opacity: 1; transform: translateX(0); }
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2rem;
  top: 4px;
  width: 10px;
  height: 10px;
  background: var(--bg-dark);
  border: 1px solid var(--accent-dim);
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.timeline-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0.25rem 0;
}

.timeline-title a {
  color: inherit;
  text-decoration: none;
}

.timeline-title a:hover {
  text-decoration: underline;
}

.timeline-desc {
  font-size: 0.80rem;
  color: var(--text);
  line-height: 1.6;
  font-weight: 400;
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
.role-badges {
  margin: 0.75rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.role-pill {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.04em;
  transition: 0.2s ease;
  backdrop-filter: blur(6px);
}

.role-pill:hover {
  background: var(--accent-glow);
  border-color: var(--accent-dim);
  color: #fff;
  transform: translateY(-1px);
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
      <div class="role-badges">
  <span class="role-pill">ICT Trainee</span>
  <span class="role-pill">Cybersecurity Trainee</span>
  <span class="role-pill">Red Team Trainee</span>
  <span class="role-pill">Junior Network Specialist</span>
</div>
      <div class="status-line">
        <span class="status-dot"></span>
        <span>Available for opportunities · Tampere, Finland</span>
      </div>
    </div>
  </div>

  <!-- Timeline -->
  <div class="section-header">Timeline</div>
  <div class="timeline">
  <div class="timeline-item">
  <div class="timeline-date">2026 · Planned</div>
  <div class="timeline-title">GOAD Lab Environment</div>
  <p class="timeline-desc">Game Of Active Directory — intern project at TAMK for practicing enterprise attack techniques.</p>
    </div>
  <div class="timeline-item">
  <div class="timeline-date">2026 · Planned</div>
  <div class="timeline-title">Evilginx</div>
  <p class="timeline-desc"> Planning to build a controlled Evilginx environment to experiment with reverse‑proxy phishing, session hijacking, and MFA bypass mechanisms.</p>
    </div>
  <div class="timeline-item">
  <div class="timeline-date">2025 · Planned</div>
  <div class="timeline-title"><a href="/siem-wazuh-suricata/">Wazuh & Suricata —— SIEM Environment</a>
  <p class="timeline-desc">Open source SIEM environment with Wazuh and Suricata for monitoring and detecting network threats in real time.</p>
    </div>
  <div class="timeline-item">
  <div class="timeline-date">2025</div>
  <div class="timeline-title"><a href="/mythic/">Thesis: Command & Control Frameworks</a></div>
  <p class="timeline-desc">Thesis research exploring modern C2 frameworks in red team operations.</p>
    </div>
  <div class="timeline-item">
      <div class="timeline-date">2025</div>
      <div class="timeline-title"><a href="/CaribouLite/">CaribouLite SDR Research</a>
      <p class="timeline-desc">Software-Defined Radio project using CaribouLite and Raspberry Pi 4 at TAMK.</p>
    </div>

   <div class="timeline-item">
      <div class="timeline-date">2022 - Present</div>
      <div class="timeline-title">Tampere University of Applied Sciences</div>
      <p class="timeline-desc">Bachelor of Engineering —— ICT Telecommunications and Computer Networks.</p>
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

<div class="section-header">🌟 Featured Project: CaribouLite & Raspberry Pi 4</div>

<div class="highlight-box">
  <h3>Summer 2025 Intern Project</h3>
  <p>This was my intern project at Tampere University of Applied Sciences. 
  Really an eye-opening exploration into the world of Software-Defined Radio (SDR).</p>
  
  <div style="margin: 1.5rem 0;">
    <iframe src="{{ '/assets/docs/Project.pdf' | relative_url }}" 
            width="100%" height="500px" 
            style="border: 1px solid #333; border-radius: 4px;"></iframe>
  </div>
  
  <a href="{{ '/assets/docs/Project.pdf' | relative_url }}" class="nav-button" download>
    📥 Download Project PDF
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

</div>