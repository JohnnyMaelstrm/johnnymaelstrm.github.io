---
icon: fas fa-briefcase
order: 5
---

<style>
:root {
  --bg: #1e1f26;
  --card: #2a2c37;
  --border: #3a3c47;
  --accent: #7aa2f7;
  --text: #e9e9e9;
  --muted: #b5b5b5;
  --radius-lg: 16px;
  --radius-sm: 12px;
  --shadow: 0 6px 20px rgba(0,0,0,0.5);
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.resume-wrapper {
  padding: 25px;
  font-family: var(--font);
  color: var(--text);
  max-width: 900px;
  margin: auto;
}

/* HEADER */
.header-box {
  background: var(--card);
  padding: 40px 30px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
  margin-bottom: 40px;
  box-shadow: var(--shadow);
}

.header-box h1 {
  font-size: 2.6em;
  margin: 0;
  color: var(--accent);
  letter-spacing: 1px;
  font-weight: 700;
}

.header-box p {
  margin-top: 10px;
  color: var(--muted);
  font-size: 1.1em;
}

/* SKILL SECTIONS */
.skill-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 25px 30px;
  margin-bottom: 25px;
  box-shadow: var(--shadow);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.skill-card h3 {
  font-size: 1.55em;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.5px;
  color: var(--accent);
}

/* Lists */
.skill-card ul {
  padding-left: 22px;
  margin: 0;
}

.skill-card li {
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 1.05em;
}

/* Responsive */
@media (max-width: 700px) {
  .header-box h1 {
    font-size: 2em;
  }
  .skill-card h3 {
    font-size: 1.35em;
  }
}
</style>

<div class="resume-wrapper">

  <div class="header-box">
    <h1>Jaakko Oja – IT & Cybersecurity Skills</h1>
    <p>Core competencies in IT, Red Teaming, Networking, and Security Operations</p>
  </div>

  <!-- OFFENSIVE SECURITY -->
  <div class="skill-card">
    <h3>Offensive Security</h3>
    <ul>
      <li>Nmap & Network Reconnaissance</li>
      <li>AV/EDR Evasion Techniques</li>
      <li>Metasploit Framework</li>
      <li>Burp Suite (Web Application Testing)</li>
      <li>C2 Framework Operations</li>
      <li>Netcat & Reverse Shell Development</li>
      <li>Privilege Escalation (Windows & Linux)</li>
      <li>Password Cracking & Hash Analysis</li>
      <li>Social Engineering Fundamentals</li>
    </ul>
  </div>

  <!-- SCRIPTING -->
  <div class="skill-card">
    <h3>Scripting & Development</h3>
    <ul>
      <li>C++ / C# Programming</li>
      <li>PowerShell Automation</li>
      <li>Python (Beginner – expanding)</li>
      <li>Linux Shell Scripting</li>
    </ul>
  </div>

  <!-- NETWORKING -->
  <div class="skill-card">
    <h3>Networking</h3>
    <ul>
      <li>Routing & Switching (Layer 2 & 3)</li>
      <li>Wireless Network Implementation</li>
      <li>Network Architecture & Design</li>
      <li>TCP/IP, DNS, DHCP, VLANs, VPN</li>
      <li>Network Troubleshooting & Diagnostics</li>
    </ul>
  </div>

  <!-- TOOLS -->
  <div class="skill-card">
    <h3>Tools & Platforms</h3>
    <ul>
      <li>Git & GitHub</li>
      <li>Visual Studio Code</li>
      <li>Canva (Documentation/Design)</li>
      <li>HackTheBox / Cyber Ranges</li>
    </ul>
  </div>

  <!-- OS -->
  <div class="skill-card">
    <h3>Operating Systems</h3>
    <ul>
      <li>Windows Administration</li>
      <li>Linux Server Management</li>
      <li>Virtualization (VMware, VirtualBox)</li>
      <li>Containerization Basics (Docker)</li>
    </ul>
  </div>

  <!-- DATABASES -->
  <div class="skill-card">
    <h3>Databases</h3>
    <ul>
      <li>MySQL</li>
      <li>SQL Querying & Management</li>
      <li>Basic Data Analysis Workflows</li>
    </ul>
  </div>

  <!-- COLLABORATION -->
  <div class="skill-card">
    <h3>Collaboration & Workflow</h3>
    <ul>
      <li>Technical Documentation</li>
      <li>Analytical Problem-Solving</li>
      <li>Critical Thinking & Investigation</li>
      <li>Team Collaboration & Communication</li>
    </ul>
  </div>

</div>
