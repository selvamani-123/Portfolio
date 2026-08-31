# Build a Modern Student Software Engineer Portfolio

Create a **premium, modern, highly responsive personal portfolio website** for **SELVAMANI M**, a 3rd-year B.E. Computer Science Engineering student and aspiring Software Engineer.

The website must feel like a **professional developer portfolio**, not a generic college/student template.

The primary goal is to help Selva showcase his **software development skills, AI/ML projects, technical capabilities, certifications, education, GitHub, LeetCode, and LinkedIn presence** to recruiters, internship opportunities, hackathons, and software engineering roles.

---

# 1. PRIMARY TECHNICAL STACK

Use this stack as the core implementation:

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **Motion** for animations and micro-interactions
* **shadcn/ui** for reusable UI components
* **Vercel** for deployment

Additional libraries may be used only when they genuinely improve the experience.

Recommended supporting libraries:

* Lucide React for icons
* React Intersection Observer or equivalent if needed
* Recharts if visual statistics are required
* Next/Image for optimized images
* Next/Font for typography

Do NOT unnecessarily introduce React Three Fiber, Three.js, GSAP, or other heavy libraries. The portfolio should remain fast, maintainable, and recruiter-friendly.

---

# 2. DESIGN DIRECTION

Create a **2026-style modern developer portfolio** combining:

* Dark developer aesthetic
* Bento grid layouts
* Minimal editorial typography
* Subtle glassmorphism
* Modern card-based UI
* Asymmetric layouts where appropriate
* Smooth scroll animations
* Micro-interactions
* Subtle gradients
* Clean spacing
* Strong visual hierarchy

Do NOT make the website excessively flashy.

Avoid:

* Excessive 3D
* Overuse of glowing effects
* Huge distracting animations
* Excessive glassmorphism
* Fake statistics
* Stock illustrations
* Generic AI-generated portfolio appearance
* Overloaded navigation

The design should communicate:

> **Technical + Modern + Intelligent + Professional + Ambitious**

---

# 3. COLOR SYSTEM

Use a sophisticated dark theme.

Primary background:

* Deep navy / near-black

Accent colors:

* Electric blue
* Cyber teal
* Subtle violet/blue gradient where appropriate

Use gradients sparingly.

Suggested visual direction:

```text
Background → #050816 / near-black navy
Primary text → white / near-white
Secondary text → muted slate
Accent → electric blue
Secondary accent → cyber teal
```

Do not make every component glow.

Use accent colors mainly for:

* Buttons
* Links
* Icons
* Project highlights
* Hover states
* Important keywords
* Small decorative elements

---

# 4. TYPOGRAPHY

Use a modern developer-oriented typography system.

Preferred:

* Geist or Inter for primary typography
* JetBrains Mono for technical labels, code snippets, tags, and small developer-oriented elements

Use very large typography in the hero section.

Create strong contrast between:

* Hero heading
* Section headings
* Body text
* Technical metadata

Typography should feel similar to premium modern SaaS/developer websites.

---

# 5. NAVIGATION

Create a sticky/floating navigation bar.

Desktop:

```text
SELVAMANI M

About
Skills
Projects
Experience
Education
Contact

[Resume]
```

Keep it minimal.

On scroll:

* Navbar should slightly change appearance
* Add subtle backdrop blur
* Maintain excellent readability

Mobile:

Use a clean hamburger/mobile menu.

---

# 6. HERO SECTION

The hero section is the most important part of the website.

Do NOT start with:

> "Welcome to my portfolio"

Instead create a strong personal positioning statement.

Suggested structure:

```text
ASPIRING SOFTWARE ENGINEER

Hi, I'm
SELVAMANI M.

I build efficient software
solutions with code, APIs & AI.

B.E. Computer Science Engineering
V.S.B. Engineering College

[Explore My Work]
[View Resume]
```

Add a small availability/status element such as:

```text
● Open to Internship Opportunities
```

Do not falsely claim employment or experience.

Include a professional profile image if an image is provided.

If no image is provided, design the hero so the portfolio still looks complete without one.

---

# 7. HERO VISUAL

Create a modern visual element beside or around the hero content.

Possible concept:

A minimal interactive developer card containing:

```text
SELVAMANI M
Software Engineer

Java       Python
FastAPI    MongoDB
Next.js    AI/ML

3rd Year CSE
CGPA 9.17
```

