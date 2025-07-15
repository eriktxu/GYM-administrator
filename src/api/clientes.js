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
