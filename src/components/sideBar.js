import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css';

function Sidebar() {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLogoutConfirm = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("trainerName");
        navigate("/");
    };

    return (<>
        <div className="sidebar bg-dark text-white flex-shrink-0">
            <h2 className="text-center py-3">Gimnasio</h2>
            <nav className="nav flex-column px-2">
                <NavLink to="/administracion" end className="nav-link text-white" activeclassname="active">Inicio</NavLink>
                <NavLink to="/administracion/clientes" className="nav-link text-white" activeclassname="active">Clientes</NavLink>
                <NavLink to="/administracion/suscripciones" className="nav-link text-white" activeclassname="active">Suscripciones</NavLink>
                <NavLink to="/administracion/perfil" className="nav-link text-white" activeclassname="active">Perfil</NavLink>
                <button
                    onClick={() => setShowModal(true)}
                    className="nav-link text-white bg-transparent border-0 text-start mt-2"
                    style={{ cursor: "pointer" }}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </div>

        {showModal && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h4>¿Seguro que deseas cerrar sesión?</h4>
                    <div className="modal-buttons">
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                        <button className="btn btn-danger" onClick={handleLogoutConfirm}>Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        )}
    </>
    );
}

export default Sidebar;
