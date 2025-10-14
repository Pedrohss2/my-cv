import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mb-10 p-10 flex flex-col items-center text-center gap-6 text-black  rounded-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold uppercase">
        Entre em contato
      </h1>
      <span className="bg-blue-600 w-16 h-1 rounded-full "></span>

      <div className="flex gap-6 text-3xl sm:text-4xl mt-4">
        <a href="https://wa.me/5543920005946" target="_blank" rel="noopener noreferrer">
          <MdLocalPhone className="hover:scale-110 transition-transform text-green-600" />
        </a>
        <a href="mailto:pedro2266809ph@gmail.com">
          <MdEmail className="hover:scale-110 transition-transform text-red-500" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-henrique-b748a7261/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:scale-110 transition-transform text-blue-700" />
        </a>
        <a href="https://github.com/Pedrohss2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:scale-110 transition-transform text-gray-800" />
        </a>
      </div>
    </section>
  );
}
