import { projectDetails } from '@/lib/config';

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header premium */}
      <div className="bg-gradient-to-r from-green-700 via-white to-orange-600 h-1"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50 rounded-full border border-green-200">
              <span className="text-green-700 text-xs font-semibold tracking-wide">🇨🇮 CÔTE D&apos;IVOIRE</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-6 md:mb-8 leading-tight text-gray-900">
              Et si vous preniez position sur le <span className="font-semibold text-orange-600">foncier</span> dès aujourd&apos;hui ?
            </h1>

            {/* Sous-titre */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SK Immobilier vous présente une opportunité de participation foncière portant sur un projet de <strong>25 lots</strong> à <strong>Akpessekro, Yamoussoukro</strong>.
            </p>

            {/* Features rapides */}
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <p className="text-gray-700">Zone habitée • Électricité • Pistes d'accès</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <p className="text-gray-700">Formules adaptées à différents budgets</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">✓</span>
                <p className="text-gray-700">Paiement échelonné possible</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a href="#formules" className="px-6 py-4 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition text-center text-base sm:text-lg">
                Découvrir les formules
              </a>
              <a href="#details" className="px-6 py-4 border-2 border-green-700 text-green-700 font-semibold rounded-sm hover:bg-green-50 transition text-center text-base sm:text-lg">
                Comprendre le projet
              </a>
            </div>
          </div>

          {/* Vidéo drone côté droit */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="w-full aspect-square rounded-lg overflow-hidden shadow-2xl relative">
              {/* Vidéo */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/akpessekro-drone.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
              </video>

              {/* Overlay gradient pour lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>

              {/* Texte informatif */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <div className="text-white">
                  <p className="text-lg font-light mb-1">Akpessekro, Yamoussoukro</p>
                  <p className="text-3xl font-bold">25 lots</p>
                  <p className="text-lg font-light">{projectDetails.totalArea} hectares</p>
                  <p className="text-xs text-gray-200 mt-2">Vue aérienne du projet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
