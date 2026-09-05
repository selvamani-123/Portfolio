export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  detailedDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  capabilities: string[];
  architectureSteps: { title: string; desc: string; icon: string }[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string; highlight?: boolean }[];
}

export interface Certification {
  title: string;
  organization: string;
  issuerBadge: string;
  category: string;
  verificationNote?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
  status?: string;
  isPrimary?: boolean;
  details?: string[];
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string;
  label: string;
}

export const PERSONAL_INFO = {
  name: "SELVAMANI M",
  role: "Aspiring Software Engineer",
  tagline: "I build efficient software solutions with code, APIs & AI.",
  institution: "V.S.B. Engineering College",
  department: "B.E. Computer Science Engineering",
  currentYear: "3rd Year",
  cgpa: "9.17",
  academicJourney: "2024–2028",
  status: "Open to Internship Opportunities",
  email: "selva00611@gmail.com",
  phone: "+91 93600 16116",
  resumePath: "./resume.pdf",
  bio: `Aspiring Software Engineer and B.E. Computer Science Engineering student with a strong foundation in Java, Python, RESTful APIs, databases, and full-stack web development. Experienced in building scalable web applications using Java Servlets, JSP, FastAPI, MongoDB, and MySQL through academic projects. Skilled in backend development, API integration, database design, and problem-solving, with a passion for developing efficient software solutions and continuously learning modern technologies.`,
  coreCompetencies: [
    "Backend Development",
    "REST APIs",
    "Databases",
    "Full-Stack Development",
    "AI/ML",
    "Problem Solving",
  ],
};

