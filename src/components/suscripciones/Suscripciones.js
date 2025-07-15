import React, { useEffect, useState } from "react";
import '../../styles/components/clientes.css';
import { fetchSuscripcionesApi } from "../../api/suscripciones";

function Suscripciones() {
    const [suscripciones, setSuscripciones] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchSuscripcionesApi(token)
            .then(setSuscripciones)
            .catch((error) => {
                console.error("Error al obtener las suscripciones:", error);
            });
    }, []);

    return (
        <div className="card mb-4">
            <div className="card-body p-0">
                <div className="d-flex justify-content-between align-items-center mb-3 p-3">
                    <h3 className="card-title mb-0">Administrar Suscripciones</h3>
                    <button className="btn btn-success">Nueva Suscripción</button>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover clientes-table mb-0">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Fecha de inicio</th>
                                <th>Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suscripciones.map((suscripcion, index) => (
                                <tr key={index} className="month-item">
                                    <td>{suscripcion.nombre_cliente}</td>
                                    <td>{suscripcion.tipo}</td>
                                    <td>{new Date(suscripcion.fecha_inicio).toLocaleDateString()}</td>
                                    <td>{new Date(suscripcion.fecha_vencimiento).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`badge bg-${suscripcion.estado === "Activa" ? "success" : "danger"}`}>
                                            {suscripcion.estado}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Suscripciones;
