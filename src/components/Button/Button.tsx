import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  icon?: React.ReactNode;
};

export default function Button({ text, href, icon }: ButtonProps) {
  return (
    <Link href={href} target="_blank">
      <div
        className="bg-blue-600 text-white p-5 rounded-2xl text-center flex items-center justify-center 
        transition transform hover:-translate-y-1 hover:scale-105 duration-300 uppercase tracking-wider gap-2"
      >
        {text}
        {icon && icon}
      </div>
    </Link>
  );
}
