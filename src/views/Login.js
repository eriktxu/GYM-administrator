import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/estilos-login.css"

function Login () {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/administracion");
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@ejemplo.com" required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Ingresa tu contraseña" required />

                    <button className="btn" type="submit">Entrar</button>
                    <p className="switch">
                        ¿No tienes cuenta? <Link to="/Registro">Registrate</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;