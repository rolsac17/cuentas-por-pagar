
// import {Link} from "react-router-dom";
// import {useParams} from 'react-router-dom';
import './App.css';

function Login() {
  // const irDashboard = useParams();
  // const newParams = () =>{
  //   irDashboard.push('/dasboard')
  // }
  return (
    <>
     <div className="flex min-h-full flex-col justify-center py-56 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-logotipo-de-programaci-n-inform-tica.png"
            alt="To be Paid"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">To be Paid</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <div className="mt-1">
                  <input
                    id="usuario"
                    name="usuario"
                    type="text"
                    autoComplete="usuario"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="clave" className="block text-sm font-medium text-gray-700">
                  Clave
                </label>
                <div className="mt-1">
                  <input
                    id="clave"
                    name="clave"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
