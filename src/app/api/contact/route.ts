import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'lolman004400@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      },
    });

    // Email content
    const mailOptions = {
      from: 'lolman004400@gmail.com',
      to: 'lolman004400@gmail.com',
      subject: 'Nouvelle demande de franchise TFTM',
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
        <p><strong>Situation:</strong> ${formData.situation}</p>
        <p><strong>Capacité d'investissement:</strong> ${formData.investissement}</p>
        <p><strong>Zone souhaitée:</strong> ${formData.zone}</p>
        <p><strong>Superficie:</strong> ${formData.superficie} m²</p>
        <p><strong>Adresse du local:</strong> ${formData.adresseLocal || 'Non spécifiée'}</p>
        
        <h2>Description du projet</h2>
        <p>${formData.description}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' }, 
      { status: 500 }
    );
  }
}