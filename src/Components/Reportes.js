import React from 'react';

const Reportes = () => {
    return ( 
        <div className='m-5'>
            <div className="container m-4 content-center" style={{width:"85rem"}}>

                <header className="bg-[#e5e5e5] rounded-3xl">
                    <h1 className="text-center p-2 text-lg font-medium leading-6 text-gray-900" >Formulario de Reportes</h1>
                </header>

                <main className='px-1 pt-6'>
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
 
export default Reportes;