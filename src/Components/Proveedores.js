import React from 'react';

const Proveedores = () => {
    return ( 
        <div className='m-5'>
            <div className="container m-5" style={{width:"85rem"}}>

                <header className="bg-primary">
                    <h1 className="text-white text-center p-5" >Formulario de Proveedores</h1>
                </header>

                <main className='px-5'>

                    <form action="">

                        <label htmlFor="id">ID Proveedor</label>
                        <input type="number" id="id" name="id" className="form-control" autoComplete="off"/>

                        <label htmlFor="nombre">Nombre Proveedor</label>
                        <input type="text" id="nombre" name="nombre" className="form-control" autoComplete="off"/>

                        <label htmlFor="correo">Correo</label>
                        <input type="email" id="correo" name="correo" className="form-control" autoComplete="off"/>

                        <label htmlFor="telefono">Telefono</label>
                        <input type="number" id="telefono" name="telefono" className="form-control" autoComplete="off"/>

                        <input style={{color: "black"}} type="button" value = "Guardar" className="btn btn-success mt-3 mb-3" />

                    </form>

                    <hr/>

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID Proveedor</th>
                                <th>Proveedor</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>

                        <tbody id="detalle">
                            
                        </tbody>
                    </table>

                </main>

            </div>
        </div>
     );
}
 
export default Proveedores;