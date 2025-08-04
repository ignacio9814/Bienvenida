import React from "react";

export default function AlliesSection() {
  const openYouTube = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  const speakers = [
    {
      name: "EVELINA CABRERA",
      image: "/Evelina-cabrera.jpg",
      description: "Mujer con tatuajes en los brazos",
      linkedin: "https://www.linkedin.com/in/evelina-cabrera-570b42112/"
    },
    {
      name: "SOFIA GEYER",
      image: "/sofia.webp",
      description: "Mujer con blazer oscuro",
      linkedin: "https://www.linkedin.com/in/sofía-geyer-7198012a/"
    },
    {
      name: "SILVANA MONDINO",
      image: "/silvana.png",
      description: "Mujer con cabello corto claro",
      linkedin: "https://www.linkedin.com/in/silvana-mondino-01ba4425/"
    },
    {
      name: "SERGIO EXPERT",
      image: "/Sergio-Expert.png",
      description: "Hombre con cabello gris",
      linkedin: "https://www.linkedin.com/in/sergioexpert/"
    },
    {
      name: "PABLO GIESENOW",
      image: "/pablo.webp",
      description: "Hombre con prótesis en las piernas",
      linkedin: "https://www.linkedin.com/in/pablo-giesenow-00b37141/"
    },
    {
      name: "ANDREA CHURBA",
      image: "/andrea.jpg",
      description: "Mujer con collar",
      linkedin: "https://www.linkedin.com/in/andrea-churba-637118102/"
    },
    {
      name: "MOIRA LOWE",
      image: "/moira.jpg",
      description: "Mujer mayor con cabello claro",
      linkedin: "https://www.linkedin.com/in/moira-lowe-94978127/"
    },
    {
      name: "DIEGO BUSTAMANTE",
      image: "/diego.jpg",
      description: "Hombre con barba y remera Pata Pila",
      linkedin: "https://www.linkedin.com/in/diego-bustamante-56b91392/"
    },
    {
      name: "ALFONSO PRAT GAY",
      image: "/alfonso.jpg",
      description: "Hombre con blazer oscuro",
      linkedin: "https://es.wikipedia.org/wiki/Alfonso_Prat-Gay"
    }
  ];

  return (
    <section className="floating-card p-8 mb-8 fade-in">
             {/* Header de la sección - Mejorado */}
       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
         {/* Título y línea */}
         <div className="mb-8 lg:mb-0">
           <h3 className="text-4xl md:text-6xl font-black text-elna-blue mb-6">
             ALIADOS ELNA
           </h3>
           <div className="w-40 h-1 bg-gradient-to-r from-elna-blue to-blue-600 rounded-full shadow-lg"></div>
         </div>
         
         {/* Texto descriptivo */}
         <div className="lg:max-w-lg">
           <p className="text-xl text-gray-700 leading-relaxed font-medium">
             Estos son algunos de los <strong className="text-elna-blue">speakers referentes</strong> que nos han acompañado 
             a lo largo de nuestro camino como formadores de líderes.
           </p>
         </div>
       </div>
      
             {/* Grid de speakers */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10">
         {speakers.map((speaker, index) => (
           <div key={index} className="text-center group">
             {/* Banner con nombre - Mejorado */}
             <div className="bg-gradient-to-r from-elna-blue to-blue-700 rounded-xl px-4 py-3 mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-300">
               <p className="text-white font-black text-xs md:text-sm leading-tight">
                 {speaker.name}
               </p>
             </div>
             
                           {/* Foto circular con efecto de brillo mejorado - Clickeable */}
              <a 
                href={speaker.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative mx-auto w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 cursor-pointer"
              >
                {/* Efecto de brillo azul mejorado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full opacity-40 blur-md group-hover:opacity-60 transition-all duration-500"></div>
                
                {/* Foto */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle' dy='.3em'%3E" + speaker.name.split(' ')[0] + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Efecto de brillo adicional en hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Borde brillante en hover */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/50 transition-all duration-300"></div>
                
                {/* Indicador de enlace externo */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                  </svg>
                </div>
              </a>
           </div>
         ))}
       </div>
      
             {/* Call to action mejorado */}
       <div className="text-center mt-16">
         <div className="bg-gradient-to-br from-elna-blue via-blue-600 to-blue-700 rounded-3xl p-10 shadow-2xl border border-white/10">
           <h4 className="text-3xl md:text-4xl font-black mb-6 text-white">
             ¿Querés conocer más sobre nuestros aliados?
           </h4>
           <p className="text-xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
             Cada uno de estos referentes ha contribuido con su experiencia y visión 
             para formar líderes que transforman realidades.
           </p>
           <button onClick={openYouTube} className="bg-white text-elna-blue font-black py-5 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:bg-gray-100 hover:shadow-3xl">
             Conocer sus historias
           </button>
         </div>
       </div>
    </section>
  );
} 