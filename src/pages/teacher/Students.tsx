import React from "react";
import TeacherSidebar from "./Sidebar";
import style from "../../styles/Student.module.css";
import CardStudent from "./CardStudent";

const Student: React.FC = () => {
  return (
    <div className={style.container}>
      <TeacherSidebar />
      <div className={style.contenido}>
        <h1>Estudiantes</h1>
        <div className={style.cardGrid}>
          {/* Aquí puedes mapear tu lista de estudiantes si es necesario */}
          <CardStudent />
         
          {/* Agrega más tarjetas si es necesario */}
        </div>
      </div>
    </div>
  );
};

export default Student;
