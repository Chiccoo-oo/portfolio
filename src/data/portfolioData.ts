export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  rank: string;
  url: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  category: 'AI/ML' | 'Web Development' | 'Data Science' | 'Research' | 'Open Source';
  githubLink: string;
  demoLink: string;
  status: 'Completed' | 'In Progress' | 'Active';
  image: string;
  iconName: 'Recycle' | 'Shield' | 'Languages' | 'Code2';
}

export interface Experience {
  position: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  details: string;
  metric: string;
  iconName: 'Trophy' | 'Code' | 'BookOpen' | 'Award' | 'Star';
}

export interface Publication {
  title: string;
  abstract: string;
  journal: string;
  date: string;
  pdfLink: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  credentialLink: string;
}

export interface Leadership {
  title: string;
  organization: string;
  role: string;
  description: string;
}

export const personalInfo = {
  name: "Anushka Ekka",
  tagline: "Data Science & AI Undergraduate | Aspiring ML Engineer & Software Wizard",
  avatar: "/avatar-placeholder.png",
  degree: "B.Tech",
  branch: "Data Science and Artificial Intelligence",
  university: "International Institute of Information Technology, Naya Raipur",
  careerGoals: "Building scalable AI/ML systems and engineering low-latency software solutions",
  location: "Naya Raipur, Chhattisgarh, India",
  email: "anushkaekka23@gmail.com",
  phone: "+91 7828707144",
  linkedin: "https://www.linkedin.com/in/anushka-ekka-815821215/",
  github: "https://github.com/Chiccoo-oo",
  bioParagraph: "I am a Data Science & AI undergraduate student at IIIT Naya Raipur, highly passionate about Artificial Intelligence, Machine Learning, and Competitive Programming. I have hands-on experience building error-handling LLM systems, full-stack government websites, OCR neural networks, and Deep learning models. With strong problem-solving skills, I enjoy compiling robust code to solve complex, real-world computational challenges.",
  stats: {
    projects: "10+",
    solvedProblems: "1000+",
    hackathons: "8+ Finalists",
    certifications: "8+",
    papers: "1",
  }
};

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming Languages" },
  { name: "C++", level: 93, category: "Programming Languages" },
  { name: "Java", level: 75, category: "Programming Languages" },
  { name: "C", level: 80, category: "Programming Languages" },
  { name: "SQL", level: 85, category: "Programming Languages" },
  { name: "JavaScript", level: 85, category: "Programming Languages" },
  { name: "HTML & CSS", level: 90, category: "Programming Languages" },
  
  // AI & Data Science
  { name: "Machine Learning", level: 92, category: "AI & Data Science" },
  { name: "Deep Learning", level: 88, category: "AI & Data Science" },
  { name: "Reinforcement Learning (Q-Learning)", level: 80, category: "AI & Data Science" },
  { name: "Computer Vision (YOLOv8, OpenCV)", level: 90, category: "AI & Data Science" },
  { name: "Natural Language Processing", level: 85, category: "AI & Data Science" },
  { name: "Explainable AI (XAI, SHAP, LIME)", level: 82, category: "AI & Data Science" },
  { name: "XGBoost", level: 90, category: "AI & Data Science" },
  { name: "TensorFlow & PyTorch", level: 88, category: "AI & Data Science" },
  
  // Core Skills
  { name: "GANs & CRNN-CTC", level: 82, category: "Web Development" },
  { name: "Transformers", level: 80, category: "Web Development" },
  { name: "IoT Integration", level: 75, category: "Web Development" },
  { name: "Data Pre-Processing", level: 92, category: "Web Development" },
  { name: "Feature Engineering", level: 90, category: "Web Development" },
  { name: "JSON Schema Validation", level: 88, category: "Web Development" },
  
  // Tools & Databases
  { name: "MySQL", level: 85, category: "Databases" },
  { name: "FastAPI / Flask", level: 88, category: "Databases" },
  { name: "WordPress", level: 80, category: "Databases" },
  { name: "Google Cloud Platform", level: 78, category: "Databases" },
  
  // Tools & Environment
  { name: "Git & GitHub", level: 92, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Jupyter Notebook", level: 90, category: "Tools" },
  { name: "Jenkins CI/CD", level: 75, category: "Tools" },
  { name: "Eclipse / Android Studio", level: 78, category: "Tools" },
];

