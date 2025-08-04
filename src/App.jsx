import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SecureInvitation from "./components/SecureInvitation";
import DirectInvitation from "./components/DirectInvitation";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta con contraseña */}
        <Route path="/secure" element={<SecureInvitation />} />
        
        {/* Ruta directa sin contraseña */}
        <Route path="/direct" element={<DirectInvitation />} />
        
        {/* Ruta por defecto - redirige a la versión con contraseña */}
        <Route path="/" element={<Navigate to="/secure" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 