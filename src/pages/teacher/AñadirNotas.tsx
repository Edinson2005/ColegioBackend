import React from "react";
import style from "../../styles/Notas.module.css"
import TeacherSidebar from "./Sidebar";

const AñadirNotas: React.FC = () => {
    return (
        <div className={style.containerr}>
            <TeacherSidebar />
            <div className={style.contentt}>
                <h1 className={style.añadir}>Añadir notas</h1>

                <form className={style.formulario}>
                    <label>
                        Nombre:
                        <input type="text" placeholder="Nombre" />
                    </label>
                    <label>
                        Materia:
                        <input type="text" placeholder="Materia"/>
                    </label>
                    <label>
                        Obervacion:
                        <input type="text" placeholder="Observacion"/>
                    </label>
                    <label>
                        Nota:
                        <input type="number" placeholder="Nota"/>
                    </label>
                    <button type="submit" className={style.button}>Guardar Nota</button>

                </form>
            </div>
        </div>
    )
}

export default AñadirNotas