import React from "react";

export default function AboutSection() {
  return (
    <section className="floating-card p-8 mb-8 fade-in">
      {/* Header de la sección */}
      <div className="text-center mb-12">
        <div className="inline-block mb-6">
          <h3 className="text-4xl md:text-6xl font-black text-elna-blue mb-2">
            FUNDACIÓN ELNA
          </h3>
          <div className="w-full h-1 bg-gradient-to-r from-elna-green via-elna-yellow to-pink-500 rounded-full"></div>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Más de 10 años transformando vidas. Más de 1.000 líderes formados. 
          Una revolución silenciosa que está cambiando el Norte Argentino.
        </p>
      </div>
      
      {/* Contenido principal */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Columna izquierda - Historia y misión */}
        <div className="space-y-8">
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
            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-elna-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-black text-xl">10+</span>
                </div>
                <h4 className="text-2xl font-black text-elna-blue">Años de Impacto</h4>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
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
            <div className="relative z-10 p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-elna-blue font-black text-xl">🎯</span>
                </div>
                <h4 className="text-2xl font-black text-white">Nuestra Misión</h4>
              </div>
              <p className="text-lg leading-relaxed">
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
            <div className="relative z-10 p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-elna-green font-black text-xl">👥</span>
                </div>
                <h4 className="text-2xl font-black text-white">Comunidad Activa</h4>
              </div>
              <p className="text-lg leading-relaxed">
                Somos una comunidad <strong>intergeneracional</strong> con un equipo profesional 
                que sostiene un <strong>modelo de impacto probado</strong> en toda la región.
              </p>
            </div>
          </div>
        </div>
        
        {/* Columna derecha - ELNA como movimiento */}
        <div className="space-y-8">
          {/* ELNA como movimiento */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl h-full flex flex-col justify-center">
            {/* Fondo con imagen difuminada */}
            <div className="absolute inset-0">
              <img 
                src="/IMPACTO SOCIAL.JPG" 
                alt="ELNA"
                className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 to-pink-600/80 group-hover:from-pink-500/90 group-hover:to-pink-600/90 transition-all duration-500"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-elna-blue font-black text-3xl">ELNA</span>
                </div>
                <h4 className="text-3xl font-black mb-6">Más que una escuela</h4>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="text-xl font-bold">Un movimiento</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="text-xl font-bold">Una incubadora de valores</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="text-xl font-bold">Una red que no para de crecer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
             {/* Sección de Experiencia ELNA INSPIRA */}
       <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
         {/* Fondo con imagen difuminada */}
         <div className="absolute inset-0">
                       <img
              src="/elnafondo.png"
              alt="Fondo ELNA"
              className="w-full h-full object-cover object-center opacity-20"
            />
           {/* Overlay para mejorar la legibilidad */}
           <div className="absolute inset-0 bg-black/60"></div>
         </div>
                 <div className="text-center mb-10 relative z-10">
           <h4 className="text-4xl md:text-6xl font-black mb-6">
             <span className="text-gray-300">EXPERIENCIA</span>
             <br />
             <span className="text-elna-blue">ELNA</span>
             <span className="text-gray-300"> INSPIRA</span>
           </h4>
           
           {/* Botón mejorado con efectos dinámicos */}
           <div className="relative group cursor-pointer">
             {/* Efecto de fondo animado */}
             <div className="absolute inset-0 bg-gradient-to-r from-elna-blue via-pink-500 to-elna-green rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
             
             {/* Botón principal */}
             <div className="bg-white rounded-3xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
               {/* Efecto de brillo en hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <p className="text-2xl md:text-3xl font-black text-gray-800 relative z-10">
                 ¿QUÉ HUELLA QUERÉS DEJAR?
               </p>
             </div>
           </div>
         </div>
         
         <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Descripción */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                             <h5 className="text-2xl font-black mb-4 text-white">Experiencias Formativas Intensivas</h5>
              <p className="text-lg leading-relaxed">
                Durante <strong>esta experiencia inmersiva</strong>, jóvenes, emprendedores, empresarios y líderes 
                comunitarios se entrenan en las habilidades más importantes para el liderazgo del futuro.
              </p>
            </div>
            
            {/* Cards mejoradas con fotos de fondo */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card Propósito */}
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 shadow-xl">
                {/* Fondo con imagen difuminada */}
                <div className="absolute inset-0">
                  <img 
                    src="/LIDERAZGO AUTÉNTICO.JPG" 
                    alt="Propósito"
                    className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-elna-green/70 to-green-600/70 group-hover:from-elna-green/80 group-hover:to-green-600/80 transition-all duration-500"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 p-4 text-center text-white">
                  <p className="font-bold text-lg">Propósito</p>
                </div>
              </div>
              
              {/* Card Inspiración */}
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 shadow-xl">
                {/* Fondo con imagen difuminada */}
                <div className="absolute inset-0">
                  <img 
                    src="/TRANSFORMACIÓN PERSONAL.JPG" 
                    alt="Inspiración"
                    className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-elna-yellow/70 to-yellow-600/70 group-hover:from-elna-yellow/80 group-hover:to-yellow-600/80 transition-all duration-500"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 p-4 text-center text-white">
                  <p className="font-bold text-lg">Inspiración</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Card Transformación */}
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 shadow-xl">
                {/* Fondo con imagen difuminada */}
                <div className="absolute inset-0">
                  <img 
                    src="/HERRAMIENTAS PRÁCTICAS.JPG" 
                    alt="Transformación"
                    className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 to-pink-600/70 group-hover:from-pink-500/80 group-hover:to-pink-600/80 transition-all duration-500"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 p-4 text-center text-white">
                  <p className="font-bold text-lg">Transformación</p>
                </div>
              </div>
              
              {/* Card Pasión */}
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 shadow-xl">
                {/* Fondo con imagen difuminada */}
                <div className="absolute inset-0">
                  <img 
                    src="/IMPACTO SOCIAL.JPG" 
                    alt="Pasión"
                    className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/70 to-red-600/70 group-hover:from-red-500/80 group-hover:to-red-600/80 transition-all duration-500"></div>
                </div>
                
                {/* Contenido */}
                <div className="relative z-10 p-4 text-center text-white">
                  <p className="font-bold text-lg">Pasión</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Diagrama de tres ejes */}
          <div className="text-center">
            <h5 className="text-2xl font-black mb-8 text-white">
              CON FOCO EN TRES EJES:
            </h5>
            
                                                  <div className="relative w-96 h-96 mx-auto">
                {/* Líneas de conexión mejoradas - DETRÁS de los círculos */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  {/* Líneas principales con gradiente */}
                  <defs>
                    <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                    <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                    <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Líneas con efectos - conectando los centros de los círculos */}
                  <line x1="192" y1="72" x2="72" y2="288" stroke="url(#line1)" strokeWidth="3" strokeDasharray="5,5" opacity="0.8"/>
                  <line x1="192" y1="72" x2="312" y2="288" stroke="url(#line2)" strokeWidth="3" strokeDasharray="5,5" opacity="0.8"/>
                  {/* Línea de PERSONA a LIDERAZGO - sutil */}
                  <line x1="72" y1="288" x2="312" y2="288" stroke="white" strokeWidth="3" strokeDasharray="5,5" opacity="0.8"/>
                  
                  {/* Puntos de conexión en los centros */}
                  <circle cx="192" cy="72" r="4" fill="white" opacity="0.8"/>
                  <circle cx="72" cy="288" r="4" fill="white" opacity="0.8"/>
                  <circle cx="312" cy="288" r="4" fill="white" opacity="0.8"/>
                </svg>

                {/* Círculo superior - COMUNIDAD */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm group hover:scale-125 active:scale-110 transition-all duration-300 cursor-pointer overflow-hidden">
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
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 via-blue-500/70 to-blue-600/70 group-hover:from-blue-400/80 group-hover:via-blue-500/80 group-hover:to-blue-600/80 transition-all duration-500"></div>
                   </div>
                   
                   {/* Efecto de brillo constante */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 animate-pulse"></div>
                   {/* Efecto de brillo en el borde */}
                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin" style={{animationDuration: '3s'}}></div>
                   <span className="text-white font-black text-sm relative z-10">COMUNIDAD</span>
                   {/* Triángulo interno */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white/30"></div>
                   </div>
                 </div>
                 
                 {/* Círculo inferior izquierdo - PERSONA */}
                 <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-br from-elna-green via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm group hover:scale-125 active:scale-110 transition-all duration-300 cursor-pointer overflow-hidden">
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
                     <div className="absolute inset-0 bg-gradient-to-br from-elna-green/70 via-green-500/70 to-green-600/70 group-hover:from-elna-green/80 group-hover:via-green-500/80 group-hover:to-green-600/80 transition-all duration-500"></div>
                   </div>
                   
                   {/* Efecto de brillo constante */}
                   <div className="absolute inset-0 bg-gradient-to-br from-elna-green to-green-600 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                   {/* Efecto de brillo en el borde */}
                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
                   <span className="text-white font-black text-sm relative z-10">PERSONA</span>
                   {/* Triángulo interno */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white/30 transform rotate-45"></div>
                   </div>
                 </div>
                 
                 {/* Círculo inferior derecho - LIDERAZGO */}
                 <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-br from-elna-yellow via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm group hover:scale-125 active:scale-110 transition-all duration-300 cursor-pointer overflow-hidden">
                   {/* Fondo con imagen difuminada */}
                   <div className="absolute inset-0">
                     <img 
                       src="/LIDERAZGO AUTÉNTICO.JPG" 
                       alt="Liderazgo"
                       className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
                       onError={(e) => {
                         e.target.style.display = 'none';
                       }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-br from-elna-yellow/70 via-yellow-500/70 to-yellow-600/70 group-hover:from-elna-yellow/80 group-hover:via-yellow-500/80 group-hover:to-yellow-600/80 transition-all duration-500"></div>
                   </div>
                   
                   {/* Efecto de brillo constante */}
                   <div className="absolute inset-0 bg-gradient-to-br from-elna-yellow to-yellow-600 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                   {/* Efecto de brillo en el borde */}
                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
                   <span className="text-white font-black text-sm relative z-10">LIDERAZGO</span>
                   {/* Triángulo interno */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white/30 transform -rotate-45"></div>
                   </div>
                 </div>
              </div>
          </div>
        </div>
             </div>
     </section>
  );
} 