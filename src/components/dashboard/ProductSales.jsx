import React from "react";
import '../../styles/components/dashboard/ProductSales.css';

function ProductSales() {
    const productos = [
        { nombre: "Producto A", ventas: 120, porcentaje: 45 },
        { nombre: "Producto B", ventas: 90, porcentaje: 34 },
        { nombre: "Producto C", ventas: 56, porcentaje: 21 },
    ];

    return (
        <div className="product-sales card">
            <div className="card-header">
                <h4 className="card-title">Product Sales</h4>
            </div>
            <div className="card-body">
                <ul className="product-list">
                    {productos.map((producto, index) => (
                        <li key={index}>
                            <div className="product-info">
                                <span className="product-name">{producto.nombre}</span>
                                <span className="product-count">{producto.ventas} ventas</span>
                            </div>
                            <div className="progress-bar-wrapper">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${producto.porcentaje}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductSales;
