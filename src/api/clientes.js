import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

// Obtener token siempre de localStorage
const getToken = () => localStorage.getItem("token");

// Consultar clientes
export async function fetchClientesApi() {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/clientes/conClientes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los clientes");
    }

    return await response.json();
}

// Registrar nuevo cliente
export const registrarCliente = async (cliente) => {
    const token = getToken();
    const response = await axios.post(`${API_BASE_URL}/api/clientes/regisCliente`, cliente, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Eliminar cliente
export const eliminarCliente = async (id, setClientes) => {
    try {
        const token = getToken();
        await axios.delete(`${API_BASE_URL}/api/clientes/eliminar/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
        console.error("Error al eliminar cliente:", error);
    }
};

// Editar cliente
export const actualizarCliente = async (id, datos) => {
    const token = getToken();
    await axios.put(`${API_BASE_URL}/api/clientes/actualizar/${id}`, datos, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
