import React, {useEffect, useState} from "react";
import AlertaSuscripciones from "../components/suscripciones/AlertaSuscripciones";
import CardIngresos from '../components/dashboard/CardIngresos'
import TipoSuscripcionesChart from "../components/dashboard/TipoSuscripcionesChart";
import EstadoSuscripcionesChart from "../components/dashboard/EstadoSuscripcionesChart";
import { fetchSuscripcionesApi } from "../api/suscripciones";
import "../styles/views/dashboard.css";

function Dashboard() {

    const [suscripciones, setSuscripciones] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchSuscripcionesApi(token)
      .then(setSuscripciones)
      .catch(console.error);
  }, []);

    return (
        <div className="dashboard-container">
            <AlertaSuscripciones />

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <CardIngresos />
                </div>

                <div className="dashboard-card">
                    <TipoSuscripcionesChart suscripciones={suscripciones} />
                </div>

                <div className="dashboard-card">
                    <EstadoSuscripcionesChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
