import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { registrarCliente } from "../../api/clientes";


function ModalAgregarCliente({ show, handleClose, onClienteAgregado }) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tipoSuscripcion, setTipoSuscripcion] = useState("Mensual");
    const [password, setPassword] = useState("");

const handleGuardar = async (e) => {
        // MUY IMPORTANTE: previene el refresco de página
        e.preventDefault(); 
        
        // El resto de tu lógica se queda exactamente igual
        if (!nombre || !correo || !telefono || !tipoSuscripcion || !password || password.length < 6) {
            alert("Por favor, completa todos los campos. La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        try {
            const datosAEnviar = { /* ...tus datos... */ };
            await registrarCliente(datosAEnviar);
            alert("Cliente guardado correctamente ✅ ");
            handleClose();
            // ... etc ...
        } catch (error) {
            console.error("Error al registrar cliente:", error);
            alert("Hubo un error al registrar el cliente");
        }


    try {
        // 2. Añade la contraseña al objeto que se envía
        await registrarCliente({
            nombre,
            correo,
            telefono,
            password, // <-- AÑADIR ESTA LÍNEA
            tipo_suscripcion: tipoSuscripcion.toLowerCase()
        });

        alert("Cliente guardado correctamente ✅ ");
        window.location.reload();

        if (onClienteAgregado) onClienteAgregado();
        handleClose();

        // 3. Limpia también el estado de la contraseña
        setNombre("");
        setCorreo("");
        setTelefono("");
        setTipoSuscripcion("Mensual");
        setPassword(""); // <-- AÑADIR ESTA LÍNEA
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
                <Form onSubmit={handleGuardar} id="form-agregar-cliente">
                    {/* ... (todos tus Form.Group van aquí dentro como los tenías) ... */}
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
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

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Crea una contraseña segura"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
<Button variant="primary" type="submit" form="form-agregar-cliente">
                    Guardar Cliente
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAgregarCliente;