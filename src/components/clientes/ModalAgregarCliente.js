import { Modal, Button, Form } from "react-bootstrap";
import { registrarCliente } from "../../api/clientes";

function ModalAgregarCliente({ show, handleClose, onClienteAgregado }) {
    // ¡YA NO NECESITAMOS useState para cada campo!

    const handleGuardar = async (e) => {
        // Prevenimos el comportamiento por defecto del formulario
        e.preventDefault();

        // 1. Creamos un objeto FormData a partir del evento del formulario
        const formData = new FormData(e.target);

        // 2. Convertimos FormData a un objeto JavaScript normal
        const nuevoCliente = Object.fromEntries(formData.entries());

        // 3. Pequeña transformación para la suscripción
        nuevoCliente.tipo_suscripcion = nuevoCliente.tipo_suscripcion.toLowerCase();
        
        console.log("Datos que se van a enviar al backend:", nuevoCliente);

        // 4. Validación (igual que antes)
        if (!nuevoCliente.nombre || !nuevoCliente.correo || !nuevoCliente.telefono || !nuevoCliente.password || nuevoCliente.password.length < 6) {
            alert("Por favor, completa todos los campos. La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            await registrarCliente(nuevoCliente);

            alert("Cliente guardado correctamente ✅ ");
            handleClose();
            if (onClienteAgregado) onClienteAgregado(); // Esto actualiza la lista sin recargar la página

        } catch (error) {
            console.error("Error al registrar cliente:", error);
            const mensajeError = error.response?.data?.error || "Hubo un error al registrar el cliente";
            alert(mensajeError);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Agregar Cliente</Modal.Title>
            </Modal.Header>
            {/* El onSubmit ahora es el único responsable de la lógica */}
            <Form onSubmit={handleGuardar}>
                <Modal.Body className="p-5">
                    {/* Asegúrate de que cada control tenga un 'name' */}
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" name="nombre" placeholder="Ej. Charles Leclerc" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCorreo">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" name="correo" placeholder="Ej. charles@email.com" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Mínimo 6 caracteres" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" name="telefono" placeholder="Ej. 55 1234 5678" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTipo">
                        <Form.Label>Tipo de suscripción</Form.Label>
                        <Form.Select name="tipo_suscripcion" defaultValue="Mensual">
                            <option>Mensual</option>
                            <option>Trimestral</option>
                            <option>Semestral</option>
                            <option>Anual</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" type="submit">Guardar Cliente</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ModalAgregarCliente;