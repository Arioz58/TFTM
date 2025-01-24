import tftmLogo from "@/assets/tftm-logo.png";
import foodImg from "@/assets/Food.png";
import BannerImg from "@/assets/banner.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full bg-secondary">
        <Image
          src={BannerImg}
          alt="Banner image"
          fill 
          priority
          className="absolute object-cover object-center [mask-image:linear-gradient(to_bottom,black_55%,transparent_85%)]"
          sizes="100vw"
        />
        {/*Hero content*/}
        <div className="container px-0 mx-auto flex flex-col items-center h-full pt-24 gap-6">
          <div className="relative">
            <Image
              src={tftmLogo}
              alt="TFTM Logo"
              height={130}
              className="h-[150px] md:h-[180px] w-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white -space-y-2 mt-5 drop-shadow-xl z-10">
              <h2 className="libre-baskerville-regular-italic text-3xl tracking-tight text-center md:text-5xl">
                T&apos;as faim ?
              </h2>
              <h1 className="text-5xl font-black tracking-tight text-center md:text-7xl">
                Tu manges!
              </h1>
            </div>
            <Image
              src={foodImg}
              alt="Food image"
              height={160}
              className="relative drop-shadow-lg md:h-[200px w-auto"
            />
          </div>
          <a
            href="#menus"
            className="relative border border-[#C0A7CC] p-3 rounded-xl bg-gradient-to-b from-[#572D7F] to-[#9D51E5] text-white md:text-xl lg: xl: font-bold shadow-lg before:content-[''] overflow-hidden before:block before:w-40 before:h-3 before:bg-[#F583FF] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-2 before:blur-[10px] mt-5 md:mt-0"
          >
            Découvrez nos menus !
          </a>
        </div>
      </div>
    </section>
  );
}
