import React, { useState } from 'react';
import styles from "../Estilos/EstPaginas/InicioSesion.module.css"; // Asegúrate de que esta ruta sea correcta y contenga tus estilos CSS
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
    // ... (resto del código de handleSubmit)
  };

  return (
    <div className={styles["login-page"]}>
      <section className={styles["Login-Sect"]}>
        <div className={styles["image-container"]}>
          <img src={exampleImage} alt="Imagen Ejemplo" />
        </div>
        <div className={styles["login-container"]}>
          <div className={styles["logo"]}>
            <img src={logoImage} alt="Logo de la Universidad" />
            <p>UNIVERSIDAD DE INNOVACIÓN <span>TECNOLÓGICA</span></p>
          </div>
          <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles["forgot-password"]}>
              <a href="#">Olvido Contraseña?</a>
            </div>
            <button type="submit" className={styles["login-button"]}>Log In</button>
          </form>
        </div>
      </section>
    </div>
  );
}
