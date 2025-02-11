import React from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Mentions() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          MENTIONS LÉGALES
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="text-white flex flex-col gap-10 max-w-3xl px-4 lg:text-lg">
            <p>
              Conformément à{" "}
              <b>
                l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la
                confiance dans l&apos;économie numérique (LCEN)
              </b>
              , les informations ci-dessous précisent l&apos;identité des parties
              responsables de la gestion et de la publication du site.
            </p>
            <div className="">
              <h1 className="text-lg font-black">Éditeur du site</h1>
              <p>Le site T&apos;as Faim Tu Manges (TFTM) est édité par :</p>
              <ul className="list-disc pl-6">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://arzwebconcept.com"
                  >
                    Entreprise : ARZ Web Concept
                  </a>
                </li>
                <li>
                  <a href="tel:+33782851977">Téléphone : 07 82 85 19 77</a>
                </li>
                <li>
                  <a href="mailto:arzwebconcept@gmail.com">
                    E-mail : arzwebconcept@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Hébergeur du site</h1>
              <p>Le site T&apos;as Faim Tu Manges (TFTM) est hébergé par :</p>
              <ul className="list-disc pl-6">
                <li>Hébergeur : Vercel Inc.</li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vercel.com/"
                  >
                    Site web : vercel.com
                  </a>
                </li>
                <li>
                  Adresse : 440 N Barranca Ave #4133 Covina, CA 91723 États-Unis
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Finalités du traitement</h1>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6">
                <li>
                  Traiter vos demandes via les formulaires (contact, franchise,
                  etc.).
                </li>
                <li>Vous envoyer des informations sur nos produits et services.</li>
                <li>Améliorer l&apos;expérience utilisateur sur notre site.</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Propriété intellectuelle</h1>
              <p>
                Le contenu (textes, images, graphismes, logos, vidéos, etc.) présent
                sur le site T&apos;as Faim Tu Manges est protégé par les lois en
                vigueur sur la propriété intellectuelle.Toute reproduction,
                distribution, modification, adaptation ou publication, même
                partielle, des éléments du site est strictement interdite sans
                l&apos;autorisation écrite préalable de l&apos;éditeur.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Limitation de responsabilité</h1>
              <p>
                L&apos;éditeur du site s&apos;efforce de fournir des informations aussi
                précises que possible. Toutefois, il ne peut garantir l&apos;exactitude,
                la complétude et l&apos;actualité des contenus proposés.Le site T&apos;as
                Faim Tu Manges ne saurait être tenu responsable des dommages directs
                ou indirects liés à l&apos;utilisation des informations disponibles sur
                le site.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Données personnelles</h1>
              <p>
                Les données personnelles collectées via le site (formulaires,
                cookies, etc.) sont traitées conformément aux lois en vigueur,
                notamment le RGPD.Pour en savoir plus, consultez notre [Politique de
                Confidentialité](lien vers la page).
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Contact</h1>
              <p>
                Pour toute question ou demande d&apos;information concernant le site,
                vous pouvez contacter l&apos;éditeur à l&apos;adresse suivante :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <a href="mailto:Tftm67@outlook.com" className="underline">
                    Tftm67@outlook.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33698446700">06 98 44 67 00</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
