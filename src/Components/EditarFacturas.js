import React from 'react';
import {withRouter} from './params'
import Menu from './Menu';
import {baseUrl, apiFacturasUrl} from '../Servicios/api';
import axios from 'axios';
import { Link } from 'react-router-dom';



class EditarFactura extends React.Component {
    
    state = { 
        form:{
            "facturaId":"",
            "noFactura":"",
            "proveedorId":"",
            "totalFactura":""
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
        let url = baseUrl + apiFacturasUrl + "/" + this.state.form.facturaId;
        axios.put(url, this.state.form)
        .then(response =>{
            console.log(response);
        })
      }

      //Metodo para httpDelete

      delete=()=>{
        let url = baseUrl + apiFacturasUrl + "/" + this.state.form.facturaId;
        axios.delete(url)
        .then(response =>{
            console.log(response);
        })
      }

      //obtener los valores y almacenarlos
    componentDidMount=()=>{
        let facturaId = window.location.pathname;
        let url = baseUrl + apiFacturasUrl +facturaId

        axios.get(url)
        .then(response => {
            this.setState({
                form:{
                    facturaId : response.data.facturaId,
                    noFactura : response.data.noFactura,
                    proveedorId:response.data.proveedorId,
                    totalFactura:response.data.totalFactura
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
                        Formulario de Facturación
                        </h1>
                    </header>
        
                    <main className='px-1 pt-6'>
                        <form action=''>
                        <label htmlFor='id'>No. Factura</label>
                        <input
                            type='number'
                            id='noFactura'
                            name='noFactura'
                            className='form-control rounded-3xl'
                            autoComplete='off'
                            value={this.state.form.noFactura}
                            onChange={this.manejadorChange}
                        />
        
                        <label htmlFor='nombre'>Id Proveedor</label>
                        <input
                            type='number'
                            id='proveedorId'
                            name='proveedorId'
                            className='form-control rounded-3xl'
                            autoComplete='off'
                            value={this.state.form.proveedorId}
                            onChange={this.manejadorChange}
                        />
        
                        <label htmlFor='total'>Total Factura</label>
                        <input
                            type='number'
                            id='total'
                            name='totalFactura'
                            className='form-control rounded-3xl'
                            autoComplete='off'
                            value={this.state.form.totalFactura}
                            onChange={this.manejadorChange}
                        />
        
                        <Link to={"/factura"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Editar'
                            className='btn btn-primary mt-3 mb-3 mr-4 rounded-3xl px-5'
                            onClick={()=>this.put()}
                        > Editar </Link>

                        <input
                            style={{ color: 'black' }}
                            type='button'
                            value='Eliminar'
                            className='btn btn-danger mt-3 mb-3 rounded-3xl px-5'
                            onClick={()=>this.delete()}
                        />
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
 
export default EditarFactura;