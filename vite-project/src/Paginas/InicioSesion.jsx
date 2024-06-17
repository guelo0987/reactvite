import React from 'react';
import '../Estilos/InicioSesion.css';
import Universidad from '../assets/UniSymbol.png';
import Sidebar from '/src/Sidebar.jsx';


export function InicioSesion() {
    return (
        <div>
            
            <Sidebar/>
            <section>
                <div>
                    <h1 className='Titulo'>Bienvenido a</h1>
                    <img src={Universidad} alt="Símbolo de la universidad" />
                </div>
                <div className='InicioGeneral'>
                    <input className="Inicio" type="text" placeholder="Correo" />
                </div>
                <div className='InicioGeneral'>
                    <input className="Inicio" type="password" placeholder="Contraseña" />
                </div>
                <div className='InicioGeneral'>
                    <button>Iniciar Sesión</button>
                </div>
                <div className='InicioGeneral'>
                    <a href="">¿Has olvidado tu Contraseña?</a>
                </div>
            </section>
        </div>
    )
}
    