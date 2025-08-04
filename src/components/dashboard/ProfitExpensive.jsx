import React from "react";
import '../../styles/components/dashboard/ProfitExpense.css';

function ProfitExpensive() {
    return (
        <div className="profit-expense card">
            <div className="card-header">
                <h4 className="card-title">Profit and Expense</h4>
            </div>
            <div className="card-body">
                <div className="profit-expense-row">
                    <div className="value-box">
                        <p className="label">Profit</p>
                        <h3 className="value text-success">$12,628</h3>
                    </div>
                    <div className="value-box">
                        <p className="label">Expense</p>
                        <h3 className="value text-danger">$6,259</h3>
                    </div>
                </div>
                <div className="bar-wrapper">
                    <div className="bar green" style={{ width: "67%" }}></div>
                    <div className="bar red" style={{ width: "33%" }}></div>
                </div>
            </div>
        </div>
    );
}

export default ProfitExpensive;
