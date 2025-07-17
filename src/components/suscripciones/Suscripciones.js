import React, { useEffect, useState } from "react";
import '../../styles/components/clientes.css';
import { fetchSuscripcionesApi, } from "../../api/suscripciones";
import ModalRenovar from "./ModalRenovar";

function Suscripciones() {
    const [suscripciones, setSuscripciones] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const clientesInactivos = suscripciones
        .filter((s) => s.estado_suscripcion === "Inactiva")
        .map((s) => ({ id: s.cliente_id, nombre: s.nombre_cliente }));

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
                    <button className="btn btn-success" onClick={() => setShowModal(true)}>
                        Renovar suscripción
                    </button>
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
                                <tr key={index}>
                                    <td>{suscripcion.nombre_cliente}</td>
                                    <td>{suscripcion.tipo_suscripcion}</td>
                                    <td>{new Date(suscripcion.inicio_suscripcion).toLocaleDateString()}</td>
                                    <td>{new Date(suscripcion.vencimiento_suscripcion).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`badge bg-${suscripcion.estado_suscripcion === "Activa" ? "success" : "danger"}`}>
                                            {suscripcion.estado_suscripcion}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ModalRenovar
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    clientesInactivos={clientesInactivos}
                    onRenovado={() => {
                        // vuelve a cargar las suscripciones
                        const token = localStorage.getItem("token");
                        fetchSuscripcionesApi(token)
                            .then(setSuscripciones)
                            .catch((error) => console.error("Error al actualizar lista:", error));
                        setShowModal(false);
                    }}
                />
            </div>
        </div>
    );
}

export default Suscripciones;
