import React from 'react';
import Menu from './Menu';

const Reportes = () => {
    return ( 
        <>
        <Menu>
        <div className='w-full flex flex-col center container items-center'>
            <div className="container m-5 content-center" style={{width:"95%"}}>

                <header className="bg-[#a21caf] rounded-3xl">
                    <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-medium rounded-md' >Formulario de Reportes</h1>
                </header>

                <main className='px-1 pt-6'>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID Reporte</th>
                                <th>Tipo Reporte</th>
                                <th>Observaciones</th>
                                <th>Extras</th>
                            </tr>
                        </thead>

                        <tbody id="detalle">
                            
                        </tbody>
                    </table>

                </main>

            </div>
        </div>
            </Menu></>
        
     );
}
 
export default Reportes;