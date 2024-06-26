import React from 'react';
import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import "../Estilos/MenuPrincipalEstu.css"

const CourseCard = ({ title, code, professor, days, time, location, color }) => (
  <div className="course-card" style={{ backgroundColor: color }}>
    <div className="course-card-content">
      <h2 className="course-card-title">{title}</h2>
      <div className="course-card-details">
        <div className="course-card-detail"><span className="course-card-detail-label">Código:</span> {code}</div>
        <div className="course-card-detail"><span className="course-card-detail-label">Profesor:</span> {professor}</div>
        <div className="course-card-detail"><span className="course-card-detail-label">Días:</span> {days}</div>
        <div className="course-card-detail"><span className="course-card-detail-label">Hora:</span> {time}</div>
        <div className="course-card-detail"><span className="course-card-detail-label">Lugar:</span> {location}</div>
      </div>
    </div>
  </div>
);


const courses = [
{
    title: 'Liderazgo',
    code: '00150',
    professor: 'Nelson Forero',
    days: 'Lunes, Miércoles, Viernes',
    time: '9:00 am - 11:00 am',
    location: 'Salón 101',
    color: 'blue',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  },
  {
    title: 'Matemáticas',
    code: '00234',
    professor: 'Lucía Sánchez',
    days: 'Martes, Jueves',
    time: '2:00 pm - 4:00 pm',
    location: 'Salón 202',
    color: 'green',
  }
];

export function MenuPrincipal() {
  const colorCycle = [
    '#E1D2FF', // Royal blue
    '#FDE1AC', // Emerald green
    '#BAE5F5', // Sunflower yellow
    '#CCEFBF', // Carmine red
  ];
  
  return (
    <div className="my-component">
      <div className="layout">
        <Header />
        <Sidebar />
        <main className="main">
          <div className="main-content">
            <section className="course-cards">
              {courses.map((course, index) => {
                const colorIndex = index % colorCycle.length;
                return (
                  <CourseCard
                    key={course.code}
                    title={course.title}
                    code={course.code}
                    professor={course.professor}
                    days={course.days}
                    time={course.time}
                    location={course.location}
                    color={colorCycle[colorIndex]}
                  />
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
