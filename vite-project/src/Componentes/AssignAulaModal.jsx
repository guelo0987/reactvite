import React, { useState } from 'react';
import '../Estilos/EstComponentes/AssignAulaModal.css';

const AulaModal = ({ isOpen, onClose, onAssign, horariosPorMateria }) => {
  const [formData, setFormData] = useState({
    area: 'Humanidades',
    tipo: 'Teoria',
    materia: 'Branding I',
    seccion: '01',
    edificio: 'EL',
    aula: '206'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const horario = horariosPorMateria[formData.materia]?.[formData.seccion] || 'Horario no especificado';
    onAssign({ ...formData, horario });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Aulas</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Area de la materia</label>
            <select name="area" value={formData.area} onChange={handleChange}>
              <option value="Humanidades">Humanidades</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tipo</label>
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="Teoria">Teoria</option>
            </select>
          </div>
          <div className="form-group">
            <label>Materia</label>
            <select name="materia" value={formData.materia} onChange={handleChange}>
              <option value="Branding I">Branding I</option>
              <option value="Básicos de Photoshop">Básicos de Photoshop</option>
              <option value="Algebra II">Algebra II</option>
              <option value="UX/UI Design 2">UX/UI Design 2</option>
              <option value="Semiótica y Diseño">Semiótica y Diseño</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sección</label>
            <select name="seccion" value={formData.seccion} onChange={handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
            </select>
          </div>
          <div className="form-group">
            <label>Edificio</label>
            <select name="edificio" value={formData.edificio} onChange={handleChange}>
              <option value="EL">EL</option>
              <option value="FD">FD</option>
              <option value="GC">GC</option>
              <option value="AJ">AJ</option>
            </select>
          </div>
          <div className="form-group">
            <label>Aula</label>
            <input type="text" name="aula" value={formData.aula} onChange={handleChange} />
          </div>
          <div className="button-group">
            <button type="button" onClick={onClose} className="cancel-button">Cancelar</button>
            <button type="submit" className="assign-button">Asignar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AulaModal;