import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define the form data interface
interface FormData {
  civilite: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  adresse: string;
  ville: string;
  codePostal: string;
  telephone: string;
  email: string;
  situation?: string;
  investissement: string;
  zone: string;
  superficie: string;
  adresseLocal?: string;
  description: string;
}

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json();

    // Change this part
    const transportConfig = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "lolman004400@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    } as nodemailer.TransportOptions;

    const transporter = nodemailer.createTransport(transportConfig);

    // Verify SMTP connection
    await transporter.verify().catch((error) => {
      throw new Error(`SMTP verification failed: ${error.message}`);
    });

    const mailOptions = {
      from: "lolman004400@gmail.com",
      to: "lolman004400@gmail.com",
      subject: "Nouvelle demande de franchise TFTM",
      html: `
        <h1>Nouvelle demande de franchise</h1>
        <h2>Informations personnelles</h2>
        <p><strong>Civilité:</strong> ${formData.civilite}</p>
        <p><strong>Nom:</strong> ${formData.nom}</p>
        <p><strong>Prénom:</strong> ${formData.prenom}</p>
        <p><strong>Date de naissance:</strong> ${formData.dateNaissance}</p>
        <p><strong>Adresse:</strong> ${formData.adresse}</p>
        <p><strong>Ville:</strong> ${formData.ville}</p>
        <p><strong>Code postal:</strong> ${formData.codePostal}</p>
        <p><strong>Téléphone:</strong> ${formData.telephone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        
        <h2>Situation professionnelle</h2>
        ${
          formData.situation
            ? `<p><strong>Situation:</strong> ${formData.situation}</p>`
            : ""
        }
        <p><strong>Capacité d'investissement:</strong> ${
          formData.investissement
        }</p>
        <p><strong>Zone souhaitée:</strong> ${formData.zone}</p>
        <p><strong>Superficie:</strong> ${formData.superficie} m²</p>
        <p><strong>Adresse du local:</strong> ${
          formData.adresseLocal || "Non spécifiée"
        }</p>
        
        <h2>Description du projet</h2>
        <p>${formData.description}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error sending email:", errorMessage);
    return NextResponse.json(
      { error: "Error sending email", details: errorMessage },
      { status: 500 }
    );
  }
}
