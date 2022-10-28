import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Menu from './Menu';

const preguntas = [
  {
    id: 1,
    tema: '¿Necesitas que alguien te brinde ayuda respecto a tus cuentas o pagar algo correspondiente a ellas?',
    explicacion:
      'Con nostros, el sistema se encarga de brindarte un entorno, el cual haga que se facilite el pago de tus deudas',
  },
  {
    id: 2,
    tema: "¿Has visto otro gestor de cuentas por pagar?",
    explicacion:
      "Hasta donde sabemos, ningún otro sistema como este ha sido implementado, así que somos los primeros en ello, por favor, ten paciencia",
  },
  {
    id: 3,
    tema: '¿Sabes cuánto tiempo se invierte en un gestor de cuentas por pagar?',
    explicacion: 'Actualmente, muchas personas invierten más de la mitad del tiempo que dedican a sus finanzas al pago de sus cuentas',
  },
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
                <span className="sr-only">Tu Compañía</span>
                <img
                  className="h-16 w-16 sm:h-10 sm:w-10 rounded-full"
                  src='https://st4.depositphotos.com/1001599/30954/v/600/depositphotos_309544704-stock-illustration-enterprise-accounting-concept-vector-illustration.jpg'
                  alt=""
                />
              </a>
            </div>
          </nav> 
        </Popover>

        <div className="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">PayGest</h1>
          <p className="mt-6 max-w-3xl text-xl text-cyan-100">
            Una aplicación sensacional respecto a las cuentas por pagar
          </p>
        </div>
      </header>

      <main>
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
                  {preguntas.map((preguntas) => (
                    <div key={preguntas.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{preguntas.tema}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{preguntas.explicacion}</dd>
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
                <h2 className="text-3xl font-bold tracking-tight text-white">Ahora que ya nos conoces, ¿por qué no..?</h2>
                <p className="mt-4 max-w-3xl text-lg text-cyan-100">Trabajas con nosotros
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