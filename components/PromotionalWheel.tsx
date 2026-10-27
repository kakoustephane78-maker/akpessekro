'use client';

import { useState } from 'react';
import { wheelResults } from '@/lib/config';
import WheelCanvas from './WheelCanvas';
import WheelModal from './WheelModal';

interface PromotionalWheelProps {
  onWheelSpun?: (result: (typeof wheelResults)[0]) => void;
  disabled?: boolean;
}

export default function PromotionalWheel({ onWheelSpun, disabled = false }: PromotionalWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<(typeof wheelResults)[0] | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const spin = () => {
    if (isSpinning || disabled) return;

    setIsSpinning(true);
    setResult(null);
    setShowModal(false);

    const totalSpins = Math.random() * 5 + 5;
    const randomIndex = Math.floor(Math.random() * wheelResults.length);
    const selectedResult = wheelResults[randomIndex];
    const segmentAngle = 360 / wheelResults.length;
    const finalAngle = 360 - (randomIndex * segmentAngle + segmentAngle / 2) + 360 * totalSpins;

    const startTime = Date.now();
    const duration = 3000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const newRotation = rotation + (finalAngle - rotation) * easeOut;
      setRotation(newRotation);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setResult(selectedResult);
        setIsSpinning(false);
        setShowModal(true);
        if (onWheelSpun) {
          onWheelSpun(selectedResult);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="roue" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Roue <span className="font-semibold text-orange-600">Promotionnelle</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez votre avantage exclusif en fonction des conditions de participation envisagées.
          </p>
        </div>

        <div className="bg-white rounded-sm p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Wheel */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-80 h-80">
                <div
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'none' : 'transform 0.1s',
                  }}
                >
                  <WheelCanvas rotation={rotation} />
                </div>
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-yellow-400 drop-shadow-lg"></div>
                </div>
              </div>

              <button
                onClick={spin}
                disabled={isSpinning || disabled}
                className="mt-8 px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold text-lg rounded-sm hover:shadow-lg disabled:opacity-60 transition"
              >
                {isSpinning ? 'Rotation en cours...' : 'TOURNER LA ROUE'}
              </button>
            </div>

            {/* Result */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-gray-50 rounded-sm p-6 border-l-4 border-green-700">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Votre Résultat</h3>

                {result ? (
                  <div
                    className="p-6 rounded-sm text-center mb-6"
                    style={{
                      backgroundColor: result.color + '15',
                      borderLeft: `4px solid ${result.color}`,
                    }}
                  >
                    <p className="text-2xl font-bold mb-2" style={{ color: result.color }}>
                      {result.label}
                    </p>
                    {result.discount && (
                      <p className="text-lg font-semibold text-gray-900">
                        Réduction de <span className="text-orange-600">{result.discount}%</span>
                      </p>
                    )}
                    {result.bonus && (
                      <p className="text-lg font-semibold text-gray-900">
                        {result.bonus}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="p-6 bg-white rounded-sm text-center mb-6 border border-gray-200">
                    <p className="text-gray-500">Appuyez sur le bouton pour tourner la roue...</p>
                  </div>
                )}

                {result && (
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition">
                      Continuer avec cet avantage
                    </button>
                    <button
                      onClick={spin}
                      className="w-full px-6 py-3 border-2 border-green-700 text-green-700 font-semibold rounded-sm hover:bg-green-50 transition"
                    >
                      Retourner
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-orange-50 border-l-4 border-orange-600 rounded-sm p-6 text-center">
          <p className="text-orange-900 text-sm">
            ⚠️ Roue promotionnelle soumise à validation juridique. Les avantages affichés sont fournis à titre informatif et selon les conditions annoncées. Aucune garantie contractuelle n&apos;est établie par cet outil.
          </p>
        </div>
      </div>

      {/* Modal */}
      <WheelModal
        isOpen={showModal}
        result={result}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}
