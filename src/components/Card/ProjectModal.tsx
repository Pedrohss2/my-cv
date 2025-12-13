"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";


type Projeto = {
    imagem?: string;
    titulo: string;
    descricao: string;
    link?: string;
};

export default function ProjectModal({
    project,
    open,
    onClose,
}: {
    project: Projeto | null;
    open: boolean;
    onClose: () => void;
}) {
    if (!open || !project) return null;

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 project-modal-backdrop" onClick={onClose} />

            <div className="relative w-11/12 max-w-6xl project-modal rounded-2xl p-8 shadow-2xl flex gap-8">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl project-modal-close hover:cursor-pointer"
                    aria-label="Fechar"
                >
                    <IoMdClose />
                </button>

                <div className="w-1/2 card-image-bg rounded overflow-hidden flex items-center justify-center">
                    {project.imagem ? (
                        <img src={project.imagem} alt={project.titulo} className="w-full h-auto object-cover" />
                    ) : (
                        <div className="text-muted p-8">Sem imagem</div>
                    )}
                </div>

                <div className="w-1/2 px-4 flex flex-col justify-between">
                    <div>
                        <h2 className="project-modal-title mb-4">{project.titulo}</h2>
                        <p className="project-modal-desc leading-relaxed">{project.descricao}</p>
                    </div>

                    <div className="mt-6 flex gap-4 hover:scale-105 transition-all duration-100">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-modal-cta"
                            >
                                Acessar repositório
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
