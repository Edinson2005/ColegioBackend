
import React, {useEffect, useState} from "react";
import style from "../../styles/CardStudent.module.css"
import { Navigate, useNavigate } from "react-router-dom";
///COMO CONSUMIR UN GET

interface Students{
    _id: string;
    name: String;
    email: String;
    grado: String;
    telefono: String;
    direccion:String;
}

interface CardStudentProps {
    student: Students;
}

const CardStudent: React.FC<CardStudentProps> = ({ student }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        localStorage.setItem("selectedStudentId", student._id);
        navigate(`/añadirNotas`);
    }

    return(
        <>
        <div className={style.container} onClick={handleCardClick} style={{ cursor: "pointer"}}>
            <h1>Estudiante</h1>
            <ul>
                <li className={style.item}>Nombre: {student?.name} </li>
                <li className={style.item}>Correo: {student?.email} </li>
                <li className={style.item}>Telefono: {student?.telefono} </li>
                <li className={style.item}>Grado: {student?.grado} </li>
                <li className={style.item}>Direccion:  {student?.direccion} </li>
            </ul>

        </div>
        </>
    )
}

export default CardStudent