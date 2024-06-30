import React, { useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de importar jsPDF para poder usarlo

import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import styles from '../Estilos/EstPaginas/HojaPago.module.css';
import logoImage from '../assets/LogoUniOscuro.png';

export function HojaPago() {
  const [year, setYear] = useState('2023');
  const [period, setPeriod] = useState('NOV - JAN');
  const [isGenerated, setIsGenerated] = useState(false);
  const [studentData, setStudentData] = useState(null);

  const handleGenerateInvoice = () => {
    const data = {
      nombre: 'Merna Julia Rodriguez',
      carrera: 'Diseño Grafico (DG) - Master UX/UI',
      id: 114856,
      fechaIngreso: '1 Mayo 2022',
      creditosAprobados: '43 de 250',
      materiasCursadas: '10 de 50',
      items: [
        {
          descripcion: 'Créditos',
          qty: 20,
          price: 3500.10,
          amount: 70002.00
        },
        {
          descripcion: 'Uso de laboratorios',
          qty: 1,
          price: 3000.00,
          amount: 3000.00
        },
        {
          descripcion: 'Carnet',
          qty: 1,
          price: 2000.00,
          amount: 2000.00
        },
        {
          descripcion: 'Descuento por índice',
          qty: 1,
          price: 0,
          amount: 2650.00
        }
      ],
      pagos: [
        {
          tipo: 'Primer pago',
          monto: 32558.40,
          fecha: '1 nov 2022'
        },
        {
          tipo: 'Segundo pago',
          monto: 14470.40,
          fecha: '20 dec 2022'
        },
        {
          tipo: 'Tercer pago',
          monto: 32558.40,
          fecha: '12 jan 2023'
        }
      ]
    };

    setStudentData(data);
    setIsGenerated(true);
  };

  const handleDownloadPDF = () => {
    if (!studentData) return;
  
    const doc = new jsPDF();
    let yPos = 5;
  
    // Añadir el logo en la parte superior del documento
    const imgWidth = 50; // Ancho de la imagen en el PDF
    const imgHeight = 50; // Alto de la imagen en el PDF
    const x = (doc.internal.pageSize.getWidth() - imgWidth) / 2; // Centrar la imagen horizontalmente
    doc.addImage(logoImage, 'PNG', x, yPos, imgWidth, imgHeight);
    yPos += imgHeight + 5; // Incrementar yPos para dejar espacio más cerca del logo
  
    // Añadir texto debajo del logo
    doc.setFontSize(19.5);
    doc.setTextColor('#000000'); // Color negro
    doc.text('Universidad de Innovación Tecnológica', 105, yPos, { align: 'center' });
    yPos += 10; // Aumentar espacio después del texto
  
    // Añadir título centrado
    doc.setFontSize(18);
    doc.setTextColor('#000000'); // Color negro para el título principal
    doc.text('Hoja de Pago', 105, yPos, { align: 'center' });
    yPos += 15; // Aumentar espacio después del título
  
    // Añadir línea separadora
    doc.setLineWidth(0.5);
    doc.line(20, yPos, 190, yPos); // Línea horizontal
    yPos += 10; // Aumentar espacio después de la línea
  
    // Añadir detalles del estudiante
    doc.setFontSize(12);
    doc.setTextColor('#000000'); // Color negro para el texto normal
    doc.text(`Nombre: ${studentData.nombre}`, 20, yPos);
    yPos += 10;
    doc.text(`Carrera: ${studentData.carrera}`, 20, yPos);
    yPos += 10;
    doc.text(`ID: ${studentData.id}`, 20, yPos);
    yPos += 10;
    doc.text(`Fecha de Ingreso: ${studentData.fechaIngreso}`, 20, yPos);
    yPos += 10;
    doc.text(`Créditos Aprobados: ${studentData.creditosAprobados}`, 20, yPos);
    yPos += 10;
    doc.text(`Materias Cursadas: ${studentData.materiasCursadas}`, 20, yPos);
    yPos += 20;
  
    // Añadir tabla de items
    doc.setFontSize(14);
    doc.setTextColor('#000000'); // Color negro para el texto de la tabla
    doc.text('Detalle de Factura', 20, yPos);
    yPos += 10;
  
    // Añadir encabezados de tabla
    doc.setFont('helvetica', 'bold');
    doc.text('Descripción', 20, yPos);
    doc.text('Cantidad', 100, yPos);
    doc.text('Precio Unitario', 130, yPos);
    doc.text('Monto', 170, yPos);
    yPos += 5;
    doc.line(20, yPos, 190, yPos); // Línea horizontal después de encabezados
    yPos += 5;
    doc.setFont('helvetica', 'normal');
  
    // Añadir filas de la tabla
    studentData.items.forEach((item, index) => {
      yPos += 10;
      doc.text(`${item.descripcion}`, 20, yPos);
      doc.text(`${item.qty}`, 100, yPos);
      doc.text(`$${item.price.toFixed(2)}`, 130, yPos);
      doc.text(`$${item.amount.toFixed(2)}`, 170, yPos);
    });
    yPos += 10; // Aumentar espacio después de la tabla
  
    // Añadir sección de pagos
    doc.setFontSize(14);
    doc.text('Pagos', 20, yPos);
    yPos += 10;
  
    // Añadir encabezados de pagos
    doc.setFont('helvetica', 'bold');
    doc.text('Tipo de Pago', 20, yPos);
    doc.text('Monto', 100, yPos);
    doc.text('Fecha', 150, yPos);
    yPos += 5;
    doc.line(20, yPos, 190, yPos); // Línea horizontal después de encabezados
    yPos += 5;
    doc.setFont('helvetica', 'normal');
  
    // Añadir filas de la sección de pagos
    studentData.pagos.forEach((pago, index) => {
      yPos += 10;
      doc.text(`${pago.tipo}`, 20, yPos);
      doc.text(`$${pago.monto.toFixed(2)}`, 100, yPos);
      doc.text(`${pago.fecha}`, 150, yPos);
    });
  
    // Guardar el PDF
    doc.save('hoja_de_pago.pdf');
  };
  
  return (
    <div className={styles['hoja-de-pago-page']}>
      <Header />
      <div className={styles['main-content']}>
        <Sidebar />
        <div className={styles['content-area']}>
          <h1>Hoja De Pago</h1>
          <div className={styles['filters']}>
            <div className={styles['filter-item']}>
              <label htmlFor="year">Año</label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
            <div className={styles['filter-item']}>
              <label htmlFor="period">Periodo</label>
              <select
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="NOV - JAN">NOV - JAN</option>
                <option value="FEB - APR">FEB - APR</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
            <button onClick={handleGenerateInvoice} className={styles['generate-button']}>
              Generar factura
            </button>
            {isGenerated && studentData && (
              <button onClick={handleDownloadPDF} className={styles['download-button']}>
                Descargar PDF
              </button>
            )}
          </div>
          {isGenerated && studentData && (
            <div>
              <div className={styles['student-details']}>
                <div className={styles['student-info']}>
                  <div>
                    <h2>Nombre</h2>
                    <p>{studentData.nombre}</p>
                  </div>
                  <div>
                    <h2>Carrera</h2>
                    <p>{studentData.carrera}</p>
                  </div>
                  <div>
                    <h2>ID</h2>
                    <p>{studentData.id}</p>
                  </div>
                </div>
                <div className={styles['student-info']}>
                  <div>
                    <h2>Fecha Ingreso</h2>
                    <p>{studentData.fechaIngreso}</p>
                  </div>
                  <div>
                    <h2>Créditos Aprobados</h2>
                    <p>{studentData.creditosAprobados}</p>
                  </div>
                  <div>
                    <h2>Materias cursadas</h2>
                    <p>{studentData.materiasCursadas}</p>
                  </div>
                </div>
              </div>
              <div className={styles['invoice-table']}>
                <table>
                  <thead>
                    <tr>
                      <th>Descripción</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.descripcion}</td>
                        <td>{item.qty}</td>
                        <td>{item.price.toFixed(2)}</td>
                        <td>{item.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles['payments']}>
                {studentData.pagos.map((pago, index) => (
                  <div key={index} className={styles['payment']}>
                    <h3>{pago.tipo}</h3>
                    <p>
                      $ {pago.monto.toFixed(2)}
                    </p>
                    <p>
                      Fecha de {pago.tipo.toLowerCase()} pago: {pago.fecha}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
