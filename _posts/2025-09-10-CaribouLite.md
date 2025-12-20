---
layout: post
title: "Software-Defined Radio (SDR) with CaribouLite"
date: 2025-09-10
categories: [Projects, SDR]
permalink: /CaribouLite/
tags: [sdr, raspberry-pi, linux, signal-processing, rf-engineering]
author: Jaakko Oja
---

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;600&display=swap');

:root {
  --bg-page: #09090b;
  --bg-surface: #18181b;
  --bg-surface-hover: #27272a;
  --border-subtle: #27272a;
  --border-focus: #3f3f46;
  --text-primary: #f4f4f5;
  --text-secondary: #b4b4b8;
  --accent-primary: #e4e4e7; 
  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-info: #3b82f6;
  --lift-distance: -2px;
  --transition-speed: 0.2s;
  --border-radius: 8px;
}

.portfolio-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-page);
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent-primary);
  letter-spacing: -0.02em;
  font-weight: 600;
}

.project-header {
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 2rem;
  margin-bottom: 3rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-family: 'JetBrains Mono', monospace;
  color: var(--text-secondary);
}

.meta-tag {
  background: var(--bg-surface);
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  border: 1px solid var(--border-subtle);
  transition: border-color var(--transition-speed);
}

.meta-tag:hover {
  border-color: var(--border-focus);
}

.project-title {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.project-summary {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 50rem;
  line-height: 1.7;
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.insight-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: all var(--transition-speed) ease;
}

.insight-card:hover {
  border-color: var(--border-focus);
  transform: translateY(var(--lift-distance));
  background: var(--bg-surface-hover);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.card-title {
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
}

.status-pill {
  font-size: 0.7rem;
  font-family: 'JetBrains Mono', monospace;
  padding: 0.125rem 0.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}

.status-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-success);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.status-research {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-warning);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.status-info {
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-info);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.card-body {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.card-body strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* KORJATTU: Käytetään flexboxia listan asetteluun nuolien kanssa */
.card-list {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}

.card-list li {
  display: flex; /* Flex pitää nuolen ja tekstin erillään */
  align-items: flex-start;
  gap: 0.75rem; /* Väli nuolen ja tekstin välissä */
  margin-bottom: 0.5rem;
}

.card-list li::before {
  content: "→";
  color: var(--accent-success);
  font-weight: bold;
  flex-shrink: 0; /* Estää nuolta litistymästä */
  line-height: 1.6;
}

.section-title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

/* KORJATTU: Käytetään flexboxia Highlights-osion ruksien kanssa */
.highlights-section {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.highlights-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--accent-info);
}

.highlights-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights-section li {
  display: flex; /* Flexbox varmistaa että ikoni ei mene tekstin päälle */
  align-items: flex-start;
  gap: 1rem; /* Reilu väli ikonille */
  padding: 0.5rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.highlights-section li::before {
  content: "✓";
  color: #10b981;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.5;
  flex-shrink: 0; /* Ikoni pysyy oikean kokoisena */
}

.doc-viewer {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius);
  padding: 0.25rem;
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.3);
  position: relative;
  min-height: 50rem;
}

.doc-viewer iframe {
  width: 100%;
  height: 50rem;
  border: none;
  background: #fff;
  border-radius: 0.25rem;
  display: block;
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  pointer-events: none;
}

.loading-indicator::after {
  content: '...';
  animation: ellipsis 1.5s infinite;
}

@keyframes ellipsis {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}

