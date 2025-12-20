import { MdLocalPhone, MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-10 p-10 flex flex-col items-center text-center gap-6 text-white rounded-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold uppercase">Entre em contato</h1>
      <span className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"></span>

      <div className="flex gap-8 mt-6">
        <a
          href="mailto:pedro2266809ph@gmail.com"
          className="flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-[#0f1115] flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <MdEmail className="text-blue-400 text-2xl" />
          </div>
          <span className="text-sm text-white">Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/pedro-henrique-b748a7261/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-[#0f1115] flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <FaLinkedin className="text-blue-400 text-2xl" />
          </div>
          <span className="text-sm text-white">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Pedrohss2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-[#0f1115] flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <FaGithub className="text-blue-400 text-2xl" />
          </div>
          <span className="text-sm text-white">Github</span>
        </a>
      </div>
    </section>
  );
}
