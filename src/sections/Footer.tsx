import tftmLogo from "@/assets/tftm-logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex flex-col justify-center items-center gap-5 w-full bg-secondary text-white text-center py-4 rounded-t-[50px]">
        <Image
          src={tftmLogo}
          alt="TFTM Logo"
          height={130}
          className="h-[100px] md:h-[150px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        />
        <div className="z-10">
          <p className="font-black text-lg lg:text-2xl">
            Numéro joignable :{" "}
            <a href="tel:+33612345678" className="hover:underline">
              06 87 65 02 17
            </a>
          </p>
          <p className="font-black text-lg lg:text-2xl">
            Adresse :{" "}
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4796b731350790ef:0x4f425dde6dc509a9?sa=X&ved=1t:8290&ictx=111"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              135 Rte des Romains, 67200 Strasbourg
            </a>
          </p>
        </div>
        <a
          href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block border border-[#C0A7CC] p-3 rounded-xl bg-gradient-to-b from-[#572D7F] to-[#9D51E5] text-white md:text-xl lg: xl: font-bold shadow-lg before:content-[''] overflow-hidden before:block before:w-40 before:h-3 before:bg-[#F583FF] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-2 before:blur-[10px] before:transition-all before:duration-300 hover:before:w-48 mt-5 md:mt-0"
        >
          Passer commande !
        </a>
        <div className="font-black">
          <p className="text-base lg:text-xl">© 2025 Tout droits réservé TFTM</p>
          <p className="opacity-75">
            Créé par{" "}
            <a href="arzwebconcept.com" className="hover:underline">
              ARZ-Web-Concept
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
