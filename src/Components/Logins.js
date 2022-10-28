import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
//servicios
import {baseUrl, apiUsuarioUrl} from '../Servicios/api'
import axios from 'axios';

class Login extends React.Component {
  state = { 
    form:{
      "correo":"",
      "contrasenha":""
    },
    error:false,
    errorMsg:""
   }

   manejadorChange = async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })

  }

  manejadorBoton=()=>{
    let url = baseUrl + apiUsuarioUrl + "/Post";

    axios.post(url, this.state.form)
    .then( response => {
      console.log(response)
    })
  }

  render() { 
    return ( 
      <div className='flex flex-col align-middle center container w-full items-center h-full justify-center'>
          <div className='flex flex-col items-center text-center w-4/5 h-full align-middle justify-center'>
          <div className="w-1/2">
            <div className="w-full space-y-8">
              <div>
                <img
                  className="mx-auto h-25 w-25"
                  src="https://images.vexels.com/media/users/3/224169/isolated/lists/dbfe1f493ad01117fa4ec5ba10150e4d-logotipo-de-programaci-n-inform-tica.png"
                  alt="Logo Login"
                />
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Inicia con tu cuenta administrativa
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600"> </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST" >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Dirección de Correo Electrónico
                    </label>
                    <input
                      id="email-address"
                      name="correo"
                      type="email"
                      autoComplete="email"
                      onChange={this.manejadorChange}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Usuario"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="contrasenha"
                      type="password"
                      autoComplete="current-password"
                      onChange={this.manejadorChange}
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>
    
                <div className="flex items-center justify-between">
    
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Olvidaste tu contraseña?, contacta al equipo de soporte
                    </a>
                  </div>
                </div>
    
                <div>
                  <Link to={"/resumen"}
                    onClick={this.manejadorBoton}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#701a75] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-white" aria-hidden="true" />
                    </span>
                    Entrar
                  </Link>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div> 
     );
  }
}
 
export default Login;