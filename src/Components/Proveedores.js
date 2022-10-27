import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import axios from 'axios';
import {baseUrl, apiProveedorUrl} from '../Servicios/api';
import { useRouteLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Proveedor extends React.Component {
  
    state = {
      proveedor:[],
      AddProveedor:{
        "proveedorName":"",
        "email":"",
        "telefono":""
      },
      estado:false
    }
    recargar = () =>
    {
      window.location.reload();
      this.AgregarProveedor();
    }

  //=========AgregarProveedor===============================
    manejadorChange = async e=>{
        await this.setState({
            AddProveedor:{
            ...this.state.AddProveedor,
            [e.target.name]:e.target.value
          }
        })
    
      }

      AgregarProveedor=()=>{
        let url = baseUrl + apiProveedorUrl;
    
        axios.post(url, this.state.AddProveedor)
        .then( response => {
          console.log(response)
        })
      }
 //==========Poblacion De Las Tablas==========================

 clickProveedor(id){
    console.log(id);
  }

  componentDidMount(){
    let url = baseUrl + apiProveedorUrl;

    axios.get(url)
    .then(response => {
      this.setState({
        proveedor:response.data
      })
      
    })
  }
  

render() {
    return ( 
        <>
        <Menu>
        <div className='w-full flex flex-col center container items-center'>
            <div className="container m-5" style={{width:"95%"}}>

                <header className="bg-[#a21caf] rounded-3xl">
                    <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-bold rounded-md' >
                        Formulario de Proveedores</h1>
                </header>

                <main className='px-1 pt-6'>
                <form action=''>
                  <label htmlFor='id' className='font-bold'>Nombre Proveedor</label>
                  <input
                    type='text'
                    id='proveedorName'
                    name='proveedorName'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='email' className='font-bold'>Email</label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='telefono' className='font-bold'>Teléfono</label>
                  <input
                    type='number'
                    id='telefonoN'
                    name='telefono'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
                  <div className='w-full flex flex-col center container items-center'>
                  <input
                    style={{ color: 'black'}}
                    type='button'
                    value='Guardar'
                    className='hover: mt-3 mb-3 rounded-3xl w-1/3 bg-indigo-900 text-white p-2 hover:bg-indigo-400'  
                    id='button'
                    onClick={this.recargar}
                  />
                  </div>
                </form>
  
                <hr />
  
                <table className='table table-bordered table-striped'>
                  <thead>
                    <tr>
                      <th>Id Proveedor</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Teléfono</th>
                    </tr>
                  </thead>
  
                  <tbody >
                    {this.state.proveedor.map((value, index)=>{
                      return(
                        <tr key={index}>
                        <td><Link to={"/editarProveedor/"+value.idProveedor}>{value.idProveedor}</Link></td>
                          <td>{value.proveedorName}</td>
                          <td>{value.email}</td>
                          <td>{value.telefono}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </main>
  
              <footer></footer>

            </div>
        </div>
        </Menu>
        </>
     );
}
};
export default Proveedor;