'use client';

export default function ConditionsRisks() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Conditions et <span className="font-semibold text-orange-600">risques</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Informations essentielles à comprendre avant engagement dans l'opération.
          </p>
        </div>

        {/* Important Warning */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8 md:p-12 mb-12">
          <p className="text-lg font-bold text-red-900 mb-4">🚨 AVANT TOUT ENGAGEMENT</p>
          <p className="text-red-800 mb-4">
            <strong>L'Arrêté de Concession Définitive (ACD) n'a pas encore été obtenu.</strong> Cette opération vise à mobiliser des fonds pour financer le processus de titrage. Les investisseurs acceptent de participer à une opération <strong>en amont du titrage définitif</strong>, avec tous les risques inhérents à cette étape.
          </p>
          <p className="text-sm text-red-700">
            Une compréhension complète et une validation juridique personnelle des conditions sont <strong>obligatoires</strong> avant participation.
          </p>
        </div>

        {/* Main Conditions */}
        <div className="space-y-8 mb-12">
          {/* Nature of Participation */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nature exacte de la participation</h3>
            <p className="text-gray-700 mb-4">
              <strong>À VALIDER PAR L'ÉQUIPE :</strong> Les investisseurs participent à une opération visant à financer le processus de titrage. La nature exacte des droits conférés (part de propriété, promesse d'accès futur, droit de participation à la réévaluation, etc.) <strong>doit être formalisée dans un contrat de participation avant signature.</strong>
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded text-sm text-yellow-800">
              ⚠️ Ne pas confondre : participation au financement ≠ propriété immédiate de la parcelle
            </div>
          </div>

          {/* Rights and Obligations */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-green-700">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Droits et obligations prévus au contrat</h3>
            <p className="text-gray-700 mb-4">
              <strong>À VALIDER PAR L'ÉQUIPE :</strong> Le contrat de participation doit préciser :
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Droits exacts conférés à chaque investisseur</li>
              <li>✓ Modalités de participation à la réévaluation post-ACD</li>
              <li>✓ Droit de vente ou transfert des parts</li>
              <li>✓ Représentation et gouvernance (si applicable)</li>
              <li>✓ Obligations financières (frais annuels, frais d'administration, etc.)</li>
              <li>✓ Durée de l'engagement et conditions de sortie</li>
            </ul>
            <p className="text-sm text-gray-600">
              Aucun investisseur ne doit signer sans avoir <strong>relu et compris chaque clause</strong>.
            </p>
          </div>

          {/* Use of Funds */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Utilisation des fonds collectés</h3>
            <p className="text-gray-700 mb-4">
              <strong>À VALIDER PAR L'ÉQUIPE :</strong> Ventilation précise des fonds :
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Frais administratifs (pourcentage / montant)</li>
              <li>✓ Frais légaux et de titrage</li>
              <li>✓ Commissions et frais de mobilisation</li>
              <li>✓ Fonds réservés pour étapes supplémentaires</li>
              <li>✓ Fonds d'administration courante post-ACD (si applicable)</li>
            </ul>
            <p className="text-sm text-gray-600">
              Les investisseurs doivent pouvoir retracer l'utilisation de leurs fonds.
            </p>
          </div>

          {/* Failure Scenarios */}
          <div className="bg-red-50 rounded-lg p-8 border-l-4 border-red-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risques et scénarios d'échec</h3>
            <p className="text-gray-700 mb-4">
              Si l'ACD n'est <strong>pas obtenu</strong> ou si le processus <strong>échoue</strong> :
            </p>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li>❌ <strong>Remboursement des fonds :</strong> À VALIDER — Quelles conditions ? Quel délai ? Quels montants ?</li>
              <li>❌ <strong>Perte partielle :</strong> À VALIDER — Les frais sont-ils retenus en cas d'échec ?</li>
              <li>❌ <strong>Droits résiduels :</strong> À VALIDER — Que se passe-t-il si le statut demeure incertain ?</li>
              <li>❌ <strong>Responsabilité :</strong> À VALIDER — SK Immobilier est-elle responsable en cas d'achoppement administratif ?</li>
            </ul>
            <p className="text-sm text-red-800 font-semibold">
              Ces conditions <strong>doivent être explicites</strong> avant signature.
            </p>
          </div>

          {/* Withdrawal Conditions */}
          <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conditions de résiliation et retrait</h3>
            <p className="text-gray-700 mb-4">
              <strong>À VALIDER PAR L'ÉQUIPE :</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Un investisseur peut-il se retirer ? Après quel délai ? À quel coût ?</li>
              <li>✓ Les fonds versés sont-ils bloqués jusqu'à l'ACD, ou remboursables sur demande ?</li>
              <li>✓ Y a-t-il des pénalités en cas de retrait anticipé ?</li>
              <li>✓ Que se passe-t-il si l'ACD tarde excessivement ?</li>
            </ul>
          </div>
        </div>

        {/* Compliance & Verification */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">✓ Vérifications à effectuer personnellement</h3>
          <p className="text-gray-700 mb-4">
            Avant de participer, <strong>CHAQUE INVESTISSEUR</strong> doit :
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong>Consulter un avocat ivoirien compétent en droit foncier</strong> — Obtenir un avis juridique indépendant</li>
            <li>✓ Vérifier les documents fonciers (attestation villageoise, etc.) — Authentification auprès des autorités locales</li>
            <li>✓ Demander des références — Autres projets similaires menés à bien</li>
            <li>✓ Demander un historique — Trace des démarches administratives déjà entamées</li>
            <li>✓ Demander les contrats en complet — Lire chaque clause avant signature</li>
            <li>✓ Vérifier la capacité juridique et financière de SK Immobilier — References, antécédents</li>
          </ul>
        </div>

        {/* Final Statement */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-green-50 border border-orange-200 rounded-lg p-8">
          <p className="text-lg font-semibold text-gray-900 mb-4">📌 Déclaration de la plateforme</p>
          <p className="text-gray-700 mb-4">
            <strong>SK Immobilier</strong> et cette plateforme s'engagent à fournir <strong>toutes les informations disponibles et vérifiées</strong> sur l'opération. Cependant :
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>✓ Aucune garantie n'est donnée sur l'aboutissement du processus de titrage</li>
            <li>✓ Aucune valorisation future n'est promise ou assurée</li>
            <li>✓ Chaque investisseur assume la responsabilité de valider les conditions juridiquement avant engagement</li>
            <li>✓ Les informations partagées sont à titre informatif et ne constituent pas un conseil en investissement</li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            Cette opération s'adresse à des investisseurs avisés et conscients des risques inhérents aux processus de titrage foncier en Côte d'Ivoire.
          </p>
        </div>
      </div>
    </section>
  );
}
