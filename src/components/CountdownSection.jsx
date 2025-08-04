import React, { useState, useEffect } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 22,
    minutes: 38,
    seconds: 21
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="floating-card p-8 mb-8 fade-in">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-black mb-8 text-elna-blue">
          ¡YA FALTA MENOS!
        </h3>
        
        {/* Countdown Timer minimalista */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="bg-elna-green rounded-2xl p-6 mb-3">
              <div className="text-4xl md:text-6xl font-black text-white">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              DÍAS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-elna-yellow rounded-2xl p-6 mb-3">
              <div className="text-4xl md:text-6xl font-black text-white">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              HORAS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-red-500 rounded-2xl p-6 mb-3">
              <div className="text-4xl md:text-6xl font-black text-white">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              MINUTOS
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-500 rounded-2xl p-6 mb-3">
              <div className="text-4xl md:text-6xl font-black text-white">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              SEGUNDOS
            </div>
          </div>
        </div>
        
        {/* Mensaje de urgencia minimalista */}
        <div className="bg-elna-blue rounded-2xl p-6">
          <p className="text-xl font-black text-white">
            ⏰ Cupos limitados - ¡No te lo pierdas!
          </p>
        </div>
      </div>
    </section>
  );
} 