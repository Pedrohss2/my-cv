"use client";

import Button from "../Button/Button";
import SkillCard from "./SkillCard";
import useInView from "../../hooks/useInView";

export default function About() {
  const inview = useInView<HTMLDivElement>();

  const techs = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Mysql",
    "REST APIs",
    "Spring-boot",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Socket",
    "Prisma",
    "Docker",
  ];

  return (
    <section className="bg-[#0b0a10] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-3 flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
          <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          <p className="text-gray-300 mb-8">Aqui você irá encontrar alguns dos meus projetos pessoais</p>
        </div>

        <div className="mb-16">
          <div className={`text-gray-300 leading-relaxed max-w-3xl mx-auto text-center reveal ${inview.inView ? "in-view" : ""}`} ref={inview.ref}>
            <p className="sm:text-lg mb-6">
              Sou um <strong>desenvolvedor Full Stack Júnior</strong> apaixonado por tecnologia e por criar
              aplicações web modernas, performáticas e escaláveis. Tenho um olhar atento para a qualidade
              do código, boas práticas e experiência do usuário, sempre buscando aprender e evoluir a cada projeto.
            </p>

            <p className="sm:text-lg mb-6">
              Tenho experiência prática no desenvolvimento <strong>front-end</strong> e <strong>back-end</strong>,
              utilizando tecnologias como <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,
              <strong>JavaScript</strong>, <strong>TypeScript</strong> e <strong>NestJS</strong>. Trabalho com bancos de dados
              como <strong>PostgreSQL</strong> e <strong>MySQL</strong>, criando estruturas eficientes e seguras
              para sustentar aplicações robustas.
            </p>

            <div className="w-40 mt-6 mx-auto">
              <Button text="Contato" href="#contact" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-3 flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white">Habilidades</h2>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
            <p className="text-gray-300 mb-8">Aqui você irá encontrar alguns dos meus projetos pessoais</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techs.map((valor, idx) => (
              <div key={idx}>
                <SkillCard>{valor}</SkillCard>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-4 text-white">Soft Skills</h3>
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
