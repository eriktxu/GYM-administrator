import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { actualizarCliente } from "../../api/clientes";

function ModalEditarCliente({ show, handleClose, cliente, onClienteActualizado }) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    useEffect(() => {
        if (cliente) {
            setNombre(cliente.nombre || "");
            setCorreo(cliente.correo || "");
            setTelefono(cliente.telefono || "");
        }
    }, [cliente]);

    const handleActualizar = async () => {
        if (!nombre || !correo || !telefono) {
            alert("Por favor completa todos los campos");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await actualizarCliente(cliente.id, { nombre, correo, telefono }, token);

            alert("Cliente actualizado correctamente ✅");
            if (onClienteActualizado) onClienteActualizado(); // actualiza la lista
            handleClose();
        } catch (error) {
            console.error("Error al actualizar cliente:", error);
            alert("Hubo un error al actualizar el cliente");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Editar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej. Charles Leclerc"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCorreo">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ej. charles@email.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej. 55 1234 5678"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleActualizar}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalEditarCliente;
