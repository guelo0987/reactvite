import React from 'react';
import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import "../Estilos/MenuPrincipalEstu.css"
import PhotoPerfil from '../assets/perfil sin foto.png'; // Ajusta la ruta según la ubicación real de tus imágenes


const CourseCard = ({ title, code, professor, days, time, location, color }) => (
  <div className="course-card" style={{ backgroundColor: color }}>
    <div className="course-card-content">
      <h2 className="course-card-title">{title} - {code}</h2>
      <div className="course-card-details">
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
const UserProfile = ({ nombre, carrera, fechaIngreso, id, creditos, indice }) => (
  <div className="user-profile">
    <div className="user-profile-content">
      <img loading="lazy" src={PhotoPerfil} className="profile-avatar-landing" alt="" />
      <div className="user-profile-details">
        <h2 className="user-profile-title">Welcome, {nombre}</h2>
        <div className="user-profile-detail"><span className="user-profile-detail-label">Nombre:</span> {nombre}</div>
        <div className="user-profile-detail"><span className="user-profile-detail-label">Carrera:</span> {carrera}</div>
        <div className="user-profile-detail"><span className="user-profile-detail-label">Fecha de Ingreso:</span> {fechaIngreso}</div>
        <div className="user-profile-detail"><span className="user-profile-detail-label">ID:</span> {id}</div>
        <div className="user-profile-detail"><span className="user-profile-detail-label">Créditos Aprobados:</span> {creditos}</div>
        <div className="user-profile-detail"><span className="user-profile-detail-label">Índice Trimestral:</span> {indice}</div>
      </div>
    </div>
  </div>
);

export function MenuPrincipal() {
  const colorCycle = [
    '#E1D2FF', // Royal blue
    '#FDE1AC', // Emerald green
    '#BAE5F5', // Sunflower yellow
    '#CCEFBF', // Carmine red
    '#4ffff',
  ];
  
  return (
    <div className="my-component">
      <div className="layout">
        <Header />
        <Sidebar />
        <main className="main">
          <div className="main-content">
            <UserProfile 
              nombre="Merna Julia Rodriguez"
              carrera="Diseño Grafico - Master UX/UI"
              fechaIngreso="1 Agosto 2022"
              id="114856"
              creditos="35 de 250"
              indice="3,57"
            />
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