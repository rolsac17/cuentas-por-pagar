import React from 'react';
import Menu from './Menu';
import {
    BanknotesIcon,
    ChevronRightIcon
  } from '@heroicons/react/20/solid';

  import {
    ScaleIcon,
    ArrowsRightLeftIcon,
    ServerIcon,
  } from '@heroicons/react/24/outline';

  

  const cards = [
    {
      name: 'Balance Contable',
      href: '#',
      icon: ScaleIcon,
      amount: 'Q30,659.45',
    },
    {
      name: 'Pendiente',
      href: '#',
      icon: ArrowsRightLeftIcon,
      amount: 'Q19,500.00',
    },
    {
      name: 'Lo Otro',
      href: '#',
      icon: ServerIcon ,
      amount: 'Q10,000.00',
    },
    // More items...
  ];
  const transactions = [
    {
      id: 1,
      name: 'Pago a Rosa Sanders',
      href: '#',
      amount: '20,000',
      currency: 'Q',
      status: 'success',
      date: 'July 11, 2020',
      datetime: '2020-07-11',
    },
    // More transactions...
  ];
  const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

const Historial = () => {
    return ( 
      <>
      <Menu>
      <div className='w-full'>
            <main className='pb-8'>
            <div className='mt-8 lg:mt-2'>
              {/* Inicio de Menu de cards*/}
              <div className='px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-extrabold leading-6 text-gray-900 font-serif'>
                  Tablero
                </h2>
                <div className='w-full mt-2 grid grid-cols-1 gap-10 sm:grid-cols-2 pr-0 pl-0 gap-1 lg:grid-cols-3 lg:pr-40 pl-40'>
                  {/* Card */}
                  {cards.map((card) => (
                    <div key={card.name} className='overflow-hidden rounded-lg bg-white shadow'>
                      <div className='p-5'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0'>
                            <card.icon
                              className='h-6 w-6 text-gray-400'
                              aria-hidden='true'
                            />
                          </div>
                          <div className='ml-5 w-0 flex-1'>
                            <dl>
                              <dt className='truncate text-sm font-medium text-gray-500'>
                                {card.name}
                              </dt>
                              <dd>
                                <div className='text-lg font-medium text-gray-900'>
                                  {card.amount}
                                </div>
                              </dd>
                              
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className='bg-gray-50 px-5 py-3'>
                        <div className='text-sm'>
                          <a
                            href={card.href}
                            className='font-medium text-cyan-700 hover:text-cyan-900'
                          >Ver Todo
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
              {/* Fin de Menu de cards*/}

              <h2 className='text-3xl font-extrabold mt-8 px-4 leading-6 text-gray-900 sm:px-6 lg:px-8 mb-8 font-serif'>
                Actividad Reciente
              </h2>

              {/* Activity list (smallest breakpoint only) */}
              <div className='shadow sm:hidden'>
                <ul
                  role='list'
                  className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'
                >
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      <a
                        href={transaction.href}
                        className='block bg-white px-4 py-4 hover:bg-gray-50'
                      >
                        <span className='flex items-center space-x-4'>
                          <span className='flex flex-1 space-x-2 truncate'>
                            <BanknotesIcon
                              className='h-5 w-5 flex-shrink-0 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='flex flex-col truncate text-sm text-gray-500'>
                              <span className='truncate'>
                                {transaction.name}
                              </span>
                              <span>
                              {transaction.currency+" "}
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}
                                </span>{' '}
                              </span>
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className='h-5 w-5 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <nav
                  className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3'
                  aria-label='Pagination'
                >
                  <div className='flex flex-1 justify-between'>
                    <a
                      href='#'
                      className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                    >
                      Anterior
                    </a>
                    <a
                      href='#'
                      className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                    >
                      Siguiente
                    </a>
                  </div>
                </nav>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className='hidden sm:block'>
                <div className='w-full pl-40 pr-40'>
                  <div className='mt-2 flex flex-col'>
                    <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead>
                          <tr>
                            <th
                              className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Transacción
                            </th>
                            <th
                              className='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Cantidad
                            </th>
                            <th
                              className='hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block'
                              scope='col'
                            >
                              Estado
                            </th>
                            <th
                              className='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Fecha
                            </th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className='bg-white'>
                              <td className='w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                                <div className='flex'>
                                  <a
                                    href={transaction.href}
                                    className='group inline-flex space-x-2 truncate text-sm'
                                  >
                                    <BanknotesIcon
                                      className='h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                      aria-hidden='true'
                                    />
                                    <p className='truncate text-gray-500 group-hover:text-gray-900'>
                                      {transaction.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                              {transaction.currency+" "}
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}
                                </span>
                              </td>
                              <td className='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block'>
                                <span
                                  className={classNames(
                                    statusStyles[transaction.status],
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                  )}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                              <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                                <time dateTime={transaction.datetime}>
                                  {transaction.date}
                                </time>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* Pagination */}
                      <nav
                        className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                        aria-label='Pagination'
                      >
                        <div className='hidden sm:block'>
                          <p className='text-sm text-gray-700'>
                            Mostrando <span className='font-medium'>1</span> to{' '}
                            <span className='font-medium'>10</span> de{' '}
                            <span className='font-medium'>20</span> resultados
                          </p>
                        </div>
                        <div className='flex flex-1 justify-between sm:justify-end'>
                          <a
                            href='#'
                            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                          >
                            Anterior
                          </a>
                          <a
                            href='#'
                            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                          >
                            Siguiente
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </div>
        </Menu></>
        
     );
}
 
export default Historial;