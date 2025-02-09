import React from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Politique() {
  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 lg:text-3xl max-w-xl mx-auto">
          POLITIQUE DE CONFIDENTIALITÉ
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="text-white flex flex-col gap-6 max-w-3xl px-4">
            <div className="">
              <h1 className="text-lg font-black">Votre importance pour nous</h1>
              <p>
                Chez T&apos;as faim Tu manges (TFTM), la protection de vos données
                personnelles est une priorité. Cette politique de
                confidentialité décrit les informations que nous collectons,
                leur utilisation et vos droits en tant qu&apos;utilisateur de notre
                site web.{" "}
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">
                Responsable du traitement des données
              </h1>
              <p>
                Le traitement des données collectées sur ce site est effectué
                par : <br />
                T&apos;as faim Tu manges (TFTM) <br />
                <a
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4796b731350790ef:0x4f425dde6dc509a9?sa=X&ved=1t:8290&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">
                    135 Rte des Romains, 67200 Strasbourg
                  </span>
                </a>{" "}
                <br />{" "}
                <a href="mailto:Tftm67@outlook.com" className="underline">
                  Tftm67@outlook.com
                </a>
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">
                Pourquoi vos données sont collectées ?
              </h1>
              <p>
                Nous collectons et traitons différentes catégories de données,
                notamment :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Données d&apos;identification : nom, prénom, adresse e-mail, numéro
                  de téléphone.
                </li>
                <li>
                  Données de navigation : type de navigateur, pages visitées,
                  durée de navigation, etc.
                </li>
                <li>
                  Données spécifiques aux formulaires : informations liées à une
                  candidature pour devenir franchisé ou à une demande de
                  contact.
                </li>
              </ul>
              <p>
                Les champs obligatoires dans nos formulaires sont signalés par
                un astérisque (*).
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Finalités du traitement</h1>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6">
                <li>
                  Traiter vos demandes via les formulaires (contact, franchise,
                  etc.).
                </li>
                <li>Vous fournir des informations ou des réponses adaptées.</li>
                <li>Améliorer l&apos;expérience utilisateur sur notre site.</li>
                <li>
                  Garantir la sécurité et la performance de notre plateforme.
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Partage des données</h1>
              <p>
                Vos données personnelles ne sont jamais vendues. Elles peuvent
                toutefois être transmises à des prestataires ou partenaires pour
                les besoins suivants :
              </p>
              <ul className="list-disc pl-6">
                <li>L&apos;hébergement du site.</li>
                <li>L&apos;envoi de communications (e-mails).</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Conservation des données</h1>
              <p>
                Vos données sont conservées uniquement pendant la durée
                nécessaire aux finalités pour lesquelles elles ont été
                collectées :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Données liées à une demande : conservées 3 ans après le
                  dernier contact.
                </li>
                <li>Données de navigation : conservées 13 mois maximum.</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Vos droits</h1>
              <p>
                Conformément à la réglementation en vigueur (notamment le RGPD),
                vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Droit d&apos;accès : obtenir une copie des données personnelles que
                  nous détenons.
                </li>
                <li>
                  Droit de rectification : corriger des données inexactes ou
                  incomplètes.
                </li>
                <li>
                  Droit à l&apos;effacement : demander la suppression de vos données,
                  sous certaines conditions.
                </li>
                <li>
                  Droit d&apos;opposition : refuser le traitement de vos données dans
                  certains cas.
                </li>
                <li>
                  Droit à la portabilité : recevoir vos données dans un format
                  structuré.
                </li>
              </ul>
              <p>
                Pour exercer vos droits, contactez-nous à l&apos;adresse suivante :
                <a href="mailto:Tftm67@outlook.com" className="underline">
                  Tftm67@outlook.com
                </a>
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Cookies et outils de suivi</h1>
              <p>
                Nous utilisons des cookies pour améliorer la navigation sur
                notre site et analyser son utilisation. Ces cookies incluent :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Cookies essentiels : nécessaires au bon fonctionnement du
                  site.
                </li>
                <li>
                  Cookies analytiques : pour évaluer les performances du site.
                </li>
              </ul>
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les
                paramètres de votre navigateur.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Sécurité des données</h1>
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles adaptées pour protéger vos données contre les
                accès non autorisés, les pertes ou altérations.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">
                Modifications de la politique
              </h1>
              <p>
                Cette politique peut être modifiée pour refléter les évolutions
                légales ou techniques. Toute mise à jour sera publiée sur cette
                page avec sa date d&apos;entrée en vigueur.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-black">Contact</h1>
              <p>
                Pour toute question relative à cette politique ou à vos données
                personnelles, vous pouvez nous écrire à : <br />
                <a href="mailto:Tftm67@outlook.com" className="underline">
                  Tftm67@outlook.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}