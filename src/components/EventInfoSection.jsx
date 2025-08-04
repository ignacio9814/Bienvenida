import React, { useRef, useEffect } from "react";

export default function EventInfoSection() {
  const videoRef = useRef(null);

  const openGoogleMaps = () => {
    // Coordenadas aproximadas de Horco Molle, Tucumán
    const latitude = -26.8167;
    const longitude = -65.3167;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}&z=15`;
    window.open(url, '_blank');
  };

  const openGoogleCalendar = () => {
    // Evento ELNA INSPIRA: 14 de Agosto 17:00 - 17 de Agosto 18:00
    const eventDetails = {
      text: 'ELNA INSPIRA - Experiencia de Liderazgo',
      dates: '20240814T170000/20240817T180000',
      details: 'Una experiencia única donde desarrollarás tu liderazgo, conectarás con otros líderes y te convertirás en un agente de cambio. Residencia Universitaria (Horco Molle), Tucumán, Argentina.',
      location: 'Residencia Universitaria, Horco Molle, Tucumán, Argentina'
    };
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;
    window.open(url, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/accounts/login/?next=%2Felna.fundacion%2F&source=omni_redirect&hl=es', '_blank');
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 80) { // 1:20 = 80 segundos
          video.pause();
          video.currentTime = 0; // Reinicia al inicio
        }
      });
    }
  }, []);

  return (
    <section className="floating-card p-8 mb-8 fade-in">
      {/* Header mejorado con efectos dinámicos */}
      <div className="text-center mb-10">
        <div className="relative group cursor-pointer mb-6">
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-elna-blue via-pink-500 to-elna-green rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Título principal */}
          <h3 className="text-4xl md:text-5xl font-black text-elna-blue relative z-10 transform group-hover:scale-105 transition-all duration-500">
            ¡AGENDA ESTAS FECHAS!
          </h3>
        </div>
        
        {/* Fechas con efectos mejorados */}
        <div className="relative group cursor-pointer mb-6" onClick={openGoogleCalendar}>
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Contenedor principal */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-6 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <p className="text-3xl md:text-4xl font-black text-white relative z-10">
              14, 15, 16 y 17 de Agosto
            </p>
            
            {/* Indicador de que es clickeable */}
            <div className="absolute top-2 right-2 text-white/70 text-sm">
              📅
            </div>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 mt-4 font-medium">
          Solo quedan pocos días para inscribirte
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Card de ubicación mejorada con foto de fondo */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/lugar.jpg" 
              alt="Ubicación"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-elna-green/70 to-green-600/70 group-hover:from-elna-green/80 group-hover:to-green-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-8 text-white text-center">
            <h4 className="text-2xl font-black mb-4">¿Dónde?</h4>
            
            <p className="text-xl font-bold mb-2">
              Residencia Universitaria
            </p>
            <p className="text-xl font-bold mb-4">
              (Horco Molle)
            </p>
            <p className="text-sm text-white/90 font-medium mb-6">
              Tucumán, Argentina
            </p>
            
            {/* Botón mejorado */}
            <button 
              onClick={openGoogleMaps}
              className="bg-white text-elna-green font-black py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              Ver en Google Maps
            </button>
          </div>
        </div>
        
        {/* Card de experiencia mejorada con foto de fondo */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/atencion.jpg" 
              alt="Experiencia"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 to-pink-600/70 group-hover:from-pink-500/80 group-hover:to-pink-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-8 text-white text-center">
            <h4 className="text-2xl font-black mb-4">¿Qué vivirás?</h4>
            
            <p className="text-xl font-bold mb-4">
              Una experiencia transformadora de
            </p>
            <ul className="text-base text-white/95 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                <span className="mr-2">✓</span> Talleres interactivos
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">✓</span> Charlas inspiradoras
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">✓</span> Encuentro cultural
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">✓</span> Reflexión personal
              </li>
            </ul>
            
            {/* Botón mejorado */}
            <button 
              onClick={openGoogleCalendar}
              className="bg-white text-pink-500 font-black py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              Agendar en Google Calendar
            </button>
          </div>
        </div>
      </div>
      
      {/* Sección de video de presentación mejorada */}
      <div className="mb-10">
        <div className="text-center mb-8">
          <div className="relative group cursor-pointer mb-4">
            {/* Efecto de fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-elna-blue via-pink-500 to-elna-green rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <h4 className="text-3xl md:text-4xl font-black text-elna-blue relative z-10 transform group-hover:scale-105 transition-all duration-500">
              Conocé más sobre ELNA
            </h4>
          </div>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Mirá este video de presentación de nuestra escuela
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-elna-green to-pink-500 rounded-3xl p-2 shadow-2xl">
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/escuela.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </div>
      
      {/* Información adicional mejorada */}
      <div className="relative group cursor-pointer max-w-2xl mx-auto">
        {/* Efecto de fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500"></div>
        
        {/* Card principal con backdrop-filter y foto de fondo */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden backdrop-blur-sm border border-blue-700/30">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/foto elna completa 2024.png" 
              alt="ELNA"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-indigo-900/70 group-hover:from-blue-900/80 group-hover:via-blue-800/80 group-hover:to-indigo-900/80 transition-all duration-500"></div>
          </div>
          
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 text-center">
            {/* Título principal */}
            <h3 className="text-3xl md:text-4xl font-black text-blue-200 mb-6 drop-shadow-lg">
              ¿Aún no te inscribiste?
            </h3>
            
            {/* Texto descriptivo */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed drop-shadow-md">
              ¡Estás a tiempo! Solo quedan 10 cupos disponibles. Una experiencia única donde desarrollarás tu liderazgo, conectarás con otros líderes y te convertirás en un agente de cambio.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openInstagram}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl drop-shadow-lg"
              >
                ¡Quiero + Info!
              </button>
              <button 
                onClick={openInstagram}
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white font-black py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl drop-shadow-lg"
              >
                Inscribirme Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 