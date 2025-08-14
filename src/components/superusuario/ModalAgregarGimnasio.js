import { Modal, Button, Form } from "react-bootstrap";
import { registerGimnasio } from "../../api/auth";

function ModalAgregarGimnasio({ show, handleClose, onGimnasioAgregado }) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const correo = e.target.email.value;
        const telefono = e.target.telefono.value;
        const password = e.target.password.value;

        const nuevoGimnasio = { nombre, correo, telefono, password };

        try {
            const data = await registerGimnasio(nuevoGimnasio);
            alert(data.message || "Gimnasio registrado correctamente ✅");

            if (onGimnasioAgregado) onGimnasioAgregado(); // recargar lista si aplica
            handleClose();
        } catch (error) {
            alert(error.message || "Hubo un error al registrar el gimnasio");
            console.error("Error al registrar gimnasio:", error);
        }
    };

    

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Agregar Gimnasio</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre del Gimnasio</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            placeholder="Ej. Gimnasio Elite"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="contacto@gimnasio.com"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="tel"
                            name="telefono"
                            placeholder="55 1234 5678"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <Button variant="secondary" onClick={handleClose} className="me-2">
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Guardar Gimnasio
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAgregarGimnasio;
