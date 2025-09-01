import Image from "next/image";
import Button from "../Button/Button";
import { Projeto } from "@/interfaces/Projetos";

export default function ProjetoCard({
  imagem,
  titulo,
  descricao,
  link,
}: Projeto) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 rounded-lg w-full">
      <div className="relative w-full h-full sm:h-56 lg:h-64 lg:flex-1 ">
        <Image
          alt={`Imagem do projeto ${titulo}`}
          src={imagem}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1 text-center">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">
          {titulo}
        </h2>
        <p className="font-medium text-left text-gray-400 mb-10 tracking-wide">
          {descricao}
        </p>
        <div className="w-42 h-12 mx-auto lg:mx-0 mb-10">
          <Button text="Ver Projeto" href={link} />
        </div>
      </div>
    </div>
  );
}
