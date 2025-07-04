import React from "react";
import '../styles/perfil.css';

function Perfil() {
    return (
        <div className="container-fluid">
            <div className="form-container">
                <h2 className="form-title">Datos Físicos y Objetivo</h2>
                <form id="formPerfil">
                    {/* Contenedor row para las columnas */}
                    <div className="row">
                        {/* Columna izquierda */}
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control" id="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edad" className="form-label">Edad</label>
                                <input type="number" className="form-control" id="edad" min={10} max={100} required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="genero" className="form-label">Género</label>
                                <select id="genero" className="form-select" required>
                                    <option value="">Selecciona</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>No binario / Prefiero no decir</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="estatura" className="form-label">Estatura (cm)</label>
                                <input type="number" className="form-control" id="estatura" required></input>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="peso" className="form-label">Peso (kg)</label>
                                <input type="number" className="form-control" id="peso" required></input>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="tipoCuerpo" className="form-label">Tipo de cuerpo</label>
                                <select id="tipoCuerpo" className="form-select" required>
                                    <option value="">Selecciona</option>
                                    <option>Ectomorfo (delgado)</option>
                                    <option>Mesomorfo (atlético)</option>
                                    <option>Endomorfo (más volumen)</option>
                                </select>
                            </div>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="nivelActividad" className="form-label">Nivel de actividad física</label>
                                <select id="nivelActividad" className="form-select" required>
                                    {/* Opciones... */}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="objetivo" className="form-label">Objetivo principal</label>
                                <select id="objetivo" className="form-select" required>
                                    <option value="">Selecciona</option>
                                    <option>Perder grasa</option>
                                    <option>Ganar masa muscular</option>
                                    <option>Mantenimiento</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="alergias" className="form-label">Restricciones o alergias alimenticias</label>
                                <textarea id="alergias" className="form-control" rows="2" placeholder="Ej. soy alérgico al gluten, vegetariano, etc."></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nivelActividad" className="form-label">¿Tiene alguna enfermedad cronica?</label>
                                <select id="nivelActividad" className="form-select" required>
                                    <option value="">Selecciona</option>
                                    <option>Ninguna</option>
                                    <option>Diabetes</option>
                                    <option>Hipertensión</option>
                                    <option>Dislipidemias(colesterol y trigliceridos altos)</option>
                                    <option>Obesidad</option>
                                    <option>Asma</option>
                                    <option>Artritis</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">Guardar Perfil</button>
                </form>
            </div>
        </div>
    );
}

export default Perfil;