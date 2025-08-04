import React, { useState, useEffect } from "react";

export default function CongratulationsSection() {
  const [bgError, setBgError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 overflow-hidden fade-in relative">
      {/* Fondo con imagen difuminada mejorado */}
      <div className="absolute inset-0">
        {!bgError ? (
          <img
            src="/foto elna completa 2024.png"
            alt="Comunidad ELNA"
            className="w-full h-full object-cover object-center scale-110 animate-slow-zoom"
            onError={() => setBgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-elna-blue via-purple-600 to-blue-800 animate-gradient-shift"></div>
        )}
        {/* Overlay mejorado con gradiente dinámico */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 backdrop-blur-sm"></div>
        {/* Efecto de luz sutil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent"></div>
      </div>
      
      {/* Confeti mejorado con más variedad */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Confeti animado con colores ELNA - más partículas */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} rounded-full confetti`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              backgroundColor: ['#27AE60', '#F2C94C', '#E74C3C', '#E94E8A', '#1B3A6B'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
        
        {/* Efecto de brillos flotantes */}
        <div className="absolute top-1/4 left-1/4 w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-yellow-300 rounded-full animate-bounce opacity-80" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-pink-300 rounded-full animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Contenido principal mejorado */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] px-2 sm:px-4">
        {/* Mensaje principal con animaciones escalonadas */}
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl leading-tight tracking-wide animate-title-bounce text-center">
            ¡FELICIDADES!
          </h2>
        </div>
        
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white drop-shadow-2xl leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-shimmer">
              FUISTE ELEGIDO/A
            </span>
          </h3>
        </div>
        
        {/* Contenedor de experiencia mejorado */}
        <div className={`bg-white/20 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-8 sm:mb-10 md:mb-12 text-center border border-white/30 shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          <div className="mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide animate-pulse">
              PARA VIVIR LA EXPERIENCIA
            </h4>
          </div>
          
                     {/* ELNA INSPIRA con borde de colores brillantes */}
           <div className="relative group cursor-pointer">
             {/* Borde de colores con latido pausado */}
             <div className="absolute inset-0 rounded-3xl p-1 sm:p-2 bg-gradient-to-r from-blue-500 via-yellow-400 via-pink-500 via-red-500 to-green-500 bg-size-200 pulse-border opacity-90"></div>
             
                            {/* Fondo oscuro como en la imagen */}
               <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-3xl p-4 sm:p-6 md:p-8 relative overflow-hidden m-1 sm:m-2">
               
               {/* Texto ELNA INSPIRA con glow de colores */}
               <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center relative leading-tight">
                 {/* Efecto de glow de colores */}
                 <span className="relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,1)] transition-all duration-500">
                   ELNA INSPIRA
                 </span>
                 
                 {/* Efecto de resplandor de colores en hover */}
                 <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 via-red-500 via-green-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500">
                   ELNA INSPIRA
                 </span>
                 
                 {/* Efecto de glow adicional con colores */}
                 <span className="absolute inset-0 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all duration-500">
                   ELNA INSPIRA
                 </span>
                 
                 <span className="absolute inset-0 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.8)] transition-all duration-500">
                   ELNA INSPIRA
                 </span>
                 
                 <span className="absolute inset-0 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all duration-500">
                   ELNA INSPIRA
                 </span>
                 
                 <span className="absolute inset-0 drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.8)] transition-all duration-500">
                   ELNA INSPIRA
                 </span>
               </h5>
               
               {/* Partículas sutiles como en la imagen */}
               <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-1/4 left-1/4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-pink-400 rounded-full opacity-60"></div>
                 <div className="absolute top-1/2 right-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-yellow-400 rounded-full opacity-60"></div>
                 <div className="absolute bottom-1/3 left-1/3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full opacity-60"></div>
               </div>
             </div>
           </div>
        </div>
        
        {/* Mensaje motivacional mejorado */}
        <div className={`max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg font-medium mb-3 sm:mb-4">
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                Has sido seleccionado/a para ser parte de la comunidad de líderes más grande del NOA.
              </span>
              <br />
              <span className="inline-block animate-fade-in-up" style={{animationDelay: '1.0s'}}>
                Esta es tu oportunidad de transformar tu futuro y el de tu comunidad.
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed drop-shadow-lg">
              <strong className="animate-pulse">
                ¿Estás listo/a para convertirte en el líder que tu comunidad necesita?
              </strong>
            </p>
          </div>
        </div>
      </div>
      {/* Círculos de colores decorativos por fuera del marco */}
      <div className="pointer-events-none">
        <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full shadow-lg opacity-80"></div>
        <div className="absolute -top-2 sm:-top-3 left-1/2 w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-yellow-400 rounded-full shadow-lg opacity-80"></div>
        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full shadow-lg opacity-80"></div>
        <div className="absolute bottom-1/2 -left-2 sm:-left-3 w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-green-500 rounded-full shadow-lg opacity-80"></div>
        <div className="absolute -bottom-2 sm:-bottom-3 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full shadow-lg opacity-80"></div>
      </div>
    </section>
  );
} 