export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  vercel?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью",
    image: "/images/project1.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourname/e-commerce",
    vercel: "https://e-commerce.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Manager Pro",
    description:
      "Приложение для управления задачами с drag-and-drop и real-time обновлениями",
    image: "/images/project2.jpg",
    techStack: ["React", "Redux", "Socket.io", "Node.js"],
    github: "https://github.com/yourname/task-manager",
    vercel: "https://task-manager.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description:
      "Интерактивный дашборд для отслеживания инвестиций с графиками",
    image: "/images/project3.jpg",
    techStack: ["Next.js", "D3.js", "TailwindCSS"],
    github: "https://github.com/yourname/dashboard",
    vercel: "https://dashboard.vercel.app",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Клон социальной сети с постами, лайками и комментариями",
    image: "/images/project4.jpg",
    techStack: ["React Native", "Firebase", "GraphQL"],
    github: "https://github.com/yourname/social-app",
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript", level: 92 },
  { name: "TailwindCSS", level: 85 },
  { name: "Redux / Zustand", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "PostgreSQL", level: 70 },
];

export interface ContactInfo {
  email: string;
  phone?: string;
  telegram?: string;
  github: string;
  linkedin?: string;
}

export const contactInfo: ContactInfo = {
  email: "your.email@example.com",
  phone: "+7 (999) 123-45-67",
  telegram: "@yourtelegram",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
};
