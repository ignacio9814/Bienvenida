import React from "react";

export default function CallToActionSection() {
  const openInstagram = () => {
    window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank');
  };

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      <div className="text-center">
        {/* Modal/Card principal con estilo oscuro y foto de fondo */}
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-200 mb-4 sm:mb-6 drop-shadow-lg leading-tight">
                ¡TU MOMENTO ES AHORA!
              </h3>
              
              {/* Texto descriptivo */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
                CUPOS LIMITADOS
              </p>
              
              {/* Texto adicional */}
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
                ¿LISTO PARA INVERTIR EN TU FUTURO?
              </p>
              
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button onClick={openInstagram} className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl drop-shadow-lg">
                  ¡Quiero + Info!
                </button>
                <button onClick={openInstagram} className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl drop-shadow-lg">
                  Inscribirme Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 