import React, { useState, useEffect } from "react";
import axios from "axios";

interface Teacher {
  nombre: string;
  email: string;
  materia: string;
  titulos: string;
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]); // Estado para almacenar la lista de profesores
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para obtener los datos de la API
  const fetchTeachers = async () => {
    try {
            // https://backend-school-9ipd.onrender.com/teachers   // probando localmente los enpints de backend

      const response = await axios.get("http://localhost:4000/teachers");
      setTeachers(response.data); // Guardar los datos en el estado
    } catch (err) {
      console.error("Error al obtener los datos:", err);
      setError("Ocurrió un error al cargar los datos."); // Mostrar un mensaje de error
    } finally {
      setLoading(false);
    }
  };

  // Ejecutar la función al montar el componente
  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="teacher-list-container">
      <h2>Lista de Profesores</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : teachers.length > 0 ? (
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
