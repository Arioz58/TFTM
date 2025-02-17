import tftmLogo from "@/assets/tftm-logo.png";
import Image from "next/image";
import handBag from "@/assets/hand_bag.svg";
import instaIcon from "@/assets/insta-icon.svg";
import tiktokIcon from "@/assets/tiktok-icon.svg";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex flex-col justify-center items-center gap-5 w-full bg-secondary text-primary text-center py-4 rounded-t-[50px]">
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <Image src={tftmLogo} alt="TFTM Logo" height={70} width={70} />
          <div className="z-10 flex flex-col items-center justify-center gap-3 lg:flex-row">
            <a
              href="https://www.instagram.com/tftm_67/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-black flex items-center justify-center gap-1">
                <span className="inline-flex">
                  <Image src={instaIcon} alt="Instagram icon" width={24} />
                </span>
                tftm_67
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@tas.faim.tu.manges"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-black flex items-center justify-center gap-1">
                <span>
                  <Image src={tiktokIcon} alt="TikTok icon" width={20} />
                </span>
                tas.faim.tu.manges
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-18 mt-5 lg:flex-row lg:text-left">
          <div className="">
            <h2 className="font-black text-xl underline underline-offset-4">
              NOS PRODUITS
            </h2>
            <ul className="flex flex-col gap-1 pt-2 font-medium">
              <a href="/tacos">NOS TACOS</a>
              <a href="/burger">NOS BURGER</a>
              <a href="/sandwich">NOS SANDWICH</a>
              <a href="/autres">AUTRES</a>
            </ul>
          </div>
          <div className="px-2">
            <h2 className="font-black text-xl underline underline-offset-4">
              CONTACT
            </h2>
            <ul className="flex flex-col gap-1 pt-2 font-medium">
              <a href="tel:+33698446700">Numéro joignable : <span className="underline"> 06 98 44 67 00</span></a>
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4796b731350790ef:0x4f425dde6dc509a9?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adresse : <span className="underline">135 Rte des Romains, 67200 Strasbourg</span>
              </a>
              <a href="/devenir-franchise">Devenir franchisé</a>
            </ul>
          </div>
          <div className="">
            <h2 className="font-black text-xl underline underline-offset-4">
              INFORMATIONS LÉGALES
            </h2>
            <ul className="flex flex-col gap-1 pt-2 font-medium">
              <a href="/politique-de-confidentialite">
                Politique de confidentialité
              </a>
              <a href="/mentions-legales">Mentions légales</a>
            </ul>
          </div>
        </div>
        <a
          href="https://www.order.store/store/tas-faim-tu-manges/4jW95WbNUpuREgH7Tr2oPQ"
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
        </a>
        <div className="font-black">
          <p className="text-base lg:text-xl">
            © 2025 Tout droits réservé TFTM
          </p>
          <p className="opacity-75 text-sm">
            Créé par{" "}
            <a
              href="https://arzwebconcept.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              ARZ-Web-Concept
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
