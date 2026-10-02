// =====================================================================
//  Single source of truth for the portfolio content.
//  Edit this file to update the site — no admin panel, no database.
// =====================================================================

// Show dashed placeholders for images that have not been added yet.
// Set to false before going live if some images are still missing.
export const showImagePlaceholders = true;

export const profile = {
  name: "Ibtihal Addala",
  firstName: "Ibtihal",
  lastName: "Addala",
  initials: "IA",
  role: "Future State Engineer in Computer Science and Networks",
  specialization: "Data & Artificial Intelligence",
  location: "Dar Bouazza, Casablanca, Morocco",
  email: "ibtihaaaddala@gmail.com",
  phone: "+212 688 652 592",
  phoneHref: "+212688652592",
  cvPath: "/cv-ibtihal-addala.pdf",
  // Portrait photo — portrait format recommended (e.g. 800 x 1000 px).
  photo: "/images/profile.jpg",
  // Second image shown next to the "About me" text (desktop), 3:4 format.
  aboutImage: "/images/about.jpg",
  availability: "Open to a 6-month PFE internship — February 2027",
  // Leave a link empty ("") to hide it from the site.
  links: {
    github: "https://github.com/ibtihal4002",
    linkedin: "https://www.linkedin.com/in/ibtihal-addala-14a913300/",
  },
  headline:
    "I turn operational data into reliable pipelines, predictive models and dashboards that teams can act on.",
  about: [
    "Final-year Computer Engineering student at the Moroccan School of Engineering Sciences (EMSI), specializing in Data and Artificial Intelligence.",
    "I have applied machine learning in an industrial setting — quality prediction at Ciments du Maroc with XGBoost, Random Forest and ElasticNet, served through FastAPI and monitored in Power BI — and automated data pipelines and database design during an earlier internship.",
    "I am seeking a 6-month graduation internship (PFE) starting in February 2027 in Data Science and AI, and I am eager to contribute my skills in machine learning, data engineering and intelligent systems to impactful research or industry projects.",
  ],
};

// Section texts
export const content = {
  experienceKicker: "Internships in industrial machine learning and data automation.",
  projectsKicker: "Academic projects from AI and data systems to web, mobile and embedded work. More on GitHub.",
  otherProjectsTitle: "Other academic projects",
  contactTitle: "Looking for a PFE intern in",
  contactHighlight: "Data Science & AI",
  contactText: "Available for a 6-month graduation internship starting February 2027. Let's talk.",
};

export const stats = [
  { value: "5th", label: "Year of engineering" },
  { value: "2", label: "Internships" },
  { value: "9", label: "Academic projects" },
  { value: "Feb 2027", label: "PFE availability" },
];

export type Experience = {
  title: string;
  logo?: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    title: "Data & Artificial Intelligence Intern",
    company: "Ciments du Maroc",
    logo: "/images/logos/ciments-du-maroc.png",
    period: "Jul 2026 — Sep 2026",
    location: "Casablanca, Morocco",
    points: [
      "Built an industrial quality prediction system using XGBoost, Random Forest and ElasticNet.",
      "Deployed FastAPI backend endpoints and integrated interactive Power BI dashboards for real-time monitoring.",
    ],
    stack: ["Python", "XGBoost", "Random Forest", "ElasticNet", "FastAPI", "Power BI"],
  },
  {
    title: "Database & Automation Intern",
    company: "Forum International Computer Maroc",
    logo: "/images/logos/forum-international-computer.png",
    period: "Jul 2025",
    location: "Morocco",
    points: [
      "Automated data transfer pipelines from Excel spreadsheets to a centralized database.",
      "Designed a structured database architecture to secure and organize operational data.",
      "Implemented validation scripts to ensure data consistency, integrity and reliability.",
    ],
    stack: ["Excel", "SQL", "Database Design", "Data Validation", "Automation"],
  },
];

export type Project = {
  title: string;
  image?: string; // cover image, 16:10 recommended (e.g. 1600 x 1000 px)
  category: string;
  period: string;
  summary: string;
  points?: string[];
  stack: string[];
  link?: string;
  featured?: boolean; // featured = large card with image; otherwise compact list
};

