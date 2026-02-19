---
icon: fas fa-briefcase
order: 5
---

<style>
/* --- BASE STYLES --- */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --bg-dark: #09090b;
  --bg-card: rgba(255, 255, 255, 0.02);
  --border: rgba(255, 255, 255, 0.08);
  --text: #d4d4d8;
  --text-dim: #52525b;
  --highlight-color: #60a5fa; 
  --date-color: #22c55e;
}

/* BASE RESUME STYLES */
.resume-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* HEADER */
.page-header {
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border);
  opacity: 0;
  animation: fadeIn 1s ease-in 0.3s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.page-header h1 {
  font-size: 3.3rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.page-header .summary {
  font-size: 0.95rem;
  color: var(--text-dim);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* CONTACT LINKS */
.contact-bar {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    font-size: 0.9rem;
}
.contact-bar a {
    color: var(--highlight-color);
    text-decoration: none;
    transition: color 0.2s;
}
.contact-bar a:hover {
    color: var(--date-color);
}

/* DOWNLOAD BUTTON */
.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  border: 1px solid var(--date-color);
  color: var(--date-color);
  background: rgba(34, 197, 94, 0.05);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.download-btn:hover {
  background: rgba(34, 197, 94, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.2);
  color: var(--date-color);
  text-decoration: none;
}

/* SECTION HEADERS */
.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2.5rem 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
}

.section-header::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border), transparent);
}

/* CARD GRID */
.card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.entry-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeSlideUp 0.6s ease-out forwards;
}
.entry-card:hover {
    border-color: var(--highlight-color);
}

.entry-card .title, .entry-card .degree {
    font-size: 1rem;
    font-weight: 700;
    color: var(--highlight-color);
    margin-bottom: 0.3rem;
    display: block;
}

.entry-card .institution {
    font-size: 0.9rem;
    color: var(--accent);
    display: block;
    margin-bottom: 0.1rem;
}

.entry-card .dates {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--date-color);
    margin-bottom: 0.5rem;
    display: block;
}

.entry-card .description {
    font-size: 0.85rem;
    color: var(--text-dim);
    line-height: 1.4;
}

/* SKILL GRID */
.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 2rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.6s ease-out forwards;
}

@keyframes fadeSlideUp {
  to { opacity: 1; transform: translateY(0); }
}

.skill-item {
  font-size: 0.9rem;
  color: var(--text);
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent !important;
}

.skill-item::before {
  content: "▸";
  color: var(--accent-dim);
  font-size: 0.8rem;
}

.skill-item.highlight {
  color: var(--highlight-color); 
  font-weight: 500;
}

/* CERTIFICATION BADGES */
.cert-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.cert-badge {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--text);
  transition: all 0.2s;
}

.cert-badge:hover {
  border-color: var(--highlight-color);
  transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .card-grid { grid-template-columns: 1fr; }
}
</style>

<div class="resume-page">

<div class="page-header">
  <h1>Jaakko Oja</h1>
  <p class="summary">
    <strong>Offensive Security Analyst - Red Team</strong> at <strong>Cyber Attack Simulation | Accenture Nordics</strong>. 
    Specializing in <strong>Adversary Simulation</strong>, <strong>Infrastructure as Code (IaC)</strong>, and <strong>Red Team Automation</strong>. 
    Expertise in engineering hardened C2 infrastructures!
  </p>
</div>
  
  <div class="contact-bar">
      <a href="https://linkedin.com/in/jaakkooja" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <span>•</span>
      <a href="mailto:jaakko.oja029@gmail.com"><i class="fas fa-envelope"></i> jaakko.oja029@gmail.com</a>
      <span>•</span>
      <span>Tampere, Finland</span>
  </div>

  <a href="/assets/pdf/Jaakko_oja.pdf" class="download-btn" target="_blank">
    <i class="fas fa-file-pdf"></i> Download Full Resume (PDF)
  </a>
  
</div>

