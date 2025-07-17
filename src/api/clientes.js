import axios from 'axios';

//Consultar clientes
export async function fetchClientesApi(token) {
    const response = await fetch("http://localhost:3307/api/clientes/conClientes", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los clientes");
    }

    return await response.json();
}

//registrar nuevo cliente
export const registrarCliente = async (cliente) => {
    const token = localStorage.getItem("token");
    const response = await axios.post('http://localhost:3307/api/clientes/regisCliente', cliente,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

//Eliminar cliente 
export const eliminarCliente = async (id, setClientes,) => {
    try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:3307/api/clientes/eliminar/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
        console.error("Error al eliminar cliente:", error);
    }
};

//Editar cliente
export const actualizarCliente = async (id, datos, token) => {
    await axios.put(`http://localhost:3307/api/clientes/actualizar/${id}`, datos, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

