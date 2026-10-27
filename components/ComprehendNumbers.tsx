'use client';

import { projectDetails } from '@/lib/config';

export default function ComprehendNumbers() {
  const totalParticipation = projectDetails.numberOfLots * projectDetails.pricePerLot;
  const totalFutureEstimate = projectDetails.numberOfLots * projectDetails.futureValueEstimate;
  const theoreticalDifference = totalFutureEstimate - totalParticipation;

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Comprendre les <span className="font-semibold text-orange-600">chiffres</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparence complète sur les montants, les estimations et les conditions de l'opération.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Price per Lot */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border-l-4 border-orange-600">
            <p className="text-sm text-orange-700 uppercase tracking-wider font-semibold mb-2">Prix envisagé par lot</p>
            <p className="text-5xl font-bold text-orange-600 mb-2">{formatCFA(projectDetails.pricePerLot)}</p>
            <p className="text-xs text-gray-600">Par lot (300-400 m²)</p>
          </div>

          {/* Number of Lots */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-green-700">
            <p className="text-sm text-green-700 uppercase tracking-wider font-semibold mb-2">Nombre de lots</p>
            <p className="text-5xl font-bold text-green-700 mb-2">{projectDetails.numberOfLots}</p>
            <p className="text-xs text-gray-600">Lots proposés dans l'opération</p>
          </div>

          {/* Total if Subscribed */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-600">
            <p className="text-sm text-blue-700 uppercase tracking-wider font-semibold mb-2">Objectif financier théorique</p>
            <p className="text-4xl font-bold text-blue-600 mb-2">{formatCFA(totalParticipation)}</p>
            <p className="text-xs text-gray-600">Si 25 lots souscrits</p>
          </div>
        </div>

        {/* Future Value (Indicative) */}
        <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-lg p-8 md:p-12 border border-orange-200 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Valeur future estimée (indicative)</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-3">Par lot</p>
              <p className="text-5xl font-bold text-orange-600">{formatCFA(projectDetails.futureValueEstimate)}</p>
              <p className="text-xs text-gray-500 mt-2">Sous réserve de validation par des références de marché</p>
            </div>

            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-3">25 lots cumulés</p>
              <p className="text-5xl font-bold text-green-700">{formatCFA(totalFutureEstimate)}</p>
              <p className="text-xs text-gray-500 mt-2">Si 25 lots souscrits et post-ACD</p>
            </div>
          </div>

          {/* Disclaimer Box */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600">
            <p className="font-semibold text-gray-900 mb-3">📌 Important — Lire attentivement</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ L'estimation de <strong>{formatCFA(projectDetails.futureValueEstimate)} par lot</strong> est <strong>théorique</strong> et <strong>indicative</strong></li>
              <li>✓ Elle est <strong>avant frais et charges</strong> de transactions futures</li>
              <li>✓ Elle est <strong>conditionnée à l'obtention de l'ACD</strong> et à la régularisation administrative</li>
              <li>✓ Elle dépend de la <strong>validation par des références de marché comparables</strong></li>
              <li>✓ <strong>Aucune valorisation n'est garantie</strong> — la valeur réelle sera déterminée à la date post-ACD</li>
              <li>✓ La différence théorique de {formatCFA(theoreticalDifference)} ne constitue <strong>pas un bénéfice attendu</strong> mais une hypothèse sujette aux conditions du marché</li>
            </ul>
          </div>
        </div>

        {/* Operational Breakdown */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Utilisation des fonds (à confirmer)</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-6">
            <p className="text-sm text-yellow-900">
              ⚠️ <strong>À valider par l'équipe de SK Immobilier</strong> : Ventilation exacte des fonds collectés, frais administratifs, frais de titrage, etc.
            </p>
          </div>
          <p className="text-gray-700">
            L'objectif principal est de <strong>financer le processus de titrage foncier</strong> et l'obtention de l'Arrêté de Concession Définitive (ACD). Les conditions précises d'utilisation des fonds et les frais applicables doivent être clarifiées dans le contrat de participation.
          </p>
        </div>
      </div>
    </section>
  );
}
