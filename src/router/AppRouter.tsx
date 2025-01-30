import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";


//

// Rutas para el rol de estudiante
import StudentDashboard from "../pages/estudiante/Dashboard"; // Cambié el nombre para reflejar el propósito
import VerNotas from "../pages/estudiante/VerNotas";  // Asegúrate de tener esta página
import VerMenu from "../pages/estudiante/VerMenu";    // Asegúrate de tener esta página
import HorarioClases from "../pages/estudiante/HorarioClases"; // Asegúrate de tener esta página

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>

      
        {/* Rutas principales */} 
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Home />} />
        
        {/* Rutas para estudiantes */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route path="ver-notas" element={<VerNotas />} />
          <Route path="ver-menu" element={<VerMenu />} />
          <Route path="horario-clases" element={<HorarioClases />} />
        </Route>






        {/* Ruta para profesor */}
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
