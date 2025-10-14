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
    <div className="flex flex-col lg:flex-row items-center shadow-md border-1 border-gray-400  transition-all justify-between gap-10 p-6 lg:p-10 rounded-lg w-full ">
      <div className="relative w-full h-full sm:h-56 lg:h-64 lg:flex-1 border-1 border-gray-300  bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
        {imagem ? (
          <Image
            alt={`Imagem do projeto ${titulo}`}
            src={imagem}
            fill
            quality={100}
            className="object-contain rounded-md"
          />
        ) : (
          <div className="underline">
            <TbApi size={50} />
          </div>
        )}
      </div>

      <div className="flex-1 text-center">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">
          {titulo}
        </h2>
        <p className="font-medium text-left text-gray-400 mb-10 tracking-wide">
          {descricao}
        </p>
        <div className="w-42 h-12 mx-auto lg:mx-0 mb-10">

          <Button text="Projeto" href={link} icon={<FaArrowRight size={20} color="white" />} />
        </div>
      </div>
    </div>
  );
}
