import React, { useState } from "react";
import confetti from "canvas-confetti";

export default function PasswordAuth({ onAuthenticated }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);

    // Simular un pequeño delay para mejor UX
    setTimeout(() => {
      if (password === "ELNA25" || password === "elna25") {
        setIsAuthenticated(true);
        triggerConfetti();
        // Llamar al callback después de un pequeño delay para que se vea el confeti
        setTimeout(() => {
          onAuthenticated();
        }, 2000);
      } else {
        setShowError(true);
        setIsLoading(false);
      }
    }, 500);
  };

  const triggerConfetti = () => {
    // Confeti inicial
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Confeti continuo por 3 segundos
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  };

  if (isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500 via-green-500 via-yellow-400 via-pink-500 to-red-500 flex items-center justify-center z-50">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            ¡BIENVENIDO/A!
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Acceso autorizado a ELNA INSPIRA
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
      <div className="max-w-md w-full mx-4">
        {/* Logo ELNA limpio sin efectos de fondo */}
        <div className="text-center mb-8">
          <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
            {/* Logo real de ELNA sin ningún efecto de fondo */}
            <img 
              src="/elna-logo.png" 
              alt="ELNA Logo"
              className="w-40 h-40 object-contain drop-shadow-2xl"
              onError={(e) => {
                // Fallback si la imagen no carga
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback si la imagen no carga */}
            <div className="w-40 h-40 bg-gradient-to-br from-elna-blue via-pink-500 to-elna-green rounded-full flex items-center justify-center hidden">
              <span className="text-white font-black text-4xl">ELNA</span>
            </div>
          </div>
          
          {/* Título ELNA INSPIRA con colores específicos */}
          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2 relative z-10">
              <span className="bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                ELNA INSPIRA
              </span>
            </h1>
            {/* Efecto de brillo detrás del texto con los colores específicos */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 via-pink-500 to-red-500 blur-xl opacity-20 animate-pulse"></div>
          </div>
          
          <p className="text-gray-300 font-medium">
            Acceso Exclusivo
          </p>
        </div>

        {/* Formulario de contraseña */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-white font-bold mb-2">
                Contraseña de Acceso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-elna-blue focus:border-transparent transition-all duration-300"
                placeholder="Ingresa 'ELNA25' o 'elna25'"
                autoFocus
              />
            </div>

            {showError && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4">
                <p className="text-red-200 text-center font-medium">
                  ❌ Contraseña incorrecta. Intenta nuevamente.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-gray-900 font-black py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mr-2"></div>
                  Verificando...
                </div>
              ) : (
                "Acceder"
              )}
            </button>
          </form>
        </div>

        {/* Información adicional */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Esta es una experiencia exclusiva de ELNA INSPIRA
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Contacta con el equipo para obtener acceso
          </p>
        </div>
      </div>
    </div>
  );
} 