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
      setPlanIA(response.data);


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
                
                <div className="d-flex gap-3 mb-4">
                    <button onClick={generarPDFOriginal} className="btn btn-secondary" disabled={loading}>
                        {loading ? 'Generando...' : '📄 Plan Estándar (PDF)'}
                    </button>
                    <button onClick={generarPlanConIA} className="btn btn-danger" disabled={loading}>
                        {loading ? 'Generando...' : '✨ Plan con IA (Nuevo)'}
                    </button>
                </div>

                {loading && <p className="text-info">Generando tu plan semanal, esto puede tardar un momento...</p>}
                {error && <p className="text-danger">{error}</p>}
                
                {planIA && (
                    <>
                        {/* Mostramos la dieta semanal */}
                        {planIA.dieta && (
                            <div className="mt-4 p-4 border rounded bg-light">
                                <h3 className="text-2xl font-semibold mb-3">Tu Dieta Semanal Personalizada</h3>
                                {planIA.dieta.map((diaPlan, index) => (
                                    <div key={index} className="mb-4 p-3 border-bottom">
                                        <h4 className="text-xl font-bold">{diaPlan.dia}</h4>
                                        <div className="mt-2">
                                            <p><strong>Desayuno:</strong> {diaPlan.desayuno.platillo}</p>
                                            <p className="text-muted small">Ingredientes: {diaPlan.desayuno.ingredientes.join(', ')}</p>
                                        </div>
                                        <div className="mt-2">
                                            <p><strong>Almuerzo:</strong> {diaPlan.almuerzo.platillo}</p>
                                            <p className="text-muted small">Ingredientes: {diaPlan.almuerzo.ingredientes.join(', ')}</p>
                                        </div>
                                        <div className="mt-2">
                                            <p><strong>Cena:</strong> {diaPlan.cena.platillo}</p>
                                            <p className="text-muted small">Ingredientes: {diaPlan.cena.ingredientes.join(', ')}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Mostramos la rutina semanal */}
                        {planIA.rutina && (
                            <div className="mt-4 p-4 border rounded bg-light">
                                <h3 className="text-2xl font-semibold mb-3">Tu Rutina Semanal Personalizada</h3>
                                {planIA.rutina.map((diaRutina, index) => (
                                    <div key={index} className="mb-4 p-3 border-bottom">
                                        <h4 className="text-xl font-bold">{diaRutina.dia} - <span className="text-danger">{diaRutina.nombre_rutina}</span></h4>
                                        <p className="text-muted">Enfoque: {diaRutina.enfoque}</p>
                                        {diaRutina.ejercicios && diaRutina.ejercicios.length > 0 ? (
                                            <table className="table table-striped mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>Ejercicio</th>
                                                        <th>Series</th>
                                                        <th>Repeticiones</th>
                                                        <th>Descanso</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {diaRutina.ejercicios.map((ejercicio, ejIndex) => (
                                                        <tr key={ejIndex}>
                                                            <td>{ejercicio.nombre}</td>
                                                            <td>{ejercicio.series}</td>
                                                            <td>{ejercicio.repeticiones}</td>
                                                            <td>{ejercicio.descanso_seg} seg</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <p className="mt-2">Día de descanso.</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dieta;