import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { renovarSuscripcion } from "../../api/suscripciones";

function ModalRenovarSuscripcion({ show, onHide, clientes, onRenovado }) {
    const [clienteId, setClienteId] = useState("");
    const [tipoSuscripcion, setTipoSuscripcion] = useState("");

    // misma lógica que en Suscripciones.jsx
    const obtenerEstado = (fechaVencimiento) => {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        const vencimiento = new Date(fechaVencimiento);
        vencimiento.setHours(0, 0, 0, 0);

        return vencimiento < hoy ? "Inactivo" : "Activo";
    };

    // Filtrar aquí a los inactivos usando la función
    const clientesInactivos = clientes
        .filter((s) => obtenerEstado(s.vencimiento_suscripcion) === "Inactivo")
        .map((s) => ({ id: s.cliente_id, nombre: s.nombre_cliente }));

    const handleRenovar = async () => {
        if (!clienteId || !tipoSuscripcion) {
            alert("Por favor selecciona un cliente y un tipo de suscripción");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await renovarSuscripcion(clienteId, tipoSuscripcion, token);
            alert("Suscripción renovada correctamente ✅");

            if (onRenovado) onRenovado();
            onHide();
        } catch (error) {
            console.error("Error al renovar:", error);
            alert("Hubo un error al renovar la suscripción");
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Renovar Suscripción</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Cliente</Form.Label>
                        <Form.Select value={clienteId} onChange={(e) => setClienteId(e.target.value)}>
                            <option value="">Seleccione un cliente</option>
                            {clientesInactivos.map((cliente, index) => (
                                <option key={cliente.id || index} value={cliente.id}>
                                    {cliente.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tipo de Suscripción</Form.Label>
                        <Form.Select value={tipoSuscripcion} onChange={(e) => setTipoSuscripcion(e.target.value)}>
                            <option value="">Seleccione tipo</option>
                            <option value="Mensual">Mensual</option>
                            <option value="Trimestral">Trimestral</option>
                            <option value="Semestral">Semestral</option>
                            <option value="Anual">Anual</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={handleRenovar}>Renovar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalRenovarSuscripcion;
