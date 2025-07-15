import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { registrarCliente } from "../../api/clientes";


function ModalAgregarCliente({ show, handleClose, onClienteAgregado }) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tipoSuscripcion, setTipoSuscripcion] = useState("Mensual");

    const handleGuardar = async () => {
        if (!nombre || !correo || !telefono || !tipoSuscripcion) {
            alert("Por favor completa todos los campos");
            return;
        }

        try {
            await registrarCliente({
                nombre,
                correo,
                telefono,
                tipo_suscripcion: tipoSuscripcion.toLowerCase()
            });

            alert("Cliente guardado correctamente ✅ ");
            window.location.reload();

            if (onClienteAgregado) onClienteAgregado(); // Para recargar la lista si aplicara
            handleClose();

            // Limpiar formulario
            setNombre("");
            setCorreo("");
            setTelefono("");
            setTipoSuscripcion("Mensual");
        } catch (error) {
            console.error("Error al registrar cliente:", error);
            alert("Hubo un error al registrar el cliente");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Agregar Cliente</Modal.Title>
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

                    <Form.Group className="mb-3" controlId="formTipo">
                        <Form.Label>Tipo de suscripción</Form.Label>
                        <Form.Select
                            value={tipoSuscripcion}
                            onChange={(e) => setTipoSuscripcion(e.target.value)}
                        >
                            <option>Mensual</option>
                            <option>Trimestral</option>
                            <option>Semestral</option>
                            <option>Anual</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleGuardar}>
                    Guardar Cliente
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAgregarCliente;