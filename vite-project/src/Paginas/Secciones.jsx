import React, { useState, useEffect } from 'react';
import styles from '../Estilos/EstPaginas/Secciones.module.css';

const materiasPorArea = {
  Humanidades: [
    { id: 1, nombre: 'Algebra I' },
    { id: 2, nombre: 'Algebra II' },
    { id: 3, nombre: 'Marketing Digital' },
    { id: 4, nombre: 'Ciudadanía y Ética' },
    { id: 5, nombre: 'XXXXXX' },
    { id: 6, nombre: 'XXXXX' },
  ]
};

const datosMaterias = [
  { id: 1, nombre: 'Algebra I', seccion: '01', horario: 'Lunes (8:00 AM - 10:00 AM)', profesor: 'XXXX', cupo: 35 },
  { id: 2, nombre: 'XXXXXX', seccion: '02', horario: 'Miercoles (12:00 PM - 2PM)', profesor: 'XXXX', cupo: 20 },
  { id: 3, nombre: 'Algebra II', seccion: '02', horario: 'Lunes (2:00 PM - 4:00 PM)', profesor: 'XXXX', cupo: 40 },
  { id: 4, nombre: 'Marketing Digital', seccion: '01', horario: 'Martes, Jueves (8:00 PM -10:00 PM)', profesor: 'XXXX', cupo: 25 },
  { id: 5, nombre: 'XXXXX', seccion: '03', horario: 'Sabado (10:00 AM - 12:00 PM)', profesor: 'XXXX', cupo: 25 },
  { id: 6, nombre: 'Ciudadanía y Ética', seccion: '01', horario: 'Viernes (4:00 PM - 6:00 PM)', profesor: 'XXXX', cupo: 36 },
  { id: 7, nombre: 'XXXXXX', seccion: '02', horario: 'Martes (3:00 PM - 7:00 PM)', profesor: 'XXXX', cupo: 25 },
];

export function Secciones  ()  {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [areaSeleccionada, setAreaSeleccionada] = useState('Humanidades');
  const [materiasFiltradas, setMateriasFiltradas] = useState([]);

  useEffect(() => {
    filtrarMaterias();
  }, [materiaSeleccionada, areaSeleccionada]);

  const filtrarMaterias = () => {
    let materiasFiltradas = datosMaterias;
    if (materiaSeleccionada) {
      materiasFiltradas = materiasFiltradas.filter(materia => materia.nombre === materiaSeleccionada);
    }
    setMateriasFiltradas(materiasFiltradas);
  };

  return (
    <div className={styles.seccionesContainer}>
      <h1 className={styles.heading}>Secciones</h1>
      <div className={styles.filtros}>
        <div className={styles.filtroGrupo}>
          <label className={styles.label}>Materias</label>
          <select 
            value={materiaSeleccionada} 
            onChange={(e) => setMateriaSeleccionada(e.target.value)}
            className={styles.select}
          >
            <option value="">Todas</option>
            {materiasPorArea[areaSeleccionada].map(materia => (
              <option key={materia.id} value={materia.nombre}>{materia.nombre}</option>
            ))}
          </select>
        </div>
        <div className={styles.filtroGrupo}>
          <label className={styles.label}>Area</label>
          <select 
            value={areaSeleccionada} 
            onChange={(e) => setAreaSeleccionada(e.target.value)}
            className={styles.select}
          >
            <option value="Humanidades">Humanidades</option>
          </select>
        </div>
      </div>
      <table className={styles.seccionesTabla}>
        <thead>
          <tr>
            <th>Materias</th>
            <th>Sección</th>
            <th>Horario</th>
            <th>Profesor</th>
            <th>Cupo</th>
          </tr>
        </thead>
        <tbody>
          {materiasFiltradas.map(materia => (
            <tr key={materia.id}>
              <td>{materia.nombre}</td>
              <td>{materia.seccion}</td>
              <td>{materia.horario}</td>
              <td>{materia.profesor}</td>
              <td>{materia.cupo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Secciones;
