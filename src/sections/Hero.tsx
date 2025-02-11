"use client";

import tftmLogo from "@/assets/tftm-logo.png";
import foodImg from "@/assets/Food.png";
import BannerImg from "@/assets/banner.jpeg";
import handBag from "@/assets/hand_bag.svg";
import phone from "@/assets/phone.svg";
import Image from "next/image";
import splitStringUsingRegex from "@/utils/splitUsingRegex";
import { motion } from "framer-motion";

const headingText = "T'as faim ?";
const headingText2 = "Tu manges!";

const headingTextArray = splitStringUsingRegex(headingText);
const headingText2Array = splitStringUsingRegex(headingText2);

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full bg-secondary">
        <Image
          src={BannerImg}
          alt="Banner image"
          fill
          priority
          quality={100}
          className="absolute object-cover object-center [mask-image:linear-gradient(to_bottom,black_55%,transparent_85%)] md:[mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
          sizes="100vw"
        />
        <div className="container px-0 mx-auto flex flex-col items-center h-full pt-24 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={tftmLogo}
              alt="TFTM Logo"
              height={130}
              className="h-[150px] md:h-[180px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-white -space-y-2 mt-5 drop-shadow-xl z-10">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.05 }}
                className="libre-baskerville-regular-italic text-3xl tracking-tight text-center md:text-5xl"
              >
                {headingTextArray.map((text, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 0.25 }}
                    variants={textVariants}
                  >
                    {text}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                className="text-5xl font-black tracking-tight text-center md:text-7xl"
              >
                {headingText2Array.map((text, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 0.25 }}
                    variants={textVariants}
                  >
                    {text}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative mt-5"
            >
              <Image
                src={foodImg}
                alt="Food image"
                height={160}
                className="relative drop-shadow-lg md:h-[200px] w-auto"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-3">
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: 0.2,
              }}
              href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-1"
            >
              Passer commande{" "}
              <span className="inline-flex">
                <Image
                  src={handBag}
                  alt="hand bag icon"
                  width={16}
                  className="brightness-0 invert"
                />
              </span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              href="tel:+33987650217"
              className="call p-3 bg-white/10 border-[2px] border-primary text-primary font-bold backdrop-blur-sm rounded-xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center gap-1"
            >
              Appelez nous{" "}
              <span className="inline-flex">
                <Image src={phone} alt="phone" height={20} width={20} />{" "}
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
