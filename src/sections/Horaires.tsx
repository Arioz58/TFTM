"use client";
import HeurSoir from "@/assets/18-00_01-30.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Horaires() {
  return (
    <section id="horaires" className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex justify-center"
      >
        <div className="flex flex-col items-center drop-shadow-lg max-w-[480px]">
          <h1 className="font-black text-2xl lg:text-3xl text-center relative z-10 text-white py-10">
            NOS HORAIRES
          </h1>
          <div className="flex flex-col items-center">
            <h2 className="font-black text-center md:text-2xl text-white mb-5">
              Mardi : Fermé ❌
            </h2>
            <h2 className="font-black text-center md:text-2xl text-white mb-5">
              Du mercredi au lundi de :
            </h2>
            <Image src={HeurSoir} alt="Horaires du soir" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
