---
layout: post
title: "CaribouLite SDR Research"
date: 2025-09-10
categories: [Projects, SDR]
tags: [sdr, raspberry-pi, internship, project]
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --accent: #e4e4e7;
  --accent-dim: #a1a1aa;
  --bg-dark: #09090b;
  --border: rgba(255, 255, 255, 0.08);
  --text: #d4d4d8;
  --text-dim: #cfcfcf;
}

.project-page {
  font-family: 'JetBrains Mono', monospace;
  color: var(--text);
  max-width: 900px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.6;
}

.project-intro {
  font-size: 1rem;
  color: var(--text-dim);
  margin-bottom: 2rem;
  line-height: 1.7;
  opacity: 0;
  animation: fadeIn 1s ease-in 0.3s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.pdf-container {
  margin: 2rem 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 1s ease-in 0.5s forwards;
}

.pdf-container iframe {
  width: 100%;
  height: 700px;
  border: none;
}

.download-section {
  text-align: center;
  margin: 2rem 0;
  padding: 1.5rem;
  border-top: 1px solid var(--border);
  opacity: 0;
  animation: fadeIn 1s ease-in 0.7s forwards;
}

.download-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.download-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--accent-dim);
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .pdf-container iframe {
    height: 500px;
  }
}
</style>

<div class="project-page">

<p class="project-intro">
Summer 2025 internship project at Tampere University of Applied Sciences (TAMK). An exploration into Software-Defined Radio (SDR) technology using CaribouLite and Raspberry Pi 4.
</p>

<div class="pdf-container">
  <iframe src="{{ '/assets/docs/Project.pdf' | relative_url }}" loading="lazy"></iframe>
</div>

<div class="download-section">
  <a href="{{ '/assets/docs/Project.pdf' | relative_url }}" class="download-button" download>
    📥 Download PDF
  </a>
</div>

</div>