export const codingProfilesData: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "Chiccoo-oo",
    rank: "Verified Contributor",
    url: "https://github.com/Chiccoo-oo",
    description: "Open-source projects, OCR systems, transliteration APIs, and governmental tools."
  },
  {
    platform: "LeetCode",
    username: "anushka23102",
    rank: "Solved 1000+",
    url: "https://leetcode.com/u/anushka23102/",
    description: "Solved 1000+ data structure & algorithm problems with active weekly contest ratings."
  },
  {
    platform: "Codeforces",
    username: "Anushka_ekka",
    rank: "Expert",
    url: "https://codeforces.com/profile/Anushka_ekka",
    description: "Compiling optimal solutions in competitive code sprints."
  },
  {
    platform: "CodeChef",
    username: "chiccoo",
    rank: "4-Star Coder",
    url: "https://www.codechef.com/users/chiccoo",
    description: "Competing in monthly cookoffs and lunchtimes."
  },
  {
    platform: "LinkedIn",
    username: "Anushka Ekka",
    rank: "Professional Connection",
    url: "https://www.linkedin.com/in/anushka-ekka-815821215/",
    description: "Connecting with engineering teams, sharing AI/ML articles and project accomplishments."
  }
];

export const projectsData: Project[] = [
  {
    name: "Walmart-YOLO: AI System for Real-Time Waste Management",
    description: "Architected and deployed an end-to-end AI-driven inventory management system, approved by Chhattisgarh Government / NABARD, supporting real-time monitoring of 1,500+ SKUs across multiple CG Mart outlets, reducing manual inventory intervention and enabling a scalable, closed-loop retail ecosystem.",
    features: [
      "Architected and deployed an end-to-end AI-driven inventory management system, approved by Chhattisgarh Government / NABARD, supporting real-time monitoring of 1,500+ SKUs across multiple CG Mart outlets, reducing manual inventory intervention and enabling a scalable, closed-loop retail ecosystem.",
      "Automated price adjustments for 50+ perishable items across 8 inventory states using Q-learning, decreasing food spoilage by 25% and boosting near-expiry stock sell-through rates.",
      "Integrated YOLOv8 for real-time visual tracking and automated inventory counting, fusing computer vision with master product data via Pathway-based low-latency CDC pipeline ensuring system integrity and horizontal scalability across thousands of SKUs."
    ],
    technologies: ["Python", "YOLOv8", "Q-Learning", "Pathway CDC", "OpenCV"],
    category: "AI/ML",
    githubLink: "https://github.com/Chiccoo-oo/Smart-Pricing",
    demoLink: "#",
    status: "Active",
    image: "/walmart_yolo.png",
    iconName: "Recycle"
  },
  {
    name: "CGPD-OCR: DevanagariDeepScan",
    description: "Built a secure offline AI system for Chhattisgarh Police combining handwritten Hindi OCR and a station-level LLM chatbot, enabling real-time queries across 1,000+ digitized records with 100% on-prem data privacy.",
    features: [
      "Developed a CRNN-CTC OCR pipeline trained on 5,000+ word images, achieving 92–95% accuracy and delivering 3× performance improvement on noisy, stamped police documents.",
      "Applied multi-source training and retrieval to handle high handwriting variance, enabling instant keyword search and case analysis and reducing manual lookup time from hours to seconds."
    ],
    technologies: ["Python", "PyTorch", "CRNN-CTC", "OpenCV", "Offline LLM"],
    category: "AI/ML",
    githubLink: "https://github.com/Chiccoo-oo/CGPD-OCR.git",
    demoLink: "#",
    status: "Completed",
    image: "/cgpd_ocr.png",
    iconName: "Shield"
  },
  {
    name: "Bidirectional Neural Transliteration Service (Kaithi ↔ Hindi)",
    description: "Engineered a custom Sequence-to-Sequence (Seq2Seq) LSTM neural network in PyTorch to automate character-level transliteration, achieving 94% validation accuracy.",
    features: [
      "Engineered a custom Sequence-to-Sequence (Seq2Seq) LSTM neural network in PyTorch to automate character-level transliteration, achieving 94% validation accuracy.",
      "Architected a highly scalable REST backend with FastAPI to serve the PyTorch inference engine, exposing 2 core bidirectional endpoints that process real-time text queries with <50ms latency and can seamlessly handle 100+ concurrent requests per second.",
      "Compressed the trained model footprint to just ~900 KB, reducing memory overhead by 95% compared to standard NLP models and enabling highly efficient inference."
    ],
    technologies: ["Python", "PyTorch", "GANs", "FastAPI", "Deep Learning", "LSTM"],
    category: "Research",
    githubLink: "https://github.com/Chiccoo-oo/Kaithi-Bidirectional-Translaor",
    demoLink: "#",
    status: "Completed",
    image: "/kaithi_transliterator.png",
    iconName: "Languages"
  }
];

