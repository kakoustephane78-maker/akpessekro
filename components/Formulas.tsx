'use client';

import { formulas, credibleFees } from '@/lib/config';
import { useState } from 'react';
import { WheelResult } from '@/lib/types';

interface FormulasProps {
  wheelSpun: boolean;
  wheelResult?: WheelResult | null;
}

export default function Formulas({ wheelSpun, wheelResult }: FormulasProps) {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);

  const formatCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Prix minimum garanti (ne baisse jamais peu importe la roue)
  const getMinimumPrice = (promotionalAmount: number) => {
    return promotionalAmount;
  };

  const getTotalWithFees = (promotionalAmount: number) => {
    return promotionalAmount + credibleFees.total;
  };

  return (
    <section id="formules" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Les Formules de <span className="font-semibold text-orange-600">Participation</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des modalités adaptées à votre budget et vos objectifs. Montants à titre informatif.
          </p>
        </div>

        {!wheelSpun && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-700 rounded-sm p-6">
            <p className="text-green-900 font-semibold mb-2">💡 Vous n'avez pas encore tourné la roue</p>
            <p className="text-green-800 text-sm">
              Tournez la roue promotionnelle ci-dessous pour découvrir votre avantage exclusif et voir les montants réajustés.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {formulas.map((formula) => (
            <div
              key={formula.id}
              className={`transition-all cursor-pointer bg-white rounded-sm p-8 border-l-4 ${
                selectedFormula === formula.id
                  ? 'border-l-orange-600 shadow-lg'
                  : 'border-l-green-700 hover:shadow-md'
              }`}
              onClick={() => setSelectedFormula(formula.id)}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {formula.name}
              </h3>
              <p className="text-gray-600 mb-8 text-sm">{formula.description}</p>

              {!wheelSpun ? (
                /* AVANT ROUE : Affichage simple */
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-sm text-center border-2 border-gray-200">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Montant de participation</p>
                    <p className="text-5xl font-bold text-gray-900">
                      {formula.referenceAmount === 2_500_000 ? '2,5M' : '6M'}
                    </p>
                    <p className="text-sm text-gray-600 mt-4">FCFA</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded-sm">
                    <p className="text-sm text-green-900">
                      💡 <strong>Tournez la roue</strong> pour découvrir votre réduction et voir le montant final avec frais
                    </p>
                  </div>
                </div>
              ) : (
                /* APRÈS ROUE : Affichage détaillé avec frais */
                <div className="space-y-4 mb-8">
                  {/* Prix minimum garanti */}
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-sm">
                    <p className="text-xs text-orange-700 uppercase tracking-wider font-semibold mb-2">
                      Prix de participation
                    </p>
                    <p className="text-3xl font-bold text-orange-600">
                      {formatCFA(getMinimumPrice(formula.promotionalAmount))}
                    </p>
                  </div>

                  {/* Détail des frais */}
                  <div className="bg-gray-50 p-5 rounded-sm space-y-2">
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-3">Frais inclus</p>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Enregistrement foncier</span>
                      <span className="font-semibold text-gray-900">{formatCFA(credibleFees.registration)}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Frais administratifs</span>
                      <span className="font-semibold text-gray-900">{formatCFA(credibleFees.administrative)}</span>
                    </div>

                    <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between">
                      <span className="text-gray-700 font-semibold">Total frais</span>
                      <span className="font-bold text-gray-900">{formatCFA(credibleFees.total)}</span>
                    </div>
                  </div>

                  {/* TOTAL FINAL */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-sm border-2 border-green-700">
                    <p className="text-xs text-green-700 uppercase tracking-wider font-bold mb-3">✓ Montant total à payer</p>

                    <div className="mb-4 text-center">
                      <div className="flex justify-center items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-gray-900">{formatCFA(getMinimumPrice(formula.promotionalAmount))}</span>
                        <span className="text-gray-700">+</span>
                        <span className="text-xl font-bold text-orange-600">{formatCFA(credibleFees.total)}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">(Prix + Frais : enregistrement + administratif)</p>
                      <p className="text-4xl font-bold text-green-900">
                        {formatCFA(getTotalWithFees(formula.promotionalAmount))}
                      </p>
                    </div>

                    <p className="text-xs text-green-700 font-semibold">
                      ✓ Avantage roue : {wheelResult?.label}
                    </p>
                  </div>

                  {/* Détails de paiement */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-sm border-t-2 border-blue-600">
                      <p className="text-xs text-blue-700 uppercase tracking-wider font-semibold mb-2">Apport initial</p>
                      <p className="text-lg font-semibold text-blue-900">
                        {Array.isArray(formula.initialDeposit)
                          ? `${formatCFA(formula.initialDeposit[0])}`
                          : formatCFA(formula.initialDeposit)}
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-sm border-t-2 border-purple-600">
                      <p className="text-xs text-purple-700 uppercase tracking-wider font-semibold mb-2">Mensualités</p>
                      <p className="text-lg font-semibold text-purple-900">
                        {formatCFA(formula.monthlyPayment)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedFormula === formula.id && (
                <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition">
                  Continuer avec {formula.name}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer légal */}
        <div className="mt-16 bg-white border-l-4 border-green-700 rounded-sm p-8">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>📋 À titre informatif :</strong> Ces montants sont des hypothèses commerciales. Aucune acquisition, réservation ferme ou engagement juridique ne sont formalisés via ce site. Les conditions de participation ne pourront être définitives qu&apos;après clarification juridique du dispositif et validation de la situation foncière par votre conseil juridique.
          </p>
        </div>
      </div>
    </section>
  );
}
