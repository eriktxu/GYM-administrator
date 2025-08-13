const API_BASE_URL = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem("token");

// Obtener todos los gimnasios
export async function fetchGimnasiosApi() {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/api/superadmin/gimnasios`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los gimnasios");
    }

    return await response.json();
}
