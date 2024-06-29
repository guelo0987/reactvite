import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Login } from './Paginas/Login.jsx';
import { MenuPrincipal } from './Paginas/MenuPrincipalEstu.jsx';
import { Calendario } from './Paginas/Calendario.jsx';
import { PensumCarrera } from './Paginas/PensumCarrera.jsx';
import { ReportesCalificaciones } from './Paginas/ReportesCalificaciones.jsx';
import { HojaPago } from './Paginas/HojaPago.jsx';
import { CuentaPorPagar } from './Paginas/CuentaPorPagar.jsx';
import { Horario } from './Paginas/Horario.jsx';
const router = createBrowserRouter([{
    path:'/',
    element : <Login/>
},
{
    path:'/Menu',
    element: <MenuPrincipal/>
},
{
    path:'/Calendario',
    element:<Calendario/>
},
{
    path:"/pensum-carrera",
    element:<PensumCarrera/>
},
{
    path:"/cuenta-por-pagar",
    element:<CuentaPorPagar/>
},
{
    path:"/HojaPago", 
    element:<HojaPago/>
},
{
    path:"/reporte-calificaciones",
    element:<ReportesCalificaciones/>
},
{
    path:"/horario",
    element:<Horario/>
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
    )
