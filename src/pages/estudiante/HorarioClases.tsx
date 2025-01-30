import React, { useState, useEffect } from "react";

const HorarioClases: React.FC = () => {
  // Simulando el horario de clases
  const [horario, setHorario] = useState([
    { dia: "Lunes", clase: "Matemáticas", hora: "8:00 AM - 9:30 AM" },
    { dia: "Lunes", clase: "Ciencias", hora: "9:45 AM - 11:15 AM" },
    { dia: "Martes", clase: "Historia", hora: "8:00 AM - 9:30 AM" },
    { dia: "Miércoles", clase: "Lengua Española", hora: "10:00 AM - 11:30 AM" },
    { dia: "Viernes", clase: "Educación Física", hora: "11:00 AM - 12:30 PM" },
  ]);

  // Aquí podrías hacer una llamada a la API para obtener el horario real
  useEffect(() => {
    // Simulando una llamada a la API
    // fetch("/api/horario")
    //   .then((response) => response.json())
    //   .then((data) => setHorario(data));
  }, []);

  return (
    <div className="horario-clases-container">
      <h2>Horario de Clases</h2>
      <table className="horario-table">
        <thead>
          <tr>
            <th>Día</th>
            <th>Clase</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {horario.map((item, index) => (
            <tr key={index}>
              <td>{item.dia}</td>
              <td>{item.clase}</td>
              <td>{item.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorarioClases;
