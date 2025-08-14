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

export async function registerGimnasio(nuevoGimnasio) {
  try {
    const token = localStorage.getItem("token"); // obtener token
    const response = await fetch(`${API_BASE_URL}/api/superadmin/registerGimnasio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // agregar token
      },
      body: JSON.stringify(nuevoGimnasio),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Error en registro");
    return data;
  } catch (error) {
    throw error;
  }
}