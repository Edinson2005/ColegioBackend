import React from "react";
import Sidebar from "../teacher/Sidebar"
import style from "../../styles/TeacherHome.module.css"
import imagen from "../../assets/school.png";

const Teacher : React.FC = () => {
    return(
        <div className={style.container}>
            <Sidebar />
            <div className={style.contenido}>
                <h1 className={style.titulo}>PLATAFORMA DE SCHOOL</h1>
                <img src={imagen} className={style.imagen} alt="imagen"/>
            </div>
        
        
        </div>
    )
}

export default Teacher;