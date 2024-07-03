import React from 'react';
import "../Estilos/EstPaginas/ListaUsuarios.css"
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/SidebarAdmin';

export function ListadoUsuarios  () {
  const usuarios = [
    { nombre: 'Alejandro Muñoz', carrera: 'DG', fechaIngreso: '1 Mayo 2022', estado: 'Rojo' },
    { nombre: 'Merna Rodriguez', carrera: 'DG', fechaIngreso: '1 Mayo 2022', estado: 'Normal' },
    { nombre: 'Carlos Mendez', carrera: 'DG', fechaIngreso: '2 Febrero 2022', estado: 'Normal' },
    { nombre: 'Maria Kenich', carrera: 'DG', fechaIngreso: '1 Noviembre 2022', estado: 'Especial' },
  ];

  return (
    <div className="listado-usuarios">
        <Header/>
        <Sidebar/>
      <h1>Usuarios</h1>
      <div className="filtros">
        <div className="filtro">
          <label htmlFor="carrera">Carrera:</label>
          <input type="text" id="carrera" value="Diseño Gráfico" readOnly />
        </div>
        <div className="filtro">
          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" value="Estudiante" readOnly>
            <option value="Estudiante">Estudiante</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Usuarios</th>
            <th>Carrera</th>
            <th>Fecha de Ingreso</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>
                <i className="icono-usuario"></i>
                {usuario.nombre}
              </td>
              <td>{usuario.carrera}</td>
              <td>{usuario.fechaIngreso}</td>
              <td>{usuario.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

