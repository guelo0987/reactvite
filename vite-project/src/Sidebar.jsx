// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Cerrar' : 'Abrir'}
      </button>
      <nav className="menu">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
