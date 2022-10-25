import React from 'react';


const Factura = () => {

    return ( 
        <div className='m-4'>
            <div className="container m-5 justify-center" style={{width:"85rem"}}>

            <header className="bg-[#e5e5e5] rounded-3xl">
                <h1 className="text-center p-2 text-lg font-medium leading-6 text-gray-900" >Formulario de Facturacion</h1>
            </header>

            <main className='px-1 pt-6'>

                <form action="" 
                >

                    <label htmlFor="id">No. Factura</label>
                    <input type="number" id="id" name="id" className="form-control rounded-3xl" autoComplete="off"/>

                    <label htmlFor="nombre">Nombre Proveedor</label>
                    <input type="text" id="nombre" name="nombre" className="form-control rounded-3xl" autoComplete="off"/>

                    <label htmlFor="total">Total Factura</label>
                    <input type="number" id="total" name="total" className="form-control rounded-3xl" autoComplete="off"/>

                    <input style={{color: "black"}} type="button" value = "Guardar" className="btn btn-dark mt-3 mb-3 rounded-3xl"/>

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