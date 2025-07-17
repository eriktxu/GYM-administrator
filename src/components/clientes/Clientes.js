import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ModalAgregarCliente from "./ModalAgregarCliente";
import ModalEditarCliente from "./ModalEditarCliente";
import "../../styles/components/clientes.css";
import { fetchClientesApi, eliminarCliente } from "../../api/clientes";

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [clienteAEditar, setClienteAEditar] = useState(null);

    const cargarClientes = () => {
        const token = localStorage.getItem("token");
        fetchClientesApi(token)
            .then(setClientes)
            .catch((error) => {
                console.error("Error al obtener los clientes:", error);
            });
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    return (
        <>
            <div className="card mb-4">
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3">
                        <h3 className="card-title mb-0">Administrar clientes</h3>
                        <Button variant="success" onClick={() => setShowModalAgregar(true)}>
                            Agregar Cliente
                        </Button>
                    </div>

                    <div className="table-responsive clientes-table-wrapper">
                        <table className="table clientes-table mb-0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cliente) => (
                                    <tr key={cliente.id} className="month-item">
                                        <td className="text-nowrap">{cliente.nombre}</td>
                                        <td className="text-truncate">{cliente.correo}</td>
                                        <td className="text-nowrap">{cliente.telefono}</td>
                                        <td>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                className="me-2"
                                                onClick={() => {
                                                    setClienteAEditar(cliente);
                                                    setShowModalEditar(true);
                                                }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => {
                                                    if (window.confirm(`¿Estás seguro de eliminar a ${cliente.nombre}?`)) {
                                                        eliminarCliente(cliente.id, setClientes);
                                                    }
                                                }}
                                            >
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal para agregar cliente */}
            <ModalAgregarCliente
                show={showModalAgregar}
                handleClose={() => setShowModalAgregar(false)}
                onClienteAgregado={cargarClientes}
            />

            {/* Modal para editar cliente */}
            <ModalEditarCliente
                show={showModalEditar}
                handleClose={() => setShowModalEditar(false)}
                cliente={clienteAEditar}
                onClienteActualizado={cargarClientes}
            />
        </>
    );
}

export default Clientes;
