'use client';

import { projectDetails } from '@/lib/config';

export default function FoncierTransparency() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Transparence <span className="font-semibold text-orange-600">foncière et étapes du projet</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Informations actuelles sur le statut foncier et les démarches en cours.
          </p>
        </div>

        {/* Current Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12 border-t-4 border-orange-600">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Statut foncier actuel</h3>

          <div className="space-y-6">
            {/* Document Current */}
            <div className="border-l-4 border-orange-600 pl-6">
              <p className="text-sm text-orange-700 uppercase tracking-wider font-semibold mb-2">Document actuel</p>
              <p className="text-lg text-gray-900 font-medium">{projectDetails.foncierStatus.currentDocument}</p>
              <p className="text-sm text-gray-600 mt-2">
                Document signé au niveau villageois, reconnaissant les droits coutumiers sur la parcelle.
              </p>
            </div>

            {/* ACD Status */}
            <div className="border-l-4 border-red-600 pl-6">
              <p className="text-sm text-red-700 uppercase tracking-wider font-semibold mb-2">Arrêté de Concession Définitive (ACD)</p>
              <p className="text-lg text-gray-900 font-medium">{projectDetails.foncierStatus.acdStatus}</p>
              <p className="text-sm text-gray-600 mt-2">
                L'ACD est le document administratif de référence qui confère à l'État la reconnaissance formelle des droits sur la parcelle.
              </p>
            </div>

            {/* Objective */}
            <div className="border-l-4 border-green-700 pl-6">
              <p className="text-sm text-green-700 uppercase tracking-wider font-semibold mb-2">Objectif de l'opération</p>
              <p className="text-lg text-gray-900 font-medium">{projectDetails.foncierStatus.objective}</p>
              <p className="text-sm text-gray-600 mt-2">
                Les fonds collectés via cette opération visent à financer les démarches administratives et légales nécessaires à l'obtention de l'ACD.
              </p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Étapes envisagées du processus de titrage</h3>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 text-white font-bold">1</div>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-6 pb-6">
                <p className="font-semibold text-gray-900 mb-1">Mobilisation des fonds</p>
                <p className="text-sm text-gray-600">Collecte auprès des investisseurs pour financer le processus</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 text-white font-bold">2</div>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-6 pb-6">
                <p className="font-semibold text-gray-900 mb-1">Démarches administratives</p>
                <p className="text-sm text-gray-600">Engager les procédures d'obtention de l'ACD auprès des autorités compétentes</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 text-white font-bold">3</div>
              </div>
              <div className="flex-grow border-l-2 border-gray-300 pl-6 pb-6">
                <p className="font-semibold text-gray-900 mb-1">Titrage et enregistrement</p>
                <p className="text-sm text-gray-600">Obtention de l'ACD et enregistrement auprès des autorités foncières</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-white font-bold">4</div>
              </div>
              <div className="flex-grow pl-6">
                <p className="font-semibold text-gray-900 mb-1">Finalisation et réévaluation</p>
                <p className="text-sm text-gray-600">Lot réputés régularisés et ouverts à une potentielle réévaluation de marché</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimers */}
        <div className="space-y-6">
          {/* No Timeline Guarantee */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
            <p className="font-semibold text-red-900 mb-3">⚠️ Pas de garantie de calendrier</p>
            <p className="text-sm text-red-800">
              Le calendrier exact du processus de titrage <strong>ne peut pas être garanti</strong>. Les démarches administratives peuvent connaître des délais, des étapes supplémentaires, ou des complications imprévues. Aucun engagement de délai n'est donné aux investisseurs.
            </p>
          </div>

          {/* Conditions to Validate */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
            <p className="font-semibold text-yellow-900 mb-3">📋 À confirmer avec l'équipe juridique</p>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>✓ Documents fonciers complets et authentification légale</li>
              <li>✓ Contrat de participation et droits exacts des investisseurs</li>
              <li>✓ Conditions et clauses en cas de retard ou non-aboutissement du processus</li>
              <li>✓ Mécanisme de remboursement si l'ACD n'est pas obtenu dans un délai X</li>
              <li>✓ Frais applicables et ventilation des fonds collectés</li>
              <li>✓ Responsabilités respectives des parties</li>
            </ul>
          </div>

          {/* Risk Factors */}
          <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
            <p className="font-semibold text-orange-900 mb-3">⚡ Facteurs de risque importants</p>
            <ul className="space-y-2 text-sm text-orange-800">
              <li>✓ <strong>Risque d'échec du processus :</strong> L'ACD pourrait ne pas être obtenu malgré les efforts et les fonds mobilisés</li>
              <li>✓ <strong>Retards administratifs :</strong> Les procédures peuvent durer plus longtemps que prévu</li>
              <li>✓ <strong>Coûts supplémentaires :</strong> Des dépenses additionnelles pourraient émerger en cours de processus</li>
              <li>✓ <strong>Conditions de marché :</strong> La valorisation post-ACD dépendra de la situation foncière réelle à cette époque</li>
              <li>✓ <strong>Contexte légal :</strong> Les lois et régulations foncières en Côte d'Ivoire peuvent évoluer</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">Vous souhaitez en savoir plus sur les conditions exactes et les risques ?</p>
          <a href="#form" className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition text-lg">
            Demander les conditions de participation
          </a>
        </div>
      </div>
    </section>
  );
}
