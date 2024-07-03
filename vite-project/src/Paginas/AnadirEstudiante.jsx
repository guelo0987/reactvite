import React, { useState } from 'react';
import '../Estilos/EstPaginas/AnadirEstudiante.css';
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function AnadirEstudiante ()  {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    genero: 'Femenino',
    direccion: '',
    ciudad: 'Santo Domingo',
    nacionalidad: 'Dominicana',
    carrera: 'Diseño Gráfico - DG',
    master: 'Master en UX/UI'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Limpiar el error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombres) newErrors.nombres = 'El nombre es obligatorio';
    if (!formData.apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!formData.correo) newErrors.correo = 'El correo electrónico es obligatorio';
    if (!formData.telefono) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria';
    if (!formData.carrera) newErrors.carrera = 'La carrera es obligatoria';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario válido:', formData);
      // Aquí iría la lógica para enviar los datos
    } else {
      console.log('Formulario inválido');
    }
  };

  return (
    <div className="anadir-estudiante">
        <Header/>
        <Sidebar/>
      <h2 className="titulo">Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-completo">
          <label>Nombre completo*</label>
          <div className="nombre-completo">
            <input 
              type="text" 
              name="nombres" 
              placeholder="Nombres" 
              value={formData.nombres} 
              onChange={handleChange}
              className={errors.nombres ? 'error' : ''}
            />
            <input 
              type="text" 
              name="apellidos" 
              placeholder="Apellidos" 
              value={formData.apellidos} 
              onChange={handleChange}
              className={errors.apellidos ? 'error' : ''}
            />
          </div>
          {(errors.nombres || errors.apellidos) && <span className="error-message">{errors.nombres || errors.apellidos}</span>}
        </div>

        <div className="campo-grupo">
          <div className="campo">
            <label>Correo electrónico*</label>
            <input 
              type="email" 
              name="correo" 
              placeholder="correo@universidad.com" 
              value={formData.correo} 
              onChange={handleChange}
              className={errors.correo ? 'error' : ''}
            />
            {errors.correo && <span className="error-message">{errors.correo}</span>}
          </div>
          <div className="campo">
            <label>Teléfono*</label>
            <input 
              type="tel" 
              name="telefono" 
              placeholder="***-***-****" 
              value={formData.telefono} 
              onChange={handleChange}
              className={errors.telefono ? 'error' : ''}
            />
            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
          </div>
          <div className="campo">
            <label>Género*</label>
            <select name="genero" value={formData.genero} onChange={handleChange}>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="campo-grupo">
          <div className="campo-largo">
            <label>Dirección*</label>
            <input 
              type="text" 
              name="direccion" 
              placeholder="Dirección #, Sector" 
              value={formData.direccion} 
              onChange={handleChange}
              className={errors.direccion ? 'error' : ''}
            />
            {errors.direccion && <span className="error-message">{errors.direccion}</span>}
          </div>
          <div className="campo">
            <label>Ciudad*</label>
            <select name="ciudad" value={formData.ciudad} onChange={handleChange}>
              <option value="Santo Domingo">Santo Domingo</option>
              {/* Agrega más ciudades según sea necesario */}
            </select>
          </div>
          <div className="campo">
            <label>Nacionalidad*</label>
            <select name="nacionalidad" value={formData.nacionalidad} onChange={handleChange}>
              <option value="Dominicana">Dominicana</option>
              {/* Agrega más nacionalidades según sea necesario */}
            </select>
          </div>
        </div>

        <div className="campo-completo">
          <label>Carrera*</label>
          <select 
            name="carrera" 
            value={formData.carrera} 
            onChange={handleChange}
            className={errors.carrera ? 'error' : ''}
          >
            <option value="">Seleccione una carrera</option>
            <option value="Diseño Gráfico - DG">Diseño Gráfico - DG</option>
            {/* Agrega más carreras según sea necesario */}
          </select>
          {errors.carrera && <span className="error-message">{errors.carrera}</span>}
        </div>

        <div className="campo-completo">
          <label>Master</label>
          <select name="master" value={formData.master} onChange={handleChange}>
            <option value="">Seleccione un master (opcional)</option>
            <option value="Master en UX/UI">Master en UX/UI</option>
            {/* Agrega más masters según sea necesario */}
          </select>
        </div>

        <div className="botones">
          <button type="button" className="cancelar">Cancelar</button>
          <button type="submit" className="registrar">Registrar</button>
        </div>
      </form>
      <p className="nota">* estos campos son obligatorios</p>
    </div>
  );
};

