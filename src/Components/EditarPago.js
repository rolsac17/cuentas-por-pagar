import React from 'react';
import Menu from './Menu';
import {baseUrl, apiProveedorUrl, apiPagoUrl} from '../Servicios/api';
import axios from 'axios';
import { Link } from 'react-router-dom';



class EditarPago extends React.Component {
    
    state = { 
        form:{
            "descPago":"",
            "totalPago":"",
            "facturaId":""
        },
        Facturas:[],
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
        let actual = window.location+'';
        let split = actual.split("/");
        let id = split[split.length-1];
        let url = baseUrl + apiPagoUrl + "/editar/" + id;
        axios.put(url, this.state.form)
        .then(response =>{
            console.log(response);
        })
      }

      //Metodo para httpDelete

      delete=()=>{
        let actual = window.location+'';
        let split = actual.split("/");
        let id = split[split.length-1];
        let url = baseUrl + apiPagoUrl + "/editar/" + id;
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
        let url = baseUrl + apiPagoUrl + "/editar/" + id;

        axios.get(url)
        .then(response => {
            this.setState({
                form:{
                    IdProveedor : response.data[0].IdProveedor,
                    proveedorName : response.data[0].proveedorName,
                    email:response.data[0].email,
                    telefono:response.data[0].telefono
                },

                Facturas: response.data[0].facturas
            })

            console.log(response)
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

                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                <th>Factura Id</th>
                                <th>noFactura</th>
                                <th>Total Factura</th>
                                </tr>
                            </thead>

                            
            
                            <tbody >
                            {this.state.Facturas.map((value, index)=>{
                                return(
                                    <tr key={index}>
                                    <td>{value.facturaId}</td>
                                    <td>{value.noFactura}</td>
                                    <td>{value.totalFactura}</td>
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
}
 
export default EditarPago;