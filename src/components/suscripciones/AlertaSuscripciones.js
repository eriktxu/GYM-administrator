// src/components/AlertaSuscripciones.js
import React, { useEffect, useState } from "react";
import "../../styles/components/alerta-suscripciones.css";
import { fetchSuscripcionesApi } from "../../api/suscripciones";

function AlertaSuscripciones() {
    const [mostrar, setMostrar] = useState(false);
    const [vencidas, setVencidas] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetchSuscripcionesApi(token)
            .then((data) => {
                const hoy = new Date();
                hoy.setHours(0, 0, 0, 0);

                const vencidas = data.filter((s) => {
                    const vencimiento = new Date(s.vencimiento_suscripcion);
                    vencimiento.setHours(0, 0, 0, 0);
                    return vencimiento < hoy;
                });

                if (vencidas.length > 0) {
                    setVencidas(vencidas.length);
                    setMostrar(true);
                    setTimeout(() => setMostrar(false), 5000); // ocultar después de 5 segundos
                }
            })
            .catch((error) => {
                console.error("Error al obtener las suscripciones:", error);
            });
    }, []);

    if (!mostrar || vencidas === 0) return null;

    return (
        <div className="alerta-suscripciones">
            <h5>🔔 Alerta</h5>
            <p>Tienes <strong>{vencidas}</strong> suscripciones vencidas.</p>
        </div>
    );
}

export default AlertaSuscripciones;
