import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useAuth } from "../Componentes/AutenticacionUsuario.jsx";
import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import styles from '../Estilos/EstPaginas/HojaPago.module.css';
import logoImage from '../assets/LogoUniOscuro.png';

export function HojaPago() {
  const { user } = useAuth();
  const [year, setYear] = useState('2024');
  const [period, setPeriod] = useState('MAY-JUL');
  const [isGenerated, setIsGenerated] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [cuentasPorPagar, setCuentasPorPagar] = useState([]);
  const [montoTotal, setMontoTotal] = useState(0);
  const [message, setMessage] = useState('');

  const obtenerCuentasPorPagar = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No se encontró el token de autenticación');
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const cuentasResponse = await axios.get(`http://localhost:5104/api/CuentaPorPagar/cuentaporpagar`, {
        ...config,
        params: {
          periodo: `${year}-${period}`,
          codigoEstudiante: user.id
        }
      });
      const cuentasData = cuentasResponse.data;
      setCuentasPorPagar(cuentasData);
      
      const total = cuentasData.reduce((sum, cuenta) => sum + cuenta.montoTotalaPagar, 0);
      setMontoTotal(total);

      setStudentData({
        trimestre: `${year}-${period}`,
        nombre: user.nombreEstudiante,
        carrera: user.nombreCarrera,
        tipoTarifa: 'Dominicano', // Asumiendo que este dato viene del usuario
        conceptos: cuentasData.map(cuenta => ({
          concepto: cuenta.nombreMateria,
          aula: cuenta.aula,
          horarios: cuenta.horario,
          cr: cuenta.materias?.creditos || 'N/A', // Asumiendo que tienes esta información
          fecha: new Date().toLocaleDateString(), // Fecha actual como ejemplo
          deudaCorriente: cuenta.montoTotalaPagar
        })),
        balanceActual: total,
        primerPago: total * 0.4, // Ejemplo: 40% del total
        segundoPago: total * 0.3, // Ejemplo: 30% del total
        tercerPago: total * 0.3, // Ejemplo: 30% del total
        fechaPrimerPago: '05/may./2024', // Ejemplo
        fechaSegundoPago: '26/may./2024', // Ejemplo
        fechaTercerPago: '23/jun./2024' // Ejemplo
      });

      setIsGenerated(true);
    } catch (error) {
      console.error('Error al obtener las cuentas por pagar:', error);
      setMessage('Error al obtener los datos de las cuentas por pagar');
    }
  };

  const handleGenerateInvoice = () => {
    obtenerCuentasPorPagar();
  };

  const handleDownloadPDF = () => {
    if (!studentData) return;

    const doc = new jsPDF();
    let yPos = 20;

    // Añadir el logo
    const imgWidth = 40;
    const imgHeight = 40;
    const x = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    doc.addImage(logoImage, 'PNG', x, yPos, imgWidth, imgHeight);
    yPos += imgHeight + 10;

    // Título
    doc.setFontSize(18);
    doc.text('Hoja de Pago', 105, yPos, { align: 'center' });
    yPos += 15;

    // Información del estudiante
    doc.setFontSize(12);
    doc.text(`Trimestre: ${studentData.trimestre}`, 20, yPos);
    yPos += 10;
    doc.text(`Nombre: ${studentData.nombre}`, 20, yPos);
    yPos += 10;
    doc.text(`Carrera: ${studentData.carrera}`, 20, yPos);
    yPos += 10;
    doc.text(`Tipo Tarifa: ${studentData.tipoTarifa}`, 20, yPos);
    yPos += 15;

    // Tabla de conceptos
    const headers = ['Concepto', '(Aula) Horarios', 'Cr', 'Fecha', 'Deuda Corriente'];
    const data = studentData.conceptos.map(c => [
      c.concepto,
      `(${c.aula}) ${c.horarios}`,
      c.cr,
      c.fecha,
      `$${c.deudaCorriente.toFixed(2)}`
    ]);

    doc.autoTable({
      startY: yPos,
      head: [headers],
      body: data,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      margin: { top: 20 }
    });

    yPos = doc.lastAutoTable.finalY + 20;

    // Balance y pagos
    doc.setFontSize(12);
    doc.text(`Balance Actual: $${studentData.balanceActual.toFixed(2)}`, 20, yPos);
    yPos += 15;
    doc.text(`Primer Pago: $${studentData.primerPago.toFixed(2)} - Fecha: ${studentData.fechaPrimerPago}`, 20, yPos);
    yPos += 10;
    doc.text(`Segundo Pago: $${studentData.segundoPago.toFixed(2)} - Fecha: ${studentData.fechaSegundoPago}`, 20, yPos);
    yPos += 10;
    doc.text(`Tercer Pago: $${studentData.tercerPago.toFixed(2)} - Fecha: ${studentData.fechaTercerPago}`, 20, yPos);

    doc.save('hoja_de_pago.pdf');
  };
  
  if (!user) {
    return <div>Cargando información del usuario...</div>;
  }

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
              </select>
            </div>
            <div className={styles['filter-item']}>
              <label htmlFor="period">Periodo</label>
              <select
                id="period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="FEB-ABR">FEB-ABR</option>
                <option value="MAY-JUL">MAY-JUL</option>
                <option value="AGO-OCT">AGO-OCT</option>
                <option value="NOV-ENE">NOV-ENE</option>
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
          {message && <div className={styles['message']}>{message}</div>}
          {isGenerated && studentData && (
            <div className={styles['hoja-pago']}>
              <div className={styles['encabezado']}>
                <div>
                  <p><strong>Trimestre:</strong> {studentData.trimestre}</p>
                  <p><strong>Nombre:</strong> {studentData.nombre}</p>
                  <p><strong>Carrera:</strong> {studentData.carrera}</p>
                </div>
                <div>
                  <p><strong>Tipo Tarifa:</strong> {studentData.tipoTarifa}</p>
                </div>
              </div>
              
              <table className={styles['tabla-conceptos']}>
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th>(Aula) Horarios</th>
                    <th>Cr</th>
                    <th>Fecha</th>
                    <th>Deuda Corriente</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.conceptos.map((concepto, index) => (
                    <tr key={index}>
                      <td>{concepto.concepto}</td>
                      <td>({concepto.aula}) {concepto.horarios}</td>
                      <td>{concepto.cr}</td>
                      <td>{concepto.fecha}</td>
                      <td>${concepto.deudaCorriente.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className={styles['balance']}>
                <p><strong>Balance Actual:</strong> ${studentData.balanceActual.toFixed(2)}</p>
              </div>
              
              <div className={styles['pagos']}>
                <div>
                  <p><strong>Primer Pago:</strong> ${studentData.primerPago.toFixed(2)}</p>
                  <p><strong>Fecha:</strong> {studentData.fechaPrimerPago}</p>
                </div>
                <div>
                  <p><strong>Segundo Pago:</strong> ${studentData.segundoPago.toFixed(2)}</p>
                  <p><strong>Fecha:</strong> {studentData.fechaSegundoPago}</p>
                </div>
                <div>
                  <p><strong>Tercer Pago:</strong> ${studentData.tercerPago.toFixed(2)}</p>
                  <p><strong>Fecha:</strong> {studentData.fechaTercerPago}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
