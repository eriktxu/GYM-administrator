import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("trainerName"); // opcional si lo estás usando
        navigate("/"); // Redirige al login
    };

    return (
        <div className="sidebar bg-dark text-white flex-shrink-0">
            <h2 className="text-center py-3">Gimnasio</h2>
            <nav className="nav flex-column px-2">
                <a href="/administracion" className="nav-link text-white">Dashboard</a>
                <a href="/clientes" className="nav-link text-white">Clientes</a>
                <a href="/suscripciones" className="nav-link text-white">Suscripciones</a>
                <a href="/reportes" className="nav-link text-white">Reportes</a>
                <a href="/configuracion" className="nav-link text-white">Configuración</a>
                <button
                    onClick={handleLogout}
                    className="nav-link text-white bg-transparent border-0 text-start mt-2"
                    style={{ cursor: "pointer" }}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </div>
    );
}

export default Sidebar;
