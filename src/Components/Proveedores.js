import React from 'react';
import '../css/formProveedores.css';

const Proveedores = () => {
    return ( 
        <div>
            <div className="container">
                <div className="header">
                    <h2>Formulario de Proveedores</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="factura">Id de Proveedor</label>
                        <input type="number" placeholder="Ingrese un id de Proveedor" id="id" />
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="nombrepro">Nombre del Proveedor</label>
                        <input type="text" placeholder="Nombre del proveedor" id="proveedor" />
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="correpro">Email del Proveedor</label>
                        <input type="email" placeholder="Email del Proveedor" id="correo"/>
                        <i className="fas fa-check-circle"></i>
                        <i className="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="tel">Telefono</label>
                        <input type="number" placeholder="Ingrese el Telefono" id="total"/>
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
 
export default Proveedores;