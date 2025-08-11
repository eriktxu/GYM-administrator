import { API_BASE_URL } from '../config';

export async function login(correo, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/superadmin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Error en login");

    // Guardar el token en localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerEntrenador(nuevoCliente) {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("No hay token. Por favor inicia sesión.");

    const response = await fetch(`${API_BASE_URL}/api/entrenador/registerEntrenador`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Se envía el token
      },
      body: JSON.stringify(nuevoCliente),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Error en registro");
    return data;
  } catch (error) {
    throw error;
  }
}
