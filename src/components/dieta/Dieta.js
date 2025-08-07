import { useEffect, useState } from 'react';
import axios from 'axios';

function Dieta() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get('http://localhost:3307/api/clientes/completos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  const generarPDF = () => {
    if (!usuarioSeleccionado) return alert("Selecciona un usuario");

    axios({
      url: `http://localhost:3307/api/clientes/generarPlan/${usuarioSeleccionado}`,
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
        link.download = `plan-personalizado-${usuarioSeleccionado}.pdf`;
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

          <label className="block text-gray-700 font-medium mb-2">
            Selecciona un usuario:
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={e => setUsuarioSeleccionado(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>-- Selecciona --</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nombre} - {usuario.email}
              </option>
            ))}
          </select>

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
