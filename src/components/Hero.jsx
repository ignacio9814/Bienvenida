import React, { useState } from "react";

export default function Hero() {
  // Estado para manejar error de carga de la imagen principal
  const [bgError, setBgError] = useState(false);
  // Estado para manejar error de carga del logo
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="p-0 mb-0 rounded-none">
      {/* Fondo con overlay */}
      <div className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center">
        {!bgError ? (
          <img
            src="/foto elna completa 2024.png"
            alt="Foto grupal ELNA"
            title="Foto grupal ELNA"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            onError={() => setBgError(true)}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-400 flex items-center justify-center z-0">
            <span className="text-white text-lg">Imagen no disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight text-center drop-shadow-lg leading-none mb-2">
            BIENVENIDOS
          </h1>
          <div className="flex flex-row items-center justify-center space-x-2 mb-2">
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-widest">E</span>
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-widest">L</span>
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-widest">N</span>
            <span className="text-3xl sm:text-4xl font-bold text-white tracking-widest">A</span>
          </div>
        </div>
      </div>
      {/* Bloque azul institucional */}
      <div className="bg-elna-blue w-full py-8 px-2 flex flex-col items-center justify-center relative">
        {/* Franja celeste */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-4 bg-[#3EC6FF] w-full z-10" style={{ minHeight: '16px' }} />
        {/* Logo y textos */}
        <div className="relative z-20 flex flex-col items-center w-full">
          {/* Logo grande blanco */}
          <div className="mb-2 flex flex-col items-center">
            {!logoError ? (
              <img
                src="/elna-logo.png"
                alt="Logo ELNA"
                title="Logo Fundación ELNA"
                className="w-24 sm:w-32 mb-2"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <svg
                className="w-24 sm:w-32 mb-2"
                viewBox="0 0 64 64"
                aria-label="Logo no disponible"
              >
                <circle cx="32" cy="32" r="32" fill="#fff" />
                <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" dy=".3em">ELNA</text>
              </svg>
            )}
          </div>
          {/* Fundación manuscrita sobre la franja celeste */}
          <span
            className="font-dancing-script text-3xl sm:text-4xl text-white font-bold italic mb-1 relative"
            style={{ top: '-32px', left: '-60px', textShadow: '0 2px 8px #1B3A6B' }}
          >
            Fundación
          </span>
          {/* ELNA grande */}
          <span className="text-5xl sm:text-7xl font-extrabold text-white tracking-widest mb-2 relative z-20">
            ELNA
          </span>
          {/* Subtítulo */}
          <span className="text-lg sm:text-xl text-white font-medium mb-2 relative z-20">
            Escuela de Liderazgo del Norte Argentino
          </span>
          {/* Frase final */}
          <span className="block text-base sm:text-lg text-white font-normal mt-4 text-center relative z-20">
            Transformando personas. Conectando comunidades. Liderando el cambio
          </span>
        </div>
      </div>
    </section>
  );
} 