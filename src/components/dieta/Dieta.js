import { useState } from 'react'; // Importamos useState
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { jwtDecode } from "jwt-decode";

const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id;
  } catch (error) {
    return null;
  }
};

function Dieta() {
  // 1. ESTADO DEL COMPONENTE
  //    Agregamos estados para manejar la carga, los errores y los datos de la dieta de la IA.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [planIA, setPlanIA] = useState(null); // Aquí guardaremos la dieta generada

  const token = localStorage.getItem("token");

  // Función para el botón original (ligeramente mejorada con loading/error)
  const generarPDFOriginal = async () => {
    const userId = getUserIdFromToken();
    if (!userId) return alert("No se pudo identificar al usuario.");
    
    setLoading(true);
    setError(null);
    setPlanIA(null);

    try {
      const response = await axios({
        url: `${API_BASE_URL}/api/clientes/generarPlan/${userId}`,
        method: 'GET',
        responseType: 'blob',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `plan-personalizado-${userId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(link.href); // Limpia la URL del objeto

    } catch (err) {
      console.error("Error al generar el PDF original:", err);
      setError("Ocurrió un error al generar el plan original.");
    } finally {
      setLoading(false);
    }
  };

  // 2. NUEVA FUNCIÓN PARA LLAMAR A LA API CON IA
  const generarPlanConIA = async () => {
    const userId = getUserIdFromToken();
    if (!userId) return alert("No se pudo identificar al usuario.");

    setLoading(true);
    setError(null);
    setPlanIA(null); // Limpiamos el plan anterior

    try {
      const response = await axios({
        // Llamamos al nuevo endpoint con el método POST
        url: `${API_BASE_URL}/api/clientes/generarPlanIA/${userId}`,
        method: 'POST', // ¡Importante! Usamos POST
        headers: { 'Authorization': `Bearer ${token}` }
        // No necesitamos 'responseType' porque esperamos JSON (es el default)
      });
      
      // Guardamos los datos de la dieta en el estado del componente
      setPlanIA(response.data.dieta);

    } catch (err) {
      console.error("Error al generar el plan con IA:", err);
      setError("Ocurrió un error al generar el plan con IA. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Generar Plan Personalizado
        </h2>
        
        {/* 3. BOTONES Y LÓGICA DE UI */}
        <div className="d-flex gap-3 mb-4">
          <button
            onClick={generarPDFOriginal}
            className="btn btn-secondary"
            disabled={loading} // Deshabilitamos el botón mientras carga
          >
            {loading ? 'Generando...' : '📄 Plan Estándar (PDF)'}
          </button>
          
          {/* Este es tu nuevo botón */}
          <button
            onClick={generarPlanConIA}
            className="btn btn-danger"
            disabled={loading}
          >
            {loading ? 'Generando...' : '✨ Plan con IA (Nuevo)'}
          </button>
        </div>

        {/* Mensajes de carga y error */}
        {loading && <p className="text-info">Generando tu plan, por favor espera...</p>}
        {error && <p className="text-danger">{error}</p>}
        
        {/* 4. MOSTRAR EL RESULTADO DE LA IA */}
        {/* Esta sección solo aparece si 'planIA' tiene datos */}
        {planIA && (
          <div className="mt-4 p-4 border rounded bg-light">
            <h3 className="text-2xl font-semibold mb-3">Tu Dieta Personalizada por IA</h3>
            
            <div className="mb-3">
              <h4 className="font-bold">Desayuno</h4>
              <p><strong>Platillo:</strong> {planIA.desayuno.platillo}</p>
              <p><strong>Ingredientes:</strong> {planIA.desayuno.ingredientes.join(', ')}</p>
            </div>

            <div className="mb-3">
              <h4 className="font-bold">Almuerzo</h4>
              <p><strong>Platillo:</strong> {planIA.almuerzo.platillo}</p>
              <p><strong>Ingredientes:</strong> {planIA.almuerzo.ingredientes.join(', ')}</p>
            </div>

            <div>
              <h4 className="font-bold">Cena</h4>
              <p><strong>Platillo:</strong> {planIA.cena.platillo}</p>
              <p><strong>Ingredientes:</strong> {planIA.cena.ingredientes.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dieta;