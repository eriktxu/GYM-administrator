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

export const renovarSuscripcion = async (id, tipo_suscripcion, token) => {
    const response = await fetch(`http://localhost:3307/api/clientes/renovar/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ tipo_suscripcion })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al renovar suscripción");
    }

    return await response.json();
};