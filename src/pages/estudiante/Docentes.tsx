import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]); // Estado para almacenar la lista de profesores
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para obtener los datos de la API
  const fetchTeachers = async () => {
    try {
      const response = await axios.get("https://backend-school-9ipd.onrender.com/teachers");
      setTeachers(response.data); // Guardar los datos en el estado
      setLoading(false); // Indicar que la carga ha terminado
    } catch (err) {
      console.error("Error al obtener los datos:", err);
      setError("Ocurrió un error al cargar los datos."); // Mostrar un mensaje de error
      setLoading(false);
    }
  };

  // Ejecutar la función al montar el componente
  useEffect(() => {
    fetchTeachers();
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar un mensaje de error si ocurre un problema
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Mostrar la lista de profesores
  return (
    <div className="teacher-list-container">
      <h2>Lista de Profesores</h2>
      {teachers.length > 0 ? (
        <ul>
          {teachers.map((teacher, index) => (
            <li key={index} className="teacher-item">
              <p><strong>Nombre:</strong> {teacher.nombre}</p>
              <p><strong>Email:</strong> {teacher.email}</p>
              <p><strong>Materia:</strong> {teacher.materia}</p>
              <p><strong>Títulos:</strong> {teacher.titulos}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay profesores registrados.</p>
      )}
    </div>
  );
};

export default TeacherList;