Alternative:

Create a subtle terminal/code-inspired visual:

```text
$ whoami

selvamani.m

> software engineer
> backend developer
> AI/ML enthusiast
> problem solver
```

Use Motion for subtle entrance animations.

Do not create distracting typing animations.

---

# 8. QUICK STATS / PERSONAL HIGHLIGHTS

Immediately below the hero, create a compact Bento-style stats section.

Use only real information.

Possible cards:

```text
9.17
Current CGPA

3rd Year
B.E. CSE

2+
Featured Projects

2024–2028
Academic Journey
```

These should be visually attractive but not exaggerated.

---

# 9. ABOUT SECTION

Create a modern "About Me" section.

Use the following professional summary as the content:

" Aspiring Software Engineer and B.E. Computer Science Engineering student with a strong foundation in Java, Python, RESTful APIs, databases, and full-stack web development. Experienced in building scalable web applications using Java Servlets, JSP, FastAPI, MongoDB, and MySQL through academic projects. Skilled in backend development, API integration, database design, and problem-solving, with a passion for developing efficient software solutions and continuously learning modern technologies."

Do not display this as one giant paragraph.

Break it into visually readable content.

Highlight important phrases such as:

* Software Engineering
* Backend Development
* REST APIs
* Databases
* Full-Stack Development
* AI/ML
* Problem Solving

---

# 10. TECHNICAL SKILLS

Create a visually impressive skills section using Bento cards.

Categories:

### Programming Languages

* Java
* Python
* JavaScript

### Web Technologies

* HTML5
* CSS3
* JavaScript

### Databases

* MySQL
* MongoDB

### Tools & Software

* Git
* GitHub
* IntelliJ IDEA
* Visual Studio Code
* Figma

### AI / ML

* scikit-learn — Basics

Also visually emphasize technologies demonstrated in projects:

* FastAPI
* Streamlit
* Tailwind CSS
* Leaflet.js
* Chart.js
* REST APIs

Do not claim expertise levels that aren't provided.

Use technology badges/cards with icons where appropriate.

---

# 11. FEATURED PROJECTS

Projects should be the **main focus of the portfolio**.

Create large premium project cards rather than small resume-style entries.

Each project card should contain:

* Project name
* Short description
* Technology stack
* Key capabilities
* GitHub button
* Live Demo button if available
* Visual placeholder/project image
* Hover interaction

Use Motion for subtle hover effects.

---

# PROJECT 1

## AI-Based Vehicle Telemetry Alert & Fault Detection System

Stack:

```text
HTML
CSS
JavaScript
Python
FastAPI
Streamlit
Scikit-learn
```

Description:

"Developed a real-time vehicle telemetry monitoring system to process sensor data such as speed, RPM, engine temperature, and battery voltage."

Features:

* Real-time telemetry monitoring
* Rule-based fault detection
* Anomaly detection
* Intelligent alerts
* Vehicle health monitoring
* Live dashboard
* Sensor visualization

Additional project details:

"Implemented rule-based and anomaly detection techniques to identify faults and generate intelligent alerts."

"Built a live dashboard for visualizing telemetry data, vehicle health status, and fault alerts in real time."

Create a visual dashboard-style project preview rather than using a generic image.

---

# PROJECT 2

## GLOF Sentinel — AI-Based Early Warning System for GLOF Prediction

Stack:

```text
Python
FastAPI
MongoDB
Scikit-learn
HTML
CSS
JavaScript
Tailwind CSS
Leaflet.js
Chart.js
```

Description:

"Developed an AI-based early warning system for predicting Glacial Lake Outburst Flood (GLOF) risk using machine learning and environmental data."

Key capabilities:

* GLOF risk prediction
* Random Forest model
* Explainable AI
* Environmental Stress Assessment
* River Intelligence
* Real-time GIS visualization
* Historical trend analysis
* Downstream impact visualization

Additional details:

"Implemented a Random Forest model with Explainable AI (XAI), Environmental Stress Assessment, and River Intelligence for intelligent risk prediction and decision support."

"Built a real-time GIS dashboard to visualize glacial lakes, weather conditions, historical trends, and downstream impact zones."

This should be the **featured project** and receive slightly more visual emphasis.

