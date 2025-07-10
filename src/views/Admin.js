import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/admin.css";
import Sidebar from "../components/sideBar";


function Admin() {
    return (
        <div className="admin-container flex-grow-1 overflow-auto">
            {/* Barra lateral */}
            <div className="d-flex min-vh-100">
                <Sidebar />
                <div className="main-content">
                    <div className="main-content">
                        {/* Sub Rutas */}
                        <Outlet />         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;