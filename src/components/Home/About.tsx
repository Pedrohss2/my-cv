import Button from "../Button/Button";

export default function About() {
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
    <>
      <div className=" p-20 flex justify-center items-center flex-col gap-6 text-black max-w-6xl mx-auto">
        <h1 className="text-3xl uppercase">Sobre mim</h1>
        <span className="bg-blue-600 w-10 h-1 rounded-4xl p-1"></span>
        <p className="text-center">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais, principalmente em termos de programação e
          tecnologia.
        </p>
      </div>

      <div className="flex flex-col items-center gap-20">
        <div className="flex-1 text-justify w-full p-4 text-black rounded-lg ">
          <h1 className="font-bold text-2xl text-center uppercase mb-8">
            Saiba mais sobre mim
          </h1>

          <p className="text-gray-700  sm:text-lg mb-6 ">
            Sou um <strong>desenvolvedor Full Stack Júnior</strong> apaixonado por tecnologia e por criar
            aplicações web modernas, performáticas e escaláveis. Tenho um olhar atento para a qualidade
            do código, boas práticas e experiência do usuário, sempre buscando aprender e evoluir a cada projeto.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 ">
            Tenho experiência prática no desenvolvimento <strong>front-end</strong> e <strong>back-end</strong>,
            utilizando tecnologias como <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>JavaScript</strong>, <strong>TypeScript</strong> e <strong>NestJS</strong>. Trabalho com bancos de dados
            como <strong>PostgreSQL</strong> e <strong>MySQL</strong>, criando estruturas eficientes e seguras
            para sustentar aplicações robustas.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 ">
            Tenho curiosidade natural por novas tecnologias e gosto de entender como cada parte de um sistema
            se conecta. Valorizo o trabalho em equipe, a troca de conhecimento e acredito que o aprendizado contínuo
            é essencial para crescer como desenvolvedor e entregar soluções cada vez melhores.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 ">
            Atualmente, estou focado em aprimorar meus conhecimentos em <strong>AWS</strong>,{" "}
            <strong>código limpo</strong>, <strong>Clean Architecture</strong> e <strong>testes de software</strong>.
            Busco entender não só o “como”, mas também o “porquê” por trás das boas práticas, com o objetivo de escrever
            código mais eficiente, escalável e de fácil manutenção.
          </p>

          <div className="w-80 mt-10">
            <Button text="Contato" href="/" />
          </div>
        </div>

        <div className="w-full p-4 text-black text-center rounded-lg ">
          <h1 className="font-bold text-2xl uppercase mb-6">
            Minhas habilidades
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {techs.map((valor, idx) => (
              <div key={idx} className="bg-gray-100 px-10 py-6 rounded-lg shadow-md border-1 border-gray-400">
                {valor}
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-xl mb-4 mt-4">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {["Comunicação", "Trabalho em equipe", "Curiosidade", "Aprendizado contínuo", "Resiliência", "Organização"].map((skill, idx) => (
              <div key={idx} className="bg-blue-100 px-10 py-6 rounded-lg shadow-md border border-blue-300">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
