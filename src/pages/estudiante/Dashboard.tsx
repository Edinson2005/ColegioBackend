import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/student/ver-notas" className="sidebar-link">Ver notas</Link>
        <Link to="/student/ver-menu" className="sidebar-link">Ver menú</Link>
        <Link to="/student/horario-clases" className="sidebar-link">Horario de clases</Link>
        <Link to="/student/profesores" className="sidebar-link">Profesores</Link>
        <Link to="/login" className="sidebar-link logout">Salir</Link>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <img 
          src="/mnt/data/sena.png" 
          alt="Ghost Rider" 
          className="background-image" 
        />
      </main>
    </div>
  );
};

export default Dashboard;