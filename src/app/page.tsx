import Image from "next/image";
import Home from "./components/Home/Home";
import About from "./components/Home/About";

export default function Index() {
  return (
    <div className="">
      <Home />
      <div className="max-w-6xl mx-auto">
        <About />
      </div>
    </div>
  );
}