Create a sophisticated map/dashboard-inspired project preview.

---

# 12. PROJECT INTERACTION

When the user hovers over a project:

* Slight card elevation
* Image/visual moves subtly
* Technology tags remain readable
* Arrow/icon moves
* Border/accent transitions smoothly

When clicked:

Open a dedicated project detail page.

Project detail page should contain:

```text
Project Overview
Problem
Solution
Key Features
Technology Stack
Architecture
Implementation
Screenshots
Results / Capabilities
GitHub
Live Demo
```

Only show sections for information that actually exists.

Never invent project results, accuracy percentages, user counts, or deployment claims.

---

# 13. PROJECT ARCHITECTURE VISUALIZATION

For the two major projects, create simple architecture diagrams using HTML/CSS or lightweight components.

Example:

```text
Sensor Data
     ↓
FastAPI Backend
     ↓
Processing / ML
     ↓
Fault Detection
     ↓
Alerts
     ↓
Dashboard
```

For GLOF Sentinel:

```text
Environmental Data
        ↓
Data Processing
        ↓
Random Forest
        ↓
XAI + Risk Assessment
        ↓
GLOF Risk Score
        ↓
GIS Dashboard
```

Keep diagrams clean and visually consistent with the portfolio.

---

# 14. CERTIFICATIONS

Create a horizontal/vertical timeline or Bento certification section.

Include exactly:

### AWS AI Practitioner Challenge Course

Udacity, in collaboration with Accenture

### Python Foundation Course

Infosys Springboard

### Data Science for Engineers

NPTEL

### Salesforce Administrator Explorer

SSC NASSCOM

Each certification should have:

* Certification name
* Organization
* Small icon
* Optional credential link placeholder

Do not fabricate certificate IDs or dates.

---

# 15. EDUCATION

Create a clean timeline.

### B.E. Computer Science Engineering

V.S.B. Engineering College

2024 – 2028

Current status:

3rd Year

CGPA:

**9.17**

---

### 12th Grade

The Akshaya Academy Campus, CBSE Senior Secondary School

2023 – 2024

**80.2%**

---

### 10th Grade

The Akshaya Academy Campus, CBSE Senior Secondary School

2021 – 2022

**91%**

Use a vertical timeline with subtle Motion animations when scrolling.

---

# 16. CODING PROFILES

Create a dedicated section called:

## "Beyond the IDE"

or

## "Code. Build. Solve."

Show:

### GitHub

Username:

`selvamani-123`

Link:

https://github.com/selvamani-123

### LeetCode

Username:

`Selvamani_M`

Link:

https://leetcode.com/u/Selvamani_M/

### LinkedIn

Link:

https://www.linkedin.com/in/Selvamani2006

Use recognizable icons.

If API integration is reliable, GitHub information may be dynamically loaded.

Do not show fake contribution numbers.

If live data cannot be fetched, show profile links instead.

---

# 17. RESUME

Add a prominent:

**Download Resume**

button.

The resume should be available as a PDF from:

```text
/public/resume.pdf
```

Make the implementation easy to replace with the actual resume file.

Also add:

**View Resume**

where appropriate.

---

# 18. CONTACT SECTION

Create a strong final CTA.

Example structure:

```text
LET'S BUILD
SOMETHING USEFUL.

I'm always interested in learning,
building and exploring new opportunities.

[LinkedIn]
[GitHub]
[LeetCode]
[Email]
```

Email:

`selva00611@gmail.com`

Phone:

`+91 93600 16116`

Do not expose unnecessary personal information beyond what is already provided.

---

# 19. FOOTER

Minimal footer:

```text
© 2026 Selvamani M

Built with Next.js · TypeScript · Tailwind CSS
```

Add GitHub / LinkedIn links.

---

# 20. MODERN LAYOUT SYSTEM

Do not make every section a simple centered container.

Use a combination of:

### Bento Grid

For:

* Skills
* Stats
* Developer identity
* Coding profiles

### Editorial Layout

For:

* Hero
* About
* Section headings

### Large Project Cards

For:

* Featured projects

### Timeline

For:

* Education
* Certifications

### Sticky / floating elements

For:

* Navigation
* Resume CTA where appropriate

Maintain consistent spacing and alignment throughout.

---

# 21. ANIMATIONS

Use **Motion**.

