
import React from "react";
import { Link, Outlet } from "react-router-dom"; // Agregar Outlet aquí
import "../../styles/docente.css"; 

// Datos de ejemplo (esto lo puedes reemplazar más tarde con datos reales desde el backend)
const docentes = [
  {
    nombre: "Juan Pérez",
    email: "juan.perez@instituto.edu",
    materia: "Matemáticas",
    titulos: "Licenciado en Matemáticas, Maestría en Educación",
    foto: "https://via.placeholder.com/150" // Foto de ejemplo
  },
  {
    nombre: "Ana Gómez",
    email: "ana.gomez@instituto.edu",
    materia: "Historia",
    titulos: "Licenciada en Historia, Doctorado en Ciencias Sociales",
    foto: "https://via.placeholder.com/150" // Foto de ejemplo
  },
  // Puedes agregar más docentes aquí
];

const DocentesDashboard: React.FC = () => {
    return (
      <div className="dashboard-container">
        {/* Contenido principal */}
        <main className="main-content">
          <div className="background-image-container">
            <h2>Docentes del Instituto</h2>
            <div className="docentes-list">
              {docentes.map((docente, index) => (
                <div key={index} className="docente-card">
                  <img src={docente.foto} alt={docente.nombre} className="docente-photo" />
                  <div className="docente-info">
                    <h3>{docente.nombre}</h3>
                    <p><strong>Email:</strong> {docente.email}</p>
                    <p><strong>Materia:</strong> {docente.materia}</p>
                    <p><strong>Títulos:</strong> {docente.titulos}</p>
                  </div>
                </div>
              ))}
            </div>
            <Outlet />  {/* Este Outlet se reemplazará con las rutas hijas */}
          </div>
        </main>
      </div>
    );
  };
  
  export default DocentesDashboard;