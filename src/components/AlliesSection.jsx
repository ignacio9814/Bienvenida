import React from "react";

export default function AlliesSection() {
  const openYouTube = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  const speakers = [
    {
      name: "EVELINA CABRERA",
      image: "/Evelina-cabrera.jpg"
    },
    {
      name: "SOFIA GEYER",
      image: "/sofia.webp"
    },
    {
      name: "SILVANA MONDINO",
      image: "/silvana.png"
    },
    {
      name: "SERGIO EXPERT",
      image: "/Sergio-Expert.png"
    },
    {
      name: "PABLO GIESENOW",
      image: "/pablo.webp"
    },
    {
      name: "ANDREA CHURBA",
      image: "/andrea.jpg"
    },
    {
      name: "MOIRA LOWE",
      image: "/moira.jpg"
    },
    {
      name: "DIEGO BUSTAMANTE",
      image: "/diego.jpg"
    },
    {
      name: "ALFONSO PRAT GAY",
      image: "/alfonso.jpg"
    }
  ];

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      {/* Header de la sección - Mejorado */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 sm:mb-16">
        {/* Título y línea */}
        <div className="mb-6 sm:mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-elna-blue mb-4 sm:mb-6 leading-tight">
            ALIADOS ELNA
          </h3>
          <div className="w-32 sm:w-40 h-0.5 sm:h-1 bg-gradient-to-r from-elna-blue to-blue-600 rounded-full shadow-lg"></div>
        </div>
        
        {/* Texto descriptivo */}
        <div className="lg:max-w-lg">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Estos son algunos de los <strong className="text-elna-blue">speakers referentes</strong> que nos han acompañado 
            a lo largo de nuestro camino como formadores de líderes.
          </p>
        </div>
      </div>

      {/* Aclaración importante */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm sm:text-base font-semibold text-yellow-800">
              Aclaración Importante
            </h4>
            <p className="text-sm sm:text-base text-yellow-700 mt-1">
              Los speakers mostrados son <strong>ejemplos de años anteriores</strong> y están a modo ilustrativo. 
              Los speakers confirmados para ELNA INSPIRA 2025 se anunciarán en la escuela.
            </p>
          </div>
        </div>
      </div>
      
      {/* Grid de speakers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center group">
            {/* Banner con nombre - Mejorado */}
            <div className="bg-gradient-to-r from-elna-blue to-blue-700 rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 mb-4 sm:mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <p className="text-white font-black text-xs sm:text-sm leading-tight">
                {speaker.name}
              </p>
            </div>
            
            {/* Foto circular con efecto de brillo mejorado - Sin link */}
            <div className="block relative group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 relative">
                {/* Fondo con imagen */}
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback si la imagen no carga */}
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center hidden">
                  <span className="text-white font-black text-xs sm:text-sm">{speaker.name.split(' ')[0]}</span>
                </div>
                
                {/* Efecto de brillo en el borde */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Efecto de brillo constante sutil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            
          </div>
        ))}
      </div>
      
      {/* Botón de acción */}
      <div className="text-center mt-8 sm:mt-12">
        <button 
          onClick={openYouTube}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Conocer sus historias
        </button>
      </div>
    </section>
  );
} 