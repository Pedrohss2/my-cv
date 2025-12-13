"use client";

import { FaArrowRight } from "react-icons/fa";
import useInView from "../../hooks/useInView";

export default function Home() {
  const leftView = useInView<HTMLDivElement>({ threshold: 0.2 });
  const rightView = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="min-h-[70vh] px-6 py-40 bg-[#0b0a10] text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left content */}
        <div ref={leftView.ref} className={`flex-1 text-center lg:text-left reveal ${leftView.inView ? "in-view" : ""}`}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Olá, eu sou o
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 mt-2">
              Pedro Henrique :)
            </span>
          </h1>

          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl">
            Desenvolvedor Full-Stack | Next.js | React.js | Node.js | Typescript | Javascript
          </p>

          <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
            <a
              href="/Pedro%20Henrique.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full shadow-lg transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-blue-500 text-blue-200 px-6 py-3 rounded-full hover:bg-blue-900/20 transition"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Right image with gradient ring */}
        <div ref={rightView.ref} className={`flex-1 flex justify-center lg:justify-end reveal ${rightView.inView ? "in-view" : ""}`}>
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-br from-blue-500 to-blue-700">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#12203b] to-[#081021] overflow-hidden flex items-center justify-center">
              <img
                src="/minhaFoto.jpg"
                alt="Foto de Pedro Henrique"
                className="w-[92%] h-[92%] rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
