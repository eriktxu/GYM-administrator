import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ModalAgregarGimnasio from "./ModalAgregarGimnasio";
import ModalEditarGimnasio from "./ModalEditarGimnasio";
import "../../styles/components/clientes.css";
import { fetchGimnasiosApi } from "../../api/superusuario"; 

function Gimnasios() {
    const [gimnasios, setGimnasios] = useState([]);
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [gimnasioAEditar, setGimnasioAEditar] = useState(null);

    const cargarGimnasios = () => {
        const token = localStorage.getItem("token");
        fetchGimnasiosApi(token)
            .then(setGimnasios)
            .catch((error) => {
                console.error("Error al obtener los gimnasios:", error);
            });
    };

    useEffect(() => {
        cargarGimnasios();
    }, []);

    return (
        <>
            <div className="card mb-4">
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3">
                        <h3 className="card-title mb-0">Administrar gimnasios</h3>
                        <Button variant="success" onClick={() => setShowModalAgregar(true)}>
                            Agregar Gimnasio
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
                                {gimnasios.map((gimnasio) => (
                                    <tr key={gimnasio.id} className="month-item">
                                        <td className="text-nowrap">{gimnasio.nombre}</td>
                                        <td className="text-truncate">{gimnasio.correo}</td>
                                        <td className="text-nowrap">{gimnasio.telefono}</td>
                                        <td>
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                className="me-2"
                                                onClick={() => {
                                                    setGimnasioAEditar(gimnasio);
                                                    setShowModalEditar(true);
                                                }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                variant="outline-danger"
                                                size="sm"
                                                onClick={() => {
                                                    if (window.confirm(`¿Estás seguro de eliminar a ${gimnasio.nombre}?`)) {
                                                        // eliminarGimnasio(gimnasio.id, setGimnasios);
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

            {/* Modal para agregar gimnasio */}
            <ModalAgregarGimnasio
                show={showModalAgregar}
                handleClose={() => setShowModalAgregar(false)}
                onGimnasioAgregado={cargarGimnasios}
            />

            {/* Modal para editar gimnasio */}
            {/* <ModalEditarGimnasio
                show={showModalEditar}
                handleClose={() => setShowModalEditar(false)}
                gimnasio={gimnasioAEditar}
                onGimnasioActualizado={cargarGimnasios}
            /> */}
        </>
    );
}

export default Gimnasios;
