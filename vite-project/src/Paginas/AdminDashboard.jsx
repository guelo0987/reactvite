import React from "react";
import SidebarAdmin from "../Componentes/SidebarAdmin.jsx";
import Header from "../Componentes/Header.jsx";
import "../Estilos/EstPaginas/AdminDashboard.css";
import PhotoPerfil from '../assets/perfil sin foto.png';

export function AdminDashboard() {
    const userInfo = {
        nombre: "Carlos Ferrero",
        puesto: "Administrador",
        correo: "carlosferrero1@gmail.com",
        telefono: "809-123-4567",
        fechaIngreso: "1 Mayo 2021"
    };

    const stats = [
        { label: "Profesores", value: "7,500" },
        { label: "Materias", value: "7,500" },
        { label: "Secciones", value: "7,500" }
    ];

    const tasks = [
        { name: "John Doe", subject: "English", type: "Freelance", level: "Fluent" },
        // ... más tareas
    ];

    return (
        <div className="admin-dashboard">
            <SidebarAdmin />
            <div className="main-content">
                <Header />
                <div className="user-info">
                    <img src={PhotoPerfil} alt="Profile" className="profile-image" />
                    <div className="user-details">
                        <h2 className="user-profile-title">Welcome, {userInfo.nombre}</h2>
                        <div className="user-profile-detail"><span className="user-profile-detail-label">Nombre:</span> {userInfo.nombre}</div>
                        <div className="user-profile-detail"><span className="user-profile-detail-label">Puesto:</span> {userInfo.puesto}</div>
                        <div className="user-profile-detail"><span className="user-profile-detail-label">Correo:</span> {userInfo.correo}</div>
                        <div className="user-profile-detail"><span className="user-profile-detail-label">Teléfono:</span> {userInfo.telefono}</div>
                        <div className="user-profile-detail"><span className="user-profile-detail-label">Fecha de Ingreso:</span> {userInfo.fechaIngreso}</div>
                    </div>
                </div>
                <div className="dashboard-content">
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h2>{stat.value}</h2>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="tasks-section">
                        <h2>Tareas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Type</th>
                                    <th>Level</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <tr key={index}>
                                        <td>{task.subject}</td>
                                        <td>{task.type}</td>
                                        <td>{task.level}</td>
                                        <td>
                                            <button className="view-btn">View</button>
                                            <button className="edit-btn">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <span>Page 1 of 10</span>
                            <button className="next-btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
