---
icon: fas fa-briefcase
order: 5
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
}

.resume-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.9rem;
  line-height: 1.6;
}

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

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2.5rem 0 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-dim);
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

.section-header:nth-of-type(2) { animation-delay: 0.1s; }
.section-header:nth-of-type(4) { animation-delay: 0.2s; }
.section-header:nth-of-type(6) { animation-delay: 0.3s; }
.section-header:nth-of-type(8) { animation-delay: 0.4s; }
.section-header:nth-of-type(10) { animation-delay: 0.5s; }

.section-header::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border), transparent);
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 2rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.6s ease-out forwards;
}

.skill-grid:nth-of-type(3) { animation-delay: 0.1s; }
.skill-grid:nth-of-type(5) { animation-delay: 0.2s; }
.skill-grid:nth-of-type(7) { animation-delay: 0.3s; }
.skill-grid:nth-of-type(9) { animation-delay: 0.4s; }
.skill-grid:nth-of-type(11) { animation-delay: 0.5s; }

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
  color: var(--accent);
  font-weight: 500;
  background: none !important;
  background-color: transparent !important;
}

.cert-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 0.6s ease-out 0.5s forwards;
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
  border-color: var(--accent-dim);
  transform: translateY(-2px);
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
</div>

<div class="section-header">Offensive Security</div>
<div class="skill-grid">
  <div class="skill-item highlight">Metasploit Framework</div>
  <div class="skill-item highlight">C2 Framework Operations</div>
  <div class="skill-item highlight">Burp Suite (Web App Testing)</div>
  <div class="skill-item highlight">Nmap & Network Reconnaissance</div>
  <div class="skill-item">AV/EDR Evasion Techniques</div>
  <div class="skill-item">Privilege Escalation (Windows & Linux)</div>
  <div class="skill-item">Netcat & Reverse Shell Development</div>
  <div class="skill-item">Password Cracking & Hash Analysis</div>
  <div class="skill-item">Social Engineering Fundamentals</div>
</div>

<div class="section-header">Operating Systems & Infrastructure</div>
<div class="skill-grid">
  <div class="skill-item highlight">Windows Administration</div>
  <div class="skill-item highlight">Linux Server Management</div>
  <div class="skill-item">Virtualization (VMware, VirtualBox)</div>
  <div class="skill-item">Docker Containerization</div>
</div>

<div class="section-header">Networking</div>
<div class="skill-grid">
  <div class="skill-item">Routing & Switching (Layer 2 & 3)</div>
  <div class="skill-item">TCP/IP, DNS, DHCP, VLANs, VPN</div>
  <div class="skill-item">Wireless Network Implementation</div>
  <div class="skill-item">Network Architecture & Design</div>
  <div class="skill-item">Software-Defined Radio (SDR)</div>
  <div class="skill-item">Network Troubleshooting & Diagnostics</div>
</div>

<div class="section-header">Development & Scripting</div>
<div class="skill-grid">
  <div class="skill-item">C++ / C# Programming</div>
  <div class="skill-item">PowerShell</div>
  <div class="skill-item">Python</div>
  <div class="skill-item">Linux</div>
  <div class="skill-item">Git & GitHub</div>
  <div class="skill-item">MySQL & SQL</div>
</div>

<div class="section-header">Tools & Platforms</div>
<div class="skill-grid">
  <div class="skill-item">Visual Studio Code</div>
  <div class="skill-item">HackTheBox</div>
  <div class="skill-item">Technical Documentation</div>
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