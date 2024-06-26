import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Estilos/Calendario.css';
import 'react-calendar/dist/Calendar.css';

export function Calendario() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="calendar-container">
            <h1>Calendario</h1>
            <Calendar
                onChange={onChange}
                value={value}
                locale="es-ES"
            />
        </div>
    );
}
