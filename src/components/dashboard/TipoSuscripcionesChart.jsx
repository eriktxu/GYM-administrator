// TipoSuscripcionesChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../../styles/components/dashboard/TipoSuscripcionesChart.css";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

function TipoSuscripcionesChart({ suscripciones = [] }) {
  const distribucionTipos = Object.entries(
    suscripciones.reduce((acc, s) => {
      const tipo = s.tipo_suscripcion.toLowerCase();
      acc[tipo] = (acc[tipo] || 0) + 1;
      return acc;
    }, {})
  ).map(([tipo, count]) => ({ name: tipo, value: count }));

  return (
    <div className="tipo-suscripciones-chart">
      <h4>Distribución de Tipos</h4>
      <PieChart width={250} height={250}>
        <Pie
          data={distribucionTipos}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {distribucionTipos.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default TipoSuscripcionesChart;
