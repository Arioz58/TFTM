import Image from "next/image";
import tftmLogo from "@/assets/tftm-logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen text-[11px] p-6 z-50">
      <div className="flex justify-center items-center bg-white rounded-full py-5 max-w-2xl mx-auto relative shadow-lg">
        <Image src={tftmLogo} height={80} alt="TFTM Logo" className="hidden md:inline-block absolute -left-5 "/>
        <nav className="flex justify-between max-w-[300px] md:max-w-md w-full text-primary font-black px-2">
          <a href="#" className="">
            NOS MENUS
          </a>
          <a href="#" className="">
            NOS HORAIRES
          </a>
          <a href="#" className="">
            COMMANDER
          </a>
        </nav>
      </div>
    </header>
  );
}
