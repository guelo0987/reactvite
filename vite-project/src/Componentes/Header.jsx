import React from 'react';
import '../Estilos/Header.css';

const Header = () => (
  <header className="main-header">
    <div className="main-header-icons">
     
    </div>
    <div className="main-header-profile">
      <div className="profile-info">
        <div className="profile-name">Esteban</div>
        <div className="profile-role">esteban.20</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a7eabf1265f4cebafa26a1c1e84e0ace41d4a7ff3c8fb7cbf48471771b5be57?apiKey=729dc09cd15c473da7916659c4854519&" className="profile-avatar" alt="" />
    </div>
  </header>
);

export default Header;
