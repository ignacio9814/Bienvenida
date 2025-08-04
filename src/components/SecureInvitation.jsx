import React, { useState } from "react";
import PasswordAuth from "./PasswordAuth";
import DirectInvitation from "./DirectInvitation";

export default function SecureInvitation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordAuth onAuthenticated={handleAuthenticated} />;
  }

  return <DirectInvitation />;
} 