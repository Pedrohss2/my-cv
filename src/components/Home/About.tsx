"use client";

import Button from "../Button/Button";
import SkillCard from "./SkillCard";
import useInView from "../../hooks/useInView";
import { experience } from "../../data/experience";
import { careerTimeline } from "../../data/careerTimeline";
import { techs } from "../../data/techs";

export default function About() {
  const inview = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0b0a10] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
          <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          <p className="text-gray-300 max-w-3xl">
            Sou <strong>Desenvolvedor Full Stack</strong> com experiência no desenvolvimento de aplicações web modernas, plataformas SaaS, APIs REST, integrações com sistemas externos e automação de processos. Atualmente atuo no desenvolvimento de soluções completas utilizando <strong>React, Next.js, Node.js, NestJS e TypeScript</strong>, participando desde o levantamento de requisitos até decisões de arquitetura, desenvolvimento, deploy e manutenção de aplicações em produção.
          </p>


        </div>

        <div
          ref={inview.ref}
          className={`text-gray-300 leading-relaxed max-w-3xl mx-auto text-center reveal ${inview.inView ? "in-view" : ""}`}
        >

          <p className="sm:text-lg mb-6">
            Tenho experiência no desenvolvimento de sistemas multiusuário, com autenticação, controle de permissões, diferentes níveis de acesso, dashboards administrativos, fluxos de aprovação e gerenciamento de processos em tempo real. Atuo na criação de aplicações voltadas para otimização operacional, organização de dados e melhoria da experiência de usuários e equipes.
          </p>

          <p className="sm:text-lg mb-6">
            Possuo experiência prática com integrações bancárias e gateways de pagamento, emissão de NF-e/NFS-e, webhooks, microsserviços, autenticação JWT, automações com n8n e integração com serviços externos. Também trabalho com modelagem de bancos de dados relacionais como <strong>PostgreSQL e MySQL</strong>, buscando sempre estruturas organizadas, seguras e preparadas para evolução.
          </p>

          <p className="sm:text-lg mb-6">
            Tenho conhecimento em <strong>Docker, VPS, Linux, CI/CD, Clean Code</strong>, arquitetura escalável e desenvolvimento ágil. Já desenvolvi sistemas comerciais envolvendo cadastros complexos, gestão de usuários, documentos, contratos, agendas, notificações e painéis de acompanhamento.
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

          <div className="relative w-full mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 "></div>

            <ul className="relative z-10  ">
              {experience.map((exp, idx) => (
                <li key={idx} className="flex flex-col md:flex-row justify-between items-center w-full mb-16 relative ">
                  <div
                    className={`bg-[#1a1a1f] p-8 mt-10 rounded-3xl shadow-lg w-full md:w-[47%]
                       shadow-blue-100 shadow-sm  border border-blue-500
                       text-left
              ${idx % 2 === 0 ? "md:mr-auto " : "md:ml-auto "}
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
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {techs.map((tech, idx) => (
              <SkillCard key={idx}>
                <div className="flex flex-col items-center gap-2 ">
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
