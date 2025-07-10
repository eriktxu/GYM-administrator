// src/components/Clientes.js
import React, { useState, useEffect, } from "react";
import { Button } from "react-bootstrap";
import ModalAgregarCliente from "./ModalAgregarCliente";

function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchClientes = async () => {
            try {
                const response = await fetch("http://localhost:3307/api/clientes/conClientes", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error("Error al obtener los clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <>
            <div className="card mb-4">
                <div className="card-body p-0"> {/* Añadido p-0 para eliminar padding interno */}
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3"> {/* Añadido p-3 para padding */}
                        <h3 className="card-title mb-0">Administrar clientes</h3>
                        <Button variant="success" onClick={() => setShowModal(true)}>
                            Agregar Cliente
                        </Button>
                    </div>

                    <div className="table-responsive" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
                        <table className="table table-striped table-hover mb-0"> {/* Añadido mb-0 */}
                            <thead className="table-dark position-sticky top-0"> {/* Hacemos el thead sticky */}
                                <tr>
                                    <th style={{ minWidth: "150px" }}>Nombre</th>
                                    <th style={{ minWidth: "200px" }}>Correo</th>
                                    <th style={{ minWidth: "120px" }}>Teléfono</th>
                                    <th style={{ minWidth: "150px" }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cliente) => (
                                    <tr key={cliente.id}>
                                        <td className="text-nowrap">{cliente.nombre}</td> {/* Evita salto de línea */}
                                        <td className="text-truncate" style={{ maxWidth: "200px" }}>{cliente.correo}</td> {/* Corta texto largo */}
                                        <td className="text-nowrap">{cliente.telefono}</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-2">Editar</Button>
                                            <Button variant="outline-danger" size="sm">Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal Formulario */}
            <ModalAgregarCliente show={showModal} handleClose={() => setShowModal(false)} />
        </>
    );
}

export default Clientes;

