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
  grade?: { value: string; scale: string };
  description?: string;
  placeholder?: boolean;
};

// Only verified facts belong in these entries. Replace the placeholder when ready.
export const careerEntries: readonly CareerEntry[] = [
  {
    id: "masters-applied-computer-science",
    kind: "education",
    title: "M.Sc. Applied Computer Science",
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
    id: "experience-pending",
    kind: "experience",
    title: "Professional details coming soon",
    description:
      "Employer, role, dates, and responsibilities will be added once verified.",
    placeholder: true,
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
  { name: "Node.js", category: "Backend", icon: "/icons/skills/nodejs.svg" },
  { name: "FastAPI", category: "Backend", icon: "/icons/skills/fastapi.svg" },
  { name: "Flask", category: "Backend", icon: "/icons/skills/flask.svg", invertInDark: true },
  // A neutral SQL symbol avoids implying knowledge of an unprovided database vendor.
  { name: "SQL", category: "Databases and Cloud", icon: null },
  { name: "Firebase", category: "Databases and Cloud", icon: "/icons/skills/firebase.svg" },
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


export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  visual: "leads" | "documents" | "traffic";
  repositoryUrl?: string;
  demoUrl?: string;
};

// Descriptions supplied by Arvind. Screenshots and project URLs are pending.
export const projects: readonly Project[] = [
  {
    id: "meta-lead-ads",
    title: "Meta Lead Ads Live PoC",
    description:
      "Real-time lead events from Meta Lead Ads are delivered through a backend and displayed in a React Native application.",
    technologies: ["React Native", "Node.js", "Express", "Socket.IO"],
    visual: "leads",
  },
  {
    id: "docatlas",
    title: "DocAtlas",
    description:
      "A Python-based document processing and PDF question-answering project exploring retrieval-augmented generation.",
    technologies: ["Python", "PyMuPDF", "RAG concepts"],
    visual: "documents",
  },
  {
    id: "ai-traffic-alert-dashboard",
    title: "AI Traffic Alert Dashboard",
    description:
      "A traffic monitoring and predictive modeling project using React, Python, and TomTom traffic data.",
    technologies: ["React", "Python", "Flask", "TomTom API"],
    visual: "traffic",
  },
];
