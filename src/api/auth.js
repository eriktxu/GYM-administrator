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

export async function registerGimnasio(gimnasioData) {
  try {
    // Petición a la URL del backend SIN enviar el token de autorización
    const response = await fetch(`${API_BASE_URL}/api/superadmin/registerGimnasio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // La cabecera "Authorization" ha sido eliminada
      },
      body: JSON.stringify(gimnasioData),
    });

    // Manejamos la respuesta del servidor
    const data = await response.json();
    if (!response.ok) {
      // Si el servidor responde con un error (ej: 409 por correo duplicado), lo mostramos
      throw new Error(data.message || "Error en el registro del gimnasio");
    }

    return data;
  } catch (error) {
    // Relanzamos el error para que el componente React lo pueda atrapar y mostrar en la UI
    throw error;
  }
}
