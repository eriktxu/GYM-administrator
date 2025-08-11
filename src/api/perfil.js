import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem("token");

// Hook para consultar clientes registrados
export function useClientes() {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = getToken();

        if (!token) {
            setError(new Error("No hay token de autenticación"));
            setLoading(false);
            return;
        }

        axios.get(`${API_BASE_URL}/api/clientes/conClientes`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            setClientes(response.data);
        })
        .catch((err) => {
            console.error("Error al obtener clientes:", err);
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return { clientes, loading, error };
}
