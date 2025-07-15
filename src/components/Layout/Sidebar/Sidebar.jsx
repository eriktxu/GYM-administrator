import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User } from "lucide-react";
import '../../../styles/layout/sidebar.css';

function Sidebar({ isOpen }) {
    const location = useLocation();

    const navItems = [
        { label: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/administracion" },
        { label: "Clientes", icon: <User size={20} />, to: "/administracion/clientes" },
        { label: "Suscripciones", icon: <User size={20} />, to: "/administracion/suscripciones" },
        { label: "Perfil", icon: <User size={20} />, to: "/administracion/perfil" },
        
    ];

    return (
        <aside className={`sidebar ${isOpen ? "" : "closed"}`}>
            <div className="sidebar-header">
                <h3 className="logo">GYM</h3>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.to}
                                className={`sidebar-link ${
                                    location.pathname === item.to ? "active" : ""
                                }`}
                            >
                                <span className="icon">{item.icon}</span>
                                <span className="label">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
