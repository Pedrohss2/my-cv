import Image from "next/image";
import Button from "../Button/Button";
import { Projeto } from "@/interfaces/Projetos";
import { TbApi } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export default function ProjetoCard({
  imagem,
  titulo,
  descricao,
  link,
}: Projeto) {
  return (
    <div className="flex flex-col w-screen lg:flex-row items-center shadow-md border border-gray-300 transition-all justify-between gap-8 p-6 sm:p-10 rounded-xl  sm:w-full bg-white min-h-[480px]">
      <div className="w-full lg:flex-1 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden border border-gray-200 min-h-[260px] sm:min-h-[400px]">
        {imagem ? (
          <Image
            alt={`Imagem do projeto ${titulo}`}
            src={imagem}
            width={800}
            height={500}
            className="w-full h-auto object-contain rounded-md"
            quality={100}
          />
        ) : (
          <div className="text-gray-400">
            <TbApi size={50} />
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center text-center lg:text-left mt-6 lg:mt-0 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-wide">
          {titulo}
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-10 text-base sm:text-lg leading-relaxed">
          {descricao}
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button
            text="Projeto"
            href={link}
            icon={<FaArrowRight size={20} color="white" />}
          />
        </div>
      </div>
    </div>


  );
}
