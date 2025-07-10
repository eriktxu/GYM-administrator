import React from "react";
import "../styles/estilos-login.css"
import { Link } from "react-router-dom";

function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("password").value;

        const nuevoCliente = {
            nombre,
            correo,
            password,
            telefono 
        };

        try {
            const response = await fetch("http://localhost:3307/api/entrenador/registerEntrenador", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoCliente)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // Cliente registrado con éxito.
                // puedes redirigir a login, por ejemplo
            } else {
                alert(data.message); // muestra errores del servidor
            }
        } catch (error) {
            console.error("Error al enviar datos:", error);
            alert("Hubo un error de conexión.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" placeholder="Sergio Pérez" required />

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@ejemplo.com" required />

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" placeholder="55 1234 5678" required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Crea una contraseña" required />

                    <button className="btn" type="submit">Registrarse</button>
                    <p className="switch">¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
