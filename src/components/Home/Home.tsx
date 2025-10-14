import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";

export default function Home() {
  return (
    <div className="pt-30 px-6 py-16 bg-blue-100 text-gray-900 ">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold mb-2">
              Olá! Eu sou <span className="text-blue-500">Pedro Henrique</span>
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Sou <strong>desenvolvedor Full Stack Júnior</strong>, apaixonado por criar aplicações
              web modernas, performáticas e escaláveis. Busco escrever <strong>código limpo</strong>,
              aplicar <strong>boas práticas</strong> e evoluir constantemente como profissional.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <Button
              text="Ver Projetos"
              href="https://github.com/Pedrohss2?tab=repositories"
              icon={<FaArrowRight size={20} color="white" />}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
