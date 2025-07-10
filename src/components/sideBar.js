import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
                <NavLink to="/administracion" end className="nav-link text-white" activeclassname="active">Inicio</NavLink>
                <NavLink to="/administracion/clientes" className="nav-link text-white" activeclassname="active">Clientes</NavLink>
                <NavLink to="/administracion/suscripciones" className="nav-link text-white" activeclassname="active">Suscripciones</NavLink>
                <NavLink to="/administracion/perfil" className="nav-link text-white" activeclassname="active">Perfil</NavLink>
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
