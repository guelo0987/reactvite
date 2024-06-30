// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';
import { Login } from './Paginas/Login.jsx';
import { MenuPrincipal } from './Paginas/MenuPrincipalEstu.jsx';
import { Calendario } from './Paginas/Calendario.jsx';
import { PensumCarrera } from './Paginas/PensumCarrera.jsx';
import { ReportesCalificaciones } from './Paginas/ReportesCalificaciones.jsx';
import { HojaPago } from './Paginas/HojaPago.jsx';
import { CuentaPorPagar } from './Paginas/CuentaPorPagar.jsx';
import { Horario } from './Paginas/Horario.jsx';
import { AutenticacionUsuario } from './Componentes/AutenticacionUsuario.jsx';
import ProtectedRoute from './Componentes/RutaProtegida.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Menu',
    element: (
      <ProtectedRoute>
        <MenuPrincipal />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Calendario',
    element: (
      <ProtectedRoute>
        <Calendario />
      </ProtectedRoute>
    ),
  },
  {
    path: '/pensum-carrera',
    element: (
      <ProtectedRoute>
        <PensumCarrera />
      </ProtectedRoute>
    ),
  },
  {
    path: '/cuenta-por-pagar',
    element: (
      <ProtectedRoute>
        <CuentaPorPagar />
      </ProtectedRoute>
    ),
  },
  {
    path: '/HojaPago',
    element: (
      <ProtectedRoute>
        <HojaPago />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reporte-calificaciones',
    element: (
      <ProtectedRoute>
        <ReportesCalificaciones />
      </ProtectedRoute>
    ),
  },
  {
    path: '/horario',
    element: (
      <ProtectedRoute>
        <Horario />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AutenticacionUsuario>
    <RouterProvider router={router} />
  </AutenticacionUsuario>
);