<div class="section-header">Featured Technical Projects</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="title">Automated Red Team Infra (IaC)</span>
        <span class="institution">Ansible, Sliver C2 & Terraform</span>
        <span class="dates">2026</span>
        <p class="description">Engineered a fully automated pipeline to provision hardened <strong>Sliver C2</strong> servers. Implemented <strong>polymorphic compilation</strong> to evade static analysis and strict Systemd sandboxing for process isolation.</p>
    </div>
    <div class="entry-card">
        <span class="title">Smart Serverless Redirector</span>
        <span class="institution">Cloudflare Workers & JavaScript</span>
        <span class="dates">2026</span>
        <p class="description">Developed an intelligent <strong>Edge Redirector</strong> to mask backend IPs. Filters traffic, redirects scanners to decoys, and masquerades C2 traffic as legitimate CDN requests.</p>
    </div>
    <div class="entry-card">
        <span class="title">Thesis: C2 Frameworks (Grade 5/5)</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">2025</span>
        <p class="description">Researched modern adversary tradecraft. Demonstrated <strong>fileless malware execution</strong> on Linux using <code>memfd_create</code> to bypass disk-based detection mechanisms.</p>
    </div>
    <div class="entry-card">
        <span class="title">Active Directory Kill-Chain</span>
        <span class="institution">Home Lab Environment</span>
        <span class="dates">Ongoing</span>
        <p class="description">Simulating full kill-chain attacks. Executed identity-based attacks including Kerberoasting, Golden Tickets, and AS-REP Roasting using <strong>NetExec, Impacket and BloodHound</strong>.</p>
    </div>
</div>

<div class="section-header">Professional Experience</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="title">Intern (SDR Project)</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">Summer 2025</span>
        <p class="description">Technical implementation of <strong>Software-Defined Radio</strong> analysis station using Raspberry Pi and CaribouLite. Authored comprehensive technical documentation integrated into curriculum.</p>
    </div>
    <div class="entry-card">
    <span class="title">Shift Supervisor & Field Manager</span>
    <span class="institution">Securitas Oy</span>
    <span class="dates">2021 - 2023</span>
    <p class="description">
        Led field teams in high-pressure situations. Acted as primary point of contact for critical security incidents, responsible for reporting and crisis de-escalation.
    </p>
</div>
</div>

<div class="section-header">Education</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="degree">Bachelor of Engineering, ICT</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">2023 - 2027</span>
        <p class="description">Focus: Cybersecurity & Networks. Thesis Grade: 5/5.</p>
    </div>
</div>

<div class="section-header">Offensive Security & Automation</div>
<div class="skill-grid">
  <div class="skill-item highlight">Infrastructure as Code (IaC)</div>
  <div class="skill-item highlight">Ansible & Terraform</div>
  <div class="skill-item highlight">C2 Operations (Sliver/Mythic)</div>
  <div class="skill-item">Active Directory Exploitation</div>
  <div class="skill-item">Evilginx2 (Phishing Infra)</div>
  <div class="skill-item">OPSEC & Traffic Masquerading</div>
  <div class="skill-item">Privilege Escalation (Win/Lin)</div>
  <div class="skill-item">BloodHound & NetExec</div>
</div>

<div class="section-header">Defensive Security & Networking</div>
<div class="skill-grid">
  <div class="skill-item highlight">Wazuh & Suricata (SIEM/IDS)</div>
  <div class="skill-item highlight">Linux Hardening & Systemd</div>
  <div class="skill-item">Cisco Routing & Switching</div>
  <div class="skill-item">Cloudflare Workers (JS)</div>
  <div class="skill-item">TCP/IP, VLANs, VPN, DNS</div>
  <div class="skill-item">Software-Defined Radio (SDR)</div>
</div>

<div class="section-header">Certifications</div>
<div class="cert-list">
  <div class="cert-badge">CCNA: Enterprise Networking & Security</div>
  <div class="cert-badge">Cisco CyberOps Associate</div>
  <div class="cert-badge">Cisco Ethical Hacker</div>
  <div class="cert-badge">Microsoft: Cybersecurity Architect</div>
  <div class="cert-badge">Microsoft: Azure Fundamentals</div>
</div>

<div class="section-header">Languages</div>
<div class="skill-grid">
  <div class="skill-item">Finnish (Native)</div>
  <div class="skill-item">English (Professional Proficiency)</div>
  <div class="skill-item">Swedish (Basic)</div>
  
</div>

</div>