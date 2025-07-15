// Autentucacion de Login

export async function loginEntrenador(correo, password) {
  try {
    const response = await fetch("http://localhost:3307/api/entrenador/loginEntrenador", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Error en login");
    return data;
  } catch (error) {
    throw error;
  }
}

// Resitrar nuevo usuario

export async function registerEntrenador(nuevoCliente) {
  try {
    const response = await fetch("http://localhost:3307/api/entrenador/registerEntrenador", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoCliente),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Error en registro");
    return data;
  } catch (error) {
    throw error;
  }
}
