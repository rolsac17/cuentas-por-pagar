import React from 'react';
import Menu from './Menu';

const Factura = () => {
  return (
    <>
      <Menu>
        <div className='flex flex-col center container w-full'>
          <div className='container m-5'style={{ width: '35%' }}
          >
            <header className='bg-[#a21caf] rounded-3xl'>
              <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-medium rounded-md'>
                Formulario de Facturación
              </h1>
            </header>

            <main className='px-1 pt-6'>
              <form action=''>
                <label htmlFor='id'>No. Factura</label>
                <input
                  type='number'
                  id='id'
                  name='id'
                  className='form-control rounded-3xl'
                  autoComplete='off'
                />

                <label htmlFor='nombre'>Nombre Proveedor</label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  className='form-control rounded-3xl'
                  autoComplete='off'
                />

                <label htmlFor='total'>Total Factura</label>
                <input
                  type='number'
                  id='total'
                  name='total'
                  className='form-control rounded-3xl'
                  autoComplete='off'
                />

                <input
                  style={{ color: 'black' }}
                  type='button'
                  value='Guardar'
                  className='btn btn-dark mt-3 mb-3 rounded-3xl'
                />
              </form>

              <hr />

              <table className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>No. Factura</th>
                    <th>Proveedor</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody id='detalle'></tbody>
              </table>
            </main>

            <footer></footer>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default Factura;
