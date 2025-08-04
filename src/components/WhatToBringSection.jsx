import React, { useRef, useEffect } from "react";

export default function WhatToBringSection() {
  const videoRef = useRef(null);
  
  const openInstagram = () => {
    window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank');
  };
  
  const items = [
    { icon: "👕", name: "Ropa deportiva y zapatillas", description: "Para las actividades físicas y talleres dinámicos", category: "vestimenta" },
    { icon: "🧥", name: "Abrigo y campera", description: "Para las noches frescas de Tucumán", category: "vestimenta" },
    { icon: "🧉", name: "Termo y mate", description: "Para compartir momentos de conexión", category: "social" },
    { icon: "🧴", name: "Repelente y protector solar", description: "Para el cuidado personal durante las actividades", category: "cuidado" },
    { icon: "🎒", name: "Maleta o mochila", description: "Para organizar tus cosas de manera práctica", category: "organización" },
    { icon: "🧼", name: "Artículos de higiene", description: "Cepillo de dientes, shampoo, etc.", category: "cuidado" },
    { icon: "🔌", name: "Cargador y cable", description: "Para mantener tu teléfono conectado", category: "tecnología" },
    { icon: "🎸", name: "Instrumento musical (opcional)", description: "Para las actividades culturales y de integración", category: "cultura" }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 27) { // 0:27 = 27 segundos
          video.pause();
          video.currentTime = 0; // Reinicia al inicio
        }
      });
    }
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      vestimenta: "from-blue-500 to-blue-600",
      social: "from-elna-green to-green-600",
      cuidado: "from-pink-500 to-pink-600",
      organización: "from-elna-yellow to-yellow-600",
      tecnología: "from-purple-500 to-purple-600",
      cultura: "from-red-500 to-red-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      {/* Header de la sección */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-block mb-4 sm:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-elna-blue mb-2 leading-tight">
            ¿QUÉ DEBO LLEVAR?
          </h3>
          <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-elna-green via-elna-yellow to-pink-500 rounded-full"></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-600">
            PARA TENER
          </span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-elna-blue">
            EN CUENTA
          </span>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto leading-relaxed">
          Organiza todo con anticipación para disfrutar al máximo de la experiencia ELNA INSPIRA
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Lista de elementos mejorada */}
        <div className="space-y-4 sm:space-y-6">
          <h4 className="text-lg sm:text-xl md:text-2xl font-black text-elna-blue mb-4 sm:mb-6 text-center leading-tight">
            📋 Lista de Elementos Esenciales
          </h4>
          
          <div className="grid gap-3 sm:gap-4">
            {items.map((item, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-r ${getCategoryColor(item.category)} rounded-2xl p-0.5 sm:p-1 shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
                  <div className="bg-white rounded-xl p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 md:gap-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-gray-800 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 leading-tight">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">{item.description}</p>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-elna-blue group-hover:text-white transition-all duration-300">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Video y información de elementos esenciales */}
        <div className="space-y-6 sm:space-y-8">
          {/* Video de elementos */}
          <div className="bg-gradient-to-br from-elna-blue to-blue-700 rounded-3xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
            <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-4 sm:mb-6 text-center leading-tight text-white">
              🎥 Guía Visual Completa
            </h4>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center leading-relaxed">
              Mirá este video para conocer todos los elementos que necesitarás durante toda la experiencia ELNA INSPIRA
            </p>
            
            <div className="bg-gradient-to-r from-elna-green to-pink-500 rounded-2xl p-1 sm:p-2 shadow-xl">
              <video
                ref={videoRef}
                className="w-full rounded-xl shadow-lg"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/elementos.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
          
          {/* Información adicional */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h4 className="text-lg sm:text-xl md:text-2xl font-black text-elna-blue mb-4 sm:mb-6 text-center leading-tight">
              💡 Consejos Importantes
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-elna-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-black text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Empaca con anticipación:</strong> Revisa la lista con tiempo para no olvidar nada importante.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-elna-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-black text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Ropa cómoda:</strong> Prioriza la comodidad para las actividades dinámicas.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-elna-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-black text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>Documentación:</strong> No olvides tu DNI y documentos importantes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Botones de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-elna-blue to-blue-700 text-white font-black py-3 sm:py-4 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contactar para consultas
            </button>
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-elna-green to-green-700 text-white font-black py-3 sm:py-4 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              WhatsApp Directo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 