export const experienceData: Experience[] = [
  {
    position: "R&D Intern",
    organization: "Samsung Research & Development",
    duration: "September 2025",
    responsibilities: [
      "Designed and implemented robust error-handling and validation pipelines for LLM outputs, addressing multiple edge-case categories (ambiguous queries, missing context, conflicting inputs) and improving structured response reliability by 25–35%."
    ],
    technologies: ["Python", "LLMs", "JSON Schema Validation", "Prompt Engineering"]
  },
  {
    position: "Research Assistant",
    organization: "IIIT Naya Raipur",
    duration: "Aug 2024 - Dec 2024",
    responsibilities: [
      "Modeled a machine learning model using liver function tests for disease classification, achieving 99.94% accuracy using L2-regularized XGBoost."
    ],
    technologies: ["Python", "XGBoost", "Scikit-Learn", "Explainable AI (SHAP)", "Feature Engineering"]
  },
  {
    position: "Full Stack Website Developer",
    organization: "Chhattisgarh Police (Digital Initiative)",
    duration: "Jun 2024 - Present",
    responsibilities: [
      "Developed the official Chhattisgarh Police government website under a Digital Initiative, implementing role-based access control, secure APIs, and a scalable architecture to support 5,000+ users/month with 99% uptime and improved page load time by 30%."
    ],
    technologies: ["React", "FastAPI", "MySQL", "Docker", "GCP", "API Security"]
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "GFG x Naukri Ring of Honour",
    details: "Won 1st Place in the national Engineer's Ring of Honour algorithmic challenge (2025).",
    metric: "1st Place",
    iconName: "Trophy"
  },
  {
    title: "GOI IDEA ONE Hackathon Winner",
    details: "Won first prize in the national IDEA ONE Hackathon (2025) among 600+ competing teams.",
    metric: "Winner",
    iconName: "Trophy"
  },
  {
    title: "Chhattisgarh Envirothon Winner",
    details: "Won the Envirothon (2025) for designing sustainable, real-time AI solutions among 100+ teams.",
    metric: "Winner",
    iconName: "Award"
  },
  {
    title: "Hackathon Finalist (8+ Hackathons)",
    details: "Reached the final rounds of 8+ hackathons, including finishing as the 3rd Runner-up in Microsoft Code Cubicle 5.0.",
    metric: "Finalist",
    iconName: "Star"
  },
  {
    title: "Codess.Cafe Mentee",
    details: "Selected as a mentee for the prestigious Codess.Cafe community for tech mentorship.",
    metric: "Selected",
    iconName: "BookOpen"
  },
  {
    title: "Competitive Programming",
    details: "Solved 1000+ DSA problems on LeetCode, reached 4-Star coder rating on CodeChef, and achieved Expert rank on Codeforces.",
    metric: "Expert",
    iconName: "Code"
  },
  {
    title: "Infosys Pragati & SheFi Scholar",
    details: "Selected for the Infosys Pragati Cohort 2 and chosen as a SheFi Scholar in 2025.",
    metric: "Scholar",
    iconName: "Award"
  }
];

export const publicationsData: Publication[] = [
  {
    title: "Detectify: Optimized Network Traffic Anomaly Detection",
    abstract: "This research proposes an optimized classification model for detecting anomalies in high-throughput network environments. Using custom feature engineering pipelines and model compression techniques, we outline a fast inference module yielding high accuracy with minimal CPU cycle overhead.",
    journal: "IEEE NetCrypt 2025, JNU",
    date: "2025",
    pdfLink: "https://ieeexplore.ieee.org/document/11102623"
  }
];

export const certificationsData: Certification[] = [
  {
    name: "Infosys Pragati Cohort 2",
    organization: "Infosys",
    date: "2025",
    credentialLink: "#"
  },
  {
    name: "SheFi Scholar 2025",
    organization: "SheFi",
    date: "2025",
    credentialLink: "#"
  },
  {
    name: "Codess.Cafe Mentorship",
    organization: "Codess.Cafe",
    date: "2024",
    credentialLink: "#"
  }
];

export const leadershipData: Leadership[] = [
  {
    title: "Head Placement Coordinator",
    organization: "Training and Placement Cell, IIIT-NR",
    role: "Placement Head (2024 - Present)",
    description: "Organizing training drives, managing company outreach initiatives, and mentoring students for software development and analytics placement pipelines."
  },
  {
    title: "Science and Technology Secretary",
    organization: "Student Council, IIIT-NR",
    role: "Secretary (2023 - 2024)",
    description: "Supervised technical clubs (Coding, AI, IoT), hosted local hackathons, and structured the academic science events schedule."
  },
  {
    title: "Documentation Coordinator",
    organization: "MUN Club, IIIT-NR",
    role: "Coordinator (2023 - 2024)",
    description: "Maintained session records, coordinated conference documentation, and supervised resolution logs for delegate meetings."
  }
];
