import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/VentanaLogOut.css'; // Asegúrate de crear y ajustar este archivo CSS

const LogoutModal = ({ isVisible, onClose }) => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Aquí puedes agregar cualquier lógica adicional de cierre de sesión
        navigate('/'); // Redirigir a la pantalla de login
    };

    if (!isVisible) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>¿Estás seguro de que quieres salir?</h2>
          <div className="modal-actions">
            <button onClick={handleConfirm}>Sí</button>
            <button onClick={onClose}>No</button>
          </div>
        </div>
      </div>
    );
};

export default LogoutModal;
