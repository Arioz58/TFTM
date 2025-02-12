import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import burger3points from "@/assets/burgers/burger-3-points.png";
import burgerAllStar from "@/assets/burgers/burger-All-star.png";
import burgerBigDunk from "@/assets/burgers/burger-big-dunk.png";
import burgerBreakChicken from "@/assets/burgers/burger-break-chicken.png";
import burgerCheese from "@/assets/burgers/burger-cheese.png";
import burgerKingJames from "@/assets/burgers/burger-king-jmaes.png";
import burgerMoneyTime from "@/assets/burgers/burger-money-time.png";
import burgerSwishChicken from "@/assets/burgers/burger-swish-chicken.png";
import Image from "next/image";

const burgers = [
  {
    name: "3 Points",
    description:
      "3 steaks 45g, triple cheddar, salade, oignon, sauce 3 Points.",
    price: 6.9,
    image: burger3points,
  },
  {
    name: "All Star",
    signature: true,
    description:
      "steak frais 110g, salade, tomate, oignon rouge, bacon, cheddar, sauce Star.",
    price: 8.9,
    image: burgerAllStar,
  },
  {
    name: "Big Dunk",
    description:
      "steak 90g, galette P.D.T, double cheddar, salade, oignon, sauce Dunk.",
    price: 6.5,
    image: burgerBigDunk,
  },
  {
    name: "Break Chicken",
    description: "poulet pané, cheddar, salade, sauce Break.",
    price: 6.5,
    image: burgerBreakChicken,
  },
  {
    name: "Cheese",
    description: "steak 450g, cheddar, cornichons, kechup, moutarde.",
    price: 3.5,
    image: burgerCheese,
  },
  {
    name: "King James",
    signature: true,
    description:
      "escalope de poulet, salade, tomate, oignon rouge, oeuf, double cheddar, sauce King.",
    price: 8.9,
    image: burgerKingJames,
  },
  {
    name: "Money Time",
    description:
      "2 steaks 45g, double emmental, salade, oignon, sauce Money Time.",
    price: 5.9,
    image: burgerMoneyTime,
  },
  {
    name: "Swish Chicken",
    description: "poulet pané, galatte P.D.T, cheddar, salade, sauce Swish.",
    price: 6.9,
    image: burgerSwishChicken,
  },
];

export default function Burger() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          NOS BURGER
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <p className="font-bold text-white/80 text-center">
            Chacun de nos produits ont une formule boisson + frites a 2,90€
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:grid-cols-3 lg:max-w-5xl ">
            {burgers.map((burger) => (
              <div
                key={burger.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={burger.image}
                  alt={burger.name}
                  height={200}
                  width={200}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2">
                  <h2 className="text-2xl font-black text-left">
                    {burger.name}
                  </h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {burger.description}
                  </p>
                  <p className="text-xl text-left font-semibold text-white/80">
                    {burger.price}€
                  </p>
                  {burger.signature && (
                    <div className="absolute top-0 right-0 p-2 bg-secondary rounded-bl-3xl">
                      <p className="text-sm font-black text-primary">
                        Signature
                      </p>
                    </div>
                  )}
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
