import React from "react";
import { Link, Outlet } from "react-router-dom"; // Agregar Outlet aquí
import "../../styles/estudiante.css"; // Asegúrate de que este archivo CSS contenga la clase adecuada

const StudentDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="ver-notas" className="sidebar-link">Ver notas</Link>
        <Link to="ver-menu" className="sidebar-link">Ver menú</Link>
        <Link to="horario-clases" className="sidebar-link">Horario de clases</Link>
        <Link to="/login" className="sidebar-link logout">Salir</Link>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <div className="background-image-container">
          <Outlet />  {/* Este Outlet se reemplazará con las rutas hijas */}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
