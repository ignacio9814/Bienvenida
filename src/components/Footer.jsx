import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Barras de colores (igual que el header) */}
      <div className="flex h-4">
        <div className="flex-1 bg-elna-blue"></div>
        <div className="flex-1 bg-elna-green"></div>
        <div className="flex-1 bg-elna-yellow"></div>
        <div className="flex-1 bg-pink-500"></div>
        <div className="flex-1 bg-red-500"></div>
      </div>
      
      {/* Footer principal mejorado */}
      <div className="bg-elna-blue text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-black mb-8">
            ¿Listo para transformar tu futuro?
          </h3>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
            Dale, copate que vas a vivir algo único. Esta es tu oportunidad de ser parte de la comunidad de líderes más grande del NOA.
          </p>
          
          {/* Call to Action final mejorado */}
          <div className="glass rounded-3xl p-8 mb-10 border border-white/30">
            <h4 className="text-3xl font-black mb-6">¡No te lo pierdas!</h4>
            <p className="text-xl mb-8 leading-relaxed">
              El link para más info está en nuestro perfil. ¡Dale, que vas a vivir algo único!
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-black py-5 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                ¡Quiero + Info!
              </button>
              <button className="border-3 border-white text-white font-black py-5 px-10 rounded-full text-xl hover:bg-white hover:text-elna-blue transition-all duration-300 shadow-2xl">
                Inscribirme Ahora
              </button>
            </div>
          </div>
          
          {/* Información de contacto mejorada */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="glass rounded-2xl p-6">
              <h5 className="font-black mb-4 text-lg">Contacto</h5>
              <p className="text-sm text-white/90 font-medium">Email: info@elna.com.ar</p>
              <p className="text-sm text-white/90 font-medium">Instagram: @elna.fundacion</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h5 className="font-black mb-4 text-lg">Evento</h5>
              <p className="text-sm text-white/90 font-medium">14-17 de Agosto 2025</p>
              <p className="text-sm text-white/90 font-medium">Tucumán, Argentina</p>
            </div>
          </div>
          
          {/* Copyright mejorado */}
          <div className="text-sm text-white/70 border-t border-white/20 pt-8">
            <p className="font-medium">© 2025 Fundación ELNA. Todos los derechos reservados.</p>
            <p className="mt-2 font-medium">Transformando personas. Conectando comunidades. Liderando el cambio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 