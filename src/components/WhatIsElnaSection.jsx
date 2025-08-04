import React, { useState } from "react";

export default function WhatIsElnaSection() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 fade-in">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-elna-blue mb-4 sm:mb-6 leading-tight">
          ¿QUÉ SIGNIFICA ELNA?
        </h3>
        <div className="w-32 sm:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-elna-blue via-elna-green to-elna-yellow mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
          Descubre la experiencia transformadora que está cambiando vidas en el Norte Argentino
        </p>
      </div>

      {/* Video Section */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          {!videoError ? (
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              onError={handleVideoError}
            >
              <source src="/experiencia.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          ) : (
            <div className="bg-gradient-to-br from-elna-blue to-elna-green rounded-3xl p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-white">
                <div className="text-6xl sm:text-8xl mb-4">🎬</div>
                <h4 className="text-xl sm:text-2xl font-black mb-2">VIDEO EXPERIENCIA ELNA</h4>
                <p className="text-sm sm:text-base opacity-90">
                  Descubre la transformación que está cambiando vidas
                </p>
                                 <button
                   onClick={() => window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank')}
                   className="mt-4 bg-white text-elna-blue font-black py-2 px-4 rounded-xl text-sm hover:bg-gray-100 transition-colors"
                 >
                   VER MÁS EN INSTAGRAM
                 </button>
              </div>
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="relative group cursor-pointer max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            {/* Efecto de fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Card principal con backdrop-filter y foto de fondo */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden backdrop-blur-sm border border-blue-700/30">
              {/* Fondo con imagen difuminada */}
              <div className="absolute inset-0">
                <img 
                  src="/foto elna completa 2024.png" 
                  alt="ELNA"
                  className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-indigo-900/70 group-hover:from-blue-900/80 group-hover:via-blue-800/80 group-hover:to-indigo-900/80 transition-all duration-500"></div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Título principal */}
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-blue-200 mb-3 sm:mb-4 drop-shadow-lg leading-tight">
                  UNA EXPERIENCIA ÚNICA
                </h4>
                
                {/* Texto descriptivo */}
                <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed drop-shadow-md">
                  Más de 1.000 líderes ya han vivido esta transformación. ¿Serás el próximo en unirte a la revolución silenciosa?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action específico para esta sección */}
      <div className="text-center mt-6 sm:mt-8">
                 <button
           onClick={() => window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank')}
           className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg drop-shadow-lg"
         >
           ¡QUIERO VIVIR LA EXPERIENCIA!
         </button>
      </div>
    </section>
  );
} 