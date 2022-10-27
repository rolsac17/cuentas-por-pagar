import React from 'react';
import Menu from './Menu';
import {baseUrl, apiProveedorUrl} from '../Servicios/api';
import axios from 'axios';
import { Link } from 'react-router-dom';



class EditarProveedores extends React.Component {
    
    state = { 
        form:{
                "proveedorName":"",
                "email":"",
                "telefono":""
        },
        error:false,
        errorMSG:""
     }


     //bindear los inputs para poder modificarlos
     manejadorChange = async e=>{
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name]:e.target.value
          }
        })
    
      }

      //metodo para solicitud httpPut

      put = () =>{
        let url = baseUrl + apiProveedorUrl + "/" + this.state.form.IdProveedor;
        axios.put(url, this.state.form)
        .then(response =>{
            console.log(response);
        })
      }

      //Metodo para httpDelete

      delete=()=>{
        let url = baseUrl + apiProveedorUrl + "/" + this.state.form.IdProveedor;
        axios.delete(url)
        .then(response =>{
            console.log(response);
        })
      }

      //obtener los valores y almacenarlos
    componentDidMount=()=>{
        let actual = window.location+'';
        let split = actual.split("/");
        let id = split[split.length-1];
        //let facturaId = window.location.pathname;
        let url = baseUrl + apiProveedorUrl + "/" + id;

        axios.get(url)
        .then(response => {
            this.setState({
                form:{
                    IdProveedor : response.data.IdProveedor,
                    proveedorName : response.data.proveedorName,
                    email:response.data.email,
                    telefono:response.data.telefono
                }
            })
        })
    }

    

    render() { 
        return ( 
            <>
                <Menu>
                <div className='flex flex-col center container w-full items-center'>
                    <div
                    className='container m-5 justify-center'
                    style={{ width: '95%' }}
                    >
                    <header className='bg-[#a21caf] rounded-3xl'>
                        <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-medium rounded-md'>
                        Formulario de Gestión de Proveedores
                        </h1>
                    </header>
        
                    <main className='px-1 pt-6'>
                        <form action=''>
                        <label htmlFor='id'>Nombre Proveedor</label>
                  <input
                    type='text'
                    id='proveedorName'
                    name='proveedorName'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    value={this.state.form.proveedorName}
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='email'>Email</label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    value={this.state.form.email}
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='telefono'>Teléfono</label>
                  <input
                    type='number'
                    id='telefonoN'
                    name='telefono'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    value={this.state.form.telefono}
                    onChange={this.manejadorChange}
                  />
                  <div className='flex flex-row justify-around mt-4'>
                  <Link to={"/proveedores"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Editar'
                            className='btn btn-primary mt-3 mb-3 mr-4 rounded-3xl px-5'
                            onClick={()=>this.put()}
                        > Editar </Link>

                        <Link to={"/proveedores"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Eliminar'
                            className='btn btn-danger mt-3 mb-3 rounded-3xl px-5'
                            onClick={()=>this.delete()}
                        >
                            Eliminar
                        </Link>
                        <Link to={"/proveedores"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Regresar'
                            className='btn btn-primary mt-3 mb-3 rounded-3xl px-5'
                        >
                            Regresar
                        </Link>
                  </div>
                        
                        </form>
        
                        <hr />
                    </main>
        
                    <footer></footer>
                    </div>
                </div>
                </Menu>
            </>
         );
    }
}
 
export default EditarProveedores;