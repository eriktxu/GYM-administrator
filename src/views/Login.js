import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";
import "../styles/auth/estilos-login.css";
import { useAuth } from '../api/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { loginUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        try {
            const data = await login(correo, password);

            if (!data.usuario) throw new Error("Respuesta inválida del servidor.");

            loginUser(data.usuario, data.token);

            alert("Bienvenido, " + data.usuario.nombre);

            // Redirigir según rol
            switch (data.usuario.rol) {
                case 1: navigate("/cliente"); break;
                case 2: navigate("/gimnasio"); break;
                case 3: navigate("/superadmin"); break;
                default: navigate("/unauthorized");
            }
        } catch (error) {
            alert(error.message || "Error de conexión con el servidor.");
        }
    };

    return (
        <div className="authentication authpage">
            <div className="login-app-wrapper">
                <div className="auth-login boxed-auth-wrap row">
                    <h2 className="text-center mb-4">Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-medium mt-3">
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
                            <label htmlFor="password" className="form-label fw-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                className="form-control"
                                required
                            />
                        </div>

                        <button type="submit" className="mt-3 btn btn-primary w-100 rounded-pill">
                            Entrar
                        </button>

                        <div className="mt-3 mb-3 text-center">
                            <h6 className="text-subtitle-1 text-grey100 mt-3" style={{ display: 'inline-block' }}>
                                ¿Eres nuevo?
                                <Link
                                    to="/registro"
                                    className="btn-link text-primary text-body-1 font-weight-medium opacity-1 ps-2"
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                >
                                    Crea una cuenta
                                </Link>
                            </h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
