import React from "react";
import { Modal, Button, Form } from "react-bootstrap";


function ModalAgregarCliente({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Agregar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Ej. Charles Leclerc" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCorreo">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ej. carrilloflores@email.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="Ej. 55 1234 5678" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTipo">
                        <Form.Label>Tipo de suscripción</Form.Label>
                        <Form.Select>
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
                <Button variant="primary">
                    Guardar Cliente
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAgregarCliente;