import React from 'react';

const Reportes = () => {
    return ( 
        <div className='flex flex-col center container w-full items-center'>
            <div className="container m-5 content-center" style={{width:"95%"}}>

                <header className="bg-[#a21caf] rounded-3xl">
                    <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-medium rounded-md' >Formulario de Reportes</h1>
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