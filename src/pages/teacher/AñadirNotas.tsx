import React, { useEffect, useState } from "react";
import style from "../../styles/Notas.module.css"
import TeacherSidebar from "./Sidebar";



interface Students {
    _id: string;
    name: string;
    email: string;
    grado: string;
    telefono: string;
    direccion: string;
}

const AñadirNotas: React.FC = () => {
    const [students, setStudents] = useState<Students | null>(null);
    const [observacion, setObervacion] = useState("");
    const [materia, setMateria] = useState("");
    const [nota, setNota] = useState("");


    ///get estudiante
    useEffect(() => {
        const studentId = localStorage.getItem("selectedStudentId");

        if (studentId) {
            fetch(`https://backend-school-9ipd.onrender.com/students/${studentId}`)
                .then((response) => response.json())
                .then((data) => {
                    setStudents(data)
                })
                .catch((error) => console.log("Error al obtener el estudiante:", error));
        }
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!students) return;

        const notaData = {
            studentsId: students._id,
            observacion: observacion,
            materia: materia,
            nota: parseFloat(nota),
        };

        
        fetch("https://backend-school-9ipd.onrender.com/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(notaData),
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Nota guardada correctamente");
                setMateria(""); 
                setObervacion("");
                setNota("");
            })
            .catch((error) => console.error("Error al agregar la nota:", error));
    };



    return (
        <div className={style.containerr}>
            <TeacherSidebar />
            <div className={style.contentt}>
                <h1 className={style.añadir}>Añadir notas</h1>

                <form className={style.formulario} onSubmit={handleSubmit}>

                    <label>
                        Nombre:
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={students?.name || ""}
                            readOnly
                        />
                    </label>
                    <label>
                        Materia:
                        <input 
                            type="text" 
                            placeholder="Materia" 
                            value={materia}
                            onChange={(e) => setMateria(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Obervacion:
                        <input 
                            type="text" 
                            placeholder="Observacion" 
                            value={observacion}
                            onChange={(e) => setObervacion(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Nota:
                        <input 
                            type="number" 
                            placeholder="Nota" 
                            value={nota}
                            onChange={(e) => setNota(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" className={style.button}>Guardar Nota</button>

                </form>
            </div>
        </div>
    )
}

export default AñadirNotas