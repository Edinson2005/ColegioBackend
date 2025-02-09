import React, { useState } from "react";
import axios from "axios";
import "../../styles/studeninfo.css"; // Asegúrate de que el archivo CSS exista

const StudentInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grado: "",
    telefono: "",
    direccion: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Correo electrónico no válido";
    }
    if (name === "telefono" && !/^\d{10}$/.test(value)) {
      error = "Número de teléfono debe tener 10 dígitos";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://backend-school-9ipd.onrender.com/students",
        formData
      );

      if (response.status === 201 || response.status === 200) {
        setSuccessMessage("Datos enviados correctamente.");
        // Aquí podrías limpiar el formulario si lo deseas
        setFormData({
          name: "",
          email: "",
          grado: "",
          telefono: "",
          direccion: "",
        });
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      setErrorMessage("Ocurrió un error al enviar los datos. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-info-container">
      <h2>Ingresa tus datos personales</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Nombre"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Correo electrónico"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="grado"
          placeholder="Grado"
          value={formData.grado}
          onChange={handleChange}
          required
          aria-label="Grado"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          aria-label="Teléfono"
        />
        {errors.telefono && <p className="error">{errors.telefono}</p>}

        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          required
          aria-label="Dirección"
        />

        <button type="submit" disabled={loading || errors.email || errors.telefono}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default StudentInfo;