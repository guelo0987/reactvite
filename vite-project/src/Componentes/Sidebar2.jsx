import React from 'react';
  import '../Estilos/Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Procesos Académicos
            <ul>
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
          </li>
          <li>Pagos Estudiantiles
            <ul>
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
          </li>
          <li>Evaluación Profesoral</li>
          <li>Reportes</li>
          <li>Programas & Ofertas
            <ul>
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
