"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-5 bg-white uppercase text-black fixed right-0 left-0 shadow-md shadow-blue-100 z-50">
      <header className="flex justify-between items-center text-black ">
        <div className="flex items-center gap-3 ">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-black">
            <Image
              width={100}
              height={100}
              quality={100}
              src="/minhaFoto.jpg"
              alt="Minha foto"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex gap-1 flex-col">

            <h1 className="text-sm sm:text-base">Pedro Henrique</h1>
            <p className="text-gray-400">Fullstack developer</p>
          </div>
        </div>

        <button
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </button>

        <nav className="hidden sm:flex flex-row gap-10 text-sm">
          <Link className="hover:text-blue-500 hover:scale-105 transition-all flex items-center gap-2" href={"/"}>
            <span>
              <IoHomeOutline size={20} />
            </span>
            Home
          </Link>
          <Link
            className="hover:text-blue-500 hover:scale-105 transition-all flex items-center gap-2"
            href={"https://www.linkedin.com/in/pedro-henrique-b748a7261/"}
          >
            <FaLinkedin color="blue" size={20} />

            LinkedIn
          </Link>
          <Link
            className="hover:text-blue-500 hover:scale-105 transition-all flex items-center gap-2"
            href={"https://github.com/Pedrohss2"}
          >
            <FaGithub size={20} />
            Github
          </Link>

          <Link
            href="/Pedro Henrique.pdf"
            download
            className="hover:text-blue-500 hover:scale-105 transition-all flex items-center gap-2"
          >
            <GrDownload size={20} />
            Baixar CV
          </Link>
        </nav>
      </header>

      {menuOpen && (
        <nav className="flex flex-col gap-4 mt-4 sm:hidden text-sm items-center">
          <Link className="hover:text-blue-500" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-blue-500" href={"/"}>
            Sobre
          </Link>
          <Link
            className="hover:text-blue-500"
            href={"https://www.linkedin.com/in/pedro-henrique-b748a7261/"}
          >
            LinkedIn
          </Link>
          <Link
            className="hover:text-blue-500"
            href={"https://github.com/Pedrohss2"}
          >
            Github
          </Link>

          <Link
            href="/Cópia de Pedro Henrique.pdf"
            download
            className="hover:text-blue-500"
          >
            Baixar CV
          </Link>
        </nav>
      )}
    </div>
  );
}
