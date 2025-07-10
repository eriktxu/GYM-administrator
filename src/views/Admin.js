import React from "react";
import "../styles/admin.css";
import Sidebar from "../components/sideBar";

function Admin() {
    return (
        <div className="admin-container flex-grow-1 overflow-auto">
            {/* Barra lateral */}
            <div className="d-flex min-vh-100">
                <Sidebar />
                <div className="main-content">
                    <div className="main-content">
                        {/* Sección Clientes */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="card-title mb-0">Administrar clientes</h3>
                                    <button className="btn btn-success">Agregar Cliente</button>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Correo</th>
                                                <th>Teléfono</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Juan Pérez</td>
                                                <td>juan@email.com</td>
                                                <td>55 1234 5678</td>
                                                <td><button className="btn btn-sm btn-primary">Editar</button></td>
                                            </tr>
                                            <tr>
                                                <td>Ana López</td>
                                                <td>ana@email.com</td>
                                                <td>55 9876 5432</td>
                                                <td><button className="btn btn-sm btn-primary">Editar</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Sección Suscripciones */}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;