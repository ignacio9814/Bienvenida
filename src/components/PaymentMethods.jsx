import React from "react";

export default function PaymentMethods() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-elna-blue mb-4">
          Inversión en tu Futuro
        </h2>
        <p className="text-gray-600 text-lg">
          Elige la opción que mejor se adapte a tus necesidades
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Opción Efectivo/Transferencia */}
        <div className="bg-gradient-to-br from-elna-blue to-blue-800 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-4xl mb-2 block">💳</span>
            <h3 className="text-2xl font-bold mb-2">Efectivo/Transferencia</h3>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">$400.000</div>
            <p className="text-white/80 text-sm">Precio regular</p>
          </div>
          
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <p className="text-sm text-white/90 mb-1">Pagando hasta el 31/07</p>
            <div className="text-2xl md:text-3xl font-bold text-elna-orange">$370.000</div>
            <p className="text-xs text-white/70">¡Ahorrás $30.000!</p>
          </div>
          
          <button className="w-full bg-elna-orange hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Elegir esta opción
          </button>
        </div>

        {/* Opción Cuotas */}
        <div className="bg-gradient-to-br from-elna-green to-green-700 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-4xl mb-2 block">📅</span>
            <h3 className="text-2xl font-bold mb-2">Cuotas sin Interés</h3>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">$420.000</div>
            <p className="text-white/80 text-sm">En 3 cuotas de $140.000</p>
          </div>
          
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <p className="text-sm text-white/90 mb-1">Facilidad de pago</p>
            <div className="text-lg font-bold">3 cuotas mensuales</div>
            <p className="text-xs text-white/70">Sin intereses adicionales</p>
          </div>
          
          <button className="w-full bg-white text-elna-green font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Elegir esta opción
          </button>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-8 bg-elna-gray rounded-2xl p-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-elna-blue mb-4">¿Sabías que otorgamos becas?</h4>
          <p className="text-gray-600 mb-4">
            Todos los años la escuela otorga más de 20 becas para jóvenes que quieren ser parte del cambio.
          </p>
          <button className="bg-elna-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
            Solicitar Beca
          </button>
        </div>
      </div>
    </section>
  );
} 