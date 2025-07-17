import React, { useState, useEffect } from "react";
import { useClientes } from "../api/perfil";
import enfermedadesJSON from "../data/enfermedades.json";
import restriccionesJSON from "../data/restricciones.json";
import "../styles/perfil.css";
import axios from "axios";

function Perfil() {
    const { clientes, loading, error } = useClientes();
    const [clienteSeleccionado, setClienteSeleccionado] = useState("");
    const [formData, setFormData] = useState({
        edad: "",
        genero: "",
        altura: "",
        peso: "",
        cintura: "",
        tipo_cuerpo: "",
        nivel_actividad: "",
        objetivo: "",
        restricciones_comida: [],
        enfermedades: [],
        imc: ""
    });

        useEffect(() => {
    const alturaCm = parseFloat(formData.altura);
    const peso = parseFloat(formData.peso);

    if (!isNaN(alturaCm) && !isNaN(peso) && alturaCm > 0) {
        const alturaM = alturaCm / 100; // 🔁 conversión cm ➝ m
        const imcCalculado = peso / (alturaM * alturaM);
        setFormData((prev) => ({ ...prev, imc: imcCalculado.toFixed(2) }));
    } else {
        setFormData((prev) => ({ ...prev, imc: "" }));
    }
}, [formData.altura, formData.peso]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e, key) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const values = new Set(prev[key]);
            checked ? values.add(value) : values.delete(value);
            return { ...prev, [key]: Array.from(values) };
        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clienteSeleccionado) {
        alert("Selecciona un cliente primero");
        return;
    }

const payload = {
    id: clienteSeleccionado,
    ...formData
};

const token = localStorage.getItem("token");

    try {
        const response = await axios.post("http://localhost:3307/api/clientes/guardar", payload,{
            headers: `Bearer ${token}`
        });
        console.log("Respuesta del servidor:", response.data);
        alert("Perfil guardado correctamente.");
    } catch (error) {
        console.error("Error al guardar perfil:", error);
        alert("Hubo un error al guardar el perfil.");
    }
};


    return (
        <div className="container-fluid">
            <div className="form-container">
                <h2 className="form-title">Perfil de Cliente</h2>

                {loading ? (
                    <p>Cargando clientes...</p>
                ) : error ? (
                    <p>Error al cargar clientes</p>
                ) : (
                    <div className="mb-3">
                        <label className="form-label">Seleccionar cliente registrado</label>
                        <select
                            className="form-select"
                            value={clienteSeleccionado}
                            onChange={(e) => setClienteSeleccionado(e.target.value)}
                            required
                        >
                            <option value="">-- Selecciona un cliente --</option>
                            {clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nombre} ({cliente.correo})
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* Columna izquierda */}
                        <div className="col-md-6">
                            <h5 className="mt-4">Datos físicos</h5>
                            <input type="number" name="edad" value={formData.edad} onChange={handleChange} className="form-control mb-2" placeholder="Edad" />
                            <select name="genero" value={formData.genero} onChange={handleChange} className="form-select mb-2">
                                <option value="">Sexo</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                            <input type="number" name="altura" value={formData.altura} onChange={handleChange} className="form-control mb-2" placeholder="Altura (cm)" step="0.01" />
                            <input type="number" name="peso" value={formData.peso} onChange={handleChange} className="form-control mb-2" placeholder="Peso (kg)" step="0.1"/>
                            <input type="number" name="cintura" value={formData.cintura} onChange={handleChange} className="form-control mb-2" placeholder="Cintura (cm)" />
                            <input type="text" name="imc" value={formData.imc} readOnly className="form-control mb-2" placeholder="IMC (calculo automatico)"/>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-md-6">
                            <h5>Actividad y salud</h5>
                            <select name="tipo_cuerpo" value={formData.tipo_cuerpo} onChange={handleChange} className="form-select mb-2">
                                <option value="">Tipo de cuerpo</option>
                                <option value="Ectomorfo">Ectomorfo</option>
                                <option value="Mesomorfo">Mesomorfo</option>
                                <option value="Endomorfo">Endomorfo</option>
                            </select>
                            <select name="nivel_actividad" value={formData.nivel_actividad} onChange={handleChange} className="form-select mb-2">
                                <option value="">Nivel de actividad</option>
                                <option value="Sedentario">Sedentario</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Activo">Activo</option>
                            </select>
                            <select name="objetivo" value={formData.objetivo} onChange={handleChange} className="form-select mb-2">
                                <option value="">Objetivo</option>
                                <option value="Perder grasa">Perder grasa</option>
                                <option value="Ganar masa muscular">Ganar masa muscular</option>
                                <option value="Mantenimiento">Mantenimiento</option>
                            </select>

                            <div className="mb-3">
                                <label className="form-label">Restricciones alimenticias</label>
                                {restriccionesJSON.map((item, idx) => (
                                    <div key={idx}>
                                        <input type="checkbox" value={item} checked={formData.restricciones_comida.includes(item)} onChange={(e) => handleCheckboxChange(e, "restricciones_comida")} />
                                        <span className="ms-2">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Enfermedades crónicas</label>
                                {enfermedadesJSON.map((item, idx) => (
                                    <div key={idx}>
                                        <input type="checkbox" value={item} checked={formData.enfermedades.includes(item)} onChange={(e) => handleCheckboxChange(e, "enfermedades")} />
                                        <span className="ms-2">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3">Guardar Perfil</button>
                </form>
            </div>
        </div>
    );
}

export default Perfil;
