import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Para redirigir después de enviar los datos

const StudentInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grado: "",
    telefono: "",
    direccion: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Usado para redirigir

  // Manejar cambio en los inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar los datos a la API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("https://backend-school-9ipd.onrender.com/students", formData)
      .then((response) => {
        // Si la respuesta es exitosa, redirigir al dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        setError("Hubo un error al enviar los datos.");
        console.error("Error al enviar los datos:", error);
      });
  };

  return (
    <div className="student-info-container">
      <h2>Ingresa tus datos personales</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="grado"
          placeholder="Grado"
          value={formData.grado}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentInfo;
