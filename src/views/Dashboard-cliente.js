import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

// PASO 1: Importar TODOS los componentes que vas a usar
import ResumenCliente from '../components/dashboard/ResumenCliente'; 
import GraficaProgreso from '../components/dashboard/Progreso'; // Asegúrate que el nombre del archivo coincida

function DashboardCliente() {
    const [perfil, setPerfil] = useState(null);
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(true);
    // PASO 2: Se elimina la constante 'token' de aquí porque no se usa.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const headers = { Authorization: `Bearer ${token}` };

                const perfilPromise = axios.get(`${API_BASE_URL}/api/clientes/getEstadoActual`, { headers }); // Usando el endpoint que creamos
                const historialPromise = axios.get(`${API_BASE_URL}/api/clientes/getProgresoCliente`, { headers }); // Usando el endpoint que creamos

                const [perfilRes, historialRes] = await Promise.all([perfilPromise, historialPromise]);

                setPerfil(perfilRes.data);
                setHistorial(historialRes.data);

            } catch (error) {
                console.error("Error al cargar los datos del dashboard:", error);
            } finally {
                setLoading(false);
            }
        };

        // La lógica para llamar a fetchData ya estaba bien
        const token = localStorage.getItem("token");
        if (token) {
            fetchData();
        } else {
            setLoading(false); 
        }
    }, []);

    if (loading) {
        return <p>Cargando tu dashboard...</p>;
    }

    // PASO 3: El 'return' con el JSX debe estar DENTRO de la función
    return (
        <div className="dashboard-container">
            {/* El componente de resumen ahora recibe el perfil */}
            <ResumenCliente perfil={perfil} />

            <div className="dashboard-grid">
                <div className="dashboard-card-large">
                    {/* La gráfica recibe el historial */}
                    <GraficaProgreso historial={historial} />
                </div>
            </div>
        </div>
    );
}

// PASO 3 (cont.): El 'export' también debe estar fuera, pero después de la definición de la función.
export default DashboardCliente;