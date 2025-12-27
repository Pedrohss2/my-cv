"use client";

import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Projeto } from "../../interfaces/Projetos";

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

    const images = project.imagens && project.imagens.length > 0 ? project.imagens : project.imagem ? [project.imagem] : [];

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-8">
            <div className="absolute inset-0 project-modal-backdrop" onClick={onClose} />

            <div className="relative w-full max-w-6xl bg-white dark:bg-[#0b0a10] project-modal rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 max-h-[90vh] overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl project-modal-close hover:cursor-pointer"
                    aria-label="Fechar"
                >
                    <IoMdClose />
                </button>

                <div className="w-full md:w-1/2 card-image-bg rounded overflow-hidden relative">
                    {images.length > 0 ? (
                        <div className="max-h-[50vh] sm:max-h-[60vh] md:max-h-[80vh] w-full overflow-y-auto pr-2">
                            <div className="flex flex-col w-full gap-4">
                                {images.map((src, idx) => (
                                    <div key={idx} className="relative w-full h-56 sm:h-72 md:h-96 flex items-center justify-center bg-black">
                                        <div className="relative w-full h-full p-2">
                                            <Image src={src} alt={`${project.titulo} ${idx + 1}`} fill className="object-contain" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-muted p-8">Sem imagem</div>
                    )}
                </div>

                <div className="w-full md:w-1/2 px-2 sm:px-4 flex flex-col justify-between overflow-y-auto max-h-[70vh]">
                    <div>
                        <h2 className="project-modal-title mb-4 text-lg sm:text-2xl">{project.titulo}</h2>
                        <p className="project-modal-desc leading-relaxed text-sm sm:text-base">{project.descricao}</p>
                    </div>

                    {project.link && (
                        <div className="mt-4 sm:mt-6 flex gap-4">
                            <a href={project.link} target="_blank" rel="noreferrer" className="project-modal-cta">
                                Acessar repositório
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
