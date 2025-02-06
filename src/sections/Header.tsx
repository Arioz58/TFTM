"use client";
import Image from "next/image";
import Link from "next/link";
import tftmLogo from "@/assets/tftm-logo.png";
import handBag from "@/assets/hand_bag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-screen max-w-xs">
      <div className="bg-white mx-10 my-5 p-4 rounded-[40px]">
        <nav className="flex justify-between items-center">
          <a
            href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-primary text-xs font-black flex flex-row items-center justify-center gap-2"
          >
            COMMANDER
            <span className="inline-flex">
              <Image src={handBag} alt="hand bag icon" width={16} />
            </span>
          </a>
          <button
            className="flex flex-col gap-[5px]"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span className="w-6 h-[4px] bg-primary rounded-full block"></span>
            <span className="w-6 h-[4px] bg-primary rounded-full block"></span>
            <span className="w-6 h-[4px] bg-primary rounded-full block"></span>
          </button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="text-center text-primary font-bold overflow-hidden"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ul className="flex flex-col gap-1">
                <a href="/tacos">NOS TACOS</a>
                <a href="/burger">NOS BURGER</a>
                <a href="/sandwich">NOS SANDWICH</a>
                <a href="/autres">AUTRES</a>
                <a href="/devenir-franchise">DEVENIR FRANCHISÉ</a>
              </ul>
              <div className="flex justify-center">
                <Link href="/">
                  <Image
                    src={tftmLogo}
                    alt="TFTM Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
