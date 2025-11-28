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
  --accent-glow: rgba(255, 255, 255, 0.05);
  --bg-dark: #09090b;
  --bg-card: rgba(255, 255, 255, 0.02); /* Used for the new cards */
  --border: rgba(255, 255, 255, 0.08);
  --text: #d4d4d8;
  --text-dim: #52525b;
  --highlight-color: #60a5fa; 
  --date-color: #22c55e; /* A subtle green for dates */
}

/* BASE RESUME STYLES (font-size corrected) */
.resume-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.05rem; /* Corrected base font size */
  line-height: 1.6;
}


/* HEADER AND ANIMATIONS (Kept the same) */
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

/* SECTION HEADER STYLES (Kept the same) */
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

/* --- NEW: CARD GRID STYLES FOR EXPERIENCE/EDUCATION --- */
.card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; /* Space between cards */
    margin-bottom: 3rem;
}

.entry-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    /* Animation for fade in */
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

/* SKILL GRID STYLES (Kept the same, simplified animations) */
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
  background: none !important;
  background-color: transparent !important;
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

/* CERTIFICATION STYLES (Kept the same) */
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

/* MEDIA QUERIES (Updated for new grid) */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr; /* Stack cards vertically on small screens */
  }
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 1.5rem;
  }
  .section-header {
    font-size: 0.95rem;
  }
  .skill-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="resume-page">

<div class="page-header">
  <h1>Jaakko Oja</h1>
  <p class="summary">
    Third-year IT student specializing in telecommunications and networking. Hands-on experience with offensive security, C2 frameworks, and SOC operations. Actively pursuing opportunities in cybersecurity.
  </p>
  <div class="summary">Call-to-Action? Sure thing! You can contact me on <a href="https://www.linkedin.com/in/jaakkooja/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or by <a href="mailto:jaakko.oja029@gmail.com">email!</a></div>
</div>

<div class="section-header">Education</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="degree">Bachelor of Engineering, ICT</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">2022-2027</span>
        <p class="description">Core focus on <strong>Computer Networks, Cybersecurity, and Telecommunications</strong>. Finished Thesis on offensive security and <strong>C2 frameworks</strong>.</p>
    </div>
    <div class="entry-card">
        <span class="degree">Further Vocational Qualification</span>
        <span class="institution">Turun aikuiskoulutuskeskus</span>
        <span class="dates">2018-2019</span>
        <p class="description">Qualification in Safety/Security, establishing a foundation in organizational security protocols.</p>
    </div>
    <div class="entry-card">
        <span class="degree">Matriculation Examination</span>
        <span class="institution">Ylöjärven lukio (Ylöjärvi Upper Secondary School)</span>
        <span class="dates">2011-2014</span>
        <p class="description">Completed upper secondary studies.</p>
    </div>
</div>

<div class="section-header">Relevant Experience</div>
<div class="card-grid">
    <div class="entry-card">
        <span class="title">Summer Intern</span>
        <span class="institution">Tampere University of Applied Sciences</span>
        <span class="dates">Summer 2025</span>
        <p class="description">Completed a practical <strong>Software-Defined Radio (SDR) project</strong>; utilized open-source tools (SDR++, SDRAngel) and delivered <strong>skilled technical documentation</strong>.</p>
    </div>
    <div class="entry-card">
        <span class="title">Shift Supervisor </span>
        <span class="institution">Securitas Oy</span>
        <span class="dates">2021-2023</span>
        <p class="description">Managed personnel and security operations, demonstrating <strong>leadership and critical problem-solving</strong> in high-pressure situations.</p>
    </div>
    <div class="entry-card">
        <span class="title">Field Manager</span>
        <span class="institution">Securitas Oy</span>
        <span class="dates">2021-2023</span>
        <p class="description">Responsible for territory management and client relations; focused on <strong>process optimization</strong> and maintaining high service standards.</p>
    </div>
</div>
<div class="section-header">Offensive | Defensive Security</div>
<div class="skill-grid">
  <div class="skill-item highlight">Metasploit Framework</div>
  <div class="skill-item highlight">C2 Framework Operations (Mythic)</div>
  <div class="skill-item highlight">Burp Suite (Web App Testing)</div>
  <div class="skill-item highlight">Nmap & Network Reconnaissance</div>
  <div class="skill-item highlight">HackTheBox (CTF Practice)</div>
  <div class="skill-item">AV/EDR Evasion Techniques</div>
  <div class="skill-item">Privilege Escalation (Windows & Linux)</div>
  <div class="skill-item">Netcat & Reverse Shell Development</div>
  <div class="skill-item">Password Cracking & Hash Analysis</div>
  <div class="skill-item">SecurityOnion & Kibana</div>
  
</div>

<div class="section-header">Operating Systems & Infrastructure</div>
<div class="skill-grid">
  <div class="skill-item highlight">Windows Administration</div>
  <div class="skill-item highlight">Git & GitHub</div>
  <div class="skill-item highlight">Linux Server Management (Debian/Ubuntu)</div>
  <div class="skill-item">Virtualization (VMware, VirtualBox)</div>
  <div class="skill-item">Container Basics (Docker)</div>
  
</div>

<div class="section-header">Networking & Defense</div>
<div class="skill-grid">
  <div class="skill-item highlight">Routing & Switching (Layer 2 & 3)</div>
  <div class="skill-item highlight">Wireshark & Protocol Analysis</div>
  <div class="skill-item">TCP/IP, DNS, DHCP, VLANs, VPN</div>
  <div class="skill-item">Network Security & Troubleshooting</div>
  <div class="skill-item">Software-Defined Radio (SDR)</div>
</div>

<div class="section-header">Development & Scripting</div>
<div class="skill-grid">
  <div class="skill-item">C++ / C# Programming</div>
  <div class="skill-item">PowerShell</div>
  <div class="skill-item">Python (Scripting for Security)</div>
  <div class="skill-item highlight">SQL & Database Queries</div>
  <div class="skill-item">Bash/Linux Scripting</div>
  <div class="skill-item">VS Code</div>
</div>

<div class="section-header">Certifications</div>
<div class="cert-list">
  <div class="cert-badge">Cisco Ethical Hacker</div>
  <div class="cert-badge">CCNA: Switching, Routing & Wireless Essentials</div>
  <div class="cert-badge">CCNA: Enterprise Networking, Security & Automation</div>
  <div class="cert-badge">Azure Fundamentals</div>
  <div class="cert-badge">ISC2 Candidate</div>
  <div class="cert-badge">Cisco: Introduction to Cybersecurity</div>
</div>

</div>