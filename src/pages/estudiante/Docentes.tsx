import React, { useEffect, useState } from "react";
import "../../styles/docente.css";

interface Teacher {
  nombre: string;
  email: string;
  materia: string;
  titulos: string;
}

const TeachersList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("https://backend-school-9ipd.onrender.com/teachers");
        if (!response.ok) {
          throw new Error("Error al obtener los docentes");
        }
        const data = await response.json();
        setTeachers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <div className="background-image-container">
          <h2>Docentes del Instituto</h2>

          {loading && <p>Cargando docentes...</p>}
          {error && <p className="error">{error}</p>}

          <div className="docentes-list">
            {!loading && !error && teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <div key={index} className="docente-card">
                  <img 
                    src={require("../../assets/default-teacher.jpg")} 
                    alt={teacher.nombre} 
                    className="docente-photo" 
                  />
                  <div className="docente-info">
                    <h3>{teacher.nombre}</h3>
                    <p><strong>Email:</strong> {teacher.email}</p>
                    <p><strong>Materia:</strong> {teacher.materia}</p>
                    <p><strong>Títulos:</strong> {teacher.titulos}</p>
                  </div>
                </div>
              ))
            ) : (
              !loading && <p>No hay docentes disponibles.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeachersList;
