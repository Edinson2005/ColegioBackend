import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import Style from "../../styles/Sidebar.module.css";
import Perfil from "../../assets/perfil.png";

const TeacherSidebar: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegación

    return (
        <div className={Style.sidebar}>
            <img src={Perfil} alt="perfil" className={Style.imgen} />
            <h1 className={Style.titulo}>Hola Mundo</h1>
            <ul className={Style.menu}>
                <li className={Style.item} onClick={() => navigate("/teacher")}>Inicio</li>
                <li className={Style.item} onClick={() => navigate("/students")}>Estudiantes</li>
                <li className={Style.salir} onClick={() => navigate("/")}>Salir</li> 
            </ul>
        </div>
    );
};

export default TeacherSidebar;
