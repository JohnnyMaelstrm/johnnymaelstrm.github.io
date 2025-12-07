---
icon: fas fa-info-circle
order: 4
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

.hacker-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.6;
}



/* Hero Section */
.hero-section {
  display: flex;
  align-items: flex-start; /* Aligns text to top of image */
  gap: 2.5rem;
  padding: 3rem 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid var(--border);
  box-shadow: 0 0 30px var(--accent-glow);
  object-fit: cover;
  flex-shrink: 0;
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 0.5rem;
}

.hero-text .bio {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text);
}

/* Status Dot Animation */
.status-line {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--green-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--green-dim);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--green-dim);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

/* Focus List styling */
.tech-focus-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
  padding-left: 1.2rem;
}

.tech-focus-list li {
  color: var(--accent);
}

/* Gallery for personal photos */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.gallery-item img {
  border-radius: 8px;
  border: 1px solid var(--border);
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;
}

.gallery-item img:hover {
  transform: scale(1.02);
  border-color: var(--accent-dim);
}

figcaption sub {
  color: var(--text-dim);
  font-size: 0.8rem;
}

.section-header {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-left: 3px solid var(--green-dim);
  padding-left: 1rem;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .tech-focus-list {
    text-align: left;
    display: block; /* Stack list items on very small screens */
  }

  .gallery-grid {
    grid-template-columns: 1fr; /* Stack images vertically on mobile */
  }
}
.arsenal-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.tool-badge {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-dim);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  cursor: default;
}

.tool-badge:hover {
  border-color: var(--green-dim);
  color: var(--accent);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.1);
  transform: translateY(-2px);
}

/* --- TERMINAL FOOTER STYLES --- */
.terminal-card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 6px;
  padding: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  margin-top: 3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  font-size: 0.85rem;
}

.terminal-header {
  display: flex;
  gap: 6px;
  margin-bottom: 1rem;
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ef4444; }
.yellow { background: #eab308; }
.green { background: #22c55e; }

.prompt { color: var(--green-dim); margin-right: 8px; }
.cmd { color: var(--accent); }
.cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  background: var(--text-dim);
  animation: blink 1s step-end infinite;
  vertical-align: middle;
}
@keyframes blink { 50% { opacity: 0; } }

/* Glitch Effect for the Name */
.hero-text h1 {
  position: relative;
  display: inline-block;
}

.hero-text h1:hover {
  animation: glitch-skew 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: var(--green-dim); /* Changes color on hover */
  text-shadow: 2px 0 var(--accent-dim), -2px 0 #ff00c1;
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(1deg); }
  100% { transform: skew(0deg); }
}

</style>

<div class="hacker-page">

  <div class="hero-section">
    <img src="/assets/Other/shared image-modified.png" alt="Profile Picture" class="profile-pic">
    
    <div class="hero-text">
      <h1>Jaakko Oja</h1> <div class="status-line">
        <div class="status-dot"></div>
        <span>Ready for Challenges</span>
      </div>

      <div class="bio">
        <p>
          I’m a third-year IT student at Tampere University of Applied Sciences (TAMK), specializing in telecommunications, computer networks, and cybersecurity.
        </p>
        
        <p>I am highly motivated by roles related to:</p>
        <ul class="tech-focus-list">
          <li>Red Teaming</li>
          <li>Ethical Hacking</li>
          <li>SOC Operations</li>
          <li>Network Engineering</li>
        </ul>

        <p>
          I sharpen my skills through Cisco courses and hands-on hacking exercises. I’m eager to put this knowledge into practice through real-world challenges. To stay sharp, I actively follow industry news, solve <a href="https://ctf.hackthebox.com/user/profile/649858">CTF challenges</a>, and work on personal projects available on <a href="https://github.com/JohnnyMaelstrm">GitHub</a>.
        </p>

        <p>
          My current point of pride is my finished <a href="/mythic/">Thesis</a>, which explores cybersecurity from an offensive perspective. It focuses on <strong>C2 frameworks</strong>, combining my key interests with deep research.
        </p>
        <p>
          <em>"Idle hands are the devil&rsquo;s workshop."</em> 😉
        </p>
      </div>
    </div>
  </div>

  <div class="section-header">Outside of the Terminal</div>
  <p>
    When I’m not studying or hacking away at a new project, I like to stay active. Specimen fishing, hitting the gym, and long forest walks are my way to recharge. I’m also into gaming, sci-fi, and horror movies.
    <br><br>
    I believe curiosity is the most vital skill in tech, and I try to live by that every day.
  </p>

  <div class="gallery-grid">
    <figure class="gallery-item">
      <img src="assets/Other/tessu.jpeg" alt="Tessu the Sphynx Cat" width="300">
      <figcaption><sub>My pride and joy: Tessu!</sub></figcaption>
    </figure>

    <figure class="gallery-item">
      <img src="assets/Other/kala1.jpeg" alt="Common Carp Catch" width="300">
      <figcaption><sub>Personal Best: 17.6kg Common Carp, Finland (2025).</sub></figcaption>
    </figure>
  </div>

  <div class="terminal-card">
    <div class="terminal-header">
      <div class="dot red"></div>
      <div class="dot yellow"></div>
      <div class="dot green"></div>
    </div>
    
    <div>
      <span class="prompt">guest@jaakko:~$</span>
      <span class="cmd">./contact_me.sh --subject="Internship"</span>
    </div>
    <br>
    <div style="color: var(--text-dim);">
      > Initializing connection...<br>
      > Status: <span style="color: var(--green-dim);">Ready for Challenges</span><br>
      > Interest: Cybersecurity, C2 Frameworks, Internships<br>
      > Contact: <a href="https://www.linkedin.com/in/jaakkooja/" style="color: var(--accent); text-decoration: underline;">LinkedIn Profile</a><span class="cursor"></span>
    </div>
  </div>

</div>