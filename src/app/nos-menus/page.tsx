import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";
import nosBurger from "@/assets/nos-burger.png";
import nosTacos from "@/assets/nos-tacos.png";
import nosSandwich from "@/assets/nos-sandwich.png";
import autres from "@/assets/autres.png";

export default function NosMenus() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          NOS MENUS
        </h1>
        <div className="mt-5 flex flex-col gap-1 p-2 justify-center items-center">
          <p className="font-bold text-white/80 text-center">
            Chacun de nos produits ont une formule boisson + frites a 2,90€
          </p>
          <div className="flex flex-col p-6 max-w-xs md:grid md:grid-cols-2 md:gap-5 md:max-w-xl md:mx-auto">
            <a
              href="/burger"
              className="menu-item"
            >
              <Image
                src={nosBurger}
                alt="Nos Burger"
                width={500}
                height={500}
                className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-2xl pb-5">
                NOS BURGER
              </p>
            </a>
            <a
              href="/tacos"
              className="menu-item"
            >
              <Image
                src={nosTacos}
                alt="Nos Burger"
                width={500}
                height={500}
                className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-2xl pb-5">
                NOS TACOS
              </p>
            </a>
            <a
              href="/sandwich"
              className="menu-item"
            >
              <Image
                src={nosSandwich}
                alt="Nos Burger"
                width={500}
                height={500}
                className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-2xl pb-5">
                NOS SANDWICH
              </p>
            </a>
            <a
              href="/autres"
              className="menu-item"
            >
              <Image
                src={autres}
                alt="Nos Burger"
                width={500}
                height={500}
                className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-2xl pb-5">
                AUTRES
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
