// Schedule.js
import React from 'react';
import '../Estilos/EstPaginas/Horario.css';
import Header from "../Componentes/Header.jsx"
import Sidebar from '../Componentes/Sidebar2.jsx';

export function Horario ()  {
  const scheduleData = [
    { day: 'MON', subject: 'ART101 - D5A', time: '9:00 AM - 10:30 AM', color: 'lightpurple' },
    { day: 'MON', subject: 'UXD301 - D12', time: '11:00 AM - 12:30 PM', color: 'lightblue' },
    { day: 'TUE', subject: 'ITD201 - C1B', time: '1:30 PM - 3:00 PM', color: 'lightorange' },
    { day: 'WED', subject: 'ART101 - D5A', time: '9:00 AM - 10:30 AM', color: 'lightpurple' },
    { day: 'THUR', subject: 'ITD201 - C1B', time: '1:30 PM - 3:00 PM', color: 'lightorange' },
    { day: 'SAT', subject: 'UXD301 - D12', time: '11:00 AM - 12:30 PM', color: 'lightblue' }
  ];

  const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];

  return (
    <div className="horario-page">
      <div className="container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="schedule-container">
            <div className="schedule-header">
              {days.map(day => (
                <div className="schedule-day" key={day}>{day}</div>
              ))}
            </div>
            <div className="schedule-body">
              {days.map(day => (
                <div className="schedule-column" key={day}>
                  {scheduleData.filter(item => item.day === day).map((item, index) => (
                    <div className={`schedule-item ${item.color}`} key={index}>
                      <div className="schedule-subject">{item.subject}</div>
                      <div className="schedule-time">{item.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}