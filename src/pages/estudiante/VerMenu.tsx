import React, { useState, useEffect } from "react";
import "../../styles/vermenu.css";

const VerMenu: React.FC = () => {
  // Simulando el menú del día
  const [menu, setMenu] = useState([
    { dia: "Lunes", plato: "Arroz con pollo" },
    { dia: "Martes", plato: "Pizza" },
    { dia: "Miércoles", plato: "Ensalada de pollo" },
    { dia: "Jueves", plato: "Pasta con carne" },
    { dia: "Viernes", plato: "Hamburguesa" },
  ]);

  // Aquí podrías hacer una llamada a la API para obtener el menú real
  useEffect(() => {
    // Simulando una llamada a la API
    // fetch("/api/menu")
    //   .then((response) => response.json())
    //   .then((data) => setMenu(data));
  }, []);

  return (
    <div className="ver-menu-container">
      <h2>Menú del día</h2>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Día</th>
            <th>Plato</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.dia}</td>
              <td>{item.plato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerMenu;
