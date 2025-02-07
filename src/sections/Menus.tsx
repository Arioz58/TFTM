import Menu from "@/assets/menu.png";
import Image from "next/image";

export default function Menus() {
  return (
    <section id="menus">
      <div className="">
        <div className="relative">
          <h1
            className="font-black text-3xl text-center relative z-10 text-primary py-10
                  before:content-[''] 
                  before:absolute 
                  before:left-1/2 
                  before:-translate-x-1/2
                  before:h-[100%]
                  before:w-full
                  before:bg-secondary 
                  before:rounded-b-[80%]
                  before:-z-10
                  before:shadow-xl
                  before:-top-0"
          >
            NOS MENUS
          </h1>
          <div className="flex gap-10 py-8 max-w-[480px] lg:max-w-[1500px] mx-auto px-8 lg:px-16 justify-center">
            <Image
              src={Menu}
              alt="Menu"
              width={500}
              height={500}
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block border border-[#C0A7CC] p-3 rounded-xl bg-gradient-to-b from-[#572D7F] to-[#9D51E5] text-white md:text-xl lg: xl: font-bold shadow-lg before:content-[''] overflow-hidden before:block before:w-40 before:h-3 before:bg-[#F583FF] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-2 before:blur-[10px] before:transition-all before:duration-300 hover:before:w-48"
            >
              Découvrez nos menus !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
