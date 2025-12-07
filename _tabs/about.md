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
  flex-shrink: 0;
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  margin: 0 0 0.25rem;
}

.hero-text .tagline {
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent-dim);
  margin-bottom: 1rem;
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
  font-size: 0.85rem;
  color: var(--green-dim);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>

<div class="hacker-page">

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-text">
    <p>
      I’m a third-year IT student at Tampere University of Applied Sciences, focusing on telecommunications, computer networks, and cybersecurity.
      <br><br>
      I’m highly motivated by roles related to:
    </p>
    <ul>
      <li>Red Teaming</li>
      <li>Ethical Hacking</li>
      <li>SOC Operations</li>
      <li>Network Engineering</li>
    </ul>
    <p>
      I develop my cybersecurity skills through Cisco cources and hands-on hacking exercises in TAMK courses. I’m eager to put these skills into practice through real-world projects and challenges.  
      To stay sharp, I actively follow the cybersecurity field, attend <a href="https://ctf.hackthebox.com/user/profile/649858">CTF-challenges</a> and work on personal projects, all of which can be found on my <a href="https://github.com/JohnnyMaelstrm">GitHub profile</a> or right here in my portfolio (they’re basically the same thing 😄).
      <br><br>
      My current point of pride is my finished <strong>thesis</strong>, which explores cybersecurity from an offensive perspective. The topic focuses on <strong>C2 frameworks</strong>, allowing me to combine my key interests while diving deep into a fascinating area of research.
      I enjoy working on projects and in teams where I can apply analytical thinking, creativity, and problem-solving.
      <br><br>  
      I’m also proud of my several <strong>upcoming projects</strong>! They truly reflect what I can do and what I’m eager to learn next.
    </p>
    <p>
      After all, <em>idle hands are the devil&rsquo;s workshop.</em> 😉
    </p>
  </div>
</div>


  <!-- Tessu Figure -->
  <figure style="text-align:center;">
    <img src="assets/Other/tessu.jpeg" alt="Tessu" width="250">
    <figcaption><sub>My pride and joy: a sphynx cat named Tessu!</sub></figcaption>
  </figure>


  <!-- Outside of tech -->
  <div class="section-header">Outside of tech</div>
  <p>
    When I’m not studying or hacking away at a new project, I like to stay active: specimenfishing, hitting a gym, and long walks in a forest are my way to recharge.  
    I’m also into gaming, sci-fi, and horrormovies.  
    <br><br>
    I believe curiosity is one of the best skills you can have in tech and I try to live by that every day.
  </p>

  <!-- Fishing Figure -->
  <figure style="text-align:center;">
    <img src="assets/Other/kala1.jpeg" alt="Commoncarp" width="250">
    <figcaption><sub>Biggest success in my specimenfishing, 17,6kg commoncarp from the Finnish lake(2025).</sub></figcaption>
  </figure>

  <p>
    If you’d like to talk about cybersecurity, my projects, or <strong>INTERNSHIP opportunities</strong>, feel free to reach out on Linkedin!
  </p>

</div>