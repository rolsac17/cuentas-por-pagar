import React from 'react';


const Factura = () => {

    return ( 
        <div className='m-5'>
            <div className="container m-5" style={{width:"85rem"}}>

            <header className="bg-primary">
                <h1 className="text-white text-center p-5" >Formulario de Facturacion</h1>
            </header>

            <main className='px-5'>

                <form action="" 
                >

                    <label htmlFor="id">No. Factura</label>
                    <input type="number" id="id" name="id" className="form-control" autoComplete="off"/>

                    <label htmlFor="nombre">Nombre Proveedor</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" autoComplete="off"/>

                    <label htmlFor="total">Total Factura</label>
                    <input type="number" id="total" name="total" className="form-control" autoComplete="off"/>

                    <input style={{color: "black"}} type="button" value = "Guardar" className="btn btn-dark mt-3 mb-3"/>

                </form>

                <hr/>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>No. Factura</th>
                            <th>Proveedor</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody id="detalle">
                        
                    </tbody>
                </table>

            </main>

            <footer>

            </footer>

            </div>
        </div>
     );
}
 
export default Factura;