// Single source of truth for all portfolio content.
// Ported from ujjwalkumar.me (github.com/ujjwal509kumar) and lightly cleaned up.

export const profile = {
  name: "Ujjwal Kumar",
  initials: "UK",
  title: "Full Stack Developer",
  tagline:
    "I turn complex problems into simple, beautiful and intuitive experiences for the web.",
  location: "Bengaluru, Karnataka, India",
  available: false,
  email: "ujjwal509kumar@gmail.com",
  phone: "+91 9470880244",
  phoneHref: "+919470880244",
  birthday: "August 8, 2002",

  about: [
    "I'm a full stack developer specializing in React.js, Next.js, Node.js, and cloud technologies. I enjoy turning complex problems into simple, beautiful and intuitive web applications.",
    "My job is to build your website or application so that it is functional and user-friendly, but at the same time attractive. I add a personal touch to your product and make sure it's eye-catching and easy to use — bringing across your message and identity in the most creative way.",
  ],
} as const;

export type Social = {
  label: string;
  href: string;
  // lucide icon name resolved in the component
  icon: "github" | "linkedin" | "twitter" | "instagram" | "facebook";
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ujjwal509kumar", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ujjwal-kumar-62ba63212/",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://twitter.com/ujjwal509kumar", icon: "twitter" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ujjwalkumar_404/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100027434687520",
    icon: "facebook",
  },
];

export type Service = {
  icon: "palette" | "code";
  title: string;
  text: string;
};

export const services: Service[] = [
  {
    icon: "code",
    title: "Full Stack Web Development",
    text: "End-to-end web applications using React.js, Next.js, Node.js, and modern databases.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    text: "High-quality UI design and prototyping for professional apps and the web.",
  },
];

export type TimelineEntry = {
  title: string;
  org?: string;
  period: string;
  text?: string;
};

export const education: TimelineEntry[] = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "JSS Academy of Technical Education, Bangalore",
    period: "Nov 2023 — Sept 2025",
    text: "CGPA: 8.89/10.0",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "Bangalore Institute of Management Studies, Bangalore",
    period: "Jul 2020 — Aug 2023",
    text: "CGPA: 8.17/10.0",
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Full Stack + DevOps Intern",
    org: "BONI, Bengaluru",
    period: "Sept 2025 — Nov 2025",
    text: "Worked on Next.js, Node.js, REST APIs, RabbitMQ, ArgoCD, Kubernetes, and Jenkins for multiple production systems. Built and maintained the internal admin panel used for operations and workflow management. Developed an AI-powered Reddit automation system using agentic AI to generate contextual posts and comments and publish them automatically.",
  },
  {
    title: "Full Stack Developer + Cloud Intern",
    org: "JSS Academy of Technical Education & JSS Medical College, Bengaluru & Mysuru",
    period: "Mar 2025 — Aug 2025",
    text: "Designed and developed AISHA (Artificial Intelligence Powered Students Health Assessment) for student health monitoring. Built scalable modules using Next.js, REST APIs, and PostgreSQL with role-based access and notifications. Deployed the platform on Azure and GCP. Received copyright approval from the Government of India (Application No: SW-27477/2025-CO).",
  },
  {
    title: "Web Developer & System Consultant",
    org: "Dreamforce Technologies Pvt. Ltd., Bengaluru",
    period: "Nov 2024 — Jan 2025",
    text: "Gathered stakeholder requirements and developed a web portal and backend system for internship management. Built an admin dashboard for generating digital internship certificates with secure PDF automation and role-based access control.",
  },
];

export type Skill = { label: string; value: number };

export const skills: Skill[] = [
  { label: "React.js / Next.js", value: 90 },
  { label: "Node.js / Backend", value: 85 },
  { label: "JavaScript / TypeScript", value: 85 },
  { label: "PostgreSQL / MongoDB", value: 80 },
  { label: "DevOps / Cloud (Azure, GCP)", value: 75 },
  { label: "Tailwind CSS / UI Design", value: 80 },
];
