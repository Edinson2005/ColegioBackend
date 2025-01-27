
import React from "react";
import styles from "../styles/Login.module.css"
import imagen from "../assets/perfil.png"

const Login : React.FC = () => {
    return(
        <>
        <div className={styles.container}>
            <img src={imagen} className={styles.imagenPerfil}/>
            <h1>Login</h1>

            <input type="email" placeholder="Ingrese Email" required/> <br/>            
            <input type="password" placeholder="Contraseña" required/>

            <h1 className={styles.contraseña}>¿Olvidates tu contraseña?</h1>

            <button className={styles.login}>Login</button>

        </div>
        </>
    )
}

export default Login
