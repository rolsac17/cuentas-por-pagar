import React from 'react';
import '../css/formFacturas.css';

const Factura = () => {
    return ( 
        <div>
            <div className="container">
                <div className="header">
                    <h2>Formulario de Facturacion</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="factura">No. de Factura</label>
                        <input type="number" placeholder="Ingrese No. de Factura" id="id" />
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Proveedor de Factura</label>
                        <input type="text" placeholder="Ingrese Proveedor de Factura" id="proveedor" />
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Fecha de Facturacion</label>
                        <input type="date" placeholder="Fecha de Facturacion" id="fecha"/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Total de Factura</label>
                        <input type="number" placeholder="Ingrese el total de factura" id="total"/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
     );
}
 
export default Factura;