import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Menu from './Menu';

const faqs = [
  {
    id: 1,
    question: '¿Sabes la cantidad de tiempo invertido por los usuarios en cuando deben hacer el pago a sus cuentas?',
    answer:
      '¿Qué esperas?',
  },
  {
    id: 2,
    question: "Cuando hablamos de cuentas por pagar, siempre es bueno tener el apoyo o respaldo para evitar cualuquier tragedia",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'Con la mejor calidad en servicio y seguridad de todo el continente',
    answer: 'Trabajamos únicamente con expertos para que te ayuden en la gestión de tus cuentas',
  }
]


export default function Example() {
  return (
    <>
    <Menu>
    <div className="bg-white">
      <header className="relative bg-sky-800 pb-24 sm:pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src='https://st4.depositphotos.com/1001599/30954/v/600/depositphotos_309544704-stock-illustration-enterprise-accounting-concept-vector-illustration.jpg'
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 pb-2 sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <span className="sr-only">Tu empresa</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src='https://st4.depositphotos.com/1001599/30954/v/600/depositphotos_309544704-stock-illustration-enterprise-accounting-concept-vector-illustration.jpg'
                  alt=""
                />
              </a>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top transform p-2 transition lg:hidden">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src='https://st4.depositphotos.com/1001599/30954/v/600/depositphotos_309544704-stock-illustration-enterprise-accounting-concept-vector-illustration.jpg'
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block w-full rounded-md border border-transparent bg-green-400 py-2 px-4 text-center font-medium text-white shadow hover:bg-green-500"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">PayGest</h1>
          <p className="mt-6 max-w-3xl text-xl text-cyan-100">
            Una aplicación sensacional respecto a las cuentas por pagar
          </p>
        </div>
      </header>

      <main>
        {/* Side-by-side grid */}
        <div className="bg-white">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">¿Quiénes Somos?</h2>
                <p className="mt-4 text-lg text-warm-gray-500 text-justify">
                  Somos una app de gestión de cuentas, especializándonos en las Cuentas por Pagar
                  team.
                </p>
              </div>
              <div className="mt-12 lg:col-span-2 lg:mt-0">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="rounded-3xl bg-gradient-to-l from-sky-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-white">Bien, ahora que ya nos conoces...</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                  ¡Trabaja con Nosotros!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-md py-12 px-4 sm:max-w-3xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-12 border-t border-warm-gray-200 pt-8">
            <p className="text-base text-warm-gray-400 xl:text-center">
              &copy; 2022 PayGest, Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </Menu>
    </>
  )
}