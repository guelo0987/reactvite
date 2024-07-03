import React, { useState } from 'react';
import styles from "../Estilos/EstPaginas/AnadirProfesor.module.css";
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function AnadirProfesor() {
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
    // Limpiar el error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null
      }));
    }
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
    <div className={styles["profesor-form-container"]}>
      <Header />
      <Sidebar />
      <h2 className={styles["profesor-title"]}>Usuarios</h2>
      <form onSubmit={handleSubmit} className={styles["profesor-form"]}>
        <div className={styles["full-width-field"]}>
          <label className={styles["form-label"]}>Nombre completo*</label>
          <div className={styles["name-fields"]}>
            <input
              className={`${styles["form-input"]} ${errors.nombres ? styles.error : ''}`}
              type="text"
              name="nombres"
              placeholder="Nombres"
              value={formData.nombres}
              onChange={handleChange}
            />
            <input
              className={`${styles["form-input"]} ${errors.apellidos ? styles.error : ''}`}
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
          </div>
          {(errors.nombres || errors.apellidos) && <span className={styles["error-message"]}>{errors.nombres || errors.apellidos}</span>}
        </div>
        <div className={styles["field-group"]}>
          <div className={styles["field"]}>
            <label className={styles["form-label"]}>Correo electrónico*</label>
            <input
              className={`${styles["form-input"]} ${errors.correo ? styles.error : ''}`}
              type="email"
              name="correo"
              placeholder="correo@universidad.com"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && <span className={styles["error-message"]}>{errors.correo}</span>}
          </div>
          <div className={styles["field"]}>
            <label className={styles["form-label"]}>Teléfono*</label>
            <input
              className={`${styles["form-input"]} ${errors.telefono ? styles.error : ''}`}
              type="tel"
              name="telefono"
              placeholder="***-***-****"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && <span className={styles["error-message"]}>{errors.telefono}</span>}
          </div>
          <div className={styles["field"]}>
            <label className={styles["form-label"]}>Género*</label>
            <select
              className={`${styles["form-select"]} ${errors.genero ? styles.error : ''}`}
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="">Seleccione un género</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.genero && <span className={styles["error-message"]}>{errors.genero}</span>}
          </div>
        </div>
        <div className={styles["full-width-field"]}>
          <label className={styles["form-label"]}>Área académica*</label>
          <select
            className={`${styles["form-select"]} ${errors.areaAcademica ? styles.error : ''}`}
            name="areaAcademica"
            value={formData.areaAcademica}
            onChange={handleChange}
          >
            <option value="">Seleccione un área académica</option>
            <option value="Diseño">Diseño</option>
            <option value="Programación">Programación</option>
            <option value="Marketing">Marketing</option>
          </select>
          {errors.areaAcademica && <span className={styles["error-message"]}>{errors.areaAcademica}</span>}
        </div>
        <div className={styles["full-width-field"]}>
          <label className={styles["form-label"]}>Asignaturas que impartirá*</label>
          {formData.asignaturas.map((asignatura, index) => (
            <select
              key={index}
              className={`${styles["form-select"]} ${errors.asignaturas ? styles.error : ''}`}
              value={asignatura}
              onChange={(e) => handleAsignaturaChange(index, e.target.value)}
            >
              <option value="">Seleccione una asignatura</option>
              <option value="Photoshop Básico I">Photoshop Básico I</option>
              <option value="Illustrator Básico I">Illustrator Básico I</option>
            </select>
          ))}
          {errors.asignaturas && <span className={styles["error-message"]}>{errors.asignaturas}</span>}
          <button type="button" className={styles["add-button"]} onClick={addAsignatura}>
            Otra asignatura
          </button>
        </div>
        <div className={styles["button-group"]}>
          <button type="button" className={styles["cancel-button"]}>Cancelar</button>
          <button type="submit" className={styles["submit-button"]}>Registrar</button>
        </div>
      </form>
      <p className={styles["form-footnote"]}>* estos campos son obligatorios</p>
    </div>
  );
}
