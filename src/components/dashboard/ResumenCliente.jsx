import React from 'react';
import '../../styles/components/dashboard/ResumenCliente.css'; // Crearemos este archivo para los estilos

function ResumenCliente({ perfil }) {
  // 1. Manejo de estado nulo o de carga
  // Si el perfil aún no ha cargado, mostramos un mensaje temporal.
  if (!perfil) {
    return (
      <div className="summary-card">
        <p>Cargando información del perfil...</p>
      </div>
    );
  }

  // 2. Lógica para calcular los días restantes de la suscripción
  const calcularDiasRestantes = () => {
    const hoy = new Date();
    const fechaVencimiento = new Date(perfil.vencimiento_suscripcion);
    
    // Ignoramos las horas para una comparación justa
    hoy.setHours(0, 0, 0, 0);
    fechaVencimiento.setHours(0, 0, 0, 0);

    // Si ya venció, no hay días restantes
    if (fechaVencimiento < hoy) {
      return 0;
    }

    // Calculamos la diferencia en milisegundos y la convertimos a días
    const diferenciaMs = fechaVencimiento - hoy;
    const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));
    
    return diasRestantes;
  };

  const diasRestantes = calcularDiasRestantes();

  // 3. Renderizado del componente con los datos del perfil
  return (
    <div className="summary-card">
      <h2 className="welcome-header">
        ¡Bienvenido de nuevo, {perfil.nombre}!
      </h2>
      <p className="summary-subtitle">Aquí tienes un resumen de tu estado actual.</p>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">{perfil.peso || 'N/A'} kg</span>
          <span className="stat-label">Peso Actual</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{perfil.imc || 'N/A'}</span>
          <span className="stat-label">IMC Actual</span>
        </div>
        <div className={`stat-item ${diasRestantes <= 7 ? 'text-danger' : ''}`}>
          <span className="stat-value">{diasRestantes}</span>
          <span className="stat-label">Días Restantes de Suscripción</span>
        </div>
      </div>
    </div>
  );
}

export default ResumenCliente;