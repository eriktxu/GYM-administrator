// src/pages/Dieta.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dieta() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    // Obtener usuarios con perfil completo
    axios.get('http://localhost:3307/api/clientes/completos')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  const generarPDF = () => {
    if (!usuarioSeleccionado) return alert("Selecciona un usuario");

    axios({
      url: `http://localhost:3001/api/generar-pdf/${usuarioSeleccionado}`,
      method: 'GET',
      responseType: 'blob', // Necesario para recibir el PDF
    })
      .then((res) => {
        const blob = new Blob([res.data], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `rutina-dieta-${usuarioSeleccionado}.pdf`;
        link.click();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Generar rutina y dieta</h2>

      <label className="block mb-2">Selecciona un usuario:</label>
      <select
        className="w-full p-2 border rounded mb-4"
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
        className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
      >
        Generar PDF
      </button>
    </div>
  );
}

export default Dieta;
