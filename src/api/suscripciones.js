const API_BASE_URL = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem("token");

// Consultar suscripciones
export async function fetchSuscripcionesApi() {
    const token = getToken();
    if (!token) {
        throw new Error("No hay token de autenticación");
    }

    const response = await fetch(`${API_BASE_URL}/api/clientes/conSuscripciones`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener las suscripciones");
    }

    return await response.json();
}

// Renovar suscripción
export const renovarSuscripcion = async (id, tipo_suscripcion) => {
    const token = getToken();
    if (!token) {
        throw new Error("No hay token de autenticación");
    }

    const response = await fetch(`${API_BASE_URL}/api/clientes/renovar/${id}`, {
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
