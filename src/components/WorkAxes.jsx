import React from 'react';

const WorkAxes = () => {
  const activities = [
    {
      title: "Talleres Interactivos",
      icon: "🎯",
      description: "Metodologías ágiles para desarrollar habilidades de comunicación y trabajo en equipo",
      color: "from-elna-blue to-blue-700"
    },
    {
      title: "Charlas Inspiradoras", 
      icon: "🎤",
      description: "Disertantes de renombre nacional compartiendo sus experiencias y conocimientos",
      color: "from-elna-orange to-orange-600"
    },
    {
      title: "Encuentro Cultural",
      icon: "🌍",
      description: "Conecta con otras culturas y expande tu visión del mundo",
      color: "from-elna-green to-green-700"
    },
    {
      title: "Reflexión Personal",
      icon: "🧘",
      description: "Espacios diseñados para conectar con tu propósito y autoconocimiento",
      color: "from-elna-yellow to-yellow-600"
    }
  ];

  return (
    <section className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-elna-blue mb-4">
          ¿Qué vivirás en ELNA INSPIRA?
        </h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Una experiencia intensa donde compartirás, intercambiarás opiniones y participarás de experiencias únicas.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="group">
            <div className={`bg-gradient-to-br ${activity.color} text-white rounded-2xl p-6 h-full transform transition-all duration-300 group-hover:scale-105 shadow-lg`}>
              <div className="text-4xl mb-4">
                {activity.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">
                {activity.title}
              </h4>
              <p className="text-white/90">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action adicional */}
      <div className="mt-8 bg-gradient-to-r from-elna-blue to-blue-800 text-white rounded-2xl p-6 text-center">
        <h4 className="text-2xl font-bold mb-3">¿Te invitaron a postularte?</h4>
        <p className="text-lg mb-4">
          Si estás leyendo esto, probablemente sí sea para vos. Estamos buscando personas con ganas de crecer, conectar y generar impacto real.
        </p>
        <button className="bg-elna-orange hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          ¡Descubrí por qué tantos líderes empezaron aquí!
        </button>
      </div>
    </section>
  );
};

export default WorkAxes; 