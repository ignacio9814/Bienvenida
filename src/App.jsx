import React, { useState } from "react";
import PasswordAuth from "./components/PasswordAuth";
import InvitationHeader from "./components/InvitationHeader";
import CountdownSection from "./components/CountdownSection";
import CongratulationsSection from "./components/CongratulationsSection";
import EventInfoSection from "./components/EventInfoSection";
import BenefitsSection from "./components/BenefitsSection";
import AboutSection from "./components/AboutSection";
import AlliesSection from "./components/AlliesSection";
import WhatToBringSection from "./components/WhatToBringSection";
import WhatIsElnaSection from "./components/WhatIsElnaSection";
import CallToActionSection from "./components/CallToActionSection";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordAuth onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header con barras de colores */}
      <InvitationHeader />

      <main className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-6 md:py-8">
        {/* Countdown timer - ¡YA FALTA MENOS! */}
        <CountdownSection />

        {/* 1. Sección de felicitaciones - GANCHO EMOCIONAL */}
        <CongratulationsSection />

        {/* 2. Información del evento con VIDEO - CONTENIDO MÁS ATRACTIVO */}
        <EventInfoSection />

        {/* 3. Beneficios transformadores - VALOR INMEDIATO */}
        <BenefitsSection />

        {/* 4. Información sobre Fundación ELNA - CREDIBILIDAD */}
        <AboutSection />

        {/* 5. Aliados ELNA - Speakers - SOCIAL PROOF */}
        <AlliesSection />

        {/* 6. Qué llevar - PRACTICIDAD */}
        <WhatToBringSection />

        {/* 7. ¿Qué significa ELNA? - VIDEO EXPERIENCIA */}
        <WhatIsElnaSection />

        {/* 8. Call to action - CONVERSIÓN */}
        <CallToActionSection />
      </main>
    </div>
  );
}

export default App; 