import React, { useState } from "react";

export default function InvitationHeader() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="w-full">
      {/* Barras de colores */}
      <div className="flex h-4">
        <div className="flex-1 bg-elna-blue"></div>
        <div className="flex-1 bg-elna-green"></div>
        <div className="flex-1 bg-elna-yellow"></div>
        <div className="flex-1 bg-pink-500"></div>
        <div className="flex-1 bg-red-500"></div>
      </div>
      
      {/* Header principal con fondo más oscuro */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4 text-center relative overflow-hidden">
        {/* Fondo con patrón sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo mejorado con animación de saludo */}
          <div className="flex justify-center mb-8">
            {!logoError ? (
              <div className="relative">
                <img
                  src="/elna-logo.png"
                  alt="Logo Fundación ELNA"
                  className="w-24 h-24 object-contain drop-shadow-2xl animate-wave"
                  onError={() => setLogoError(true)}
                />
                {/* Efecto de brillo alrededor del logo */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
              </div>
            ) : (
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-wave">
                <span className="text-elna-blue font-black text-2xl">ELNA</span>
              </div>
            )}
          </div>
          
          {/* Título principal mejorado con efectos dinámicos */}
          <div className="relative mb-8 group animate-title-in">
            {/* Efecto de fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-elna-blue via-pink-500 to-elna-green rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Título con efectos de texto avanzados */}
            <h1 className="relative text-5xl md:text-7xl font-black tracking-wide text-white mb-6 transform group-hover:scale-105 transition-transform duration-500">
              <span className="relative inline-block cursor-pointer">
                {/* Efecto de brillo en el texto */}
                <span className="absolute inset-0 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-shimmer">
                  ELNA
                </span>
                
                {/* Texto principal con sombra dinámica */}
                <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-500">
                  ELNA
                </span>
                
                {/* Efecto de borde brillante en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  ELNA
                </span>
                
                {/* Efecto de resplandor en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500">
                  ELNA
                </span>
              </span>
            </h1>
            
            {/* Líneas decorativas animadas */}
            <div className="flex justify-center space-x-4 mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-elna-blue to-transparent rounded-full animate-pulse group-hover:w-20 transition-all duration-500 animate-line-expand" style={{animationDelay: '0.5s'}}></div>
              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full animate-pulse group-hover:w-12 transition-all duration-500 animate-line-expand" style={{animationDelay: '0.8s'}}></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-elna-green to-transparent rounded-full animate-pulse group-hover:w-20 transition-all duration-500 animate-line-expand" style={{animationDelay: '1.1s'}}></div>
            </div>
            
            {/* Efecto de partículas flotantes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-bounce group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-pulse group-hover:scale-200 transition-transform duration-500" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-70 animate-bounce group-hover:scale-150 transition-transform duration-500" style={{animationDelay: '0.7s'}}></div>
            </div>
            
            {/* Efecto de ondas en hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Subtítulo mejorado */}
          <p className="text-2xl md:text-3xl font-bold mb-6 text-white/95 drop-shadow-lg">
            Escuela de Liderazgo del Norte Argentino
          </p>
          
          {/* Frase de valor agregado */}
          <div className="glass rounded-3xl p-8 border border-white/30 mb-8">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-4">
              <strong>UNA EXPERIENCIA QUE CAMBIARÁ TU VIDA</strong>
            </p>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
              Transformando personas. Conectando comunidades. Liderando el cambio.
            </p>
          </div>
          

        </div>
      </div>
    </header>
  );
} 