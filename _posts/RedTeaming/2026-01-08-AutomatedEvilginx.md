---
layout: post
title: "Automated Red Team Infra: Evilginx2 & Ansible"
permalink: /redteam-infra-automation/
icon: fas fa-robot
order: 2
date: 2026-01-08 17:00:00 +0300
categories: [Red Teaming, Infrastructure]
tags: [ansible, evilginx2, automation, iac, linux, devsecops, redteam, phishing, simulation]
custom_css: ad
---

## Overview

Modern red team operations require speed and reproducibility. This project demonstrates transitioning from manual installation to **Infrastructure as Code (IaC)** by building an automated deployment pipeline for phishing infrastructure.

**Goal:** Eliminate manual configuration, ensure operational persistence, and enable rapid redeployment.

---

## Project Structure

The entire environment is defined as code using Ansible:
```
RedTeam-Automation/
├── hosts.ini
├── setup_evilginx.yml
└── roles/
    ├── golang-arm64
    ├── evilginx-build
    └── persistence-layer
```

---

## Infrastructure Specifications

| Attribute | Value |
|-----------|-------|
| **Cloud Provider** | --- |
| **Architecture** | ARM64 |
| **Framework** | Evilginx 3.3.0 |
| **Automation** | Ansible 2.16 |
| **Persistence** | systemd + tmux |
| **Status** | 🟢 ACTIVE |

---

## Deployment Process

Complete infrastructure provisioning:

![Ansible Deployment](/assets/RedTeam/Ansible_playbook.png)
*Ansible playbook executing full infrastructure provisioning*

---

## Interactive Access

Operators can attach to the persistent session without interrupting the background service:

![Evilginx Console](/assets/RedTeam/tmux.png)
*Evilginx2 interactive console with active phishing infrastructure*

---

## Key Benefits

### Zero Configuration Drift
Every deployment is identical, ensuring consistent and predictable results across all environments.

### Rapid Redeployment
Infrastructure can be destroyed and rebuilt with new IP addresses in under 3 minutes for operational security.

### Automated Persistence
Systemd manages tmux sessions, maintaining service availability through reboots while preserving interactive access.

### Scalability
Add new nodes by updating the inventory file—no manual configuration required.

---

## Learning Outcomes

**Infrastructure as Code Principles**  
Practical experience with declarative infrastructure management and version-controlled deployments.

**Enterprise-Grade Automation**  
Hands-on experience with Ansible playbooks, roles, and idempotent configuration management.

**Linux Service Management**  
Deep dive into systemd units, service orchestration, and persistent session management.

**Operational Security (OPSEC)**  
Understanding infrastructure rotation, footprint minimization, and rapid tear-down procedures.

**Resilient Pipeline Design**  
Building reproducible, testable, and maintainable deployment pipelines for security operations.

---

## Credits

This project uses **Evilginx2**, an advanced phishing framework developed by [Kuba Gretzky](https://github.com/kgretzky).

**Evilginx2 Repository:** [https://github.com/kgretzky/evilginx2](https://github.com/kgretzky/evilginx2)

Evilginx2 is a man-in-the-middle attack framework used for phishing login credentials along with session cookies, which in turn allows bypassing 2-factor authentication protection. All credit for the framework goes to the original author.

---

> **⚠️ Disclaimer:** This project was developed for educational purposes as part of cybersecurity training and authorized security research. All tools and techniques are intended for use in controlled, legal environments with proper authorization.