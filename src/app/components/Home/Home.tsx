import Button from "../Button/Button";

export default function Home() {
  return (
    <div className="px-6 py-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-2xl sm:text-3xl font-bold mb-4">
            Olá! Eu sou <span className="text-blue-500">Pedro Henrique</span>
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            Sou desenvolvedor full stack com foco em criar aplicações web
            modernas, performáticas e escaláveis.
          </p>
          <p>
            Tenho experiência tanto no front-end quanto no back-end, utilizando
            tecnologias como <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Node.js</strong>, <strong>Javascript</strong>,{" "}
            <strong>Typescript</strong>, <strong>Nestjs</strong> e bancos de
            dados como
            <strong> PostgreSQL</strong> e <strong>Mysql</strong>. Gosto de
            transformar ideias em soluções funcionais e bem projetadas.
          </p>
          <div className="w-50 mt-10">
            <Button text="Ver Projetos" href="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