export const projects: Project[] = [
  {
    title: "Agentic Knowledge Graph RAG System",
    image: "/images/projects/agentic-kg-rag.jpg",
    category: "AI · LLM",
    period: "2025 — 2026",
    summary: "An agentic retrieval-augmented generation (RAG) system built on a knowledge graph.",
    stack: ["AI", "RAG", "Knowledge Graph"],
    featured: true,
  },
  {
    title: "Bibliothèque Mobile",
    image: "/images/projects/bibliotheque-mobile.jpg",
    category: "Mobile Application",
    period: "2025 — 2026",
    summary: "A mobile library application.",
    stack: ["Mobile"],
    featured: true,
  },
  {
    title: "Online Recruitment Platform",
    image: "/images/projects/recruitment-platform.jpg",
    category: "Full-Stack Web",
    period: "2024 — 2025",
    summary: "An online recruitment platform developed with Django.",
    stack: ["Django", "Python"],
    featured: true,
  },
  {
    title: "Database Design & Modeling",
    image: "/images/projects/database-design.jpg",
    category: "Data · BI",
    period: "2024 — 2025",
    summary: "Database design and modeling project using SQL, Microsoft Power BI and Python.",
    stack: ["SQL", "Microsoft Power BI", "Python"],
    featured: true,
  },
  {
    title: "Music Playlist Management System",
    category: "Web",
    period: "2024 — 2025",
    summary: "Playlist management system built with PHP and Symfony 7.",
    stack: ["PHP", "Symfony 7"],
  },
  {
    title: "Dental Clinic Management System",
    category: "Software",
    period: "2023 — 2024",
    summary: "Management system for a dental clinic, written in C.",
    stack: ["C"],
  },
  {
    title: "Smoke Detector",
    category: "Embedded",
    period: "2023 — 2024",
    summary: "Smoke detector built with Arduino.",
    stack: ["Arduino"],
  },
  {
    title: "Astable Multivibrator Circuit Study",
    category: "Electronics",
    period: "2023 — 2024",
    summary: "Study of an astable multivibrator circuit based on bipolar transistors.",
    stack: ["Electronics"],
  },
  {
    title: "Bank Management System",
    category: "Software",
    period: "2022 — 2023",
    summary: "Bank management system written in C.",
    stack: ["C"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  {
    group: "AI & Machine Learning",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "Deep Learning", "Predictive Modeling"],
  },
  { group: "Data & Analysis", items: ["pandas", "ETL", "Microsoft Power BI"] },
  {
    group: "Databases",
    items: ["Oracle", "MySQL", "T-SQL", "Neo4j", "MongoDB", "Cassandra"],
  },
  { group: "Backend", items: ["PHP (Symfony 7)", "Java", "FastAPI", "Django"] },
  { group: "Frontend & Mobile", items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React Native"] },
  { group: "Operating Systems", items: ["Linux", "Windows"] },
  { group: "Tools", items: ["Microsoft Power BI", "Microsoft Office"] },
];

export const softSkills = [
  "Time Management",
  "Team Spirit",
  "Problem Solving",
  "Autonomy",
  "Creativity",
  "Adaptability",
];

export const education = [
  {
    degree: "Engineering Degree in Computer Science and Networks — Data & AI (5th year)",
    school: "Moroccan School of Engineering Sciences (EMSI)",
    place: "Casablanca",
    period: "2022 — Present",
  },
  {
    degree: "Faculty of Sciences — Biology major",
    school: "",
    place: "",
    period: "2021 — 2022",
  },
  {
    degree: "Baccalaureate in Physical Sciences",
    school: "",
    place: "",
    period: "2020 — 2021",
  },
];

export const certifications: { name: string; issuer: string; link?: string }[] = [
  {
    name: "Interactivity with JavaScript",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/IV16ZPC1MM7F",
  },
  {
    name: "Introduction to Object-Oriented Programming (C++)",
    issuer: "Coursera",
    // Same verification link as above in the CV — replace with the correct one.
    link: "",
  },
];

export const languages = [
  { name: "Arabic", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Intermediate" },
];

// Leave empty to hide the "Interests" block.
export const interests: string[] = [];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
