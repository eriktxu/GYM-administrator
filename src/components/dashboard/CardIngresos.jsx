// src/components/dashboard/CardIngresos.js
import React, { useEffect, useState } from "react";
import { fetchSuscripcionesApi } from "../../api/suscripciones";
import "../../styles/components/dashboard/CardIngresos.css";

const valorSuscripciones = {
  mensual: 500,
  trimestral: 1400,
  semestral: 2700,
  anual: 5000,
};

function CardIngresos() {
  const [ingresosUltimoMes, setIngresosUltimoMes] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetchSuscripcionesApi(token)
      .then((data) => {
        const ingresos = data.reduce((total, s) => {
          const inicio = new Date(s.inicio_suscripcion);
          const hoy = new Date();
          const diffDias = (hoy - inicio) / (1000 * 60 * 60 * 24);

          if (diffDias <= 30 && s.estado_suscripcion.toLowerCase() === "activa") {
            const tipo = s.tipo_suscripcion.toLowerCase();
            return total + (valorSuscripciones[tipo] || 0);
          }
          return total;
        }, 0);

        setIngresosUltimoMes(ingresos);
      })
      .catch((error) => console.error("Error al obtener suscripciones:", error));
  }, []);

  return (
    <div className="card-ingresos">
      <h3 className="card-title">Ingresos Último Mes</h3>
      <h1 className="card-amount">${ingresosUltimoMes.toLocaleString()}</h1>
    </div>
  );
}

export default CardIngresos;
