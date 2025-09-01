import ProjetoCard from "../Card/ProjetoCard";
import { projetos } from "../../data/projetos";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen   p-8 text-black ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Projetos</h1>
          <span className="block bg-blue-600 w-10 h-1 rounded-full mx-auto mb-4"></span>
          <p>Aqui você irá encontrar alguns dos meus projetos pessoais</p>
        </div>

        <div className="flex flex-col gap-6 items-center p-10 rounded-lg w-full">
          {projetos.map((projetos, idx) => (
            <div key={idx}>
              <ProjetoCard
                imagem={projetos.imagem}
                titulo={projetos.titulo}
                descricao={projetos.descricao}
                link={projetos.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
