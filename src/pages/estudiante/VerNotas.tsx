import React, { useState, useEffect } from "react";

const VerNotas: React.FC = () => {
  // Simulando algunas notas de ejemplo
  const [notas, setNotas] = useState([
    { materia: "Matemáticas", nota: 8.5 },
    { materia: "Ciencias", nota: 9.2 },
    { materia: "Historia", nota: 7.0 },
    { materia: "Lengua Española", nota: 8.0 },
  ]);

  // Aquí podrías hacer una llamada a la API para obtener las notas reales
  useEffect(() => {
    // Simulando una llamada a la API
    // fetch("/api/estudiante/notas")
    //   .then((response) => response.json())
    //   .then((data) => setNotas(data));
  }, []);

  return (
    <div className="ver-notas-container">
      <h2>Mis Notas</h2>
      <table className="notas-table">
        <thead>
          <tr>
            <th>Materia</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((nota, index) => (
            <tr key={index}>
              <td>{nota.materia}</td>
              <td>{nota.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerNotas;
