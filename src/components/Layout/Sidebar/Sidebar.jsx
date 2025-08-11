import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Dumbbell,
} from "lucide-react";
import '../../../styles/layout/sidebar.css';


function Sidebar({ isOpen }) {
    const location = useLocation();

    const navItems = [
        { label: "Dashboard", icon: <LayoutDashboard size={20} />, to: "/gimnasio" },
        { label: "Clientes", icon: <Users size={20} />, to: "/gimnasio/clientes" },
        { label: "Suscripciones", icon: <CreditCard size={20} />, to: "/gimnasio/suscripciones" },
        // Añade aquí más rutas si las tienes
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
