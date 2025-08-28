import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <div className=" p-5 sm:p-5 bg-white-400 shadow-fuchsia-100 shadow-lg uppercase">
      <header className="flex flex-row-reverse justify-between items-center text-black">
        <nav className="flex flex-col sm:flex-row list-none gap-4  sm:gap-10  text-1xl ">
          <li className="hover:text-blue-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href={"/"}>Sobre</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href={"/"}>Linkedin</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href={"/"}>Github</Link>
          </li>
        </nav>
        <div className="flex items-center gap-3 hover:text-blue-500">
          <div className="w-15 h-15 rounded-full overflow-hidden bg-black">
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
      </header>
    </div>
  );
}
