import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Pedro henrique</h2>
          <p className="text-sm text-gray-400">Fullstack developer</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <nav className="flex flex-col sm:flex-row list-none gap-4  sm:gap-10  text-1xl ">
            <li className="hover:text-blue-500">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href={"/"}>Sobre</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link
                href={"https://www.linkedin.com/in/pedro-henrique-b748a7261/"}
              >
                Linkedin
              </Link>
            </li>
            <li className="hover:text-blue-500">
              <Link href={"https://github.com/pedrohss"}>Github</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link
                href="/Pedro Henrique.pdf"
                download
                className="hover:text-blue-500"
              >
                Baixar CV
              </Link>
            </li>
          </nav>
        </div>

        <div className="flex gap-6 text-lg">
          <a
            href="https://wa.me/5543920005946"
            className="hover:text-green-500"
          >
            <MdLocalPhone color="green" />
          </a>
          <a
            href="mailto:pedro2266809pg@gmail.com"
            className="hover:text-red-400"
          >
            <MdEmail />
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-b748a7261/">
            <FaLinkedin color="blue" />
          </a>
          <a
            href="https://github.com/Pedrohss2"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pedro H. Todos os direitos reservados.
      </div>
    </footer>
  );
}
