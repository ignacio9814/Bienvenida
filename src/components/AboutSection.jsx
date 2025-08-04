import React from "react";

export default function AboutSection() {
  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      {/* Header de la sección */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-block mb-4 sm:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-elna-blue mb-2 leading-tight">
            FUNDACIÓN ELNA
          </h3>
          <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-elna-green via-elna-yellow to-pink-500 rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto leading-relaxed">
          Más de 10 años transformando vidas. Más de 1.000 líderes formados. 
          Una revolución silenciosa que está cambiando el Norte Argentino.
        </p>
      </div>
      
      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
        {/* Columna izquierda - Historia y misión */}
        <div className="space-y-6 sm:space-y-8">
          {/* Historia */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
            {/* Fondo con imagen difuminada */}
            <div className="absolute inset-0">
              <img 
                src="/LIDERAZGO AUTÉNTICO.JPG" 
                alt="Historia"
                className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-gray-100/90 group-hover:from-gray-50/95 group-hover:to-gray-100/95 transition-all duration-500"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-elna-blue rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-black text-sm sm:text-lg md:text-xl">10+</span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-elna-blue leading-tight">Años de Impacto</h4>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                En el corazón del Norte Argentino, un grupo de jóvenes ha liderado una <strong>revolución silenciosa</strong>: 
                la formación de líderes con propósito que transforman realidades.
              </p>
            </div>
          </div>
          
          {/* Misión */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
            {/* Fondo con imagen difuminada */}
            <div className="absolute inset-0">
              <img 
                src="/NETWORKING.JPG" 
                alt="Misión"
                className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-elna-blue/80 to-blue-700/80 group-hover:from-elna-blue/90 group-hover:to-blue-700/90 transition-all duration-500"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-elna-blue font-black text-sm sm:text-lg md:text-xl">🎯</span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">Nuestra Misión</h4>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Formar agentes de cambio que actúan con <strong>compromiso, empatía e innovación</strong>, 
                construyendo una red de más de <strong>1.000 líderes</strong> que transforman sus comunidades.
              </p>
            </div>
          </div>
          
          {/* Comunidad */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
            {/* Fondo con imagen difuminada */}
            <div className="absolute inset-0">
              <img 
                src="/TRANSFORMACIÓN PERSONAL.JPG" 
                alt="Comunidad"
                className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-elna-green/80 to-green-600/80 group-hover:from-elna-green/90 group-hover:to-green-600/90 transition-all duration-500"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-elna-green font-black text-sm sm:text-lg md:text-xl">👥</span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">Comunidad Activa</h4>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Somos una comunidad intergeneracional con un equipo profesional que sostiene 
                un modelo de impacto probado en toda la región.
              </p>
            </div>
          </div>
        </div>
        
        {/* Columna derecha - Valores y botón */}
        <div className="space-y-6 sm:space-y-8">
          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Propósito */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
              {/* Fondo con imagen difuminada */}
              <div className="absolute inset-0">
                <img 
                  src="/HERRAMIENTAS PRÁCTICAS.JPG" 
                  alt="Propósito"
                  className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-600/80 group-hover:from-blue-500/90 group-hover:to-blue-600/90 transition-all duration-500"></div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 p-4 sm:p-6 text-white text-center">
                <h5 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">Propósito</h5>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Descubrir y potenciar el propósito único de cada líder
                </p>
              </div>
            </div>
            
            {/* Inspiración */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
              {/* Fondo con imagen difuminada */}
              <div className="absolute inset-0">
                <img 
                  src="/IMPACTO SOCIAL.JPG" 
                  alt="Inspiración"
                  className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 group-hover:from-yellow-500/90 group-hover:to-yellow-600/90 transition-all duration-500"></div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 p-4 sm:p-6 text-white text-center">
                <h5 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">Inspiración</h5>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Motivar a otros a través del ejemplo y la acción
                </p>
              </div>
            </div>
            
            {/* Transformación */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
              {/* Fondo con imagen difuminada */}
              <div className="absolute inset-0">
                <img 
                  src="/CERTIFICACIÓN ELNA.JPG" 
                  alt="Transformación"
                  className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-green-600/80 group-hover:from-green-500/90 group-hover:to-green-600/90 transition-all duration-500"></div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 p-4 sm:p-6 text-white text-center">
                <h5 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">Transformación</h5>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Cambiar realidades desde el liderazgo auténtico
                </p>
              </div>
            </div>
            
            {/* Pasión */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
              {/* Fondo con imagen difuminada */}
              <div className="absolute inset-0">
                <img 
                  src="/LIDERAZGO AUTÉNTICO.JPG" 
                  alt="Pasión"
                  className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 to-pink-600/80 group-hover:from-pink-500/90 group-hover:to-pink-600/90 transition-all duration-500"></div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10 p-4 sm:p-6 text-white text-center">
                <h5 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 leading-tight">Pasión</h5>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Servir con dedicación y compromiso total
                </p>
              </div>
            </div>
          </div>
          
          {/* Círculos de valores con diagrama triangular */}
          <div className="relative">
            {/* SVG con líneas punteadas que conectan los círculos */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
              {/* Línea de COMUNIDAD a PERSONA (izquierda) */}
              <line 
                x1="50%" 
                y1="25%" 
                x2="35%" 
                y2="65%" 
                stroke="url(#gradient1)" 
                strokeWidth="3" 
                strokeDasharray="8,4" 
                strokeLinecap="round"
              />
              
              {/* Línea de COMUNIDAD a LIDERAZGO (derecha) */}
              <line 
                x1="50%" 
                y1="25%" 
                x2="65%" 
                y2="65%" 
                stroke="url(#gradient2)" 
                strokeWidth="3" 
                strokeDasharray="8,4" 
                strokeLinecap="round"
              />
              
              {/* Línea de PERSONA a LIDERAZGO (horizontal) */}
              <line 
                x1="35%" 
                y1="65%" 
                x2="65%" 
                y2="65%" 
                stroke="url(#gradient3)" 
                strokeWidth="3" 
                strokeDasharray="8,4" 
                strokeLinecap="round"
              />
              
              {/* Definición de gradientes */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Contenedor principal del diagrama */}
            <div className="relative flex flex-col items-center justify-center space-y-8 sm:space-y-12" style={{ zIndex: 10 }}>
              
              {/* Círculo superior - COMUNIDAD */}
              <div className="group relative overflow-hidden rounded-full transition-all duration-500 shadow-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 hover:scale-110">
                {/* Fondo con imagen difuminada */}
                <div className="absolute inset-0">
                  <img 
                    src="/NETWORKING.JPG" 
                    alt="Comunidad"
                    className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-elna-blue/80 to-blue-700/80 group-hover:from-elna-blue/90 group-hover:to-blue-700/90 transition-all duration-500"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <h6 className="text-xs sm:text-sm md:text-base font-black text-white leading-tight text-center">COMUNIDAD</h6>
                </div>
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos inferiores en línea horizontal */}
              <div className="flex justify-center space-x-8 sm:space-x-12 md:space-x-16">
                
                {/* Círculo izquierdo - PERSONA */}
                <div className="group relative overflow-hidden rounded-full transition-all duration-500 shadow-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 hover:scale-110">
                  {/* Fondo con imagen difuminada */}
                  <div className="absolute inset-0">
                    <img 
                      src="/TRANSFORMACIÓN PERSONAL.JPG" 
                      alt="Persona"
                      className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-elna-green/80 to-green-600/80 group-hover:from-elna-green/90 group-hover:to-green-600/90 transition-all duration-500"></div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <h6 className="text-xs sm:text-sm md:text-base font-black text-white leading-tight text-center">PERSONA</h6>
                  </div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Círculo derecho - LIDERAZGO */}
                <div className="group relative overflow-hidden rounded-full transition-all duration-500 shadow-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 hover:scale-110">
                  {/* Fondo con imagen difuminada */}
                  <div className="absolute inset-0">
                    <img 
                      src="/HERRAMIENTAS PRÁCTICAS.JPG" 
                      alt="Liderazgo"
                      className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 to-pink-600/80 group-hover:from-pink-500/90 group-hover:to-pink-600/90 transition-all duration-500"></div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <h6 className="text-xs sm:text-sm md:text-base font-black text-white leading-tight text-center">LIDERAZGO</h6>
                  </div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Texto explicativo del diagrama */}
            <div className="text-center mt-6 sm:mt-8 relative z-10">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-lg">
                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-800">
                  <span className="font-black text-elna-blue">COMUNIDAD</span> inspira <span className="font-black text-elna-green">PERSONA</span> que desarrolla <span className="font-black text-pink-500">LIDERAZGO</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Botón de acción */}
          <div className="text-center">
            <button className="bg-white/90 backdrop-blur-sm border-2 border-elna-blue text-elna-blue font-black py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:bg-elna-blue hover:text-white shadow-lg hover:shadow-xl">
              ¿QUÉ HUELLA QUERÉS DEJAR?
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer de la sección */}
      <div className="text-center">
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 leading-tight text-elna-blue">
            ELNA
          </h4>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Más que una escuela
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Un movimiento
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Una incubadora de valores
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
              Una red que no para de crecer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 