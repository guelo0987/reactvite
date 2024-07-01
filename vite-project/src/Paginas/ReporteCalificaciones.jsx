import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import styles from '../Estilos/EstPaginas/ReporteCalificaciones.module.css';
import logoImage from '../assets/LogoUniOscuro.png';

export function ReporteCalificaciones() {
    const [year, setYear] = useState('2022');
    const [period, setPeriod] = useState('AGO-OCT');
    const [qualificationType, setQualificationType] = useState('Medio Termino');
    const [studentData, setStudentData] = useState(null);
    const [showReport, setShowReport] = useState(false);
  // Simulación de datos de ejemplo para Medio Término
  const mockMedioTerminoData = {
    nombre: 'Merna Julia Rodriguez',
    carrera: 'Diseño Grafico (DG) - Master UX/UI',
    id: '114856',
    items: [
      { materia: 'DG-201: Básicos de Photoshop', seccion: '01', creditos: 4, profesor: 'XXXX XXXX', calificacionBase: 35, calif: 35 },
      { materia: 'DG-202: Tipografía Avanzada', seccion: '03', creditos: 5, profesor: 'XXXX XXXX', calificacionBase: 45, calif: 39 },
      { materia: 'DG-203: Branding 1', seccion: '01', creditos: 5, profesor: 'XXXX XXXX', calificacionBase: 50, calif: 44 },
      { materia: 'DG-204: Arte Digital', seccion: '02', creditos: 6, profesor: 'XXXX XXXX', calificacionBase: 60, calif: 55 },
      { materia: 'DG-205: Álgebra II', seccion: '05', creditos: 4, profesor: 'XXXX XXXX', calificacionBase: 50, calif: 40 },
    ],
    totalCreditos: 24,
    condicionAcademica: 'Normal'
  };

  // Simulación de datos de ejemplo para Finales
  const mockFinalesData = {
    nombre: 'Merna Julia Rodriguez',
    carrera: 'Diseño Grafico (DG) - Master UX/UI',
    id: '114856',
    items: [
      { materia: 'DG-201: Básicos de Photoshop', seccion: '01', creditos: 4, profesor: 'XXXX XXXX', calificacionBase: 35, calif: 35 },
      { materia: 'DG-202: Tipografía Avanzada', seccion: '03', creditos: 5, profesor: 'XXXX XXXX', calificacionBase: 45, calif: 39 },
      { materia: 'DG-203: Branding 1', seccion: '01', creditos: 5, profesor: 'XXXX XXXX', calificacionBase: 50, calif: 44 },
      { materia: 'DG-204: Arte Digital', seccion: '02', creditos: 6, profesor: 'XXXX XXXX', calificacionBase: 60, calif: 55 },
      { materia: 'DG-205: Álgebra II', seccion: '05', creditos: 4, profesor: 'XXXX XXXX', calificacionBase: 50, calif: 40 },
    ],
    tablaDiferencias: {
      totalTrimestre: { creditos: 24, puntos: 89, indice: 3.56 },
      totalAcumulados: { creditos: 43, puntos: 164, indice: 3.68 }
    },
    condicionAcademica: 'Normal'
  };

  const fetchDataFromApi = async () => {
    // Simulación de la carga o espera de datos de una API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (qualificationType === 'Medio Termino') {
          resolve(mockMedioTerminoData);
        } else if (qualificationType === 'Finales') {
          resolve(mockFinalesData);
        } else {
          reject(new Error('Tipo de calificación no reconocido'));
        }
      }, 1000); // Simular un tiempo de espera de 1 segundo
    });
  };


  const handleGenerateReport = async () => {
    try {
      const data = await fetchDataFromApi();
      setStudentData(data);
      setShowReport(true); // Mostrar el reporte después de generar
    } catch (error) {
      console.error('Error al obtener datos simulados:', error);
      setShowReport(false);
    }
  };
  const handleQualificationTypeChange = (e) => {
    setQualificationType(e.target.value);
    setShowReport(false); // Ocultar el reporte al cambiar el tipo de calificación
    setStudentData(null); // Limpiar los datos del estudiante
  };

  const handleDownloadPDF = () => {
  if (!studentData) return;

  const doc = new jsPDF();
  const imgWidth = 50; // Ancho de la imagen en el PDF
  const imgHeight = 50; // Alto de la imagen en el PDF
  const x = (doc.internal.pageSize.getWidth() - imgWidth) / 2; // Centrar la imagen horizontalmente

  // Agregar logo al PDF
  doc.addImage(logoImage, 'PNG', x, 5, imgWidth, imgHeight);

  // Contenido del PDF
  const title = `Reporte de Calificaciones - ${qualificationType}`;
  const header = `${studentData.nombre} - ${studentData.carrera} - ID: ${studentData.id}`;
  let y = 70; // Posición inicial para el texto después del logo

  // Título centrado
  doc.setFontSize(18);
  doc.text(title, doc.internal.pageSize.width / 2, y, { align: 'center' });
  y += 10;

  // Información del estudiante centrada
  doc.setFontSize(12);
  doc.text(header, doc.internal.pageSize.width / 2, y, { align: 'center' });
  y += 15;

  // Tabla de calificaciones
  const columns = ['Materia', 'Sección', 'Créditos', 'Profesor', 'Calificación Base', 'Calif'];
  const data = studentData.items.map(item => [
    item.materia,
    item.seccion,
    item.creditos.toString(),
    item.profesor,
    item.calificacionBase.toString(),
    item.calif.toString()
  ]);

  // Generar tabla con estilos y tema de rejilla
  const tableHeight = doc.autoTable.previous.finalY; // Obtener la altura de la tabla
  doc.autoTable({
    startY: y,
    head: [columns],
    body: data,
    theme: 'grid',
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
  });

  // Calcular posición y final después de la tabla
  y += tableHeight + 5; // Reduce spacing between table and additional info

  // Información adicional según el tipo de calificación
  if (qualificationType === 'Medio Termino') {
    doc.text(`Total de créditos: ${studentData.totalCreditos}`, 14, y);
  } else if (qualificationType === 'Finales' && studentData.tablaDiferencias) {
    y += 5; // Reduce spacing before differences table
    doc.text('Tabla Diferencias - Total del trimestre', 14, y);
    y += 5;
    doc.autoTable({
      startY: y,
      head: [['Créditos', 'Puntos', 'Índice']],
      body: [[
        studentData.tablaDiferencias.totalTrimestre.creditos,
        studentData.tablaDiferencias.totalTrimestre.puntos,
        studentData.tablaDiferencias.totalTrimestre.indice
      ]],
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    });
  }

  // Condición académica al final del reporte
  y = doc.lastAutoTable.finalY + 5; // Reduce spacing between differences table and condition
  doc.text(`Condición Académica: ${studentData.condicionAcademica}`, 14, y);

  // Guardar PDF y descargar con nombre dinámico
  const fileName = `reporte_calificaciones_${qualificationType.toLowerCase().replace(' ', '_')}.pdf`;
  doc.save(fileName);
};
  
  return (
    <div className={styles['reporte-calificaciones-page']}>
      <Header />
      <div className={styles['main-content']}>
        <Sidebar />
        <div className={styles['content-area']}>
          <h1>Reporte De Calificaciones</h1>
          <div className={styles['filters']}>
            <div className={styles['filter-item']}>
              <label htmlFor="year">Año</label>
              <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div className={styles['filter-item']}>
              <label htmlFor="period">Periodo</label>
              <select id="period" value={period} onChange={(e) => setPeriod(e.target.value)}>
                <option value="AGO-OCT">AGO-OCT</option>
                <option value="NOV-JAN">NOV-JAN</option>
              </select>
            </div>
            <div className={styles['filter-item']}>
              <label htmlFor="qualificationType">Calificaciones</label>
              <select 
                id="qualificationType" 
                value={qualificationType} 
                onChange={handleQualificationTypeChange}
              >
                <option value="Medio Termino">Medio Termino</option>
                <option value="Finales">Finales</option>
              </select>
            </div>
            <button onClick={handleGenerateReport} className={styles['generate-button']}>
              Generar reporte
            </button>
            {showReport && studentData && (
              <button onClick={handleDownloadPDF} className={styles['download-button']}>
                Descargar PDF
              </button>
            )}
          </div>
          {showReport && studentData && (
            <div>
              <div className={styles['student-details']}>
                <div>
                  <span>Nombre</span>
                  <p>{studentData.nombre}</p>
                </div>
                <div>
                  <span>Carrera</span>
                  <p>{studentData.carrera}</p>
                </div>
                <div>
                  <span>ID</span>
                  <p>{studentData.id}</p>
                </div>
              </div>
              <div className={styles['invoice-table']}>
                <table>
                  <thead>
                    <tr>
                      <th>Materia</th>
                      <th>Sección</th>
                      <th>Créditos</th>
                      <th>Profesor</th>
                      <th>Calificación Base</th>
                      <th>Calif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.materia}</td>
                        <td>{item.seccion}</td>
                        <td>{item.creditos}</td>
                        <td>{item.profesor}</td>
                        <td>{item.calificacionBase}</td>
                        <td>{item.calif}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles['summary']}>
                {qualificationType === 'Medio Termino' && (
                  <div>
                    <span>Total de créditos</span>
                    <p>{studentData.totalCreditos}</p>
                  </div>
                )}
                {qualificationType === 'Finales' && studentData.tablaDiferencias && (
                  <div>
                    <span>Tabla Diferencias - Total del trimestre</span>
                    <table>
                      <thead>
                        <tr>
                          <th>Créditos</th>
                          <th>Puntos</th>
                          <th>Índice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{studentData.tablaDiferencias.totalTrimestre.creditos}</td>
                          <td>{studentData.tablaDiferencias.totalTrimestre.puntos}</td>
                          <td>{studentData.tablaDiferencias.totalTrimestre.indice}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                <div>
                  <span>Condición Académica</span>
                  <p>{studentData.condicionAcademica}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

