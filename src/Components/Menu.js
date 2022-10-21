import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Inicio', href: '#', icon: HomeIcon, current: true },
  { name: 'Historial', href: '#', icon: ClockIcon, current: false },
  { name: 'Balance', href: '#', icon: ScaleIcon, current: false },
  { name: 'Facturas', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Proveedores', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reportes', href: '#', icon: DocumentChartBarIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Configuración', href: '#', icon: CogIcon },
  { name: 'Ayuda', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacidad', href: '#', icon: ShieldCheckIcon },
];
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
  // More items...
];
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
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

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='min-h-full'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pt-5 pb-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    <img
                      className='h-8 w-auto'
                      src='https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-logotipo-de-programaci-n-inform-tica.png'
                      alt='logo'
                    />
                  </div>
                  <nav
                    className='mt-5 h-full flex-shrink-0  overflow-y-auto'
                    aria-label='Sidebar'
                  >
                    {/* Opción de pagina de inicio */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <HomeIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Inicio
                      </a>
                    </div>
                    {/* Opción de pagina de Historial */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <ClockIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Historial
                      </a>
                    </div>
                    {/* Opción de pagina de Balance */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <ScaleIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Balance
                      </a>
                    </div>
                    {/* Opción de pagina de Factura */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <CreditCardIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Factura
                      </a>
                    </div>
                    {/* Opción de pagina de Proveedores */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <UserGroupIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Proveedores
                      </a>
                    </div>
                    {/* Opción de pagina de Reportes */}
                    <div className='space-y-1 px-2'>
                      <a
                        key=''
                        href=''
                        className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      >
                        <DocumentChartBarIcon
                          className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                          aria-hidden='true'
                        />
                        Reportes
                      </a>
                    </div>
                    {/* Menu de configuracion*/}
                    <div className='mt-6 pt-6'>
                      <div className='space-y-1 px-2'>
                        <a
                          key=''
                          href=''
                          className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
                        >
                          <CogIcon
                            className='mr-4 h-6 w-6 text-cyan-200'
                            aria-hidden='true'
                          />
                          Configuración
                        </a>
                      </div>
                      {/* Menu de ayuda*/}
                      <div className='space-y-1 px-2'>
                        <a
                          key=''
                          href=''
                          className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
                        >
                          <QuestionMarkCircleIcon
                            className='mr-4 h-6 w-6 text-cyan-200'
                            aria-hidden='true'
                          />
                          Ayuda
                        </a>
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0' aria-hidden='true'>
                {/*Elemento para obligar a la barra lateral a encogerse para ajustarse al icono de cierre*/}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar para escritorio*/}
        <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col'>
          {/* Componente de la barra lateral, intercambie este elemento con otra barra lateral si lo desea */}
          <div className='flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-5 pb-4'>
            <div className='flex flex-shrink-0 items-center px-4'>
              <img
                className='h-8 w-auto'
                src='https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-logotipo-de-programaci-n-inform-tica.png'
                alt='Easywire logo'
              />
            </div>
            <nav
              className='mt-5 flex flex-1 flex-col overflow-y-auto'
              aria-label='Sidebar'
            >
              {/* Opción de pagina de inicio */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <HomeIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Inicio
                </a>
              </div>
              {/* Opción de pagina de Historial */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <ClockIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Historial
                </a>
              </div>
              {/* Opción de pagina de Balance */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <ScaleIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Balance
                </a>
              </div>
              {/* Opción de pagina de Factura */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <CreditCardIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Factura
                </a>
              </div>
              {/* Opción de pagina de Proveedores */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <UserGroupIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Proveedores
                </a>
              </div>
              {/* Opción de pagina de Reportes */}
              <div className='space-y-1 px-2'>
                <a
                  key=''
                  href=''
                  className='text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                >
                  <DocumentChartBarIcon
                    className='mr-4 h-6 w-6 flex-shrink-0 text-cyan-200'
                    aria-hidden='true'
                  />
                  Reportes
                </a>
              </div>
              <div className='mt-6 pt-6'>
                <div className='space-y-1 px-2'>
                  <a
                    key=''
                    href=''
                    className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
                  >
                    <CogIcon
                      className='mr-4 h-6 w-6 text-cyan-200'
                      aria-hidden='true'
                    />
                    Configuración
                  </a>
                </div>
                {/* Menu de ayuda*/}
                <div className='space-y-1 px-2'>
                  <a
                    key=''
                    href=''
                    className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white'
                  >
                    <QuestionMarkCircleIcon
                      className='mr-4 h-6 w-6 text-cyan-200'
                      aria-hidden='true'
                    />
                    Ayuda
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='flex flex-1 flex-col lg:pl-64'>
          <div className='flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none'>
            {/* Button del menu en movil*/}
            <button
              type='button'
              className='border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3CenterLeftIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          {/* Inicio de la sección principal de la vista*/}
          <main className='flex-1 pb-8'>
            <div className='mt-8'>
              {/* Inicio de Menu de cards*/}
              <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <h2 className='text-lg font-medium leading-6 text-gray-900'>
                  Tablero
                </h2>
                <div className='mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                  {/* Card */}
                  {cards.map((card) => (
                    <div
                      key={card.name}
                      className='overflow-hidden rounded-lg bg-white shadow'
                    >
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
                          >
                            View all
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Fin de Menu de cards*/}

              <h2 className='mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8'>
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
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}
                                </span>{' '}
                                {transaction.currency}
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
                      Previous
                    </a>
                    <a
                      href='#'
                      className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className='hidden sm:block'>
                <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                  <div className='mt-2 flex flex-col'>
                    <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200'>
                        <thead>
                          <tr>
                            <th
                              className='bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Transaction
                            </th>
                            <th
                              className='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Amount
                            </th>
                            <th
                              className='hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block'
                              scope='col'
                            >
                              Status
                            </th>
                            <th
                              className='bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900'
                              scope='col'
                            >
                              Date
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
                                <span className='font-medium text-gray-900'>
                                  {transaction.amount}
                                </span>
                                {transaction.currency}
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
                            Showing <span className='font-medium'>1</span> to{' '}
                            <span className='font-medium'>10</span> of{' '}
                            <span className='font-medium'>20</span> results
                          </p>
                        </div>
                        <div className='flex flex-1 justify-between sm:justify-end'>
                          <a
                            href='#'
                            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                          >
                            Previous
                          </a>
                          <a
                            href='#'
                            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                          >
                            Next
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
      </div>
    </>
  );
}
