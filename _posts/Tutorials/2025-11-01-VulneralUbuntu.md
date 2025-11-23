---
layout: post
date: 2025-11-01 08:27:00 +0300
title: "Metasploitable2: Hands-On Security Lab"
categories: [Projects, Metasploitable2]
tags: [metasploitable, ubuntu, labs, ethical hacking, hands-on, exploit]
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --bg-dark: #09090b;
  --border: rgba(110, 16, 16, 0.08);
  --text: #d4d4d8;
  --text-dim: #cfcfcf;
}

.project-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.8rem;
  line-height: 1.6;
}

.project-page h3 {
  color: var(--accent) !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  margin: 2rem 0 1rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  border-bottom: 1px solid var(--border) !important;
  padding-bottom: 0.5rem !important;
}

.project-intro {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.highlight {
  background: rgba(182, 133, 78, 0.15) !important;
  padding: 0.1rem 0.3rem !important;
  border-radius: 3px !important;
  color: #b6854e !important;
  font-weight: 500 !important;
}

.requirements-box {
  background: rgba(182, 133, 78, 0.1);
  border: 1px solid rgba(182, 133, 78, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.requirements-box h2 {
  color: #b6854e;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.requirements-box ul {
  color: var(--text-dim);
  line-height: 1.8;
}

.requirements-box li strong {
  color: #b6854e;
}

@media (max-width: 600px) {
  .project-page {
    font-size: 0.75rem;
  }
}
</style>

# Lab-project on Metasploitable2

<div class="project-page">

<p class="project-intro">
Training and keeping the essential skills is very essential in the field of cybersecurity. What better way to do that than by practicing in a controlled, hands-on environment like <span class="highlight">Metasploitable 2</span>? 
</p>

<p>
<span class="highlight">Metasploitable2</span> is vulnerable Linux virtual machine created by Rapid7 for learning and practicing ethical hacking or penetration testing skills. The system includes many intentionally outdated and misconfigured services such as web applications, ssh configurations and insecure databases.
</p>

<p>
This vulnerable virtual machine provides a safe platform to explore real-world attack techniques, test security tools, and strengthen defensive strategies — all without risking production systems. By working with this kind of environment, cybersecurity professionals and students can continuously develop the analytical, technical, and problem-solving skills needed to stay ahead of evolving threats.
</p>

<p>
I highly recommend these kind of vulnerable virtual machines for safe learning and practicing the skills needed <em>or</em> learned in cybersecurity.
</p>

<div class="requirements-box">
<h2>Required</h2>
<ul>
<li>Two virtual machines: One <strong>Metasploitable2</strong> and one <strong>Kali Linux</strong>.</li>
<li>Network mode configuration: <strong>NEVER</strong> allow Metasploitable to access the Internet. You can keep that in the private/isolated network so it can only talk to your attacker VM(Kali in this case).</li>
</ul>
</div>

<h2>Tutorials</h2>

<h3>Nmap</h3>

</div>

<img src="/assets/VB/nmap-service.png" alt="Nmap Service Scan" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<p>
I started by running <span class="highlight">Nmap</span> using a service-detection scan to enumerate reachable ports and identify running services. The screenshot above displays several open ports along with the corresponding service names and versions. The service-info section at the bottom summarizes hosts discovered and provides extra metadata useful for follow-up enumeration.
</p>

<h3>FTP exploitation</h3>

</div>

<img src="/assets/VB/ftp1.png" alt="FTP Exploit 1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<p>
First exploit was the FTP and the <span class="highlight">vsftpd 2.3.4</span>. I used the Metasploit tool for this.
</p>

</div>

<img src="/assets/VB/ftp2.png" alt="FTP Exploit 2" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">
<img src="/assets/VB/ftp3.png" alt="FTP Exploit 3" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<p>
Using the appropriate <span class="highlight">Metasploit exploit</span>, I gained root access to the vulnerable VM. The interactive shell shown above contains the proof of compromise.
</p>

<h3>Telnet</h3>

</div>

<img src="/assets/VB/telnet1.png" alt="Telnet 1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">
<img src="/assets/VB/telnet2.png" alt="Telnet 2" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<p>
For the telnet and ssh exploits, i created two files containing usernames and passwords. Using the right <span class="highlight">Metasploit exploit</span> i was able to perform <span class="highlight">brute-force attacks</span> both telnet and ssh. After that it was basically using the cracked credentials for the root access.
</p>

<h3>SSH (Secure Shell)</h3>

</div>

<img src="/assets/VB/ssh1.png" alt="SSH 1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">
<img src="/assets/VB/ssh2.png" alt="SSH 2" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<h3>VNC (Virtual Network Computing)</h3>

</div>

<img src="/assets/VB/vnc1.png" alt="VNC 1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">
<img src="/assets/VB/vnc2.png" alt="VNC 2" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">
<img src="/assets/VB/vnc3.png" alt="VNC 3" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0;">

<div class="project-page">

<p>
Simple vnc-exploit using Metasploit!
</p>

<p>
I will upload other exploits when i have the time! Learning goal for this lab-project was to use <span class="highlight">Metasploit</span> and perform different attacks and exploits in closed, safe enviroment.
</p>

<h3>References:</h3>
<ul>
<li><a href="https://docs.rapid7.com/metasploit/metasploitable-2/" target="_blank" style="color: #b6854e;">https://docs.rapid7.com/metasploit/metasploitable-2/</a></li>
<li><a href="https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/" target="_blank" style="color: #b6854e;">https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/</a></li>
</ul>

</div>