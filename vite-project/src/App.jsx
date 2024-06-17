import React from "react"
import "./Estilos/App.css"
//import {InicioSesion} from "./Paginas/InicioSesion.jsx"
import { Header } from "./Componentes/Header.jsx"
import { Sidebar } from "./Componentes/Sidebar2"
export  function App() {
    return (
      <div >
        <Header/>


        <main>
          <Sidebar/>
        </main>
        

      </div>
      
    )
  }