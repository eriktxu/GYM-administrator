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
    const response = await axios.post('http://localhost:3307/api/clientes/regisCliente', cliente);
    return response.data;
};