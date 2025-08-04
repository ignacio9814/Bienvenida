import React, { useState, useEffect } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fecha objetivo: 14 de agosto de 2025 a las 17:00 hs
    const targetDate = new Date('2025-08-14T17:00:00-03:00'); // UTC-3 para Argentina
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Si ya pasó la fecha, mostrar ceros
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calcular inmediatamente
    calculateTimeLeft();
    
    // Actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="floating-card p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 fade-in">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 text-elna-blue leading-tight">
          ¡YA FALTA MENOS!
        </h3>
        
        {/* Countdown Timer minimalista */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="bg-elna-green rounded-2xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
              DÍAS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-elna-yellow rounded-2xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
              HORAS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-red-500 rounded-2xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
              MINUTOS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-500 rounded-2xl p-3 sm:p-4 md:p-6 mb-2 sm:mb-3">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
              SEGUNDOS
            </div>
          </div>
        </div>
        
        {/* Mensaje de urgencia minimalista */}
        <div className="bg-elna-blue rounded-2xl p-4 sm:p-6">
          <p className="text-base sm:text-lg md:text-xl font-black text-white leading-tight">
            ⏰ Cupos limitados - ¡No te lo pierdas!
          </p>
        </div>
      </div>
    </section>
  );
} 