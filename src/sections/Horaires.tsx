import HeurSoir from "@/assets/18-00_01-30.png";
import Image from "next/image";

export default function Horaires() {
  return (
    <section id="horaires" className="mt-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center drop-shadow-lg max-w-[480px]">
          <h1 className="font-black text-2xl lg:text-3xl text-center relative z-10 text-white py-10">
            NOS HORAIRES
          </h1>
          <div className="flex flex-col items-center">
            <h2 className="font-black text-center text-white mb-5">
              Toute la semaine de :
            </h2>
            <Image src={HeurSoir} alt="Horaires du soir" />
          </div>
        </div>
      </div>
    </section>
  );
}