Animations should be subtle and premium.

Include:

* Hero fade/slide entrance
* Staggered skill card entrance
* Project reveal on scroll
* Timeline reveal
* Hover interactions
* Button micro-interactions
* Navbar transition
* Smooth section transitions

Use short durations.

Avoid:

* Constant floating animations
* Excessive parallax
* Long loading animations
* Distracting text effects
* Animation that blocks interaction

Respect:

```text
prefers-reduced-motion
```

---

# 22. RESPONSIVENESS

The portfolio must be fully responsive.

Desktop:

* Premium multi-column layouts
* Bento grids
* Large hero

Tablet:

* Simplified grids

Mobile:

* Single-column layout
* Touch-friendly buttons
* No horizontal overflow
* Simplified animations
* Mobile navigation
* Project cards remain highly readable

Test approximately:

```text
360px
390px
768px
1024px
1440px
1920px
```

---

# 23. ACCESSIBILITY

Follow accessibility best practices.

Include:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Keyboard navigation
* Visible focus states
* Alt text for images
* Sufficient contrast
* Reduced motion support

---

# 24. PERFORMANCE

The portfolio should be optimized for excellent Lighthouse performance.

Prioritize:

* Next/Image
* Next/Font
* Lazy loading
* Minimal JavaScript
* No unnecessary heavy libraries
* Optimized animations
* Responsive images
* Static generation where possible

Avoid unnecessary API calls.

---

# 25. SEO

Add:

Title:

`Selvamani M | Aspiring Software Engineer`

Description:

`Portfolio of Selvamani M, a B.E. Computer Science Engineering student and aspiring Software Engineer focused on backend development, full-stack applications, APIs, databases, and AI/ML.`

Include appropriate Open Graph metadata.

Add favicon and professional social preview metadata.

---

# 26. VISUAL DETAILS

Add subtle visual elements such as:

* Grid background
* Fine borders
* Gradient accents
* Small technical labels
* Section numbers

For example:

```text
01 / ABOUT
02 / SKILLS
03 / PROJECTS
04 / EXPERIENCE
05 / EDUCATION
06 / CONTACT
```

Keep these subtle.

---

# 27. IMPORTANT CONTENT RULES

Use ONLY the information provided in this prompt.

Do not invent:

* Work experience
* Internship experience
* Awards
* Hackathon wins
* Project metrics
* Users
* Accuracy percentages
* Company experience
* Job titles
* Certification dates
* Fake testimonials
* Fake achievements

Where information is missing, create a placeholder rather than inventing information.

---

# 28. CODE QUALITY

Use:

* TypeScript
* Reusable components
* Clean folder structure
* Reusable data arrays for projects, skills, education, and certifications
* Components separated logically
* No huge monolithic page component
* No unnecessary dependencies

Suggested structure:

```text
app/
├── page.tsx
├── projects/
│   ├── vehicle-telemetry/
│   └── glof-sentinel/
├── globals.css
└── layout.tsx

components/
├── navbar.tsx
├── hero.tsx
├── about.tsx
├── stats.tsx
├── skills.tsx
├── projects.tsx
├── certifications.tsx
├── education.tsx
├── coding-profiles.tsx
├── contact.tsx
└── footer.tsx

components/ui/
└── shadcn components

public/
├── resume.pdf
├── profile.jpg
└── project-images/
```

---

# 29. FINAL EXPERIENCE

The final website should make a recruiter think:

> "This is a serious CSE student who actually builds things."

The portfolio should communicate three things immediately:

### 1. Who is he?

**Selvamani M — Aspiring Software Engineer**

### 2. What can he do?

**Java · Python · APIs · Databases · Full Stack · AI/ML**

### 3. What has he built?

**AI-Based Vehicle Telemetry System + GLOF Sentinel**

Projects should therefore receive more visual importance than certifications and school education.

---

# 30. FINAL DESIGN GOAL

Create a portfolio that feels like a combination of:

**Modern SaaS website + Premium developer portfolio + Bento dashboard + Editorial typography**

It should be:

**Minimal**
**Technical**
**Interactive**
**Fast**
**Recruiter-friendly**
**Mobile-first**
**Professional**
**Memorable**

Do not make it look like a template.

Build a polished, production-quality portfolio that feels intentionally designed for **Selvamani M**.
