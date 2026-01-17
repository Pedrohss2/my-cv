import { JSX } from "react";
import { FaJs, FaNodeJs, FaReact, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiNextdotjs, SiPostgresql, SiMysql, SiTailwindcss, SiShadcnui, SiSocketdotio, SiPrisma, SiPython, SiSparkar, SiSqlalchemy } from "react-icons/si";

type Tech = {
    name: string;
    icon: JSX.Element;
}

export const techs: Tech[] = [
    { name: "JavaScript", icon: <FaJs className="w-6 h-6 text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6 text-blue-500" /> },
    { name: "Spark", icon: <SiSparkar className="w-6 h-6 text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
    { name: "Nest.js", icon: <SiNestjs className="w-6 h-6 text-red-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
    { name: "React.js", icon: <FaReact className="w-6 h-6 text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-700" /> },
    { name: "Mysql", icon: <SiMysql className="w-6 h-6 text-blue-600" /> },
    { name: "REST APIs", icon: <FaNodeJs className="w-6 h-6 text-green-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-blue-400" /> },
    { name: "Shadcn", icon: <SiShadcnui className="w-6 h-6 text-blue-400" /> },
    { name: "Socket", icon: <SiSocketdotio className="w-6 h-6 text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-white" /> },
    { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-indigo-400" /> },
    { name: "Docker", icon: <FaDocker className="w-6 h-6 text-blue-400" /> },
];
