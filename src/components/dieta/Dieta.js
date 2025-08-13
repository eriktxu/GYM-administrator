import { useEffect, useState } from 'react';
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
  const token = localStorage.getItem("token");

  const generarPDF = () => {
    const userId = getUserIdFromToken();
    if (!userId) {
      return alert("No se pudo identificar al usuario. Por favor, inicia sesión de nuevo.");
    }

    const token = localStorage.getItem("token");

    axios({
      // 2. Usamos el ID del token para construir la URL.
      url: `${API_BASE_URL}/api/clientes/generarPlan/${userId}`,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        // 3. El nombre del archivo ahora es genérico o usa el ID.
        link.download = `plan-personalizado-${userId}.pdf`;
        link.click();
      })
      .catch(err => {
        console.error("Error al generar el PDF:", err);
        alert("Ocurrió un error al generar el plan. Revisa la consola.");
      });
  };

return (
  <div className="card mb-4">
    <div className="card-body p-0">
      <div className="d-flex justify-content-between align-items-center mb-3 p-3">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Generar rutina y dieta
        </h2>
        <button
          onClick={generarPDF}
          className="text-black py-3 btn btn-danger"
        >
          📄 Generar PDF
        </button>
      </div>
    </div>
  </div>
)
}

export default Dieta;
