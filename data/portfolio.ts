export type CareerEntry = {
  id: string;
  kind: "education" | "experience";
  title: string;
  organization?: string;
  location?: string;
  period?: string;
  dateTime?: string;
  startPeriod?: string;
  startDateTime?: string;
  grade?: { label?: string; value: string; scale: string };
  description?: string;
  responsibilities?: readonly string[];
  technologies?: readonly string[];
  placeholder?: boolean;
};

// Only verified facts belong in these entries.
export const careerEntries: readonly CareerEntry[] = [
  {
    id: "masters-applied-computer-science",
    kind: "education",
    title: "Master of Science in Applied Computer Science",
    organization: "SRH University Heidelberg",
    location: "Germany",
    period: "March 2026",
    dateTime: "2026-03",
    startPeriod: "April 2024",
    startDateTime: "2024-04",
    grade: {
      value: "2.0",
      scale: "German grading scale; 1.0 is the highest grade",
    },
  },
  {
    id: "bachelor-information-science-and-engineering",
    kind: "education",
    title: "Bachelor of Engineering in Information Science and Engineering",
    organization: "Don Bosco Institute of Technology",
    location: "India",
    period: "May 2023",
    dateTime: "2023-05",
    startPeriod: "August 2019",
    startDateTime: "2019-08",
    grade: {
      label: "CGPA",
      value: "7.6",
      scale: "",
    },
  },
  {
    id: "deepinsightsx-full-stack-developer-intern",
    kind: "experience",
    title: "Full Stack Developer Intern — AI Applications",
    organization: "DeepInsightsX",
    location: "Berlin, Germany",
    period: "February 2026",
    dateTime: "2026-02",
    startPeriod: "September 2025",
    startDateTime: "2025-09",
    responsibilities: [
      "Contributed to frontend and backend development of an AI-powered web application.",
      "Redesigned the application interface using React.js and Tailwind CSS, improving its structure and usability.",
      "Worked on backend API development and integration using Python and FastAPI.",
      "Worked with Redis-based background task processing for asynchronous application workflows.",
      "Contributed to connecting frontend components with backend services and Firebase Firestore.",
      "Collaborated with the development team on debugging, testing, and implementing application features.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Python", "FastAPI", "Redis", "Firebase Firestore"],
  },
];

export type Technology = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases and Cloud" | "Development Tools";
  icon: string | null;
  invertInDark?: boolean;
};

export const skills: readonly Technology[] = [
  { name: "Python", category: "Languages", icon: "/icons/skills/python.svg" },
  { name: "JavaScript", category: "Languages", icon: "/icons/skills/javascript.svg" },
  { name: "TypeScript", category: "Languages", icon: "/icons/skills/typescript.svg" },
  { name: "React", category: "Frontend", icon: "/icons/skills/react.svg" },
  { name: "HTML5", category: "Frontend", icon: "/icons/skills/html5.svg" },
  { name: "CSS3", category: "Frontend", icon: "/icons/skills/css3.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/skills/tailwindcss.svg" },
  { name: "FastAPI", category: "Backend", icon: "/icons/skills/fastapi.svg" },
  // A neutral SQL symbol avoids implying knowledge of an unprovided database vendor.
  { name: "SQL", category: "Databases and Cloud", icon: null },
  { name: "Google Cloud Platform", category: "Databases and Cloud", icon: "/icons/skills/googlecloud.svg" },
  { name: "Git", category: "Development Tools", icon: "/icons/skills/git.svg" },
  { name: "GitHub", category: "Development Tools", icon: "/icons/skills/github.svg", invertInDark: true },
  { name: "Docker", category: "Development Tools", icon: "/icons/skills/docker.svg" },
];
export const profile = {
  name: "Arvind Nataraj",
  firstName: "Arvind",
  lastName: "Nataraj",
  tagline: "Software Developer | Full-Stack & AI",
  availability: "Open to Software Development Opportunities",
  introduction: [
    { text: "I'm an " },
    { text: "Applied Computer Science", highlight: true },
    { text: " graduate who enjoys building practical " },
    { text: "web applications", highlight: true },
    { text: ", working with " },
    { text: "backend systems", highlight: true },
    { text: ", and exploring " },
    { text: "artificial intelligence", highlight: true },
    { text: "." },
  ],
};

