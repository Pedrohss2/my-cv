import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

export default function Button({ text, href }: ButtonProps) {
  return (
    <>
      <Link href={href}>
        <div
          className="bg-blue-600 text-white p-5 rounded-3xl text-center flex items-center justify-center 
          transition transform hover:-translate-y-1 hover:scale-105 duration-300"
        >
          {text}
        </div>
      </Link>
    </>
  );
}
