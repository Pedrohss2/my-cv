import { Projeto } from "@/interfaces/Projetos";
import useInView from "../../hooks/useInView";

type Props = Projeto & { onOpen?: () => void };

export default function ProjetoCard({ imagem, titulo, link, onOpen }: Props) {
  const bgStyle = imagem ? { backgroundImage: `url(${imagem})` } : undefined;
  const inview = useInView<HTMLDivElement>({ threshold: 0.15 });
  const Card = (
    <div ref={inview.ref} className={`reveal ${inview.inView ? "in-view" : ""}`}>
      <article className="relative rounded-lg overflow-hidden group shadow-lg min-h-[320px] transform-gpu transition-transform duration-300 ease-out hover:scale-105">
        <div
          className="w-full h-64 card-image-bg bg-center bg-cover filter brightness-50 group-hover:brightness-40 transition-all"
          style={bgStyle}
          aria-hidden
        />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h3 className="text-2xl font-bold card-title drop-shadow-md">{titulo}</h3>
        </div>

        <div className="absolute left-4 right-4 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
      </article>
    </div>
  );

  if (onOpen) {
    return (
      <div onClick={onOpen} role="button" className="block cursor-pointer">
        {Card}
      </div>
    );
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block">
      {Card}
    </a>
  );
}
