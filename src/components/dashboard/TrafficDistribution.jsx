import React from "react";
import '../../styles/components/dashboard/TrafficDistribution.css';

function TrafficDistribution() {
    return (
        <div className="traffic-distribution card">
            <div className="card-header">
                <h4 className="card-title">Traffic Distribution</h4>
            </div>
            <div className="card-body">
                <ul className="traffic-list">
                    <li>
                        <span className="source-label">Direct</span>
                        <span className="source-value">44.5%</span>
                    </li>
                    <li>
                        <span className="source-label">Referral</span>
                        <span className="source-value">25.0%</span>
                    </li>
                    <li>
                        <span className="source-label">Organic</span>
                        <span className="source-value">30.5%</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TrafficDistribution;
