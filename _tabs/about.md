---
icon: fas fa-info-circle
order: 4
credits_done: 173  
credits_total: 240 
---
<link rel="stylesheet" href="{{ '/assets/css/about.css' | relative_url }}">
<div class="hacker-page">

  <div class="hero-section">
    <img src="/assets/Other/shared image-modified.png" alt="Profile Picture" class="profile-pic">
    
    <div class="hero-text">
      <h1>Jaakko Oja</h1> <div class="status-line">
        <div class="status-dot"></div>
        <span> Ready for Challenges </span>
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
  
{% assign percent = page.credits_done | times: 100.0 | divided_by: page.credits_total | round: 1 %}

<div class="progress-wrapper">
  <div class="progress-info">
    <span>Degree Progress (TAMK)</span>
    <span>{{ page.credits_done }} / {{ page.credits_total }} ECTS ({{ percent }}%)</span>
  </div>
  <div class="progress-bg">
    <div class="progress-bar" style="--target-width: {{ percent }}%;"></div>
  </div>
</div>