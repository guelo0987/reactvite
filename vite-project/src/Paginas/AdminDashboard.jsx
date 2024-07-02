import React, { useState } from "react";
import SidebarAdmin from "../Componentes/SidebarAdmin.jsx";
import Header from "../Componentes/Header.jsx";
import { TaskModal } from "../Componentes/TaskModal.jsx";
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

    const initialTasks = [
        { task: "Preparar informe", description: "Informe de ventas trimestral", dueDate: "2024-07-15", completed: false },
        // ... más tareas (hasta completar un número mayor a 5 para probar la paginación)
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [currentPage, setCurrentPage] = useState(1);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const tasksPerPage = 5;

    const handleAddTask = () => {
        setTaskToEdit(null);
        setIsTaskModalOpen(true);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleEditTask = (index) => {
        setTaskToEdit({ ...tasks[index], index });
        setIsTaskModalOpen(true);
    };

    const handleSaveTask = (task) => {
        if (task.index !== undefined) {
            const updatedTasks = tasks.map((t, i) =>
                i === task.index ? task : t
            );
            setTasks(updatedTasks);
        } else {
            setTasks([...tasks, task]);
        }
    };

    const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    const nextPage = () => {
        if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                        <button onClick={handleAddTask} className="add-task-btn">+</button>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tarea</th>
                                    <th>Fecha Límite</th>
                                    <th>Descripción</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTasks.map((task, index) => (
                                    <tr key={index} className={task.completed ? "completed" : ""}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => handleToggleTask(index)}
                                            />
                                        </td>
                                        <td>{task.task}</td>
                                        <td>{task.dueDate}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            <button onClick={() => handleEditTask(index)} className="edit-btn">Edit</button>
                                            <button onClick={() => handleDeleteTask(index)} className="delete-btn">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <button onClick={prevPage} disabled={currentPage === 1} className="prev-btn">Prev</button>
                            <span>Page {currentPage} of {Math.ceil(tasks.length / tasksPerPage)}</span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil(tasks.length / tasksPerPage)} className="next-btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            {isTaskModalOpen && (
                <TaskModal
                    task={taskToEdit}
                    onSave={handleSaveTask}
                    onClose={() => setIsTaskModalOpen(false)}
                />
            )}
        </div>
    );
}
