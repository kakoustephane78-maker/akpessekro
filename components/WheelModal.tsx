'use client';

import { WheelResult } from '@/lib/types';
import { useEffect } from 'react';

interface WheelModalProps {
  isOpen: boolean;
  result: WheelResult | null;
  onClose: () => void;
}

export default function WheelModal({ isOpen, result, onClose }: WheelModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !result) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToFormulas = () => {
    onClose();
    setTimeout(() => {
      const formulasSection = document.getElementById('formules');
      if (formulasSection) {
        formulasSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-sm shadow-2xl max-w-md w-full animate-in fade-in scale-95 duration-300 p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          >
            ✕
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Celebration emoji */}
            <div className="text-6xl mb-6">🎉</div>

            {/* Title */}
            <h2 className="text-3xl font-light text-gray-900 mb-2">
              Votre <span className="font-semibold text-orange-600">Avantage</span>
            </h2>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange-600 mx-auto mb-8"></div>

            {/* Result */}
            <div
              className="p-6 rounded-sm mb-8 text-center"
              style={{
                backgroundColor: result.color + '15',
                borderLeft: `4px solid ${result.color}`,
              }}
            >
              <p
                className="text-3xl font-bold mb-2"
                style={{ color: result.color }}
              >
                {result.label}
              </p>

              {result.discount && (
                <div>
                  <p className="text-lg text-gray-700">
                    Réduction de <span className="font-semibold">{result.discount}%</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    S'applique à votre participation
                  </p>
                </div>
              )}

              {result.bonus && (
                <div>
                  <p className="text-lg text-gray-700 font-semibold">
                    {result.bonus}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Offert avec votre participation
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Cet avantage exclusif s'applique automatiquement à votre participation foncière selon les conditions annoncées.
            </p>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={scrollToFormulas}
                className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition"
              >
                Voir les formules actualisées
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 border-2 border-green-700 text-green-700 font-semibold rounded-sm hover:bg-green-50 transition"
              >
                Retourner à la roue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
