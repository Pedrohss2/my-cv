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
      <div className="p-20 flex justify-center items-center flex-col gap-6 text-black">
        <h1 className="text-3xl uppercase">Sobre mim</h1>
        <span className="bg-blue-600 w-10 h-1 rounded-4xl p-1"></span>
        <p className="text-center">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais, principalmente em termos de programação e
          tecnologia.
        </p>
      </div>

      <div className="flex flex-1 md:flex-row gap-15">
        <div className="w-full md:w-1/2 p-4 text-black text-center rounded-lg ">
          <h1 className="font-bold text-2xl uppercase mb-4">
            Saiba mais sobre mim
          </h1>

          <p className="text-left">
            Sou um <strong>Desenvolvedor Fullstack</strong> focado em{" "}
            <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
            <strong>NestJS</strong>, <strong>MySQL</strong> e outras tecnologias
            modernas. Construo e gerencio aplicações web robustas e escaláveis,
            tanto no front-end quanto no back-end, visando sempre a qualidade e
            a eficiência.
            <br />
            Gosto de compartilhar conteúdos relacionados às tecnologias e boas
            práticas que aprendi ao longo da minha trajetória, para ajudar a
            comunidade de desenvolvedores. Sinta-se à vontade para me conectar
            ou me seguir no
            <a
              href="https://www.linkedin.com/in/pedro-henrique-b748a7261/"
              rel="noopener noreferrer"
              className="text-purple-700 font-bold"
            >
              {" "}
              LinkedIn
            </a>{" "}
            <br />
            Estou aberto a oportunidades de <strong>trabalho</strong> onde eu
            possa contribuir, aprender e crescer profissionalmente.
          </p>

          <div className="w-80 mt-10">
            <Button text="Contato" href="/" />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 text-black text-center rounded-lg ">
          <h1 className="font-bold text-2xl uppercase mb-4">
            Minhas habilidades
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {techs.map((valor, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105">
                {valor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
