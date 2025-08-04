import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom section-padding">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-montserrat">
              ELNA
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 font-medium font-montserrat leading-relaxed">
              <span className="text-elna-blue font-semibold">Transformando personas.</span>{' '}
              <span className="text-elna-purple font-semibold">Conectando comunidades.</span>{' '}
              <span className="text-elna-dark font-semibold">Liderando el cambio</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 