import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Teacher from "../pages/teacher/Teacher";


//

// Rutas para el rol de estudiante
import StudentDashboard from "../pages/estudiante/Dashboard"; // Cambié el nombre para reflejar el propósito
import VerNotas from "../pages/estudiante/VerNotas";  // Asegúrate de tener esta página
import VerMenu from "../pages/estudiante/VerMenu";    // Asegúrate de tener esta página
import HorarioClases from "../pages/estudiante/HorarioClases"; // Asegúrate de tener esta página
<<<<<<< HEAD
import Student from "../pages/teacher/Students";
import Home from "../pages/Home";
import AñadirNotas from "../pages/teacher/AñadirNotas";
=======
import Docentes from "../pages/estudiante/Docentes";
<<<<<<< HEAD
import StudentInfo from "../pages/estudiante/StudentInfo";


=======
>>>>>>> 979a45e6a7c1a69fc1f7330a594b60c23419666c
>>>>>>> origin/main

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>

      
        {/* Rutas principales */} 
        <Route path="/" element={<Login />} />

        
        {/* Rutas para estudiantes */}
        <Route path="/" element={<StudentInfo />} /> 

        <Route path="/student" element={<StudentDashboard />}>
          <Route path="ver-notas" element={<VerNotas />} />
          <Route path="ver-menu" element={<VerMenu />} />
<<<<<<< HEAD
          <Route path="horario-clases" element={<HorarioClases />} />         

=======
          <Route path="horario-clases" element={<HorarioClases />} />
          <Route path="Docentess" element={<Docentes />} />
>>>>>>> 979a45e6a7c1a69fc1f7330a594b60c23419666c
        </Route>
        {/*Rutas para el profesor*/}  
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/students" element={<Student />}/>
        <Route path="/añadirNotas" element={<AñadirNotas />}/>
        
        <Route path="/example" element= {<Home />}/>






        
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
