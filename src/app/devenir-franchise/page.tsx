"use client";
import { FormEvent, useState } from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function Franchise() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error: unknown) {
      // Log the error for debugging
      console.error('Client error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="text-primary">
        <h1 className="relative text-lg font-black text-center pt-28 pb-5 bg-secondary rounded-b-3xl border-[2px] border-white/50 shadow-xl -top-2 md:text-3xl max-w-xl mx-auto">
          Devenir franchisé TFTM
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="text-white flex flex-col gap-10 max-w-3xl px-4 lg:text-lg">
            <div className="flex flex-col gap-10 my-10">
              <div className="text-center">
                <h1 className="text-lg font-black">Devenir franchisé TFTM</h1>
                <p>
                  <b>TFTM</b>, c’est bien plus qu’un snack : c’est une{" "}
                  <b>aventure culinaire</b> qui met en avant des produits de{" "}
                  <b>qualité</b>, <b>frais</b> et <b>généreux</b>. Rejoindre
                  notre réseau, c’est participer à l’essor d’une enseigne{" "}
                  <b>dynamique</b> et <b>conviviale</b>, profiter d’un
                  accompagnement personnalisé, d’une formation complète, et
                  d’outils marketing performants pour garantir votre{" "}
                  <b>succès</b>.
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-lg font-black">
                  Envie de faire partie de l’aventure ?
                </h1>
                <p>
                  Remplissez le formulaire ci-dessous en prenant soin de
                  compléter tous les champs obligatoires signalés par un
                  astérisque (*).
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className=" ">
              <h1 className="font-black text-center text-xl mb-5 md:text-3xl text-white">
                Informations personnelles
              </h1>
              <div className="flex flex-col gap-5">
                {/* Civilité */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="civilite">Civilité *</label>
                  <select
                    name="civilite"
                    id="civilite"
                    required
                    defaultValue=""
                    className="p-2 border border-white/50 rounded-xl text-black"
                  >
                    <option value="">Sélectionner</option>
                    <option value="M">Monsieur</option>
                    <option value="Mme">Madame</option>
                  </select>
                </div>

                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nom">Nom *</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      placeholder="Nom"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="prenom">Prénom *</label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      placeholder="Prénom"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                </div>

                {/* Date de naissance */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="dateNaissance">Date de naissance *</label>
                  <input
                    type="date"
                    name="dateNaissance"
                    id="dateNaissance"
                    required
                    className="p-2 border border-white/50 rounded-xl text-black"
                  />
                </div>

                {/* adresse */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="adresse">Adresse *</label>
                  <input
                    type="text"
                    name="adresse"
                    id="adresse"
                    placeholder="Numéro et nom de rue"
                    required
                    className="p-2 border border-white/50 rounded-xl text-black"
                  />
                </div>

                {/* Ville et Code postal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="ville">Ville *</label>
                    <input
                      type="text"
                      name="ville"
                      id="ville"
                      placeholder="Ville"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="codePostal">Code postal *</label>
                    <input
                      type="text"
                      name="codePostal"
                      id="codePostal"
                      placeholder="Code postal"
                      pattern="[0-9]{5}"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                </div>

                {/* Téléphone et Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="telephone">Téléphone *</label>
                    <input
                      type="tel"
                      name="telephone"
                      id="telephone"
                      placeholder="Téléphone"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      className="p-2 border border-white/50 rounded-xl text-black"
                    />
                  </div>
                </div>

                {/* Votre Situation */}
                <h1 className="font-black text-center text-xl md:text-3xl text-white">
                  Votre situation
                </h1>
                {/* Situation */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="situation">Vous êtes *</label>
                  <select
                    name="situation"
                    id="situation"
                    required
                    defaultValue=""
                    className="p-2 border border-white/50 rounded-xl text-black"
                  >
                    <option value="">Sélectionner</option>
                    <option value="salarie">Salarié</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Capacité d'investissement */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="investissement">
                    Capacité d&apos;investissement *
                  </label>
                  <select
                    name="investissement"
                    id="investissement"
                    required
                    defaultValue=""
                    className="p-2 border border-white/50 rounded-xl text-black"
                  >
                    <option value="">Sélectionner</option>
                    <option value="100-150">100 000€ - 150 000€</option>
                    <option value="150-200">150 000€ - 200 000€</option>
                    <option value="200+">Plus de 200 000€</option>
                  </select>
                </div>

                {/* Zone restaurant */}
                <div className="flex flex-col gap-2">
                  <label className="mb-2">Zone restaurant souhaitée *</label>
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        value="centre-ville"
                        required
                        className="text-secondary"
                      />
                      Centre-ville
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        value="zone-commerciale"
                        className="text-secondary"
                      />
                      Zone commerciale
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        value="centre-commercial"
                        className="text-secondary"
                      />
                      Centre commercial
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="zone"
                        value="autre"
                        className="text-secondary"
                      />
                      Autre
                    </label>
                  </div>
                </div>

                {/* Superficie */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="superficie">
                    Superficie du local (en m²) *
                  </label>
                  <input
                    type="number"
                    name="superficie"
                    id="superficie"
                    min="0"
                    placeholder="Superficie"
                    required
                    className="p-2 border border-white/50 rounded-xl text-black"
                  />
                </div>

                {/* Adresse du local */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="adresseLocal">
                    Adresse du local (si identifiée)
                  </label>
                  <input
                    type="text"
                    name="adresseLocal"
                    id="adresseLocal"
                    placeholder="Adresse du local"
                    className="p-2 border border-white/50 rounded-xl text-black"
                  />
                </div>

                {/* Description du projet */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="description">
                    Description de votre projet *
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows={4}
                    placeholder="Décrivez votre projet en quelques lignes..."
                    required
                    className="p-2 border border-white/50 rounded-xl text-black resize-none"
                  ></textarea>
                </div>

                {/* Accord RGPD */}
                <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    name="rgpd"
                    id="rgpd"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="rgpd" className="text-sm">
                    J&apos;accepte que mes informations soient enregistrées dans
                    le cadre de ma demande de franchise. Ces informations
                    resteront strictement confidentielles conformément à notre
                    politique de confidentialité. *
                  </label>
                </div>

                {submitStatus === "success" && (
                  <div className="text-green-500 text-center p-4">
                    Votre demande a été envoyée avec succès !
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-green-500 text-center p-4">
                    Votre demande a été envoyée avec succès !
                  </div>
                )}

                {/* Submit Button */}

                <button
                  type="submit"
                  className="btn-primary disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
