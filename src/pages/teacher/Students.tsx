import React, { useEffect, useState } from "react";
import TeacherSidebar from "./Sidebar";
import style from "../../styles/Student.module.css";
import CardStudent from "./CardStudent";

interface Students {
  _id: string;
  name: string
  email: string;
  grado: string;
  telefono: string;
  direccion: string;
}

const Student: React.FC = () => {
  const [students, setStudents] = useState<Students[]>([]);

  useEffect(() => {
    fetch("https://backend-school-9ipd.onrender.com/students")
    .then((response) => response.json())
    .then((data) => {
      if(Array.isArray(data)){
        setStudents(data);
      }      
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className={style.container}>
      <TeacherSidebar />
      <div className={style.contenido}>
        <h1>Estudiantes</h1>
        <div className={style.cardGrid}>
        {students.length > 0 ? (
            students.map((student) => (
              <CardStudent key={student._id} student={student} />
            ))
          ) : (
            <p>Cargando estudiantes...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
