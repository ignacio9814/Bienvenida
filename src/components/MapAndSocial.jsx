import React from 'react';

const MapAndSocial = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat mb-12 text-center">
            Encontranos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="text-xl font-bold text-gray-900 font-montserrat mb-4">
                Ubicación
              </h4>
              <a 
                href="https://g.co/kgs/6eVhXsK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-elna-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Ver en Google Maps
              </a>
            </div>
            
            {/* Instagram */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-gray-900 font-montserrat mb-4">
                Redes Sociales
              </h4>
              <a 
                href="https://www.instagram.com/elna.fundacion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Seguinos en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapAndSocial; 