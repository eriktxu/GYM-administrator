import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerEntrenador } from "../api/auth"; // crear esta función para registrar
import "../styles/auth/estilos-login.css";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const correo = e.target.email.value;
        const telefono = e.target.telefono.value;
        const password = e.target.password.value;

        const nuevoCliente = { nombre, correo, telefono, password };

        try {
            const data = await registerEntrenador(nuevoCliente);
            alert(data.message);
            navigate("/"); // redirige al login o a donde prefieras
        } catch (error) {
            alert(error.message || "Error en el servidor");
        }
    };

    return (
        <div className="authentication authpage">
            <div className="login-app-wrapper">
                <div className="auth-login boxed-auth-wrap row register-boxed-auth-wrap row">
                    <h2 className="text-center mb-4">Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label fw-medium">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-medium">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="correo@ejemplo.com"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label fw-medium">
                                Teléfono
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="55 1234 5678"
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Crea una contraseña"
                                className="form-control"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 rounded-pill"
                        >
                            Registrarse
                        </button>
                    </form>

                    <div className="mt-3 text-center">
                        <h6 className="text-subtitle-1 text-grey100">
                            ¿Ya tienes cuenta?{" "}
                            <Link
                                to="/Login"
                                className="btn-link text-primary text-body-1 font-weight-medium opacity-1 ps-2"
                                style={{ cursor: "pointer", textDecoration: "none" }}
                            >
                                Inicia sesión
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;