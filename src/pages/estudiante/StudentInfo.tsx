import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/studeninfo.css"; // Asegúrate de que este archivo exista y tenga estilos adecuados

const StudentInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grado: "",
    telefono: "",
    direccion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://backend-school-9ipd.onrender.com/students", formData);

      if (response.status === 201 || response.status === 200) {
        // Guardamos los datos en localStorage
        localStorage.setItem("studentData", JSON.stringify(formData));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="student-info-container">
      <h2>Ingresa tus datos personales</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
        <input type="text" name="grado" placeholder="Grado" value={formData.grado} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default StudentInfo;
