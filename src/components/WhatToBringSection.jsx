import React, { useRef, useEffect } from "react";

export default function WhatToBringSection() {
  const videoRef = useRef(null);
  
  const openInstagram = () => {
    window.open('https://www.instagram.com/accounts/login/?next=%2Felna.fundacion%2F&source=omni_redirect&hl=es', '_blank');
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
    <section className="floating-card p-8 mb-8 fade-in">
      {/* Header de la sección */}
      <div className="text-center mb-12">
        <div className="inline-block mb-6">
          <h3 className="text-4xl md:text-6xl font-black text-elna-blue mb-2">
            ¿QUÉ DEBO LLEVAR?
          </h3>
          <div className="w-full h-1 bg-gradient-to-r from-elna-green via-elna-yellow to-pink-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-2xl md:text-3xl font-black text-gray-600">
            PARA TENER
          </span>
          <span className="text-2xl md:text-3xl font-black text-elna-blue">
            EN CUENTA
          </span>
        </div>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Organiza todo con anticipación para disfrutar al máximo de la experiencia ELNA INSPIRA
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Lista de elementos mejorada */}
        <div className="space-y-6">
          <h4 className="text-2xl font-black text-elna-blue mb-6 text-center">
            📋 Lista de Elementos Esenciales
          </h4>
          
          <div className="grid gap-4">
            {items.map((item, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-r ${getCategoryColor(item.category)} rounded-2xl p-1 shadow-lg transition-all duration-300 group-hover:shadow-xl`}>
                  <div className="bg-white rounded-xl p-6 flex items-center gap-6 hover:bg-gray-50 transition-all duration-300">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-gray-800 text-lg mb-2">{item.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">{item.description}</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-elna-blue group-hover:text-white transition-all duration-300">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Video y información de elementos esenciales */}
        <div className="space-y-8">
          {/* Video de elementos */}
          <div className="bg-gradient-to-br from-elna-blue to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">🎬</div>
              <h4 className="text-2xl font-black mb-6 text-white">Guía Visual Completa</h4>
            </div>
            
            {/* Video con mejor diseño */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-elna-green to-pink-500 rounded-2xl p-2 shadow-2xl">
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
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-base text-white/90 leading-relaxed">
                Este video te muestra todos los elementos que necesitas para tener una experiencia completa y cómoda durante toda la experiencia ELNA INSPIRA.
              </p>
            </div>
          </div>
          
          {/* Tips y recomendaciones */}
          <div className="bg-gradient-to-br from-elna-green to-green-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-2xl font-black mb-6">Tips y Recomendaciones</h4>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-sm font-bold">
                  🎯 <strong>Organiza todo con anticipación</strong> para disfrutar al máximo de la experiencia.
                </p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-sm font-bold">
                  📱 <strong>Mantén tu teléfono cargado</strong> para documentar los momentos especiales.
                </p>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-sm font-bold">
                  🌟 <strong>Trae tu mejor energía</strong> y disposición para conectar con otros líderes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Información adicional mejorada */}
      <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-red-600 font-black text-xl">❓</span>
            </div>
            <h4 className="text-2xl font-black">¿Tenés dudas sobre qué llevar?</h4>
          </div>
          
          <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            No te preocupes, también te enviaremos una lista detallada por WhatsApp antes del evento 
            con todas las recomendaciones específicas para tu experiencia ELNA INSPIRA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openInstagram} className="bg-white text-red-600 font-black py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100">
              📧 Contactar para consultas
            </button>
            <button onClick={openInstagram} className="border-2 border-white text-white font-black py-4 px-8 rounded-full text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              📱 WhatsApp Directo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 