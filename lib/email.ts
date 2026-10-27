import { Prospect } from './types';

const RESEND_API_KEY = 're_Dav7Wd92_PXXyqaMqTsLGcnyraukjw1RP';
const RECIPIENT_EMAIL = 'kakou.stephane78@gmail.com';

export async function sendProspectNotification(prospect: Prospect) {
  try {
    const whatsappLink = `https://wa.me/${prospect.phone.replace(/\D/g, '')}?text=Bonjour%20${encodeURIComponent(prospect.firstName)}%20${encodeURIComponent(prospect.lastName)},%20suite%20à%20votre%20demande%20SK%20Immobilier`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
    .header { background: linear-gradient(to right, #1B8C6F, #FF8C00); color: white; padding: 20px; border-radius: 8px; text-align: center; }
    .content { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
    .field { margin: 12px 0; border-left: 4px solid #FF8C00; padding-left: 12px; }
    .label { font-weight: bold; color: #1B8C6F; }
    .value { color: #555; }
    .actions { display: flex; gap: 10px; margin-top: 20px; }
    .btn { display: inline-block; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: bold; text-align: center; }
    .btn-whatsapp { background: #25D366; color: white; }
    .btn-admin { background: #FF8C00; color: white; }
    .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🎉 Nouvelle demande de participation</h2>
      <p>SK Immobilier - Akpessekro</p>
    </div>

    <div class="content">
      <h3>Informations du prospect</h3>

      <div class="field">
        <span class="label">Nom complet :</span>
        <span class="value">${prospect.firstName} ${prospect.lastName}</span>
      </div>

      <div class="field">
        <span class="label">Téléphone/WhatsApp :</span>
        <span class="value">${prospect.phone}</span>
      </div>

      ${prospect.email ? `
      <div class="field">
        <span class="label">Email :</span>
        <span class="value">${prospect.email}</span>
      </div>
      ` : ''}

      <div class="field">
        <span class="label">Formule choisie :</span>
        <span class="value">${prospect.formula === 'individual' ? 'Formule Individuelle (2M FCFA)' : 'Formule Groupée (5M FCFA)'}</span>
      </div>

      <div class="field">
        <span class="label">Nombre de lots :</span>
        <span class="value">${prospect.numberOfLots}</span>
      </div>

      <div class="field">
        <span class="label">Mode de paiement :</span>
        <span class="value">${prospect.paymentMethod || '-'}</span>
      </div>

      ${prospect.budget ? `
      <div class="field">
        <span class="label">Budget disponible :</span>
        <span class="value">${prospect.budget}</span>
      </div>
      ` : ''}

      ${prospect.wheelResult ? `
      <div class="field">
        <span class="label">Avantage roue :</span>
        <span class="value" style="color: #FF8C00; font-weight: bold;">✓ ${prospect.wheelResult}</span>
      </div>
      ` : ''}

      <div class="field">
        <span class="label">Date de demande :</span>
        <span class="value">${new Date(prospect.createdAt).toLocaleDateString('fr-CI')} à ${new Date(prospect.createdAt).toLocaleTimeString('fr-CI')}</span>
      </div>

      <div class="actions">
        <a href="${whatsappLink}" class="btn btn-whatsapp">💬 Contacter sur WhatsApp</a>
        <a href="http://localhost:3000/admin" class="btn btn-admin">📊 Aller au dashboard</a>
      </div>
    </div>

    <div class="footer">
      <p>SK Immobilier © 2026</p>
      <p>Email automatique - Ne pas répondre</p>
    </div>
  </div>
</body>
</html>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'SK Immobilier <onboarding@resend.dev>',
        to: RECIPIENT_EMAIL,
        subject: `[SK IMMOBILIER] 🎉 Nouvelle demande - ${prospect.firstName} ${prospect.lastName}`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}
