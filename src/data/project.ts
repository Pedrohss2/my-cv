
type Project = {
  imagem?: string;
  imagens?: string[];
  titulo: string;
  descricao: string;
  link?: string;
}


export const projects: Project[] = [
  {
    "imagens": [
      '/cardapio-fe/cardapio-list.png',
      '/cardapio-fe/dashboard.png',
      '/cardapio-fe/listagem-categorias.png',
      '/cardapio-fe/listagem-usuarios.png',
      '/cardapio-fe/login.png',
      '/cardapio-fe/modal-nova-categoria.png',
      '/cardapio-fe/modal-novo-produto.png',
      '/cardapio-fe/modal-novo-usuario.png',
      '/cardapio-fe/registro-empresa.png'
    ],
    "titulo": "Cardápio Digital - Frontend",
    "descricao": "Interface construída em Next.js com React, TypeScript e Tailwind CSS. Permite que usuários autenticados gerenciem produtos e categorias, realize upload de imagens e visualize o cardápio de forma responsiva. Integra-se com a API para operações completas de CRUD e autenticação.",
    "link": "https://github.com/Pedrohss2/cardapio-front.git"
  },
  {
    "imagens": [],
    "titulo": "Cardápio Digital - API",
    "descricao": "API desenvolvida em NestJS com TypeScript e Prisma ORM, PostgreSql, Redis e oferecendo CRUD completo para produtos, categorias e usuários, autenticação JWT, upload de imagens e integração com banco de dados relacional. Estrutura modular e arquitetura limpa para manutenção e escalabilidade.",
    "link": "https://github.com/Pedrohss2/cardapio-backend.git"
  },
];
