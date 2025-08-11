import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Dumbbell,
} from "lucide-react";
import '../../../styles/layout/layout.css';


function Sidebar({ isOpen }) {
    const location = useLocation();

    const navItems = [
        { label: "Mi Panel", icon: <LayoutDashboard size={20} />, to: "/cliente" },
        { label: "Mi Perfil", icon: <Settings size={20} />, to: "/cliente/perfil" },
        { label: "Mi Dieta", icon: <Dumbbell size={20} />, to: "/cliente/dieta" },
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
