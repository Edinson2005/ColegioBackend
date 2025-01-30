import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Login.module.css";
import imagen from "../assets/perfil.png";
import { useNavigate } from "react-router-dom";
import school from "../assets/school.png";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage("Por favor, ingrese su correo y contraseña");
            return;
        }

        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const response = await axios.post(
                "https://backend-school-9ipd.onrender.com/auth/login",
                {
                    email,
                    password,
                }
            );

            if (response?.data?.access_token) {
                const { access_token } = response.data;

                // Decodificar el token para obtener el rol
                const decodedToken = JSON.parse(atob(access_token.split(".")[1]));
                const role = decodedToken.role;

                // Guardar el usuario (token y rol) en localStorage
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        access_token,
                        role,
                    })
                );

                setSuccessMessage("Inicio de sesión exitoso");

                // Redirigir según el rol
                if (role === "profesor") {
                    navigate("/teacher");
                } else if (role === "estudiante") {
                    navigate("/student");
                } else {
                    setErrorMessage("Rol no reconocido.");
                }
            } else {
                setErrorMessage("Respuesta del servidor no válida");
            }
        } catch (error: any) {
            if (error.response) {
                setErrorMessage(error.response.data.message || "Error en el servidor");
            } else if (error.request) {
                setErrorMessage("No se recibió respuesta del servidor");
            } else {
                setErrorMessage("Error al realizar la solicitud");
            }
        } finally {
            setIsLoading(false);
        }
    };

    //MAQUETACION DE PAGE LOGIN
    return (
        <div className={styles.container}>

            {/*IMAGEN DE SCHOOL */}
            <div className={styles.imagenSchool}>
                <img src={school} className={styles.img} alt="school"/>

            </div>

            {/*MAQUETACION DE FORMULARIO LOGIN */}
            <div className={styles.login}>
                <img src={imagen} className={styles.imagenPerfil} alt="Perfil" />
                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Ingrese Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <h1 className={styles.contraseña}>¿Olvidaste tu contraseña?</h1>

                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                {successMessage && <p className={styles.success}>{successMessage}</p>}

                <button className={styles.login} onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;