.project-footer {
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  border-top: 1px solid var(--border-subtle);
  padding-top: 1.5rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-note {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.footer-author {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', monospace;
}

.footer-author strong {
  color: var(--text-primary);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: var(--text-primary);
  color: var(--bg-page);
  padding: 0.625rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity var(--transition-speed), transform var(--transition-speed);
  border: 2px solid transparent;
}

.download-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  text-decoration: none;
}

.download-btn:focus-visible {
  opacity: 0.9;
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.download-btn svg {
  width: 1rem;
  height: 1rem;
}

@media (max-width: 768px) {
  .portfolio-container {
    padding: 2rem 1rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-summary {
    font-size: 1rem;
  }

  .insight-grid {
    grid-template-columns: 1fr;
  }

  .doc-viewer,
  .doc-viewer iframe {
    min-height: 31.25rem;
    height: 31.25rem;
  }

  .project-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .download-btn {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.75rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .status-pill {
    align-self: flex-start;
  }
}
</style>

<div class="portfolio-container">

  <header class="project-header">
    <div class="project-meta">
      <span class="meta-tag">2025</span>
      <span class="meta-tag">Embedded Linux</span>
      <span class="meta-tag">RF Engineering</span>
      <span class="meta-tag">Debian 12 Bookworm</span>
    </div>
    <h1 class="project-title">Raspberry Pi 4 & CaribouLite SDR</h1>
    <p class="project-summary">
      Engineering project implementing a standalone Software-Defined Radio node using Raspberry Pi 4 and CaribouLite HAT. Comprehensive testing of RX/TX capabilities, signal processing workflows, and driver configuration in a headless Linux environment. Project completed as part of TAMK Internship 2025.
    </p>
  </header>

  <div class="highlights-section">
    <h3>Project Highlights</h3>
    <ul>
      <li>Successfully received and demodulated signals from NOAA & Meteor-M satellites at 137 MHz</li>
      <li>Configured SoapySDR abstraction layer for hardware interfacing</li>
      <li>Deployed SDR++ in server-client architecture for remote signal monitoring</li>
      <li>Verified CW transmission at 430 MHz using Rohde & Schwarz FSEA spectrum analyzer</li>
      <li>Investigated AT86RF215-ZU modem and ICE40LP1K FPGA architecture</li>
    </ul>
  </div>

  <div class="insight-grid">
    
    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Hardware & System Setup</h3>
        <span class="status-pill status-success">Completed</span>
      </div>
      <p class="card-body">
        Deployed headless <strong>Debian 12 (Bookworm)</strong> on Raspberry Pi 4 with SSH access. Integrated CaribouLite HAT featuring dual-band <strong>AT86RF215-ZU transceiver</strong> and <strong>Lattice ICE40LP1K FPGA</strong> for baseband processing.
      </p>
    </div>

    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Signal Reception (RX)</h3>
        <span class="status-pill status-success">Verified</span>
      </div>
      <p class="card-body">
        Successfully intercepted weather satellite signals using <strong>SDR++ server-client architecture</strong>. Validated reception capabilities across HiF and S1G channels with waterfall spectrum analysis. Demodulated WFM radio broadcasts at various frequencies.
      </p>
    </div>

    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Transmission Testing (TX)</h3>
        <span class="status-pill status-research">Partial Success</span>
      </div>
      <p class="card-body">
        Confirmed CW signal transmission at 430 MHz using <strong>cariboulite_test_app</strong>. Attempted modulated signal transmission via SDRAngel and custom C programs. Complex modulation requires further API investigation.
      </p>
    </div>

    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Software Stack</h3>
        <span class="status-pill status-info">Configured</span>
      </div>
      <p class="card-body">
        <strong>Core tools:</strong>
      </p>
      <ul class="card-list">
        <li>SoapySDR hardware abstraction</li>
        <li>SDR++ (RX-focused)</li>
        <li>SDRAngel (RX/TX capable)</li>
        <li>libcariboulite native drivers</li>
      </ul>
    </div>

    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Technical Challenges</h3>
        <span class="status-pill status-research">Documented</span>
      </div>
      <p class="card-body">
        SDR++ server requires specific initialization sequence ("cold-start" issue). SDRAngel TX path showed antenna selection complexities. Thermal management critical when running heavy SDR applications—<strong>HTOP monitoring recommended</strong>.
      </p>
    </div>

    <div class="insight-card">
      <div class="card-header">
        <h3 class="card-title">Hardware Analysis</h3>
        <span class="status-pill status-info">Researched</span>
      </div>
      <p class="card-body">
        Documented <strong>AT86RF215-ZU</strong> dual-band transceiver specs (389.5–1020 MHz, -123 dBm sensitivity) and <strong>ICE40LP1K FPGA</strong> digital interfacing. Compared original vs. Matteoserva's firmware—confirmed identical implementations.
      </p>
    </div>

  </div>

  <h3 class="section-title">Complete Technical Documentation</h3>
  <div class="doc-viewer">
    <div class="loading-indicator">Loading document</div>
    <iframe 
      src="{{ '/assets/docs/Project.pdf' | relative_url }}" 
      loading="lazy"
      title="CaribouLite SDR Technical Report - Raspberry Pi 4 Software-Defined Radio Project by Jaakko Oja"
      aria-label="Technical report document viewer showing detailed implementation steps, troubleshooting procedures, and test results"
    ></iframe>
  </div>

  <div class="project-footer">
    <div class="footer-info">
      <span class="footer-note">Documentation generated for TAMK Internship 2025</span>
      <span class="footer-author">Project by <strong>Jaakko Oja</strong></span>
    </div>
    <a 
      href="{{ '/assets/docs/Project.pdf' | relative_url }}" 
      class="download-btn" 
      download="CaribouLite_SDR_Technical_Report_Jaakko_Oja.pdf"
      aria-label="Download full PDF technical report"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download Full Report
    </a>
  </div>

</div>