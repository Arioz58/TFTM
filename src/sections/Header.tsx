"use client";
import Image from "next/image";
import Link from "next/link";
import tftmLogo from "@/assets/tftm-logo.png";
import handBag from "@/assets/hand_bag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    }

  }, []);

  return (
    isMobile ? (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-screen max-w-xs z-50">
      <div className="bg-white mx-10 my-5 p-4 rounded-[40px] shadow-2xl">
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
    ) : (
      <header className="fixed top-0 w-screen text-[11px] md:text-lg p-6 z-50">
      <div className="flex justify-center items-center bg-white rounded-full py-5 max-w-2xl mx-auto relative shadow-lg">
        <Link href="/" className="hidden md:inline-block absolute -left-5 ">
          <Image
            src={tftmLogo}
            height={80}
            alt="TFTM Logo"
          />
        </Link>
        <nav className="flex justify-between max-w-[300px] md:max-w-md w-full text-primary font-black px-2">
          <div className="group">
            <a href="/nos-menus" className=" flex items-center gap-1">
              NOS MENUS
              <span className="inline-flex">
                <svg xmlns="http://www.w3.org/</span>2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </a>
            <div className="hidden group-hover:block animate-[fadeIn_0.2s_ease-in-out] absolute top-10 w-40 bg-white rounded-lg shadow-lg pt-4 text-sm font-bold text-center">
                <ul className="py-2">
                  <li><a href="/tacos" className="block px-4 py-2 text-primary hover:bg-gray-100">NOS TACOS</a></li>
                  <li><a href="/burger" className="block px-4 py-2 text-primary hover:bg-gray-100">NOS BURGER</a></li>
                  <li><a href="/sandwich" className="block px-4 py-2 text-primary hover:bg-gray-100">NOS SANDWICH</a></li>
                  <li><a href="/autres" className="block px-4 py-2 text-primary hover:bg-gray-100">AUTRES</a></li>
                </ul>
              </div>
          </div>
          <a href="#horaires" className="">
            NOS HORAIRES
          </a>
          <a
            href="https://www.ubereats.com/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            COMMANDER
          </a>
        </nav>
      </div>
    </header>
    )
  );
}
