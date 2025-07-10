// src/components/Suscripciones.js
import React from "react";

function Suscripciones() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title mb-0">Administrar Suscripciones</h3>
                    <button className="btn btn-success">Nueva Suscripción</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Fecha de inicio</th>
                                <th>Vencimiento</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>Mensual</td>
                                <td>01/06/2025</td>
                                <td>30/06/2025</td>
                                <td><span className="badge bg-success">Activa</span></td>
                            </tr>
                            <tr>
                                <td>Ana López</td>
                                <td>Anual</td>
                                <td>01/01/2025</td>
                                <td>31/12/2025</td>
                                <td><span className="badge bg-success">Activa</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Suscripciones;
