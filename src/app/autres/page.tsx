import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Image from "next/image";
import texmexChilliCheese from "@/assets/autres/chilli-cheese.png";
import texmexNuggets from "@/assets/autres/nuggets.png";
import texmexTenders from "@/assets/autres/tenders.png";
import hotDog1 from "@/assets/autres/dogi-dog.png";
import hotDog2 from "@/assets/autres/hot-dog.png";
import kidMenu1 from "@/assets/autres/menu-kids-cheese.png";
import kidMenu2 from "@/assets/autres/menu-kids-nuggets.png";

const texmex = [
  {
    name: "Chilli Cheese",
    description: "5 pièces.",
    price: 4.9,
    image: texmexChilliCheese,
  },
  {
    name: "Nuggets",
    description: "5 pièces.",
    price: 4.9,
    image: texmexNuggets,
  },
  {
    name: "Tenders",
    description: "3 pièces.",
    price: 5.5,
    image: texmexTenders,
  },
];

const hotDogs = [
  {
    name: "Dogi-Dog",
    description: "Ketchup, moutarde, oignon crispy, oigon grillé, poivron grillé.",
    price: 5.5,
    image: hotDog1,
  },
  {
    name: "Hot-Dog",
    description: "Ketchup, moutarde, oignon crispy.",
    price: 4.5,
    image: hotDog2,
  },
];

const kidMenus = [
  {
    name: "Menu Kids Cheese",
    description: "Cheese, frites, caprisun, jouet.",
    price: 6.5,
    image: kidMenu1,
  },
  {
    name: "Menu Kids Nuggets",
    description: "5 Nuggets, frites, caprisun, jouet.",
    price: 6.5,
    image: kidMenu2,
  },
];

export default function Autres() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          NOS TEX-MEX
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:grid-cols-3 lg:max-w-5xl">
            {texmex.map((item) => (
              <div
                key={item.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={200}
                  width={200}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2 w-full">
                  <h2 className="text-2xl font-black text-left">{item.name}</h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {item.description}
                  </p>
                  <p className="text-xl text-left font-semibold text-white/80">
                    {item.price}€
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="relative text-lg font-black text-center p-5 bg-secondary rounded-3xl border-[2px] border-white/50 shadow-xl -top-2 mt-10 md:text-3xl max-w-xl mx-auto">
          NOS HOT-DOGS
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:max-w-2xl">
            {hotDogs.map((item) => (
              <div
                key={item.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={180}
                  width={180}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2">
                  <h2 className="text-2xl font-black text-left">{item.name}</h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {item.description}
                  </p>
                  <p className="text-xl text-left font-semibold text-white/80">
                    {item.price}€
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="relative text-lg font-black text-center p-5 bg-secondary rounded-3xl border-[2px] border-white/50 shadow-xl -top-2 mt-10 md:text-3xl max-w-xl mx-auto">
          NOS MENUS ENFANTS
        </h1>
        <div className="flex flex-col gap-1 p-2 justify-center items-center mt-5">
          <div className="grid grid-cols-1 gap-4 px-4 py-4 max-w-xs md:grid-cols-2 md:max-w-xl lg:max-w-2xl">
            {kidMenus.map((item) => (
              <div
                key={item.name}
                className="menu-item flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={180}
                  width={180}
                  className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="p-2">
                  <h2 className="text-2xl font-black text-left">{item.name}</h2>
                  <p className="text-sm text-left text-white/80 font-semibold">
                    {item.description}
                  </p>
                  <p className="text-xl text-left font-semibold text-white/80">
                    {item.price}€
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
