//consultar suscripciones
export async function fetchSuscripcionesApi(token) {
    const response = await fetch("http://localhost:3307/api/clientes/conSuscripciones", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los clientes");
    }

    return await response.json();
}