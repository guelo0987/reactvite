import React, { useState } from 'react';
import Sidebar from '../Componentes/Sidebar2.jsx';
import Header from '../Componentes/Header.jsx';
import styles from '../Estilos/EstPaginas/HojaPago.module.css';

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
