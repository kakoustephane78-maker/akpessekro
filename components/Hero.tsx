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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 md:mb-8 leading-tight text-gray-900">
              <span className="font-semibold text-orange-600">AKPESSEKRO</span> — Une opportunité <span className="font-semibold">foncière à un stade stratégique</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Participez à une opération de mobilisation de fonds destinée à financer le processus de titrage d&apos;une parcelle de <strong>69 hectares</strong> à Akpessekro, dans la région de Yamoussoukro.
            </p>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 bg-orange-50 p-6 rounded-lg">
              <div>
                <p className="text-xs text-orange-700 uppercase tracking-wider font-semibold">Superficie</p>
                <p className="text-2xl font-bold text-orange-600">69 hectares</p>
              </div>
              <div>
                <p className="text-xs text-orange-700 uppercase tracking-wider font-semibold">Nombre de lots</p>
                <p className="text-2xl font-bold text-orange-600">25 lots</p>
              </div>
              <div>
                <p className="text-xs text-orange-700 uppercase tracking-wider font-semibold">Par lot</p>
                <p className="text-2xl font-bold text-orange-600">300-400 m²</p>
              </div>
              <div>
                <p className="text-xs text-orange-700 uppercase tracking-wider font-semibold">Prix envisagé</p>
                <p className="text-2xl font-bold text-orange-600">2M FCFA</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a href="#details" className="px-6 py-4 bg-orange-600 text-white font-semibold rounded-sm hover:bg-orange-700 transition text-center text-base sm:text-lg">
                Découvrir le projet
              </a>
              <a href="#participation" className="px-6 py-4 border-2 border-green-700 text-green-700 font-semibold rounded-sm hover:bg-green-50 transition text-center text-base sm:text-lg">
                Étudier les conditions
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
