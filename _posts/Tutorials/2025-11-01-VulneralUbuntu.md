---
layout: post
date: 2025-11-01 08:27:00 +0300
title: "Metasploitable2: Hands-On Security Lab"
categories: [Projects, Metasploitable2]
tags: [metasploitable, ubuntu, labs, ethical hacking, hands-on, exploit]
---
# Lab-project on Metasploitable2

Training and keeping the essential skills is very essential in the field of cybersecurity. What better way to do that than by practicing in a controlled, hands-on environment like **Metasploitable 2**? 

**Metasploitable2** is vulnerable Linux virtual machine created by Rapid7 for learning and practicing ethical hacking or penetration testing skills. The system includes many intentionally outdated and misconfigured services such as web applications, ssh configurations and insecure databases.

This vulnerable virtual machine provides a safe platform to explore real-world attack techniques, test security tools, and strengthen defensive strategies — all without risking production systems. By working with this kind of environment, cybersecurity professionals and students can continuously develop the analytical, technical, and problem-solving skills needed to stay ahead of evolving threats.

I highly recommend these kind of vulnerable virtual machines for safe learning and practicing the skills needed _or_ learned in cybersecurity.

## Required

- Two virtual machines: One Metasploitable2 and one Kali Linux.
- Network mode configuration: **NEVER** allow Metasploitable to access the Internet. You can keep that in the private/isolated network so it can only talk to your attacker VM(Kali in this case).


## Tutorials
### Nmap

![Picture0](/assets/VB/nmap-service.png)

I started by running **Nmap** using a service-detection scan to enumerate reachable ports and identify running services. The screenshot above displays several open ports along with the corresponding service names and versions. The service-info section at the bottom summarizes hosts discovered and provides extra metadata useful for follow-up enumeration.

### FTP exploitation
![Picture1](/assets/VB/ftp1.png)

First exploit was the FTP and the _vsftpd_ _2.3.4_. I used the Metasploit tool for this.

![Picture1](/assets/VB/ftp2.png)
![Picture1](/assets/VB/ftp3.png)

Using the appropriate Metasploit exploit, I gained root access to the vulnerable VM. The interactive shell shown above contains the proof of compromise.

### Telnet
![Picture1](/assets/VB/telnet1.png)
![Picture1](/assets/VB/telnet2.png)

For the telnet and ssh exploits, i created two files containing usernames and passwords. Using the right Metasploit exploit i was able to perform brute-force attacks both telnet and ssh. After that it was basically using the cracked credentials for the root access.

### SSH (Secure Shell)
![Picture1](/assets/VB/ssh1.png)
![Picture1](/assets/VB/ssh2.png)


### VNC (Virtual Network Computing)
![Picture1](/assets/VB/vnc1.png)
![Picture1](/assets/VB/vnc2.png)
![Picture1](/assets/VB/vnc3.png)
Simple vnc-exploit using Metasploit!


I will upload other exploits when i have the time! Learning goal for this lab-project was to use Metasploit and perform different attacks and exploits in closed, safe enviroment.





























































### References:
- https://docs.rapid7.com/metasploit/metasploitable-2/
- https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/
