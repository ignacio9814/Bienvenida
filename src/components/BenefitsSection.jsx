import React from "react";

export default function BenefitsSection() {
  return (
    <section className="floating-card p-8 mb-8 fade-in">
      {/* Header de la sección mejorado */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-6xl font-black text-elna-blue mb-6">
          ¿QUÉ OBTENDRÁS EN
          <br />
          <span className="text-elna-blue">
            ELNA INSPIRA?
          </span>
        </h3>
        <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
          Una experiencia transformadora diseñada para convertirte en el líder que tu comunidad necesita
        </p>
      </div>

      {/* Grid de beneficios principales mejorado */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">LIDERAZGO AUTÉNTICO</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Desarrolla las habilidades de liderazgo más demandadas del siglo XXI. 
                Aprende a inspirar, motivar y guiar equipos hacia el éxito.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Comunicación efectiva</p>
              <p className="font-bold mb-2">✓ Toma de decisiones</p>
              <p className="font-bold">✓ Gestión de equipos</p>
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">NETWORKING DE ALTO IMPACTO</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Conecta con más de 1.000 líderes del NOA. Construye relaciones 
                que te abrirán puertas en tu carrera profesional.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Mentores expertos</p>
              <p className="font-bold mb-2">✓ Oportunidades laborales</p>
              <p className="font-bold">✓ Colaboraciones futuras</p>
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">TRANSFORMACIÓN PERSONAL</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Descubre tu propósito, potencia tus fortalezas y supera tus límites. 
                Una experiencia que cambiará tu perspectiva para siempre.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Autoconocimiento</p>
              <p className="font-bold mb-2">✓ Propósito claro</p>
              <p className="font-bold">✓ Confianza renovada</p>
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">HERRAMIENTAS PRÁCTICAS</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Recibe metodologías probadas y herramientas concretas que podrás 
                aplicar inmediatamente en tu vida profesional y personal.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Metodologías ágiles</p>
              <p className="font-bold mb-2">✓ Gestión de proyectos</p>
              <p className="font-bold">✓ Innovación social</p>
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">IMPACTO SOCIAL</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Aprende a generar cambios positivos en tu comunidad. Convierte 
                tus ideas en proyectos que transformen realidades.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Proyectos sociales</p>
              <p className="font-bold mb-2">✓ Emprendimiento</p>
              <p className="font-bold">✓ Sostenibilidad</p>
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
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-black mb-4 text-white">CERTIFICACIÓN ELNA</h4>
              <p className="text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                Recibe tu certificado oficial de Fundación ELNA. Un reconocimiento 
                que validará tus habilidades de liderazgo.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
              <p className="font-bold mb-2">✓ Certificado oficial</p>
              <p className="font-bold mb-2">✓ Certificación para LinkedIn</p>
              <p className="font-bold">✓ Acceso a comunidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 