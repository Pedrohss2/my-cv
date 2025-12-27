
import { Projeto } from "../interfaces/Projetos";

export const projetos: Projeto[] = [
  {
    "imagens": ['/cardapio.png', '/criar-conta.png', '/login.png', '/registro-categoria.png', '/resgistro-produto.png',],
    "titulo": "Cardápio Digital - Frontend",
    "descricao": "Interface construída em Next.js com React, TypeScript e Tailwind CSS. Permite que usuários autenticados gerenciem produtos e categorias, realize upload de imagens e visualize o cardápio de forma responsiva. Integra-se com a API para operações completas de CRUD e autenticação.",
    "link": "https://github.com/Pedrohss2/cardapio-front.git"
  },
  {
    "imagens": [],
    "titulo": "Cardápio Digital - API",
    "descricao": "API desenvolvida em NestJS com TypeScript e Prisma ORM, PostgreSql, oferecendo CRUD completo para produtos, categorias e usuários, autenticação JWT, upload de imagens e integração com banco de dados relacional. Estrutura modular e arquitetura limpa para manutenção e escalabilidade.",
    "link": "https://github.com/Pedrohss2/cardapio-backend.git"
  },
];
