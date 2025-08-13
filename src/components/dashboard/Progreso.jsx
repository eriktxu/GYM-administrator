import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Componente para la gráfica de progreso
function GraficaProgreso({ historial }) { // Recibe el historial como prop

  // 1. Damos formato a los datos para que la gráfica los entienda mejor
  const formattedData = historial.map(registro => ({
    // Formateamos la fecha para que sea más legible (ej: "13/Ago")
    fecha: new Date(registro.fecha_registro).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short'
    }),
    // Convertimos los valores a números para asegurar que la gráfica funcione bien
    Peso: parseFloat(registro.peso),
    IMC: parseFloat(registro.imc),
  }));

  // 2. Si no hay suficientes datos, mostramos un mensaje en lugar de una gráfica vacía
  if (!historial || historial.length < 2) {
    return (
      <div className="progreso-card">
        <h4>Tu Progreso</h4>
        <p className="mensaje-pocos-datos">
          ¡Sigue así! Registra al menos dos veces tu peso en tu perfil para ver tu progreso aquí.
        </p>
      </div>
    );
  }

  // 3. Renderizamos la gráfica si hay datos suficientes
  return (
    <div className="progreso-card">
      <h4>Evolución de tu Peso e IMC</h4>
      {/* ResponsiveContainer hace que la gráfica se ajuste al tamaño de su tarjeta */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Peso" 
            stroke="#8884d8" 
            strokeWidth={2}
            activeDot={{ r: 8 }} 
          />
          <Line 
            type="monotone" 
            dataKey="IMC" 
            stroke="#82ca9d" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficaProgreso;