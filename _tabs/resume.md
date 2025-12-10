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
  display: inline-block;
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
    Third-year ICT student specializing in Telecommunications, Networking and Cybersecurity. Red Teamer with a Purple Team mindset by combining offensive knowledge with defensive monitoring. Currently building home-lab environments to simulate enterprise attacks.
  </p>
  
  <div class="contact-bar">
      <a href="https://linkedin.com/in/jaakkooja" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <span>•</span>
      <a href="mailto:Jaakko.Oja029@hotmail.com"><i class="fas fa-envelope"></i> Jaakko.Oja029@gmail.com</a>
      <span>•</span>
      <span>Tampere, Finland</span>
  </div>

  
</div>

<div class="section-header">Technical Projects & Labs</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="title">Active Directory Penetration Testing (OSCP Focus)</span>
        <span class="institution">Independent Training Lab</span>
        <span class="dates">2025</span>
        <p class="description">Building and exploiting a controlled environment aligned with <strong>Offensive Security (OSCP)</strong> standards. Focusing on <strong>manual exploitation techniques</strong>, lateral movement, and privilege escalation to master the core methodology required for certification.</p>
    </div>
    <div class="entry-card">
        <span class="title">SIEM & Threat Detection (Wazuh)</span>
        <span class="institution">Blue Team Operations</span>
        <span class="dates">2025</span>
        <p class="description">Implementing <strong>Wazuh and Suricata</strong> to monitor network traffic and system logs.</p>
    </div>
    <div class="entry-card">
        <span class="title">Thesis: C2 Frameworks (Mythic)</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">2025</span>
        <p class="description">Researched modern adversary tradecraft. Demonstrated <strong>fileless malware execution</strong> on Linux using <code>memfd_create</code> to bypass disk-based detection mechanisms.</p>
    </div>
</div>

<div class="section-header">Professional Experience</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="title">Intern (SDR Project)</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">Summer 2025</span>
        <p class="description">Led a technical research project on <strong>Software-Defined Radio</strong>. Configured Raspberry Pi hardware and utilized tools like SDR++ and SDRAngel to produce comprehensive technical documentation.</p>
    </div>
    <div class="entry-card">
        <span class="title">Shift Supervisor & Field Manager</span>
        <span class="institution">Securitas Oy</span>
        <span class="dates">2018 - 2023</span>
        <p class="description">Managed personnel and security operations, demonstrating leadership and critical problem-solving in high-pressure situations.</p>
    </div>
</div>

<div class="section-header">Education</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="degree">Bachelor of Engineering, ICT</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">2022 - 2027</span>
        <p class="description">Focus: Computer Networks, Cybersecurity, Telecommunications. Thesis: Offensive Security & C2 Frameworks.</p>
    </div>
    <div class="entry-card">
        <span class="degree">Further Vocational Qualification</span>
        <span class="institution">Turun aikuiskoulutuskeskus</span>
        <span class="dates">2018 - 2019</span>
        <p class="description">Safety and Security Operations.</p>
    </div>
</div>

<div class="section-header">Offensive | Defensive Security</div>
<div class="skill-grid">
  <div class="skill-item highlight">Metasploit Framework</div>
  <div class="skill-item highlight">C2 Operations (Mythic)</div>
  <div class="skill-item">Burp Suite (Web App Testing)</div>
  <div class="skill-item">Nmap & Reconnaissance</div>
  <div class="skill-item">HackTheBox (CTF Practice)</div>
  <div class="skill-item">AV/EDR Evasion Techniques</div>
  <div class="skill-item">Privilege Escalation (Win/Lin)</div>
  <div class="skill-item">Netcat & Reverse Shells</div>
  <div class="skill-item">Password Cracking & Hashes</div>
  <div class="skill-item highlight">Wazuh, SecurityOnion, Suricata</div>
</div>

<div class="section-header">Operating Systems & Infrastructure</div>
<div class="skill-grid">
  <div class="skill-item highlight">Windows Administration</div>
  <div class="skill-item highlight">Git & GitHub</div>
  <div class="skill-item highlight">Linux Server Mgmt (Debian)</div>
  <div class="skill-item">Virtualization (VMware/VBox)</div>
  <div class="skill-item">Container Basics (Docker)</div>
  <div class="skill-item">Azure Fundamentals</div>
</div>

<div class="section-header">Networking & Defense</div>
<div class="skill-grid">
  <div class="skill-item highlight">Routing & Switching (L2/L3)</div>
  <div class="skill-item">Wireshark & Protocol Analysis</div>
  <div class="skill-item">TCP/IP, DNS, DHCP, VLANs, VPN</div>
  <div class="skill-item">Network Security & Troubleshoot</div>
  <div class="skill-item">Software-Defined Radio (SDR)</div>
</div>

<div class="section-header">Development & Scripting</div>
<div class="skill-grid">
  <div class="skill-item">C++ / C# Programming</div>
  <div class="skill-item">PowerShell</div>
  <div class="skill-item">Python (Security Scripting)</div>
  <div class="skill-item">SQL & Database Queries</div>
  <div class="skill-item">Bash/Linux Scripting</div>
  <div class="skill-item">VS Code</div>
</div>

<div class="section-header">Certifications</div>
<div class="cert-list">
  <div class="cert-badge">CyberOps Associate</div>
  <div class="cert-badge">Cisco Ethical Hacker</div>
  <div class="cert-badge">CCNA: Switching, Routing & Wireless</div>
  <div class="cert-badge">CCNA: Enterprise Networking & Security</div>
  <div class="cert-badge">Microsoft: Azure Fundamentals</div>
  <div class="cert-badge">Cybersecurity Architect</div>
  <div class="cert-badge">Introduction to Cybersecurity</div>
</div>

<div class="section-header">Languages</div>
<div class="skill-grid">
  <div class="skill-item">Finnish (Native)</div>
  <div class="skill-item">English (Professional Proficiency)</div>
  
</div>

</div>