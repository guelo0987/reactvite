import React, { useState } from 'react';
import "../Estilos/EstPaginas/AnadirProfesor.css"
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function AnadirProfesor ()  {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    genero: '',
    areaAcademica: '',
    asignaturas: ['']
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAsignaturaChange = (index, value) => {
    const newAsignaturas = [...formData.asignaturas];
    newAsignaturas[index] = value;
    setFormData(prevData => ({
      ...prevData,
      asignaturas: newAsignaturas
    }));
  };

  const addAsignatura = () => {
    setFormData(prevData => ({
      ...prevData,
      asignaturas: [...prevData.asignaturas, '']
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombres) newErrors.nombres = 'El nombre es obligatorio';
    if (!formData.apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!formData.correo) newErrors.correo = 'El correo es obligatorio';
    if (!formData.telefono) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.genero) newErrors.genero = 'El género es obligatorio';
    if (!formData.areaAcademica) newErrors.areaAcademica = 'El área académica es obligatoria';
    if (formData.asignaturas.some(asignatura => !asignatura)) {
      newErrors.asignaturas = 'Todas las asignaturas deben estar completas';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      // Aquí iría la lógica para enviar los datos al servidor
    } else {
      console.log('Formulario con errores');
    }
  };

  return (
    <div className="profesor-form-container">
        <Header/>
        <Sidebar/>
      <h2 className="profesor-title">Usuarios</h2>
      <form onSubmit={handleSubmit} className="profesor-form">
        <div className="full-width-field">
          <label className="form-label">Nombre completo*</label>
          <div className="name-fields">
            <input
              className="form-input"
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={formData.nombres}
              onChange={handleChange}
              
            />
            <input
              className="form-input"
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="form-label">Correo electrónico*</label>
            <input
              className="form-input"
              type="email"
              name="correo"
              placeholder="correo@universidad.com"
              value={formData.correo}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label className="form-label">Teléfono*</label>
            <input
              className="form-input"
              type="tel"
              name="telefono"
              placeholder="***-***-****"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label className="form-label">Género*</label>
            <select
              className="form-select"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>
        <div className="full-width-field">
          <label className="form-label">Área académica*</label>
          <select
            className="form-select"
            name="areaAcademica"
            value={formData.areaAcademica}
            onChange={handleChange}
          >
            <option value="">Área académica</option>
            <option value="Diseño">Diseño</option>
            <option value="Programación">Programación</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div className="full-width-field">
          <label className="form-label">Asignaturas que impartirá*</label>
          {formData.asignaturas.map((asignatura, index) => (
            <select
              key={index}
              className="form-select"
              value={asignatura}
              onChange={(e) => handleAsignaturaChange(index, e.target.value)}
            >
              <option value="Photoshop Básico I">Photoshop Básico I</option>
              <option value="Illustrator Básico I">Illustrator Básico I</option>
            </select>
          ))}
          <button type="button" className="add-button" onClick={addAsignatura}>
            Otra asignatura
          </button>
        </div>
        <div className="button-group">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Registrar</button>
        </div>
      </form>
      <p className="form-footnote">* estos campos son obligatorios</p>
    </div>
  );
};
