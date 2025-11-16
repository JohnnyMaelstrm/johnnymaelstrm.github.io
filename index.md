---
layout: page
title: Jaakko Oja | Red Team Apprentice | Network Security Enthusiast
permalink: /
---

<style>
.terminal-container {
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 255, 0, 0.1);
  overflow: hidden;
  margin: 2rem 0;
}

.terminal-header {
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.terminal-buttons {
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27ca3f; }

.terminal-title {
  color: #888;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: auto;
}

#terminal {
  background: #0a0a0a;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  padding: 1.5rem;
  min-height: 100px;
  line-height: 1.5;
}

/* FIXED — continuing styles normally */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #00ff00;
}

.project-tag {
  display: inline-block;
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem 0 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.certification-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.certification-item:hover {
  transform: scale(1.05);
}

.certification-item img {
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.highlight-box {
  background: var(--card-bg);
  border-left: 4px solid #0088ff;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.nav-button {
  display: inline-block;
  background: transparent;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(0, 255, 0, 0.1);
  text-decoration: none;
}

.blinking-cursor {
  animation: blink 1s infinite;
  color: #00ff00;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .certifications-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  
  .nav-buttons {
    flex-direction: column;
  }
}
</style>

<div class="terminal-container">
  <div class="terminal-header">
    <div class="terminal-buttons">
      <div class="terminal-button close"></div>
      <div class="terminal-button minimize"></div>
      <div class="terminal-button maximize"></div>
    </div>
    <div class="terminal-title">portfolio_terminal.exe</div>
  </div>

  <section id="terminal">
    <div id="output">> initializing portfolio...<br/></div>
  </section>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => { 
  const lines = [ 
    "> connecting to portfolio...", 
    "> verifying credentials...", 
    "> access granted ✅",
    "> Welcome friend!"
  ];

  let i = 0;
  const output = document.getElementById("output");

  function typeLine() { 
    if (i < lines.length) { 
      output.innerHTML += lines[i] + "<br/>"; 
      i++; 
      setTimeout(typeLine, 800); 
    } else {
      output.innerHTML += '<span class="blinking-cursor">_</span>';
    }
  } 

  typeLine();
}); 
</script>

## 👋 Welcome to My Cybersecurity Portfolio

I'm **Jaakko Oja**, a third-year IT student at **Tampere University of Applied Sciences** specializing in telecommunications, computer networks, and cybersecurity.

This website serves as my portfolio, where I share my projects and learning experiences in the field of ICT, with a focus on cybersecurity.

---

## 📖 Thesis

### [Command & Control Frameworks](/mythic/)
My thesis research exploring modern C2 frameworks in red team operations.

---

## 🎯 Core Interests & Specializations

<div class="project-grid">
  <div class="project-card">
    <h3>🔴 Red Teaming</h3>
    <p>All things related to red teaming</p>
    <span class="project-tag">Offensive Security</span>
  </div>
  
  <div class="project-card">
    <h3>🛡️ Ethical Hacking</h3>
    <p>Authorized security assessments and vulnerability research</p>
    <span class="project-tag">Penetration Testing</span>
  </div>
  
  <div class="project-card">
    <h3>🔍 SOC Operations</h3>
    <p>Security monitoring, incident response, and threat intelligence</p>
    <span class="project-tag">Defensive Security</span>
  </div>
  
  <div class="project-card">
    <h3>📡 Networking & SDR</h3>
    <p>Network security, protocols, and software-defined radio</p>
    <span class="project-tag">Infrastructure</span>
  </div>
</div>

---

## 🚀 Upcoming Projects

<div class="project-grid">
  <div class="project-card">
    <h3>EvilGinx3</h3>
    <p>Exploring advanced phishing techniques and MFA bypass methods through reverse proxy manipulation</p>
    <span class="project-tag">Phishing</span>
    <span class="project-tag">MFA Bypass</span>
    <span class="project-tag">Research</span>
  </div>
  
  <div class="project-card">
    <h3>GOAD Lab</h3>
    <p>Game Of Active Directory - Planned for Summer 2026 as an intern project at Tampere University of Applied Sciences</p>
    <span class="project-tag">Active Directory</span>
    <span class="project-tag">Red Team</span>
    <span class="project-tag">Intern Project</span>
  </div>
</div>

---

## 🌟 Featured Project: CaribouLite & Raspberry Pi 4

<div class="highlight-box">
  <h3>Summer 2025 Intern Project</h3>
  <p>I contributed to this project at Tampere University of Applied Sciences. Really an eye-opening exploration into the world of Software-Defined Radio (SDR).</p>
  
  <div style="margin: 1.5rem 0;">
    <iframe src="{{ '/assets/docs/Project.pdf' | relative_url }}" width="100%" height="500px" style="border: 1px solid #333; border-radius: 4px;"></iframe>
  </div>
  
  <a href="{{ '/assets/docs/Project.pdf' | relative_url }}" class="nav-button" download>
    📥 Download Project PDF
  </a>
</div>

---

## 🏅 Certifications

<div class="certifications-grid">
  <div class="certification-item">
    <a href="https://www.credly.com/badges/d029163a-b59e-4365-a18f-705467e7e885/public_url" target="_blank">
      <img src="https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png" 
           alt="Introduction to Cybersecurity" 
           loading="lazy" />
    </a>
    <div class="certification-name">Introduction to Cybersecurity</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/fc86f74b-c531-45a6-8427-c29a8678e753/public_url" target="_blank">
      <img src="https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png" 
           alt="Ethical Hacker" 
           loading="lazy" />
    </a>
    <div class="certification-name">Ethical Hacker</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/27a5850d-bcf2-4937-9eb2-c5dbaef30fe1/public_url" target="_blank">
      <img src="https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png" 
           alt="CCNA SRWE" 
           loading="lazy" />
    </a>
    <div class="certification-name">CCNA SRWE</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/624b96dd-cfe1-4605-a6a3-0b544c928757/public_url" target="_blank">
      <img src="https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png" 
           alt="CCNA ENSA: Enterprise Networking, Security & Automation" 
           loading="lazy" />
    </a>
    <div class="certification-name">CCNA ENSA: Enterprise Networking, Security & Automation</div>
  </div>

  <div class="certification-item">
    <a href="https://openbadgefactory.com/obv3/credentials/e6a1584fac59c20eaa84f82a1fab045dc51bf7e1" target="_blank">
      <img src="https://openbadgefactory.com/v1/badge/_/RR37SAa5V4a9XY.png?event=T5ETSZaNXGXaDGT" 
           alt="Azure Fundamentals" 
           loading="lazy" />
    </a>
    <div class="certification-name">Azure Fundamentals</div>
  </div>

  <div class="certification-item">
    <a href="https://www.credly.com/badges/9f5d0c10-1f34-48b0-b352-b413a9ad1ada/public_url" target="_blank">
      <img src="https://images.credly.com/size/220x220/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png" 
           alt="ISC2 Candidate" 
           loading="lazy" />
    </a>
    <div class="certification-name">ISC2 Candidate</div>
  </div>
</div>

---

## 🔗 Connect & Explore

<div class="nav-buttons">
  <a href="/about/" class="nav-button">📖 About Me</a>
  <a href="/categories/" class="nav-button">📂 Categories</a>
  <a href="https://github.com/JohnnyMaelstrm" target="_blank" class="nav-button">💻 GitHub</a>
  <a href="https://www.linkedin.com/in/jaakkooja" target="_blank" class="nav-button">💼 LinkedIn</a>
</div>