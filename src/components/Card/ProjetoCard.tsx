"use client";

import { Project } from "@/interfaces/Projetos";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ProjetoCardProps extends Project {
  onOpen?: () => void;
}

export default function ProjetoCard({ imagem, imagens, titulo, descricao, link, onOpen }: ProjetoCardProps) {
  const cover = imagens && imagens.length > 0 ? imagens[0] : imagem || '/placeholder.png';
  return (
    <div
      className="relative bg-[#1a1a1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
      onClick={onOpen}
    >
      <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          width={1050}
          height={200}
          quality={1000}
          src={cover}
          alt={titulo}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white">{titulo}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{descricao}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-400 font-medium hover:scale-105 hover:text-blue-500 transition-colors"
          >
            <div className="flex gap-3 items-center">

              <span>
                Ver Projeto
              </span>
              <FaArrowRight />
            </div>
          </a>
        )}
      </div>

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );
}
