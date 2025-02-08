import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"; 
import "../../styles/estudiante.css";

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const studentData = localStorage.getItem("studentData");

    // Si no hay datos guardados, redirigir al formulario
    if (!studentData) {
      navigate("/student-info");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
      <Link to="registro" className="sidebar-link">registro</Link>

        <Link to="ver-notas" className="sidebar-link">Ver notas</Link>
        <Link to="ver-menu" className="sidebar-link">Ver menú</Link>
        <Link to="horario-clases" className="sidebar-link">Horario de clases</Link>
        <Link to="Docentes" className="sidebar-link">docentes </Link>


        <Link to="/" className="sidebar-link logout">Salir</Link>
      </aside>

      <main className="main-content">
        <div className="background-image-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
