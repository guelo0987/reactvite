import React, { useState } from 'react';
import styles from '../Estilos/EstPaginas/Materias.module.css'; // Importamos el módulo de estilos CSS
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function Materias() {
  const [formData, setFormData] = useState({
    areaAcademica: '',
    creditos: 'X',
    tipo: 'Teoria',
    carrera: 'Diseño Grafico',
    trimestre: '1',
    nombre: '',
    secciones: [{ seccion: 'SEC - 01', profesor: '' }],
    horario: [
      { dia: 'Lunes', horaInicio: '8:00am', horaFin: '10:00am' },
      { dia: 'Miércoles', horaInicio: '8:00am', horaFin: '10:00am' }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSeccionChange = (index, field, value) => {
    const newSecciones = [...formData.secciones];
    newSecciones[index][field] = value;
    setFormData(prevState => ({
      ...prevState,
      secciones: newSecciones
    }));
  };

  const addSeccion = () => {
    setFormData(prevState => ({
      ...prevState,
      secciones: [...prevState.secciones, { seccion: '', profesor: '' }]
    }));
  };

  const handleHorarioChange = (index, field, value) => {
    const newHorario = [...formData.horario];
    newHorario[index][field] = value;
    setFormData(prevState => ({
      ...prevState,
      horario: newHorario
    }));
  };

  const addHorario = () => {
    setFormData(prevState => ({
      ...prevState,
      horario: [...prevState.horario, { dia: '', horaInicio: '', horaFin: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <div className={styles.materias}>
      <Header />
      <Sidebar />
      <h2 className={styles.titulo}>Materias</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.fila}>
          <div className={styles.campo}>
            <label>Área académica</label>
            <select name="areaAcademica" value={formData.areaAcademica} onChange={handleChange}>
              <option value="">Área académica</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <div className={styles.campo}>
            <label>Créditos</label>
            <select name="creditos" value={formData.creditos} onChange={handleChange}>
              <option value="X">X</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <div className={styles.campo}>
            <label>Tipo</label>
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option value="Teoria">Teoría</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
        </div>

        <div className={styles.fila}>
          <div className={styles.campo}>
            <label>Carrera</label>
            <select name="carrera" value={formData.carrera} onChange={handleChange}>
              <option value="Diseño Grafico">Diseño Gráfico</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <div className={styles.campo}>
            <label>Trimestre</label>
            <select name="trimestre" value={formData.trimestre} onChange={handleChange}>
              <option value="1">1</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
        </div>

        <div className={styles.campoCompleto}>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Diseño de Revistas I" />
        </div>

        <div className={styles.secciones}>
          <h3>Secciones y profesor encargado</h3>
          {formData.secciones.map((seccion, index) => (
            <div key={index} className={styles.fila}>
              <input
                type="text"
                value={seccion.seccion}
                onChange={(e) => handleSeccionChange(index, 'seccion', e.target.value)}
                placeholder="SEC - 01"
              />
              <input
                type="text"
                value={seccion.profesor}
                onChange={(e) => handleSeccionChange(index, 'profesor', e.target.value)}
                placeholder="Profesor"
              />
            </div>
          ))}
          <button type="button" onClick={addSeccion} className={styles.agregar}>Otra Sección</button>
        </div>

        <div className={styles.horario}>
          <h3>Horario</h3>
          <div className={`${styles.fila} ${styles.encabezado}`}>
            <div>Días</div>
            <div>Horas</div>
          </div>
          {formData.horario.map((horario, index) => (
            <div key={index} className={styles.fila}>
              <select
                value={horario.dia}
                onChange={(e) => handleHorarioChange(index, 'dia', e.target.value)}
              >
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                {/* Agrega más días según sea necesario */}
              </select>
              <div className={styles.horas}>
                <select
                  value={horario.horaInicio}
                  onChange={(e) => handleHorarioChange(index, 'horaInicio', e.target.value)}
                >
                  <option value="8:00am">8:00am</option>
                  <option value="9:00am">9:00am</option>
                  <option value="10:00am">10:00am</option>
                  {/* Agrega más horas según sea necesario */}
                </select>
                <span>hasta</span>
                <select
                  value={horario.horaFin}
                  onChange={(e) => handleHorarioChange(index, 'horaFin', e.target.value)}
                >
                  <option value="10:00am">10:00am</option>
                  <option value="11:00am">11:00am</option>
                  <option value="12:00pm">12:00pm</option>
                  {/* Agrega más horas según sea necesario */}
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={addHorario} className={styles.agregar}>Agregar día</button>
        </div>

        <div className={styles.botones}>
          <button type="button" className={styles.cancelar}>Cancelar</button>
          <button type="submit" className={styles.registrar}>Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Materias;
