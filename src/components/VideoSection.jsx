import React from 'react';

const VideoSection = () => {
  return (
    <section className="bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat mb-8 text-center">
            Conocé más sobre nosotros
          </h3>
          
          {/* Video Container */}
          <div className="relative w-full mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Presentación Fundación ELNA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="text-center">
            <button className="btn-primary text-lg font-semibold">
              Ver video presentación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 