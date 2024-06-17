import React from 'react';
import '../Estilos/Header.css'
import Universidad from '../assets/UniSymbol.png';
import Anon from '../assets/Anon.png'
export function Header ()  {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Universidad} alt="Símbolo de la universidad" /> 
      </div>
      <div className="header__user">
      <img src={Anon} alt="Símbolo del ususario" /> 
        <span>Nombre Usuario</span>
      </div>
    </header>
  );
};

