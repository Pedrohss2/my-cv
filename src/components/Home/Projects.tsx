"use client";

import ProjetoCard from "../Card/ProjetoCard";
import { projetos } from "../../data/projetos";
import { useState } from "react";
import ProjectModal from "../modal/ProjectModal";
import { Projeto } from "@/interfaces/Projetos";

export default function Projects() {
  const [selected, setSelected] = useState<Projeto | null>(null);
  const [open, setOpen] = useState(false);

  function openModal(p: Projeto) {
    setSelected(p);
    setOpen(true);
  }

  return (
    <section className="py-20 bg-[#0b0a10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-3 flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white">Projetos</h2>
          <span className="block bg-gradient-to-r from-blue-500 to-blue-700 w-32 h-0.5" />
          <p className="text-gray-300 mb-8">Aqui você irá encontrar alguns dos meus projetos pessoais</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, idx) => (
            <div key={idx}>
              <ProjetoCard
                imagem={projeto.imagem}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
                onOpen={() => openModal(projeto)}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
