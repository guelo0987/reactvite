import React from 'react';
  import '../Estilos/Sidebar.css'

export function Sidebar(){
    return (
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-home"></i>
                Inicio
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-book"></i>
                Procesos Academicos
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-money-bill-wave"></i>
                Pagos Estudiantiles
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-clipboard-check"></i>
                Evaluacion Profesoral
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-bar"></i>
                Reportes
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-graduation-cap"></i>
                Programs & Ofertas
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };