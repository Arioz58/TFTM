import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Log request received
    console.log('API route hit');

    const formData = await req.json();
    console.log('Form data received:', { ...formData, email: '[REDACTED]' });

    // Verify environment variable
    if (!process.env.EMAIL_PASSWORD) {
      throw new Error('EMAIL_PASSWORD environment variable is not set');
    }

    const transportConfig = {
      service: 'gmail', // Use service instead of host/port
      auth: {
        user: "lolman004400@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transportConfig);

    // Test connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

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

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Detailed error:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.name : typeof error
    });
    
    return NextResponse.json(
      { 
        error: "Error sending email", 
        details: errorMessage,
        type: error instanceof Error ? error.name : typeof error
      },
      { status: 500 }
    );
  }
}
