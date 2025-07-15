import { useState, useEffect } from "react";
import axios from "axios";

export function useClientes() {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3307/api/clientes/conClientes")
            .then((response) => {
                setClientes(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener clientes:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { clientes, loading, error };
}
