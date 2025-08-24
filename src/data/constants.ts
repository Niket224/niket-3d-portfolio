// thoda zada ts ho gya idhar
export enum SkillNames {
  AWS = "aws",
  LINUX = "linux",    
  GIT = "git",
  DOCKER = "docker",
  HTML = "html",
  CSS = "css",
  JS = "js",
  JAVA = "java",
  POSTGRES = "postgres",
  TS = "ts",         //
  REACT = "react",   //
  VUE = "vue",       //
  NEXTJS = "nextjs", //
  TAILWIND = "tailwind",  //
  NODEJS = "nodejs",  //
  EXPRESS = "express",  // 
  MONGODB = "mongodb",  //
  GITHUB = "github",   //
  PRETTIER = "prettier",  //
  NPM = "npm",       //
  FIREBASE = "firebase",  //
  WORDPRESS = "wordpress",  //
  NGINX = "nginx",      //
  VIM = "vim",           //
  VERCEL = "vercel",    //
  PYTHON = "python",
  CPP = "cpp",
  BOOTSTRAP = "bootstrap",
  VSCODE = "vscode",
  ALGORITHMS = "algorithms",
  COMPETITIVE = "competitive",
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
    shortDescription: "Building interactive web experiences with modern JavaScript! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type-safe JavaScript for robust and scalable applications! 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The foundation of every web page, still going strong! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Making websites beautiful with the power of styling! 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building dynamic user interfaces with React components! ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework for production-ready apps! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility-first CSS framework for rapid UI development! 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 8,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "Responsive CSS framework for modern web design! 🎨",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for building scalable backend applications! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Fast, unopinionated web framework for Node.js! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Powerful, open-source relational database system! 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL database for modern applications! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 13,
    name: "python",
    label: "Python",
    shortDescription: "Versatile programming language for web, data, and automation! 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 14,
    name: "cpp",
    label: "C++",
    shortDescription: "High-performance programming for competitive coding! ⚡",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.GIT]: {
    id: 15,
    name: "git",
    label: "Git",
    shortDescription: "Version control system for collaborative development! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 16,
    name: "github",
    label: "GitHub",
    shortDescription: "Platform for code collaboration and project hosting! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 17,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Powerful code editor for modern development! 💻",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform for consistent deployments! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system for development! 🐧",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.AWS]: {
    id: 20,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud computing platform for scalable applications! ☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 21,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Platform for deploying modern web applications! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.ALGORITHMS]: {
    id: 22,
    name: "algorithms",
    label: "Data Structures & Algorithms",
    shortDescription: "Problem-solving fundamentals for efficient coding! 🧠",
    color: "#ff6b6b",
    icon: "https://img.icons8.com/color/96/000000/algorithm.png",
  },
  [SkillNames.COMPETITIVE]: {
    id: 23,
    name: "competitive",
    label: "Competitive Programming",
    shortDescription: "Solving algorithmic challenges on platforms like LeetCode! 🏆",
    color: "#4ecdc4",
    icon: "https://img.icons8.com/color/96/000000/code.png",
  },
  [SkillNames.JAVA]: {
    id: 24,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented programming language for enterprise applications! ☕",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.VUE]: {
    id: 25,
    name: "vue",
    label: "Vue.js",
    shortDescription: "Progressive JavaScript framework for building user interfaces! 🟢",
    color: "#4fc08d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 26,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter for consistent code style! ✨",
    color: "#f7b93e",
    icon: "https://prettier.io/icon.png",
  },
  [SkillNames.NPM]: {
    id: 27,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for JavaScript! 📦",
    color: "#cb3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 28,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Google's mobile and web application development platform! 🔥",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 29,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Content management system for websites! 📝",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.NGINX]: {
    id: 30,
    name: "nginx",
    label: "Nginx",
    shortDescription: "High-performance web server and reverse proxy! 🚀",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.VIM]: {
    id: 31,
    name: "vim",
    label: "Vim",
    shortDescription: "Highly configurable text editor! ⌨️",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

