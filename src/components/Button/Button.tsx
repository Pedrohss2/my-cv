
type ButtonProps = {
  text: string;
  href: string;
  icon?: React.ReactNode;
};

export default function Button({ text, href, icon }: ButtonProps) {
  return (
    <a href={href} >
      <div
        className="hover:cursor-pointer inline-flex items-center gap-2 border border-blue-500 text-blue-200 px-6 py-3 rounded-full hover:bg-blue-900/20 transition"
      >
        {text}
        {icon && icon}
      </div>
    </a>
  );
}
