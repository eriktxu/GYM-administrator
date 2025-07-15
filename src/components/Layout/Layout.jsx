import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import '../../styles/layout/layout.css'

function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="layout-container d-flex">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="main-content flex-grow-1">
                <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                <div className="layout-body-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;