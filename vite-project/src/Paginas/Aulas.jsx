import React, { useState } from 'react';
import '../Estilos/EstPaginas/Aulas.css';
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';
import AulaModal from '../Componentes/AssignAulaModal';

const horariosPorMateria = {
  'Básicos de Photoshop': {
    '01': 'Sabado (10:00 AM - 12:00 PM)',
    '02': 'Domingo (10:00 AM - 12:00 PM)'
  },
  'Algebra II': {
    '01': 'Lunes (2:00 PM - 4:00 PM)',
    '02': 'Martes (2:00 PM - 4:00 PM)'
  },
  'UX/UI Design 2': {
    '01': 'Martes (3:00 PM - 7:00 PM)',
    '02': 'Miércoles (3:00 PM - 7:00 PM)'
  },
  'Semiótica y Diseño': {
    '01': 'Miercoles (12:00 PM - 2PM)',
    '02': 'Jueves (12:00 PM - 2PM)'
  },
  'Branding I': {
    '01': 'Viernes (10:00 AM - 12:00 PM)',
    '02': 'Viernes (2:00 PM - 4:00 PM)'
  }
};

export function Aulas() {
  const [edificio, setEdificio] = useState('Todas'); // Cambiado a 'Todas'
  const [tipo, setTipo] = useState('Todas'); // Cambiado a 'Todas'
  const [modalVisible, setModalVisible] = useState(false);
  const [aulas, setAulas] = useState([
    { materia: 'Básicos de Photoshop', edificio: 'EL', seccion: '01', horario: 'Sabado (10:00 AM - 12:00 PM)', aula: '204' },
    { materia: 'Algebra II', edificio: 'FD', seccion: '02', horario: 'Lunes (2:00 PM - 4:00 PM)', aula: '305' },
    { materia: 'UX/UI Design 2', edificio: 'GC', seccion: '03', horario: 'Martes (3:00 PM - 7:00 PM)', aula: '210' },
    { materia: 'Semiótica y Diseño', edificio: 'AJ', seccion: '04', horario: 'Miercoles (12:00 PM - 2PM)', aula: '405' },
  ]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleAddAula = (newAula) => {
    setAulas([...aulas, newAula]);
    handleCloseModal();
  };

  // Función para filtrar las aulas según los filtros seleccionados
  const filteredAulas = aulas.filter(aula => {
    if (edificio !== 'Todas' && aula.edificio !== edificio) {
      return false;
    }
    if (tipo !== 'Todas' && aula.tipo !== tipo) {
      return false;
    }
    return true;
  });

  return (
    <div className="aulasContainer">
      <Header />
      <Sidebar />
      <h2 className="aulasTitle">
        <span className="aulasIcon">&#9783;</span> Aulas
      </h2>
      <div className="filters">
        <div className="filterGroup">
          <label>Edificio</label>
          <select value={edificio} onChange={(e) => setEdificio(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="EL">EL - Electo Lipto</option>
            <option value="FD">FD - Facultad de Diseño</option>
            <option value="GC">GC - Galería Central</option>
            <option value="AJ">AJ - Arquitectura y Jardines</option>
          </select>
        </div>
        <div className="filterGroup">
          <label>Tipo</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Teoria">Teoría</option>
            <option value="Practica">Práctica</option>
          </select>
        </div>
        <button className="assignButton" onClick={handleOpenModal}>Asignar aula</button>
      </div>
      <div className="tableContainer">
        <table className="aulasTable">
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
            {filteredAulas.map((aula, index) => (
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
      {modalVisible && (
        <AulaModal
          isOpen={modalVisible}
          onClose={handleCloseModal}
          onAssign={handleAddAula}
          horariosPorMateria={horariosPorMateria}
        />
      )}
    </div>
  );
}

export default Aulas;
