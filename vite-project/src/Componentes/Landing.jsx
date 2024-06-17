import React from 'react';
import Header from '../Componentes/Header.jsx';
import Sidebar from '../Componentes/Sidebar2.jsx';
import '../Estilos/Landing.css'

const Landing = () => {
  const user = {
    nombre: "Nombre Usuario",
    matricula: "123456",
    carrera: "Ingeniería",
    periodoCursado: "2021-2024",
    materiasCursadas: 75,
    indiceGeneral: 4.00,
    materias: [
      { nombre: "Algebra y geometria", horario: "2PM-5PM", aula: "GC-220" },
      { nombre: "Row 2", horario: "123", aula: "456" },
      { nombre: "Row 3", horario: "123", aula: "456" },
      { nombre: "Row 4", horario: "123", aula: "456" },
      { nombre: "Row 5", horario: "123", aula: "456" },
      { nombre: "Row 6", horario: "123", aula: "456" },
      { nombre: "Row 7", horario: "123", aula: "456" },
    ]
  };

  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header user={user} />
        <section className="general-info">
          <h2>Datos Generales</h2>
          <p><strong>Matrícula:</strong> {user.matricula}</p>
          <p><strong>Carrera:</strong> {user.carrera}</p>
          <p><strong>Periodo cursado:</strong> {user.periodoCursado}</p>
          <div className="progress">
            <div>
              <p>Materias cursadas</p>
              <p>{user.materiasCursadas}%</p>
            </div>
            <div>
              <p>Índice General</p>
              <p>{user.indiceGeneral}</p>
            </div>
          </div>
        </section>
        <section className="materias">
          <h2>Materias tomadas</h2>
          <table>
            <thead>
              <tr>
                <th>Materias</th>
                <th>Horario</th>
                <th>Aula</th>
              </tr>
            </thead>
            <tbody>
              {user.materias.map((materia, index) => (
                <tr key={index}>
                  <td>{materia.nombre}</td>
                  <td>{materia.horario}</td>
                  <td>{materia.aula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Landing;
