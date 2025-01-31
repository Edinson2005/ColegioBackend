
import React, {useEffect, useState} from "react";
import style from "../../styles/CardStudent.module.css"
///COMO CONSUMIR UN GET

interface Students{
    name: String;
    email: String;
    grado: String;
    telefono: String;
    direccion:String;
}
const CardStudent: React.FC = ()  => {
const[student, setStudent] = useState<Students | null>(null);

useEffect(()  => {
    fetch("https://backend-school-9ipd.onrender.com/students")
    .then((response) => response.json())
    .then((data) =>{
        if(Array.isArray(data) && data.length > 0 ){
            setStudent(data[0]);
        }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
}, []);

    return(
        <>
        <div className={style.container}>
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