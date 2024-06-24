import React, { useState } from 'react';
import "../Estilos/InicioSesion.css"; // Asegúrate de que esta ruta sea correcta y contenga tus estilos CSS
import logoImage from '../assets/logoUni.png'; // Ajusta la ruta según la ubicación real de tus imágenes
import exampleImage from '../assets/LoginIma.png'; // Ajusta la ruta según la ubicación real de tus imágenes

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al backend
    console.log('Username:', username);
    console.log('Password:', password);
    // Ejemplo de cómo podrías enviar los datos a una API usando fetch
    // fetch('url_del_backend', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Manejar la respuesta del servidor
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  return (
  <section>

      <div className="image-container">
        <img src={exampleImage} alt="Imagen Ejemplo" />
      </div>
      <div className="login-container">
      <div className="logo">
          <img src={logoImage} alt="Logo de la Universidad" />
          <p>UNIVERSIDAD DE INNOVACIÓN <span>TECNOLÓGICA</span></p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
       
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Olvido Contraseña?</a>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>

    </section> 
  );
}
