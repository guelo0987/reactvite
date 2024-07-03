import React, { useState } from 'react';
import "../Estilos/EstPaginas/ListaUsuarios.css"
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function ListadoUsuarios  () {
  const [carrera, setCarrera] = useState(''); // Estado para la carrera (motor de búsqueda)
  const [tipo, setTipo] = useState(''); // Estado para el tipo de usuario (filtro)
  
  const usuarios = [
    { nombre: 'Alejandro Muñoz', carrera: 'DG', fechaIngreso: '1 Mayo 2022', estado: 'Rojo', tipo: 'Estudiante' },
    { nombre: 'Merna Rodriguez', carrera: 'DG', fechaIngreso: '1 Mayo 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Carlos Mendez', carrera: 'DG', fechaIngreso: '2 Febrero 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Maria Kenich', carrera: 'DG', fechaIngreso: '1 Noviembre 2022', estado: 'Especial', tipo: 'Estudiante' },
    { nombre: 'Profesor Juan Pérez', carrera: 'DG', fechaIngreso: '15 Enero 2020', estado: 'Activo', tipo: 'Profesor' },
    { nombre: 'Profesora Ana Gómez', carrera: 'DG', fechaIngreso: '10 Marzo 2018', estado: 'Activo', tipo: 'Profesor' },
    { nombre: 'Juan Perez', carrera: 'SI', fechaIngreso: '1 Enero 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Pedro López', carrera: 'SI', fechaIngreso: '1 Marzo 2022', estado: 'Rojo', tipo: 'Estudiante' },
    { nombre: 'Ana Ruiz', carrera: 'TI', fechaIngreso: '1 Junio 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Sofía Gómez', carrera: 'TI', fechaIngreso: '1 Abril 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Luisa Martínez', carrera: 'TI', fechaIngreso: '1 Diciembre 2022', estado: 'Especial', tipo: 'Estudiante' },
    { nombre: 'Roberto Sanchez', carrera: 'TI', fechaIngreso: '1 Agosto 2022', estado: 'Normal', tipo: 'Estudiante' },
    { nombre: 'Marcos Rivera', carrera: 'TI', fechaIngreso: '1 Septiembre 2022', estado: 'Rojo', tipo: 'Estudiante' },
  ];

  const handleResetFilters = () => {
    setCarrera('');
    setTipo('');
  };

  return (
    <div className="listado-usuarios">
      <Header/>
      <Sidebar/>
      <h1>Usuarios</h1>
      <div className="filtros">
        <div className="filtro">
          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Todas"
          />
        </div>
        <div className="filtro">
          <label htmlFor="tipo">Tipo:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Profesor">Profesor</option>
          </select>
        </div>
        <button className="btn-filtrar" onClick={handleResetFilters}>Limpiar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Usuarios</th>
            <th>Carrera</th>
            <th>Fecha de Ingreso</th>
            <th>Estado</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios
            .filter(usuario => (
              (carrera === '' || usuario.carrera.toLowerCase().includes(carrera.toLowerCase())) &&
              (tipo === '' || usuario.tipo === tipo)
            ))
            .map((usuario, index) => (
              <tr key={index}>
                <td>
                  <i className="icono-usuario"></i>
                  {usuario.nombre}
                </td>
                <td>{usuario.carrera}</td>
                <td>{usuario.fechaIngreso}</td>
                <td>{usuario.estado}</td>
                <td>{usuario.tipo}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
