'use client';

import { projectDetails } from '@/lib/config';

export default function ParticipationInterest() {
  return (
    <section id="roue" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Pourquoi <span className="font-semibold text-orange-600">participer en amont</span> ?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Intégrer cette opération à un stade préalable au titrage représente une opportunité d'investissement immobilier différenciée.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Avantage 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-600">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Participation à une étape stratégique</h3>
            <p className="text-gray-600">
              Intervenir avant l'obtention de l'ACD vous positionne à un stade préalable au titrage définitif de la parcelle.
            </p>
          </div>

          {/* Avantage 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conditions d'entrée préférentielles</h3>
            <p className="text-gray-600">
              Accès à une opportunité mobilisée pour financer le processus de titrage avant les augmentations de prix post-régularisation.
            </p>
          </div>

          {/* Avantage 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-600">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Régularisation foncière</h3>
            <p className="text-gray-600">
              Participation au financement d'une démarche de régularisation foncière formelle au niveau administratif ivoirien.
            </p>
          </div>

          {/* Avantage 4 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-700">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Potentiel de valorisation</h3>
            <p className="text-gray-600">
              Perspective de réévaluation foncière à la suite du titrage et de la régularisation administrative du secteur.
            </p>
          </div>
        </div>

        {/* Future Value Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-orange-600">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Estimation de valorisation indicative</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Current */}
            <div className="text-center">
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Prix envisagé aujourd'hui</p>
              <p className="text-4xl font-bold text-orange-600 mb-2">2 000 000 FCFA</p>
              <p className="text-xs text-gray-500">par lot</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-4xl text-gray-300">→</div>
            </div>

            {/* Future */}
            <div className="text-center">
              <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Valeur future estimée</p>
              <p className="text-4xl font-bold text-green-700 mb-2">15 000 000 FCFA</p>
              <p className="text-xs text-gray-500">par lot (sous réserve)</p>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
            <p className="text-gray-900 font-semibold mb-3">⚠️ Déclaration importante</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Cette estimation est <strong>théorique et indicative</strong></li>
              <li>✓ Elle est <strong>avant frais</strong> et charges éventuelles</li>
              <li>✓ Elle est <strong>conditionnée</strong> à l'aboutissement du processus de titrage</li>
              <li>✓ Elle dépend de la <strong>validation par des références de marché comparables</strong></li>
              <li>✓ <strong>Aucune valorisation future n'est garantie</strong></li>
              <li>✓ La valeur réelle sera déterminée par le marché à la date de la transaction post-ACD</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="#form" className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition text-lg">
            Exprimer mon intérêt
          </a>
        </div>
      </div>
    </section>
  );
}
