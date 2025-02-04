import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/docente.css"; // Asegúrate de que este archivo exista y tenga estilos adecuados

interface Docente {
  nombre: string;
  email: string;
  materia: string;
  titulos: string;
}

const DocentesDashboard: React.FC = () => {
  const [docentes, setDocentes] = useState<Docente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://backend-school-9ipd.onrender.com/teachers")
      .then((response) => {
        setDocentes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los docentes:", error);
        setError("No se pudo cargar la lista de docentes.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <h2>Docentes del Instituto</h2>

        {loading ? (
          <p>Cargando docentes...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="docentes-list">
            {docentes.map((docente, index) => (
              <div key={index} className="docente-card">
                <img
                  alt={docente.nombre}
                  className="docente-photo"
                />
                <div className="docente-info">
                  <h3>{docente.nombre}</h3>
                  <p><strong>Email:</strong> {docente.email}</p>
                  <p><strong>Materia:</strong> {docente.materia}</p>
                  <p><strong>Títulos:</strong> {docente.titulos}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DocentesDashboard;
