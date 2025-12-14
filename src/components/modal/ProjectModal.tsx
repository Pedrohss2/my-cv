"use client";

import React from "react";
import Image from "next/image";
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
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 project-modal-backdrop"
                onClick={onClose}
            />

            {/* Modal container */}
            <div className="relative w-full max-w-6xl bg-white dark:bg-[#0b0a10] project-modal rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl project-modal-close hover:cursor-pointer"
                    aria-label="Fechar"
                >
                    <IoMdClose />
                </button>

                {/* Image */}
                <div className="w-full md:w-1/2 card-image-bg rounded overflow-hidden relative">
                    {project.imagem ? (
                        <div className="relative w-full h-64 sm:h-80 md:h-full">
                            <Image
                                src={project.imagem}
                                alt={project.titulo}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="text-muted p-8">Sem imagem</div>
                    )}
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 px-2 sm:px-4 flex flex-col justify-between">
                    <div>
                        <h2 className="project-modal-title mb-4 text-lg sm:text-2xl">
                            {project.titulo}
                        </h2>
                        <p className="project-modal-desc leading-relaxed text-sm sm:text-base">
                            {project.descricao}
                        </p>
                    </div>

                    {project.link && (
                        <div className="mt-4 sm:mt-6 flex gap-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="project-modal-cta"
                            >
                                Acessar repositório
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
