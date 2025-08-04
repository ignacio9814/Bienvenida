import React from "react";
import InvitationHeader from "./InvitationHeader";
import CongratulationsSection from "./CongratulationsSection";
import CountdownSection from "./CountdownSection";
import BenefitsSection from "./BenefitsSection";
import AboutSection from "./AboutSection";
import EventInfoSection from "./EventInfoSection";
import WhatToBringSection from "./WhatToBringSection";
import WhatIsElnaSection from "./WhatIsElnaSection";
import AlliesSection from "./AlliesSection";
import CallToActionSection from "./CallToActionSection";

export default function DirectInvitation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <InvitationHeader />
        <CongratulationsSection />
        <CountdownSection />
        <BenefitsSection />
        <AboutSection />
        <EventInfoSection />
        <WhatToBringSection />
        <WhatIsElnaSection />
        <AlliesSection />
        <CallToActionSection />
      </main>
    </div>
  );
} 