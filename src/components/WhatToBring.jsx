import React from 'react';

const WhatToBring = () => {
  const items = [
    "Ropa deportiva y zapatillas",
    "Abrigo y campera", 
    "Termo y mate",
    "Repelente y protector solar"
  ];

  return (
    <section className="bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat mb-8 text-center">
            ¿Qué llevar?
          </h3>
          
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-elna-blue rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-montserrat">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToBring; 