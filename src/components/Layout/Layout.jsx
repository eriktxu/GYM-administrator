// En Layout.jsx
import React, { useState } from "react"; // <-- 1. Importa useState
import SidebarCliente from './Sidebar/SidebarCliente';
import SidebarGimnasio from './Sidebar/Sidebar';
import SidebarSuperadmin from './Sidebar/SidebarSuperadmin';
import Navbar from "./Navbar/Navbar";
import { useAuth } from "../../api/AuthContext";

function Layout({ children }) {
  const { user } = useAuth();
  
  // --- 2. Añadimos un estado para controlar el sidebar ---
  // Lo iniciamos en 'true' para que aparezca abierto por defecto.
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // --- 3. (Opcional pero recomendado) Función para el botón del menú ---
  // Esta función cambiará el estado de abierto a cerrado y viceversa.
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSidebar = () => {
    switch (user?.rol) {
      // --- 4. Pasamos el estado como la prop 'isOpen' a cada sidebar ---
      case 1: return <SidebarCliente isOpen={isSidebarOpen} />;
      case 2: return <SidebarGimnasio isOpen={isSidebarOpen} />;
      case 3: return <SidebarSuperadmin isOpen={isSidebarOpen} />;
      default: return null;
    }
  };

  return (
    <div className="layout-container">
      {/* 5. Le pasamos la función de 'toggle' al Navbar para que el botón funcione */}
      <Navbar onMenuClick={toggleSidebar} />
      {renderSidebar()}
      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;