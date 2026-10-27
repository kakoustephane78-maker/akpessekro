'use client';

import { projectDetails } from '@/lib/config';

export default function ProjectDetails() {
  return (
    <section id="details" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Le Projet */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-2">
            Le <span className="font-semibold text-green-700">Projet</span>
          </h2>
          <div className="w-12 h-1 bg-orange-600 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Localisation</h3>
              <p className="text-gray-700 mb-4">
                <strong>Akpessekro, Yamoussoukro</strong> — zone en développement actif avec des projets d&apos;infrastructures gouvernementales.
              </p>
              <p className="text-gray-600 text-sm">
                La capitale politique connaît depuis 2026 un essor immobilier significatif, avec notamment le lancement de 420 logements sociaux et un programme d&apos;environ 20 000 logements prévus à moyen terme.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-4">
                <p className="text-sm font-semibold text-gray-900">Étendue du projet</p>
                <p className="text-2xl font-light text-orange-600">{projectDetails.totalArea} hectares</p>
                <p className="text-xs text-gray-600 mt-1">{projectDetails.numberOfLots} lots à participer</p>
              </div>
              <div className="border-l-4 border-green-700 pl-4">
                <p className="text-sm font-semibold text-gray-900">Infrastructure</p>
                <p className="text-gray-700">Électricité • Routes d&apos;accès • Zone habitée</p>
              </div>
              <div className="border-l-4 border-gray-400 pl-4">
                <p className="text-sm font-semibold text-gray-900">Caractéristiques</p>
                <p className="text-gray-700">Terrain en zone de développement urbain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Situation Juridique */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-2">
            Situation <span className="font-semibold text-orange-600">Juridique</span>
          </h2>
          <div className="w-12 h-1 bg-green-700 mb-8"></div>

          <div className="bg-gray-50 rounded-sm p-8 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statut foncier actuel</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl text-green-700">✓</div>
                <div>
                  <p className="font-semibold text-gray-900">Attestation de Droit d&apos;Usage Coutumier (ADU)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Document reconnu depuis janvier 2025 en Côte d&apos;Ivoire. L&apos;ADU reconnaît les droits coutumiers et constitue l&apos;étape obligatoire pour engager la procédure d&apos;Arrêté de Concession Définitive (ACD).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl text-orange-600">→</div>
                <div>
                  <p className="font-semibold text-gray-900">Arrêté de Concession Définitive (ACD)</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Document cible. L&apos;ACD confère des droits reconnus par l&apos;État. La procédure est en cours ou sera engagée après clarification des statuts juridiques avec les autorités compétentes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 rounded-sm p-6 mb-6">
            <p className="text-sm text-orange-900 leading-relaxed">
              <strong>⚠️ Important :</strong> L&apos;ADU ne doit pas être assimilée à une propriété définitive. Elle reconnaît un droit coutumier qui peut évoluer selon la procédure administrative. Avant tout engagement, une clarification juridique complète doit être obtenue auprès d&apos;un conseil juridique indépendant.
            </p>
          </div>
        </div>

        {/* Section 3: Pourquoi étudier cette opportunité */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-2">
            Pourquoi <span className="font-semibold text-green-700">Étudier</span> cette Opportunité ?
          </h2>
          <div className="w-12 h-1 bg-orange-600 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📍', title: 'Localisation stratégique', desc: 'En cœur de la capitale politique en développement actif' },
              { icon: '⚡', title: 'Infrastructure présente', desc: 'Électricité et accès routier déjà disponibles' },
              { icon: '👥', title: 'Zone habitée', desc: 'Environnement urbain établi avec services à proximité' },
              { icon: '💰', title: 'Formules flexibles', desc: 'Participation progressive et paiement échelonné possible' },
              { icon: '📈', title: 'Perspective long terme', desc: 'Le foncier peut prendre de la valeur avec le temps et les développements' },
              { icon: '🤝', title: 'Accompagnement', desc: 'SK Immobilier vous aide à comprendre avant de décider' },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-green-700 pl-6 py-2">
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Perspectives de valorisation */}
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-2">
            Valorisation <span className="font-semibold text-orange-600">Foncière</span>
          </h2>
          <div className="w-12 h-1 bg-green-700 mb-8"></div>

          <div className="bg-green-50 rounded-sm p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              La valorisation foncière peut représenter une perspective à long terme. Cependant, elle dépend de nombreux facteurs externes :
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">•</span>
                <span className="text-gray-700"><strong>Localisation</strong> et évolution urbaine du secteur</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">•</span>
                <span className="text-gray-700"><strong>Marché foncier</strong> et demande locale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">•</span>
                <span className="text-gray-700"><strong>Infrastructure</strong> et services (routes, écoles, commerces)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">•</span>
                <span className="text-gray-700"><strong>Clarification juridique</strong> et obtention de l&apos;ACD</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 font-semibold">
              Aucune multiplication de valeur, aucun rendement financier ni aucun délai d&apos;obtention de droits définitifs ne sont garantis.
            </p>
          </div>
        </div>

        {/* Section 5: Clarification avant engagement */}
        <div className="bg-gray-900 text-white rounded-sm p-8">
          <h3 className="text-xl font-semibold mb-4">Avant Tout Engagement</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Les points suivants doivent être clarifiés et présentés à votre conseil juridique personnel :
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✓ Documents fonciers disponibles (ADU, rapports administratifs)</li>
            <li>✓ Statut juridique précis et droits conférés par chaque document</li>
            <li>✓ Modalités de paiement et conditions de remboursement</li>
            <li>✓ Procédure et calendrier vers l&apos;ACD</li>
            <li>✓ Nature exacte de la participation et protections légales</li>
            <li>✓ Responsabilités respectives et clauses de résiliation</li>
          </ul>
          <p className="text-sm text-gray-400 mt-6">
            SK Immobilier s&apos;engage à fournir tous les éléments informatifs disponibles. Les engagements contractuels ne pourront être formalisés qu&apos;après cette clarification juridique.
          </p>
        </div>
      </div>
    </section>
  );
}
