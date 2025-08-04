import React from "react";
import AlertaSuscripciones from "../components/suscripciones/AlertaSuscripciones";
import ProductSales from '../components/dashboard/ProductSales'
import ProfitExpensive from "../components/dashboard/ProfitExpensive";
import TrafficDistribution from "../components/dashboard/TrafficDistribution";
import "../styles/views/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <AlertaSuscripciones />

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <ProductSales />
                </div>

                <div className="dashboard-card">
                    <ProfitExpensive />
                </div>

                <div className="dashboard-card">
                    <TrafficDistribution />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
