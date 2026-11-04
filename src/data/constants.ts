// Skills & Experience data for Sofia Azzahra Alamsyah
// Note: SkillNames enum keys match the 3D Spline keyboard keycap object names.
// The labels and descriptions are customized for Sofia's profile.
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "The language of the web — versatile and everywhere! 🌐✨",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript with superpowers — type-safe and reliable! 💎🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The backbone of every web page — structure matters! 🏗️📄",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Making things look beautiful, one style at a time! 🎨💅",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building interactive UIs with component-based magic! ⚛️🚀",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "The progressive framework — approachable and powerful! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Full-stack React framework — SSR, SSG, and beyond! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS — rapid styling made easy! 🌪️🎨",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the server — fast and event-driven! ⚡🔧",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Minimal and flexible Node.js web framework! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "The world's most advanced open source database! 🐘💎",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL database for modern applications! 🍃📊",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control — tracking every change with care! 🔄📝",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives and collaboration happens! 🐙🤝",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter — keeping code clean and consistent! 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "The package manager for JavaScript ecosystem! 📦🔗",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Google's app development platform — backend made easy! 🔥☁️",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "The world's most popular CMS — powering the web! 🌍📰",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open source OS — the foundation of servers worldwide! 🐧💻",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization — ship anywhere with confidence! 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "High-performance web server and reverse proxy! 🚀⚡",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Amazon's cloud platform — scalable infrastructure! ☁️🌐",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Google's cloud computing — AI and data at scale! ☁️🧠",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "The powerful text editor — efficiency in every keystroke! ⌨️⚡",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploy and scale with ease — the frontend cloud! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Feb 2026",
    endDate: "Present",
    title: "Class Administrator",
    company: "HariSenin",
    description: [
      "Managed attendance records, permission data, and activity tracking via Slack for 50+ participants.",
      "Ensured data accuracy and timely reporting across remote team operations.",
      "Coordinated communication between instructors and participants for seamless program delivery.",
    ],
    skills: [
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    title: "Data Admin",
    company: "Mathematicalsolving",
    description: [
      "Organized and maintained student score datasets using Google Spreadsheet with high data accuracy standards.",
      "Developed systematic data entry workflows ensuring consistency across multiple data sources.",
      "Created mathematical learning modules and exercises for elementary to high school level students.",
    ],
    skills: [
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Mar 2024",
    endDate: "Sep 2024",
    title: "Data Science Intern (MSIB)",
    company: "Cokop",
    description: [
      "Completed a 6-month Merdeka Belajar Kampus Merdeka (MSIB) program focused on Data Science.",
      "Built end-to-end predictive regression models on real-world garment worker productivity datasets using Python (Pandas, Scikit-learn).",
      "Performed comprehensive data cleaning, feature engineering, and exploratory data analysis (EDA) to uncover key productivity drivers.",
      "Delivered actionable data visualizations and statistical insights to support strategic business decision-making.",
    ],
    skills: [
      SkillNames.POSTGRES,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Light mode activated! Time to see the data in full clarity! ☀️",
    "Switching to light mode — every data point is now crystal clear!",
    "Bright ideas need bright screens. Welcome to light mode!",
    "Light mode on! Perfect for reading those SQL queries!",
    "Let there be light! And let there be clean data visualizations!",
  ],
  dark: [
    "Dark mode on — the preferred theme for late-night data crunching!",
    "Welcome to the dark side of Data Scienceing! 🌙",
    "Dark mode activated — easier on the eyes during those long coding sessions.",
    "Back to dark mode! Where every data pipeline runs smoother!",
    "Dark mode — because real Data Sciences code in the dark! 🖥️✨",
  ],
};
