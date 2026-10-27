'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectDetails from '@/components/ProjectDetails';
import Formulas from '@/components/Formulas';
import PromotionalWheel from '@/components/PromotionalWheel';
import ProspectForm from '@/components/ProspectForm';
import { WheelResult } from '@/lib/types';

export default function Home() {
  const [wheelSpun, setWheelSpun] = useState(false);
  const [wheelResult, setWheelResult] = useState<WheelResult | null>(null);

  const handleWheelSpun = (result: WheelResult) => {
    setWheelResult(result);
    setWheelSpun(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      <ProjectDetails />
      <Formulas wheelSpun={wheelSpun} wheelResult={wheelResult} />
      <PromotionalWheel onWheelSpun={handleWheelSpun} disabled={wheelSpun} />

      {/* Section Formulaire */}
      <section id="form" className="py-20 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Demander plus d&apos;<span className="font-semibold text-green-700">informations</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Laissez vos coordonnées et notre équipe vous recontactera pour vous présenter tous les détails et répondre à vos questions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-sm p-8">
            <ProspectForm wheelSpun={wheelSpun} wheelResult={wheelResult} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🇨🇮</span>
                <h4 className="font-semibold text-lg">SK Immobilier</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Opportunités foncières transparentes et accompagnement juridique en Côte d&apos;Ivoire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#formules" className="hover:text-orange-500 transition">Formules</a></li>
                <li><a href="#details" className="hover:text-orange-500 transition">Le Projet</a></li>
                <li><a href="#roue" className="hover:text-orange-500 transition">Roue Promotionnelle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-3">
                Pour vos questions et demandes d&apos;information
              </p>
              <p className="text-orange-500 font-semibold">contact@sk-immobilier.ci</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400 text-xs">
              <p className="mb-2">© 2026 SK Immobilier. Tous droits réservés.</p>
              <p className="text-gray-500">
                Ce site est à titre informatif. Les informations ne constituent pas une offre de vente, d&apos;investissement ni un engagement juridique. Consultation juridique obligatoire avant toute décision.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
