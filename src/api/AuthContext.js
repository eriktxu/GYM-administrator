import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const nombre = localStorage.getItem("nombre");
      const rol_id = localStorage.getItem("rol_id"); // <-- La clave está aquí
      const gimnasio_id = localStorage.getItem("gimnasio_id");

      if (token && rol_id) { // <-- Verificamos con rol_id
        setUser({ 
            token, 
            nombre, 
            // ¡CORRECCIÓN! Usamos rol_id para crear la propiedad numérica 'rol'
            rol: parseInt(rol_id, 10), 
            rol_id, // Mantenemos rol_id por si lo necesitas
            gimnasio_id 
        });
      }
    } catch (error) {
        console.error("Error al cargar datos de sesión", error);
        setUser(null);
    } finally {
        setLoading(false);
    }
  }, []);

  const loginUser = (usuario, token) => {
    // ¡CORRECCIÓN! El rol numérico viene de 'usuario.rol_id'
    const rolNumerico = parseInt(usuario.rol_id, 10);
    
    const userData = { 
        ...usuario, 
        token,
        rol: rolNumerico // Asignamos el número a la propiedad 'rol'
    };
    
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("nombre", usuario.nombre);
    // Guardamos ambos por consistencia, pero la lógica usa rol_id
    localStorage.setItem("rol", usuario.rol); // ej. "admin"
    localStorage.setItem("rol_id", usuario.rol_id); // ej. "2"
    localStorage.setItem("gimnasio_id", usuario.gimnasio_id || "");
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
  };
  
  const value = { user, loading, loginUser, logoutUser };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}