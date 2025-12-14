"use client";

import Button from "../Button/Button";
import SkillCard from "./SkillCard";
import useInView from "../../hooks/useInView";
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiMysql, SiTailwindcss, SiPrisma, SiSocketdotio } from "react-icons/si";
import { FaJs, FaJava, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";

export default function About() {
  const inview = useInView<HTMLDivElement>();

  const techs = [
    { name: "JavaScript", icon: <FaJs className="w-6 h-6 text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
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
    { name: "Socket", icon: <SiSocketdotio className="w-6 h-6 text-purple-500" /> },
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-white" /> },
    { name: "Prisma", icon: <SiPrisma className="w-6 h-6 text-indigo-400" /> },
    { name: "Docker", icon: <FaDocker className="w-6 h-6 text-blue-400" /> },
  ];

  const careerTimeline = [
    { year: "2023", title: "Estagiário" },
    { year: "2024 - 2025", title: "Suporte" },
    { year: "2025", title: "Dev Trainee" },
    { year: "2025", title: "Dev FullStack Júnior" },
  ];

  const experiencias = [
    {
      cargo: "Desenvolvedor full stack Jr",
      empresa: "P.A.Tecnologia",
      periodo: "Ago 2025 - Atual",
      descricao: "",
    },
    {
      cargo: "Analista de Suporte Técnico",
      empresa: "P.A. Tecnologia",
      periodo: "Out 2024 - Jun 2025",
      descricao: "Responsável pelo atendimento interno e externo de usuários, suporte técnico em sistemas de ERP e gestão, manutenção de computadores, administração de servidores Windows e bancos de dados (Firebird, PostgreSQL, MySQL). Conduzia treinamentos e apresentações de sistemas, planejamento e organização de demandas com Trello, testes e validação de sistemas (XML). Desenvolvi habilidades em comunicação, colaboração e atendimento ao cliente, garantindo eficiência e qualidade nos serviços de TI."
    },
    {
      cargo: "Engenheiro de desenvolvimento de design de produto",
      empresa: "Takei Eletrônica",
      periodo: "Jun 2024 - Set 2024",
      descricao: "",
    },
    {
      cargo: "Estagiário escritório de qualidade / engenharia",
      empresa: "Takei Eletrônica",
      periodo: "Out 2024 - Mai 2024",
      descricao: "Experiência em comunicação, treinamento de pessoas e gestão de tarefas. Desenvolvi habilidades em comunicação verbal e escrita, colaboração em projetos multifuncionais, uso do Pacote Office (Excel e Word) e AutoCAD. Possuo competência em organizar, priorizar e executar tarefas diárias, garantindo eficiência e desempenho consistente em ambientes dinâmicos."
    },
  ];

  return (
    <section className="bg-[#0b0a10] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
          <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          <p className="text-gray-300 max-w-3xl">
            Sou um <strong>desenvolvedor Full Stack Júnior</strong> apaixonado
            por tecnologia, sempre buscando criar aplicações modernas,
            performáticas e escaláveis.
          </p>
        </div>

        <div
          ref={inview.ref}
          className={`text-gray-300 leading-relaxed max-w-3xl mx-auto text-center reveal ${inview.inView ? "in-view" : ""}`}
        >
          <p className="sm:text-lg mb-6">
            Tenho experiência prática no desenvolvimento <strong>front-end</strong> e{" "}
            <strong>back-end</strong>, utilizando tecnologias como{" "}
            <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Node.js</strong>, <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong> e <strong>NestJS</strong>.
          </p>
          <p className="sm:text-lg mb-6">
            Trabalho com bancos de dados como <strong>PostgreSQL</strong> e{" "}
            <strong>MySQL</strong>, criando estruturas eficientes e seguras para
            sustentar aplicações robustas.
          </p>
          <div className="w-40 mt-6 mx-auto">
            <Button text="Contato" href="#contact" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-white">Minha Jornada</h2>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          </div>
          <div className="relative w-full max-w-5xl">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 -translate-y-1/2"></div>
            <ul className="flex justify-between relative z-20">
              {careerTimeline.map((step, idx) => (
                <li
                  key={idx}
                  className={`flex flex-col items-center text-center relative reveal ${inview.inView ? "in-view" : ""}`}
                >
                  <span className="w-6 h-6 bg-blue-500 rounded-full border-2 border-[#0b0a10] z-30 relative"></span>
                  <p className="font-medium text-white mt-8 z-30 relative">{step.title}</p>
                  <p className="text-sm text-gray-400 z-30 relative">{step.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 ">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-white">Experiências Profissionais</h2>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-1 rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 "></div>

            <ul className="relative z-10  ">
              {experiencias.map((exp, idx) => (
                <li key={idx} className="flex flex-col md:flex-row justify-between items-center w-full mb-16 relative ">
                  <div
                    className={`bg-[#1a1a1f] p-8 mt-10 rounded-3xl shadow-lg w-full md:w-5/12
                       shadow-blue-100 shadow-sm  border border-blue-500
                       text-left
              ${idx % 2 === 0 ? "md:mr-auto md:pr-12 " : "md:ml-auto md:pl-12"}
            `}
                  >
                    <h3 className="text-xl font-semibold text-white">{exp.cargo} - {exp.empresa}</h3>
                    <p className="text-gray-400 text-sm">{exp.periodo}</p>
                    <p className="text-gray-300 mt-3">{exp.descricao}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full z-20"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-white">Habilidades</h2>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {techs.map((tech, idx) => (
              <SkillCard key={idx}>
                <div className="flex flex-col items-center gap-2">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              </SkillCard>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Comunicação",
              "Trabalho em equipe",
              "Curiosidade",
              "Aprendizado contínuo",
              "Resiliência",
              "Organização",
            ].map((skill, idx) => (
              <SkillCard key={idx}>{skill}</SkillCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
