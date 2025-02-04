import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../estudiante/StudentContext";

const StudentForm: React.FC = () => {
  const { setStudentData } = useStudent();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "SSSSSSSS",
    email: "SSSSSSSSS",
    telefono: "SSSSS",
    direccion: "SSSSSSSSSSSSSSSSSSSS",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentData(formData);
    navigate("/dashboard"); // Redirige al dashboard después de guardar los datos
  };

  return (
    <div className="form-container">
      <h2>Ingresa tus datos personales</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="text" name="telefono" placeholder="Teléfono" required onChange={handleChange} />
        <input type="text" name="direccion" placeholder="Dirección" required onChange={handleChange} />
        <button type="submit">Guardar y Continuar</button>
      </form>
    </div>
  );
};

export default StudentForm;
