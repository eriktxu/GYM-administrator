// src/components/AlertaSuscripciones.js
import React, { useEffect, useState } from "react";
import "../../styles/components/alerta-suscripciones.css";
import { fetchSuscripcionesApi } from "../../api/suscripciones";

function AlertaSuscripciones() {
    const [inactivas, setInactivas] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchSuscripcionesApi(token).then((suscripciones) => {
            const vencidas = suscripciones.filter(s => s.estado !== "Activa").length;
            if (vencidas > 0) {
                setInactivas(vencidas);
                setMostrar(true);
                setTimeout(() => setMostrar(false), 5000); // se oculta a los 5 seg
            }
        }).catch(err => console.error("Error al cargar suscripciones:", err));
    }, []);

    if (!mostrar || inactivas === 0) return null;

    return (
        <div className="alerta-suscripciones">
            <h5>🔔 Alerta</h5>
            <p>Tienes <strong>{inactivas}</strong> suscripciones vencidas.</p>
        </div>
    );
}

export default AlertaSuscripciones;
