"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-5 bg-white shadow-lg uppercase text-black">
      <header className="flex justify-between items-center text-black">
        <div className="flex items-center gap-3 hover:text-blue-500">
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
          <h1 className="text-sm sm:text-base">Pedro Henrique</h1>
        </div>

        <button
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </button>

        <nav className="hidden sm:flex flex-row gap-10 text-sm">
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
        </nav>
      )}
    </div>
  );
}
