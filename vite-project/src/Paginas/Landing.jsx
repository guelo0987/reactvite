import React from 'react';
import "../Estilos/Landing.css"
//import { Header } from "./Componentes/Header.jsx"
//import { Sidebar } from "./Componentes/Sidebar2"

export function Landing  ()  {
  return (
    
      

    <div className="container">
      <div className="header">
        <h1>Datos Generales</h1>
        <div className="info-group">
          <label>Matrícula:</label>
          <span>Valor de la matrícula</span>
        </div>
        <div className="info-group">
          <label>Carrera:</label>
          <span>Valor de la carrera</span>
        </div>
        <div className="info-group">
          <label>Periodo cursado:</label>
          <span>75%</span>
        </div>
      </div>
      <div className="stats">
        <div className="pie-chart">
          <div className="chart-value">75%</div>
          <span className="chart-label">Materias cursadas</span>
          <div className="chart-graph">
            <div className="chart-graph-inner" style={{ transform: 'rotate(270deg)' }}></div>
            <div className="chart-graph-inner" style={{ transform: 'rotate(135deg)', backgroundColor: '#ccc' }}></div>
          </div>
        </div>
        <div className="pie-chart">
          <div className="chart-value">4.00</div>
          <span className="chart-label">Índice General</span>
          <div className="chart-graph">
            <div className="chart-graph-inner" style={{ transform: 'rotate(270deg)' }}></div>
            <div className="chart-graph-inner" style={{ transform: 'rotate(135deg)', backgroundColor: '#ccc' }}></div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <h2>Materias tomadas</h2>
        <table>
          <thead>
            <tr>
              <th>Materias</th>
              <th>Horario</th>
              <th>Aula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Algebra y geometria</td>
              <td>2PM-5PM</td>
              <td>GC-220</td>
            </tr>
            <tr>
              <td>Row 2</td>
              <td>123</td>
              <td>456</td>
            </tr>
            <tr>
              <td>Row 3</td>
              <td>123</td>
              <td>456</td>
            </tr>
            <tr>
              <td>Row 4</td>
              <td>123</td>
              <td>456</td>
            </tr>
            <tr>
              <td>Row 5</td>
              <td>123</td>
              <td>456</td>
            </tr>
            <tr>
              <td>Row 6</td>
              <td>123</td>
              <td>456</td>
            </tr>
            <tr>
              <td>Row 7</td>
              <td>123</td>
              <td>456</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};