export const QUICK_STATS = [
  {
    value: "9.17",
    label: "Current CGPA",
    subtext: "Consistent academic excellence",
    accent: "electric",
  },
  {
    value: "3rd Year",
    label: "B.E. CSE",
    subtext: "V.S.B. Engineering College",
    accent: "cyber",
  },
  {
    value: "2+",
    label: "Featured Projects",
    subtext: "Full-stack & AI/ML systems",
    accent: "electric",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and backend architectures",
    iconName: "Code2",
    skills: [
      { name: "Java", highlight: true },
      { name: "Python", highlight: true },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Web Technologies",
    description: "Modern frontend foundations and interface structures",
    iconName: "Globe",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational and document-oriented database engines",
    iconName: "Database",
    skills: [
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
    ],
  },
  {
    title: "Developer Tools & Platforms",
    description: "Version control, IDEs, and collaborative toolchains",
    iconName: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "IntelliJ IDEA" },
      { name: "Visual Studio Code" },
      { name: "Figma" },
    ],
  },
  {
    title: "AI / Machine Learning",
    description: "Machine learning algorithms and predictive modeling",
    iconName: "Cpu",
    skills: [
      { name: "scikit-learn — Basics", highlight: true },
    ],
  },
  {
    title: "Project & Framework Technologies",
    description: "Technologies demonstrated and deployed across academic projects",
    iconName: "Layers",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Streamlit" },
      { name: "Tailwind CSS" },
      { name: "Leaflet.js" },
      { name: "Chart.js" },
      { name: "REST APIs", highlight: true },
      { name: "Java Servlets" },
      { name: "JSP" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "glof-sentinel",
    slug: "glof-sentinel",
    title: "GLOF Sentinel",
    subtitle: "AI-Based Early Warning System for GLOF Prediction",
    badge: "Featured Flagship AI System",
    description:
      "Developed an AI-based early warning system for predicting Glacial Lake Outburst Flood (GLOF) risk using machine learning and environmental data.",
    detailedDescription:
      "Implemented a Random Forest model with Explainable AI (XAI), Environmental Stress Assessment, and River Intelligence for intelligent risk prediction and decision support. Built a real-time GIS dashboard to visualize glacial lakes, weather conditions, historical trends, and downstream impact zones.",
    problem:
      "Glacial Lake Outburst Floods (GLOFs) present sudden, catastrophic natural hazards in mountainous periglacial regions. Lack of integrated environmental stress analysis and explainable prediction models hinders timely evacuation and disaster mitigation.",
    solution:
      "Engineered an end-to-end intelligent prediction architecture combining environmental sensor parameters, Random Forest machine learning models with Explainable AI (XAI) feature importance, River Intelligence tracking, and an interactive Leaflet.js GIS dashboard for risk visualization.",
    technologies: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Scikit-learn",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Leaflet.js",
      "Chart.js",
    ],
    capabilities: [
      "GLOF risk prediction",
      "Random Forest model",
      "Explainable AI (XAI)",
      "Environmental Stress Assessment",
      "River Intelligence",
      "Real-time GIS visualization",
      "Historical trend analysis",
      "Downstream impact visualization",
    ],
    architectureSteps: [
      {
        title: "Environmental Data Ingestion",
        desc: "Ingestion of temperature, precipitation, lake volume, and glacier retreat parameters.",
        icon: "CloudRain",
      },
      {
        title: "Data Processing Pipeline",
        desc: "Cleaning, normalization, and feature extraction for stress indicators.",
        icon: "Filter",
      },
      {
        title: "Random Forest Classifier",
        desc: "Machine learning model trained for multi-parameter threshold classification.",
        icon: "Binary",
      },
      {
        title: "XAI & Stress Assessment",
        desc: "Explainable AI feature attribution and River Intelligence runoff modeling.",
        icon: "ShieldAlert",
      },
      {
        title: "GLOF Risk Score Output",
        desc: "Computed severity risk tiers with threshold-based early warning flags.",
        icon: "Activity",
      },
      {
        title: "GIS & Map Dashboard",
        desc: "Leaflet.js geospatial mapping of glacial zones, contours, and impact radii.",
        icon: "MapPin",
      },
    ],
    metrics: [
      { label: "Core Model", value: "Random Forest" },
      { label: "Intelligence Layer", value: "Explainable AI (XAI)" },
      { label: "Geospatial Stack", value: "Leaflet.js GIS" },
      { label: "Backend API", value: "FastAPI + MongoDB" },
    ],
    githubUrl: "https://github.com/selvamani-123/Early-Warning-System-for-Glacial-Lake-Outburst-Flood--GLOF",
    demoUrl: "https://early-warning-system-for-glacial-la.vercel.app/",
    featured: true,
    category: "AI / ML & Geospatial Systems",
  },
  {
    id: "vehicle-telemetry",
    slug: "vehicle-telemetry",
    title: "AI-Based Vehicle Telemetry Alert & Fault Detection System",
    subtitle: "Real-time Sensor Processing & Fault Alerting Platform",
    badge: "Real-time Telemetry & Anomaly Detection",
    description:
      "Developed a real-time vehicle telemetry monitoring system to process sensor data such as speed, RPM, engine temperature, and battery voltage.",
    detailedDescription:
      "Implemented rule-based and anomaly detection techniques to identify faults and generate intelligent alerts. Built a live dashboard for visualizing telemetry data, vehicle health status, and fault alerts in real time.",
    problem:
      "Modern vehicles generate continuous multidimensional telemetry streams. Detecting early mechanical degradations and intermittent electrical faults before catastrophic failure requires low-latency data processing and intelligent anomaly isolation.",
    solution:
      "Architected a high-throughput telemetry ingestion service using FastAPI and Python scikit-learn models. Applied combined rule-based sanity checks with machine learning anomaly detection to categorize engine status and trigger prioritized diagnostic alerts on a real-time telemetry dashboard.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "FastAPI",
      "Streamlit",
      "Scikit-learn",
    ],
    capabilities: [
      "Real-time telemetry monitoring",
      "Rule-based fault detection",
      "Anomaly detection",
      "Intelligent alerts",
      "Vehicle health monitoring",
      "Live dashboard",
      "Sensor visualization",
    ],
    architectureSteps: [
      {
        title: "Sensor Data Generation",
        desc: "Continuous telemetry stream: Speed, RPM, Engine Temp, Battery Voltage.",
        icon: "Gauge",
      },
      {
        title: "FastAPI Ingestion Backend",
        desc: "Asynchronous REST endpoints receiving and validating sensor packets.",
        icon: "Server",
      },
      {
        title: "Processing / ML Engine",
        desc: "Feature engineering, rolling averages, and metric scaling.",
        icon: "Cpu",
      },
      {
        title: "Fault & Anomaly Detection",
        desc: "Rule-based boundary checks combined with Scikit-learn anomaly modeling.",
        icon: "AlertTriangle",
      },
      {
        title: "Intelligent Alerts",
        desc: "Categorized priority alerts with diagnostic codes and severity levels.",
        icon: "Bell",
      },
      {
        title: "Live Monitoring Dashboard",
        desc: "Interactive Streamlit and web UI graphing real-time health diagnostics.",
        icon: "LineChart",
      },
    ],
    metrics: [
      { label: "Telemetry Channels", value: "Speed, RPM, Temp, Volt" },
      { label: "Backend Framework", value: "FastAPI (Python)" },
      { label: "Detection Engine", value: "Hybrid Rule + ML" },
      { label: "UI Visualization", value: "Streamlit & Web UI" },
    ],
    githubUrl: "https://github.com/Ajaykumarnachimuthu/AI-Based-Vehicle-Telemetry-Alert-Fault-Detection-System",
    demoUrl: "https://ai-based-vehicle-telemetry-alert-fault.onrender.com/",
    featured: true,
    category: "IoT, Telemetry & Anomaly Detection",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS AI Practitioner Challenge Course",
    organization: "Udacity, in collaboration with Accenture",
    issuerBadge: "Udacity × Accenture",
    category: "Cloud & AI",
  },
  {
    title: "Python Foundation Course",
    organization: "Infosys Springboard",
    issuerBadge: "Infosys Springboard",
    category: "Programming",
  },
  {
    title: "Data Science for Engineers",
    organization: "NPTEL",
    issuerBadge: "NPTEL",
    category: "Data Science",
  },
  {
    title: "Salesforce Administrator Explorer",
    organization: "SSC NASSCOM",
    issuerBadge: "SSC NASSCOM",
    category: "Enterprise Tech",
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "V.S.B. Engineering College",
    period: "2024 – 2028",
    status: "3rd Year",
    scoreLabel: "CGPA",
    score: "9.17",
    isPrimary: true,
    details: [
      "Specializing in Core Computer Science, Software Engineering, Algorithms & Databases",
      "Hands-on project work in Backend Engineering (FastAPI, Java Servlets), Machine Learning, and Web Technologies",
    ],
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "The Akshaya Academy Campus, CBSE Senior Secondary School",
    period: "2023 – 2024",
    scoreLabel: "Score",
    score: "80.2%",
    isPrimary: false,
    details: ["CBSE Senior Secondary with focus on Physics, Chemistry, Mathematics & Computer Science"],
  },
  {
    degree: "10th Grade (Secondary Education)",
    institution: "The Akshaya Academy Campus, CBSE Senior Secondary School",
    period: "2021 – 2022",
    scoreLabel: "Score",
    score: "91%",
    isPrimary: false,
    details: ["CBSE Secondary School Curriculum with academic distinction"],
  },
];

export const CODING_PROFILES: SocialLink[] = [
  {
    platform: "GitHub",
    username: "selvamani-123",
    url: "https://github.com/selvamani-123",
    icon: "Github",
    label: "View Repositories & Code",
  },
  {
    platform: "LeetCode",
    username: "Selvamani_M",
    url: "https://leetcode.com/u/Selvamani_M/",
    icon: "Code",
    label: "Explore Algorithm Solutions",
  },
  {
    platform: "LinkedIn",
    username: "Selvamani2006",
    url: "https://www.linkedin.com/in/Selvamani2006",
    icon: "Linkedin",
    label: "Connect Professionally",
  },
];
