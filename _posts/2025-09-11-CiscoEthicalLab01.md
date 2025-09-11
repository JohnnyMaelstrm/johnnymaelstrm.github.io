---
layout: page
icon: fas fa-file-pdf
order: 5
title: "Cisco Ethical Hacking"
categories: [Cisco, Ethical Hacking]
tags: [pdf, portfolio, cisco, ciscohacking]
---

# Cisco Ethical Hacking-course at Tamk

I applied to the course at Tampere University of Applied Sciences (TAMK).
This is one of the “Lab” projects we completed during the course. The projects are in either Finnish or English. I will also upload the Capstone project here!

The Lab projects were done at the university using school computers within a closed network environment.
The Capstone project was also carried out at the university, but it was a larger and more comprehensive assignment that had a significant impact on the final course grade.

The PDF is embedded below so you can view it directly.

<iframe src="{{ '/assets/docs/Labra 01 Ethical Hacking.pdf' | relative_url }}" width="100%" height="700px" style="border:none;"></iframe>

---

You can also [download the PDF]({{ '/assets/docs/Labra 01 Ethical Hacking.pdf' | relative_url }}) if you prefer.

---

## Other Lab PDFs

{% assign labs_02_09 = "02,03,04,05,06,07,08,09" | split: "," %}
{% for lab in labs_02_09 %}
### 🧪 Labra {{ lab }}

<iframe src="{{ '/assets/docs/Lab' | append: lab | append: ' Ethical Hacking.pdf' | relative_url }}" width="100%" height="600px" style="border:1px solid #ccc; margin-bottom: 20px;"></iframe>

📥 [Download PDF]({{ '/assets/docs/Lab' | append: lab | append: ' Ethical Hacking.pdf' | relative_url }})  
<hr>
{% endfor %}

{% assign labs_10_14 = "10,11,12,13,14" | split: "," %}
{% for lab in labs_10_14 %}
### 🧪 Labra {{ lab }}

<iframe src="{{ '/assets/docs/Lab' | append: lab | append: '.pdf' | relative_url }}" width="100%" height="600px" style="border:1px solid #ccc; margin-bottom: 20px;"></iframe>

📥 [Download PDF]({{ '/assets/docs/Lab' | append: lab | append: '.pdf' | relative_url }})  
<hr>
{% endfor %}

### 🧪 Labra 15

<iframe src="{{ '/assets/docs/Lab 15.pdf' | relative_url }}" width="100%" height="600px" style="border:1px solid #ccc; margin-bottom: 20px;"></iframe>

📥 [Download PDF]({{ '/assets/docs/Lab 15.pdf' | relative_url }})  
<hr>

---

## 🎓 Capstone Project

### 🧪 Capstone: Course Final Project

<iframe src="{{ '/assets/docs/CS_OjaJaakko.pdf' | relative_url }}" width="100%" height="700px" style="border:1px solid #ccc;"></iframe>

📥 [Download Capstone PDF]({{ '/assets/docs/CS_OjaJaakko.pdf' | relative_url }})
