import Header from "@/sections/Header";
//import Hero from "@/sections/Hero";
//import Menu from "@/sections/Menus";
//import Horaires from "@/sections/Horaires";
//import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}

/*
import Image from "next/image";
import tftmLogo from "@/assets/tftm-logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-screen text-[11px] md:text-lg p-6 z-50">
      <div className="flex justify-center items-center bg-white rounded-full py-5 max-w-3xl mx-auto relative shadow-lg">
        <Image
          src={tftmLogo}
          height={80}
          alt="TFTM Logo"
          className="hidden md:inline-block absolute -left-5 "
        />
        <nav className="flex justify-between max-w-[400px] md:max-w-xl w-full text-primary font-black px-2 items-center ">
          <a href="#menus" className="">
            NOS PRODUITS
          </a>
          <a href="#horaires" className="">
            DEVENIR FRANCHISÉ
          </a>
          <a
            href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            COMMANDER
          </a>
        </nav>
      </div>
    </header>
  );
}
*/