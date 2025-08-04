import React from "react";

export default function BenefitsSection() {
  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      {/* Header de la sección mejorado */}
      <div className="text-center mb-12 sm:mb-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-elna-blue mb-4 sm:mb-6 leading-tight">
          ¿QUÉ OBTENDRÁS EN
          <br />
          <span className="text-elna-blue">
            ELNA INSPIRA?
          </span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto leading-relaxed">
          Una experiencia transformadora diseñada para convertirte en el líder que tu comunidad necesita
        </p>
      </div>

      {/* Grid de beneficios principales mejorado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
        {/* Beneficio 1: Liderazgo */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/LIDERAZGO AUTÉNTICO.JPG" 
              alt="Liderazgo"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-elna-blue/70 to-blue-700/70 group-hover:from-elna-blue/80 group-hover:to-blue-700/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">LIDERAZGO AUTÉNTICO</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Desarrolla las habilidades de liderazgo más demandadas del siglo XXI. 
                Aprende a inspirar, motivar y guiar equipos hacia el éxito.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Comunicación efectiva</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Toma de decisiones</p>
              <p className="font-bold text-sm sm:text-base">✓ Gestión de equipos</p>
            </div>
          </div>
        </div>

        {/* Beneficio 2: Networking */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/NETWORKING.JPG" 
              alt="Networking"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-elna-green/70 to-green-600/70 group-hover:from-elna-green/80 group-hover:to-green-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">NETWORKING DE ALTO IMPACTO</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Conecta con más de 1.000 líderes del NOA. Construye relaciones 
                que te abrirán puertas en tu carrera profesional.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Mentores expertos</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Oportunidades laborales</p>
              <p className="font-bold text-sm sm:text-base">✓ Colaboraciones futuras</p>
            </div>
          </div>
        </div>

        {/* Beneficio 3: Transformación Personal */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/TRANSFORMACIÓN PERSONAL.JPG" 
              alt="Transformación Personal"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-elna-yellow/70 to-yellow-600/70 group-hover:from-elna-yellow/80 group-hover:to-yellow-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">TRANSFORMACIÓN PERSONAL</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Descubre tu propósito, potencia tus fortalezas y supera tus límites. 
                Una experiencia que cambiará tu perspectiva para siempre.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Autoconocimiento</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Propósito claro</p>
              <p className="font-bold text-sm sm:text-base">✓ Confianza renovada</p>
            </div>
          </div>
        </div>

        {/* Beneficio 4: Herramientas Prácticas */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/HERRAMIENTAS PRÁCTICAS.JPG" 
              alt="Herramientas Prácticas"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 to-pink-600/70 group-hover:from-pink-500/80 group-hover:to-pink-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">HERRAMIENTAS PRÁCTICAS</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Recibe metodologías probadas y herramientas concretas que podrás 
                aplicar inmediatamente en tu vida profesional y personal.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Metodologías ágiles</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Gestión de proyectos</p>
              <p className="font-bold text-sm sm:text-base">✓ Innovación social</p>
            </div>
          </div>
        </div>

        {/* Beneficio 5: Impacto Social */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/IMPACTO SOCIAL.JPG" 
              alt="Impacto Social"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/70 to-red-600/70 group-hover:from-red-500/80 group-hover:to-red-600/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">IMPACTO SOCIAL</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Aprende a generar cambios positivos en tu comunidad. Convierte 
                tus ideas en proyectos que transformen realidades.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Proyectos sociales</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Emprendimiento</p>
              <p className="font-bold text-sm sm:text-base">✓ Sostenibilidad</p>
            </div>
          </div>
        </div>

        {/* Beneficio 6: Certificación */}
        <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 shadow-2xl">
          {/* Fondo con imagen difuminada */}
          <div className="absolute inset-0">
            <img 
              src="/CERTIFICACIÓN ELNA.JPG" 
              alt="Certificación ELNA"
              className="w-full h-full object-cover blur-sm group-hover:blur-md transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 to-gray-900/70 group-hover:from-gray-800/80 group-hover:to-gray-900/80 transition-all duration-500"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-white leading-tight">CERTIFICACIÓN ELNA</h4>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Recibe tu certificado oficial de Fundación ELNA. Un reconocimiento 
                que validará tus habilidades de liderazgo.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/30">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Certificado oficial</p>
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">✓ Certificación para LinkedIn</p>
              <p className="font-bold text-sm sm:text-base">✓ Acceso a comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 