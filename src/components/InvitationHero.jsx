import React from "react";

export default function InvitationHero() {
  const openInstagram = () => {
    window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank');
  };

  return (
    <section className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
      {/* Fondo con imagen */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        {!bgError ? (
          <img
            src="/foto elna completa 2024.png"
            alt="Comunidad ELNA"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={() => setBgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-elna-blue to-blue-900"></div>
        )}
        
        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 text-center text-white px-6 py-12">
          {/* Título principal */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            ¿Estás listo para
            <span className="block text-elna-orange">transformarte?</span>
          </h2>
          
          {/* Descripción */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Una experiencia única e inmersiva donde desarrollarás tu liderazgo, 
            conectarás con otros líderes y te convertirás en un agente de cambio.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={openInstagram}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              ¡Quiero + Info!
            </button>
            <button 
              onClick={openInstagram}
              className="border-3 border-white text-white font-black py-4 px-8 rounded-full text-xl hover:bg-white hover:text-elna-blue transition-all duration-300 shadow-2xl"
            >
              Inscribirme Ahora
            </button>
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
            <span className="text-2xl">🌟</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
            <span className="text-2xl">💫</span>
          </div>
        </div>
      </div>
      
      {/* Barra de colores institucionales */}
      <div className="flex h-4">
        <div className="flex-1 bg-elna-blue"></div>
        <div className="flex-1 bg-elna-orange"></div>
        <div className="flex-1 bg-elna-green"></div>
        <div className="flex-1 bg-elna-yellow"></div>
      </div>
    </section>
  );
} 