---
layout: page
title: "Command & Control Frameworks"
permalink: /mythic/
icon: fas fa-file-pdf
order: 1
categories: [Red teaming, C2]
tags: [red teaming, c2, hacking, pentesting, malware]
---

<link rel="stylesheet" href="{{ '/assets/css/mythic.css' | relative_url }}">

<div class="hacker-page">

<p align="center">
  <img src="{{ '/assets/RedTeam/Mythic.png' | relative_url }}" 
       alt="Mythic Screenshot" 
       style="max-width:90%; height:auto; border:none;" />
</p>

<p align="center"><em>Mythic C2 Framework – login page</em></p>

<h1>Thesis</h1>

<p>As part of my Bachelor's degree, I am required to complete a thesis — and what could be a better topic than one related to cybersecurity and red teaming, two of my biggest passions!</p>

<p>I chose Mythic C2, a modular and extensible command-and-control framework, as the focus of my thesis. I initially considered using Havoc for my thesis, but ultimately decided to focus on Mythic instead.</p>

<p>Official Mythic C2 documentation: <a href="https://docs.mythic-c2.net/home">Mythic C2 Docs</a></p>

<div class="highlight-box">
  <div style="margin: 1.5rem 0;">
    <iframe 
      src="{{ '/assets/Thesis/Opinnaytetyo_Oja_Jaakko_2025.pdf' | relative_url }}" 
      style="width:100%; height:80vh; border:1px solid #333; border-radius:4px;">
    </iframe>
  </div>
  <p>My completed thesis in Finnish. I perhaps try to translate it to English in the future.</p>
</div>

<h2>Updates</h2>

<p><strong>14.09.2025</strong> —— First update and introduction to my thesis</p>

<p><strong>18.09.2025</strong> —— Second update</p>

<p><img src="assets/Thesis/image_34.png" alt="Book Image" /></p>

<p>One of the attack simulations of my thesis project, I successfully achieved what is known as fileless execution, as evidenced in the attached image. In short, this technique involves executing malicious code directly from memory without writing any files to disk. Practically, the attack payload was loaded, unpacked, and executed on the target system using Linux’s memfd_create function, which enables fully fileless operation—leaving no persistent traces on the system. This advanced attack method poses a significant challenge to traditional security mechanisms.</p>

<p><strong>21.09.2025</strong> —— Third update</p>

<p align="center">
  <img src="{{ '/assets/Thesis/image_33.png' | relative_url }}" alt="Book Image" style="max-width:90%; height:auto;" />
</p>

<p><a href="https://github.com/hackerschoice/bincrypter" target="_blank">Bincrypter</a></p>

<p>I used Bincrypter in my thesis. The screenshot shows how Bincrypter compresses and encrypts the file "supersecret.bin"! Highly useful tool for red-teamers.</p>

<p><strong>15.10.2025</strong> —— Fourth update</p>


<p>Finishing touches for the thesis work. We have had course exams lately so the thesis work have slowed down a bit.</p>

<p><strong>20.11.2025</strong> —— FINAL UPDATE</p>

<p>I have submitted my thesis for evaluation. I discussed it with my supervisor, and they recommended a grade of 5, the highest possible! This was a really interesting project for me and it has further increased my desire to learn more. Red teaming is truly my passion within cybersecurity.</p>

</div>

<style>
/* --- Font & Global --- */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

.hacker-page, .hacker-page * {
  font-family: 'JetBrains Mono', monospace !important;
  color: #d4d4d8;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* --- Paragraphs & Links --- */
.hacker-page p {
  margin: 1rem 0;
}

.hacker-page a {
  color: #e4e4e7;
  text-decoration: underline;
}

.hacker-page a:hover {
  color: #22c55e;
}

/* --- Headings --- */
.hacker-page h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: #e4e4e7;
}

.hacker-page h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  color: #e4e4e7;
}

.hacker-page h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.2rem 0 0.8rem;
  color: #e4e4e7;
}

/* --- Images & iframe --- */
.hacker-page img,
.hacker-page iframe {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  border-radius: 4px;
}

/* --- Highlight box --- */
.hacker-page .highlight-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem;
  border-radius: 6px;
  margin: 2rem 0;
}

/* --- Updates --- */
.hacker-page strong {
  font-weight: 600;
}

/* --- Responsive --- */
@media (max-width: 600px) {
  .hacker-page h1 { font-size: 1.5rem; }
  .hacker-page h2 { font-size: 1.2rem; }
  .hacker-page h3 { font-size: 1rem; }
}
</style>
