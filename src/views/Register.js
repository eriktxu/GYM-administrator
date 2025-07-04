import React from "react";
import "../styles/estilos-login.css"
import { Link } from "react-router-dom";
import { contieneSQLInyeccion } from "../test/validaciones";

function Register () {

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("password").value;

        // Validar contra inyección SQL
        if ([nombre, email, telefono, password].some(contieneSQLInyeccion)) {
            alert("Uno de los campos contiene caracteres no permitidos.");
            return;
        }

        console.log("Datos válidos, se puede registrar");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" placeholder="Sergio Pérez" required></input>

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder="correo@ejemplo.com" required></input>

                    <label htmlFor="telefono">Telefono</label>
                    <input type="tel" id="telefono" placeholder="55 1234 5678" required></input>

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="crea una contraseña" required></input>

                    <button className="btn" type="submit">Registrarse</button>
                    <p className="switch">¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link> </p>
                </form>
            </div>
        </div>
    );
}

export default Register;