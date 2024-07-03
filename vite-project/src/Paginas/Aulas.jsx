import React, { useState } from 'react';
import '../Estilos/EstPaginas/Aulas.css';

export function Aulas  () {
  const [edificio, setEdificio] = useState('EL - Electo Lipto');
  const [tipo, setTipo] = useState('Teoria');

  const aulas = [
    { materia: 'Básicos de Photoshop', edificio: 'EL', seccion: '01', horario: 'Sabado (10:00 AM - 12:00 PM)', aula: '204' },
    { materia: 'Algebra II', edificio: 'FD', seccion: '02', horario: 'Lunes (2:00 PM - 4:00 PM)', aula: '305' },
    { materia: 'UX/UI Design 2', edificio: 'GC', seccion: '03', horario: 'Martes (3:00 PM - 7:00 PM)', aula: '210' },
    { materia: 'Semiótica y Diseño', edificio: 'AJ', seccion: '04', horario: 'Miercoles (12:00 PM - 2PM)', aula: '405' },
  ];

  return (
    <div className="aulas-container">
      <h2 className="aulas-title">
        <span className="aulas-icon">&#9783;</span> Aulas
      </h2>
      <div className="filters">
        <div className="filter-group">
          <label>Edificio</label>
          <select value={edificio} onChange={(e) => setEdificio(e.target.value)}>
            <option value="EL - Electo Lipto">EL - Electo Lipto</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Tipo</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Teoria">Teoria</option>
          </select>
        </div>
        <button className="assign-button">Asignar aula</button>
      </div>
      <div className="table-container">
        <table className="aulas-table">
          <thead>
            <tr>
              <th>Materias</th>
              <th>Edificio</th>
              <th>Sección</th>
              <th>Horario</th>
              <th>Aula</th>
            </tr>
          </thead>
          <tbody>
            {aulas.map((aula, index) => (
              <tr key={index}>
                <td>{aula.materia}</td>
                <td>{aula.edificio}</td>
                <td>{aula.seccion}</td>
                <td>{aula.horario}</td>
                <td>{aula.aula}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aulas;