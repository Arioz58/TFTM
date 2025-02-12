import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import tacosBoston from "@/assets/tacos/tacos-boston.png";
import tacosBrooklyn from "@/assets/tacos/tacos-brooklyn.png";
import tacosCarter from "@/assets/tacos/tacos-carter.png";
import tacosLakers from "@/assets/tacos/tacos-lakers.png";
import tacosOrlando from "@/assets/tacos/tacos-orlando.png";
import Image from "next/image";

const tacos = [
  {
    name: "Boston",
    description: "cordon bleu, tenders, fries, cheddar, oignons, sauce Boston.",
    price: 7.5,
    image: tacosBoston,
  },
  {
    name: "Brooklyn",
    description:
      "escalope de poulet, steak, frites, cheddar, oignons grillés, poivron grillés, sauce Brooklyn.",
    price: 7.9,
    image: tacosBrooklyn,
  },
  {
    name: "Coach Carter",
    description:
      "escalope de poulet, oignon, champignon, gruyère, frites, sauce Coach Carter.",
    price: 8.9,
    image: tacosCarter,
  },
  {
    name: "Lakers",
    description: "escalope de poulet, tenders, frites, gruyère, sauce Lakers.",
    price: 7.5,
    image: tacosLakers,
  },
  {
    name: "Orlando",
    description: "escalope de poulet, frites, cheddar, gruyère, sauce Orlando.",
    price: 7.5,
    image: tacosOrlando,
  },
];

export default function Tacos() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          NOS TACOS
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <p className="text-center text-white/80 font-bold">
            Chacun de nos produits ont une formule boisson + frites a 2,90€
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:grid-cols-3 lg:max-w-5xl">
            {tacos.map((taco) => (
              <div
                key={taco.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={taco.image}
                  alt={taco.name}
                  height={200}
                  width={200}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2">
                  <h2 className="text-2xl font-black text-left">
                    {taco.name}
                  </h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {taco.description}
                  </p>
                  <p className="text-xl text-left font-semibold text-white/80">
                    {taco.price}€
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
