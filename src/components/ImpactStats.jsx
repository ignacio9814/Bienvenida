import React from "react";

export default function ImpactStats() {
  const openInstagram = () => {
    window.open('https://www.instagram.com/elna.fundacion?igsh=cG8yOTZ1NXkxNnAw', '_blank');
  };

  return (
    <section className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-elna-blue mb-4">
          ELNA en Números
        </h3>
        <p className="text-gray-600 text-lg">
          Una comunidad que crece y transforma el NOA año tras año
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="bg-gradient-to-br from-elna-blue to-blue-800 rounded-2xl p-6 text-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-105">
              <div className="text-3xl mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-white/90">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Urgencia */}
      <div className="mt-8 bg-gradient-to-r from-elna-orange to-orange-600 text-white rounded-2xl p-6 text-center">
        <div className="text-4xl mb-4">🔥</div>
        <h4 className="text-2xl font-bold mb-3">¡YA ESTAMOS A 2 SEMANAS!</h4>
        <p className="text-lg mb-4">
          ¿Vos pensás quedarte afuera de esta nueva edición del ELNA INSPIRA o qué?
        </p>
        <div className="bg-white/20 rounded-xl p-4 mb-4">
          <p className="text-sm mb-1">Cupos limitados</p>
          <div className="text-2xl font-bold">¡No te lo pierdas!</div>
        </div>
        <button 
          onClick={openInstagram}
          className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
        >
          ¡Inscribirme Ahora!
        </button>
      </div>
    </section>
  );
}; 