// Add only verified destinations. A null value renders a non-interactive action.
export const contactDetails: {
  github: string;
  linkedin: string | null;
  email: string | null;
  resume: string | null;
} = {
  github: "https://github.com/ArvindNataraj06",
  linkedin: "https://www.linkedin.com/in/arvind-nataraj-3b4b72320/",
  email: "arvind061201@gmail.com",
  resume: null,
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const siteMetadata = {
  title: "Arvind Nataraj | Software Developer Portfolio",
  description:
    "Explore Arvind Nataraj's software development projects, technical skills, education, and experience.",
};

export const contactContent = {
  heading: "Let's Build Something Great Together.",
  description:
    "I'm open to software development opportunities, collaborations, and interesting projects.",
};


export type ProjectDescriptionSegment = { text: string; highlight?: boolean };

export type Project = {
  id: string;
  title: string;
  description: readonly ProjectDescriptionSegment[];
  category: string;
  status: string;
  technologies: readonly string[];
  visual: "leads" | "documents" | "traffic";
  repositoryUrl?: string;
};

// Project details and repository URLs supplied by Arvind.
export const projects: readonly Project[] = [
  {
    id: "meta-lead-ads",
    title: "Meta Lead Ads: Real-Time React Native PoC",
    category: "Real-Time Systems",
    status: "Completed PoC",
    description: [
      { text: "Built a " },
      { text: "real-time integration", highlight: true },
      { text: " using Meta Webhooks and Graph API, Express verification, and Socket.IO to deliver new leads to an open React Native app " },
      { text: "without manual refresh", highlight: true },
      { text: "." },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Socket.IO", "Meta Graph API", "ngrok"],
    visual: "leads",
    repositoryUrl: "https://github.com/ArvindNataraj06/Meta-Lead-ads-PoC",
  },
  {
    id: "ai-traffic-alert-dashboard",
    title: "Traffic Incident Prediction & Intelligent Alert Dashboard",
    category: "Machine Learning & LLM",
    status: "Master's Thesis",
    description: [
      { text: "Made traffic predictions easier to interpret through " },
      { text: "lane-state prediction", highlight: true },
      { text: " with Random Forest and CatBoost, plus a LoRA fine-tuned Llama 3.2 model for " },
      { text: "AI-generated safety explanations", highlight: true },
      { text: " and risk assessment." },
    ],
    technologies: ["Python", "FastAPI", "Scikit-learn", "CatBoost", "PyTorch", "Transformers", "PEFT", "Hugging Face", "React", "TypeScript", "Leaflet"],
    visual: "traffic",
    repositoryUrl: "https://github.com/ArvindNataraj06/Thesis",
  },
  {
    id: "event-scheduling",
    title: "Event Scheduling & Management App",
    category: "Full-Stack & Software Testing",
    status: "Academic Team Project",
    description: [
      { text: "Collaborated on an " },
      { text: "event scheduling", highlight: true },
      { text: " app to bring event workflows together. Contributed creation forms, event details and tags, " },
      { text: "search and filtering", highlight: true },
      { text: ", and Jest unit tests." },
    ],
    technologies: ["React", "Redux", "JavaScript", "HTML", "CSS", "Jest", "Cypress", "GitHub Actions"],
    visual: "leads",
    repositoryUrl: "https://github.com/ArvindNataraj06/usability-testing-and-verification-testtrio",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection: Google AutoML vs Custom ML",
    category: "Cloud AI & Model Comparison",
    status: "Academic Group Project",
    description: [
      { text: "Developed a comparative fraud-detection app using approximately " },
      { text: "6.6 million transactions", highlight: true },
      { text: " to compare " },
      { text: "AutoML vs custom models", highlight: true },
      { text: ", exploring automation and model flexibility while displaying transaction predictions and confidence scores." },
    ],
    technologies: ["Google Vertex AI", "Google Cloud Platform", "Python", "Scikit-learn", "PyTorch", "React", "Flask", "Node.js", "Express"],
    visual: "traffic",
    repositoryUrl: "https://github.com/ArvindNataraj06/fraud-detection-automl-vs-custom-model-GroupProject",
  },
  {
    id: "docatlas",
    title: "DocAtlas: AI-Powered Document Intelligence",
    category: "RAG & Document AI",
    status: "In Development",
    description: [
      { text: "Developing a " },
      { text: "document intelligence", highlight: true },
      { text: " app to reduce time spent searching lengthy PDFs, focused on ingestion, text extraction, retrieval-augmented generation, and " },
      { text: "contextual question answering", highlight: true },
      { text: "." },
    ],
    technologies: ["Python", "FastAPI", "PyMuPDF", "RAG", "Embeddings"],
    visual: "documents",
  },
];
