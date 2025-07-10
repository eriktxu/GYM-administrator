import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/estilos-login.css"

function Login () {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const correo = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:3307/api/entrenador/loginEntrenador", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ correo, password }),
            });

            const data = await response.json();

            if (response.ok) {
                //Guarda el token y redirige
                localStorage.setItem("token", data.token);
                localStorage.setItem("trainerName", data.trainer.nombre);
                alert("Bienvenido, " + data.trainer.nombre);
                navigate("/administracion");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error de conexión con el servidor.");
        }
    };


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