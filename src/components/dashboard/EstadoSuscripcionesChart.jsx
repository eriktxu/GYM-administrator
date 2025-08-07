import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { fetchSuscripcionesApi } from "../../api/suscripciones";
import "../../styles/components/dashboard/EstadoSuscripcionesChart.css";

const COLORS = ["#28a745", "#dc3545"]; // verde para activas, rojo para vencidas

function EstadoSuscripcionesChart() {
  const [suscripciones, setSuscripciones] = useState([]);
  const [estadoData, setEstadoData] = useState([
    { name: "Activas", value: 0 },
    { name: "Vencidas", value: 0 },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchSuscripcionesApi(token)
      .then((data) => {
        setSuscripciones(data);

        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const conteo = data.reduce(
          (acc, s) => {
            const vencimiento = new Date(s.vencimiento_suscripcion);
            vencimiento.setHours(0, 0, 0, 0);
            if (vencimiento < hoy) acc.vencidas++;
            else acc.activas++;
            return acc;
          },
          { activas: 0, vencidas: 0 }
        );

        setEstadoData([
          { name: "Activas", value: conteo.activas },
          { name: "Vencidas", value: conteo.vencidas },
        ]);
      })
      .catch((error) => console.error("Error al cargar suscripciones:", error));
  }, []);

  if (suscripciones.length === 0) {
    return <p>Cargando estado de suscripciones...</p>;
  }

  return (
    <div className="estado-suscripciones-card">
      <h4>Estado de Suscripciones</h4>
      <PieChart width={250} height={250}>
        <Pie
          data={estadoData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {estadoData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default EstadoSuscripcionesChart;
