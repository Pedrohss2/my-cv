"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { useState } from "react";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitMessage = (message: any) => { };

  return (
    <>
      <div className="p-10 flex flex-col items-center text-center gap-6 text-black">
        <h1 className="text-3xl font-bold uppercase">Entre em contato</h1>
        <span className="bg-blue-600 w-12 h-1 rounded-full"></span>
        <p className="max-w-xl text-gray-600">
          Sinta-se à vontade para entrar em contato comigo enviando o formulário
          abaixo ou em alguma rede social
        </p>

        <div className="flex gap-6 text-2xl ">
          <a href="https://wa.me/5543920005946" target="_blank">
            <MdLocalPhone color="green" />
          </a>
          <a href="mailto:pedro2266809ph@gmail.com">
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-b748a7261/"
            target="_blank"
          >
            <FaLinkedin color="blue" />
          </a>
          <a href="https://github.com/Pedrohss2" target="_blank">
            <FaGithub />
          </a>
        </div>

        <form
          className="w-full max-w-md flex flex-col gap-4 mt-6"
          onSubmit={handleSubmitMessage}
        >
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md"
          />
          <textarea
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded-md h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </>
  );
}
