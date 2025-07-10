// src/components/Clientes.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalAgregarCliente from "./ModalAgregarCliente";

function Clientes() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <div className="card mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="card-title mb-0">Administrar clientes</h3>
                    <Button variant="succes" onClick={() => setShowModal(true)}>
                        Agregar Cliente
                    </Button>
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

        {/* Modal Formulario */}
        <ModalAgregarCliente show={showModal} handleClose={() => setShowModal(false)}/>
        </>
    );
}

export default Clientes;
