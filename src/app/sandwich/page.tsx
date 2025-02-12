import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";
import sandJhonson from "@/assets/sandwichs/Sandwich-johnson.png";
import sandJordan from "@/assets/sandwichs/Sandwich-jordan.png";
import sandKobe from "@/assets/sandwichs/Sandwich-kobe.png";
import sandWest from "@/assets/sandwichs/Sandwich-west.png";

const sandwichs = [
  {
    name: "Johnson 32",
    description:
      "escalope de poulet, kefta, salade, tomate, oignons grillé, poivron grillé, cheddar, sauce Johnson.",
    price: 7.5,
    image: sandJhonson,
  },
  {
    name: "Jordan 23",
    description:
      "escalope de poulet, salade, tomate, oignons grillé, cheddar, sauce Jordan.",
    price: 7.5,
    image: sandJordan,
  },
  {
    name: "Kobe 24",
    description: "escalope de poulet, salade, cheddar, sauce Kobe.",
    price: 6.9,
    image: sandKobe,
  },
  {
    name: "West 44",
    description: "Kefta, oeuf, salade, tomate, cheddar, sauce West.",
    price: 7.5,
    image: sandWest,
  },
];

export default function Sandwich() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          NOS SANDWICH
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <p className="text-center text-white/80 font-bold">
            Chacun de nos produits ont une formule boisson + frites a 2,90€
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:max-w-2xl">
            {sandwichs.map((sandwich) => (
              <div
                key={sandwich.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={sandwich.image}
                  alt={sandwich.name}
                  height={200}
                  width={200}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2">
                  <h2 className="text-2xl font-black text-left">
                    {sandwich.name}
                  </h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {sandwich.description}
                  </p>
                  <p className="text-2xl text-left font-semibold text-white/80">
                    {sandwich.price}€
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
