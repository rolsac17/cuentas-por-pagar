import React from 'react';
import Menu from './Menu';
import {baseUrl, apiPagoUrl} from '../Servicios/api';
import axios from 'axios';
import { Link } from 'react-router-dom';



class EditarFactura extends React.Component {
    
    state = { 
        form:{
            "pagoId":"",
            "descPago":"",
            "totalPago":"",
            "facturaId":""
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
        let url = baseUrl + apiPagoUrl + "/" + this.state.form.pagoId;
        axios.put(url, this.state.form)
        .then(response =>{
            console.log(response);
        })
      }

      //Metodo para httpDelete

      delete=()=>{
        let url = baseUrl + apiPagoUrl + "/" + this.state.form.pagoId;
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
        let url = baseUrl + apiPagoUrl + "/" + id;

        axios.get(url)
        .then(response => {
            this.setState({
                form:{
                    pagoId : response.data[0].pagoId,
                    descPago : response.data[0].descPago,
                    totalPago:response.data[0].totalPago,
                    facturaId:response.data[0].facturaId
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
                        <label htmlFor='id'>Pago Id</label>
                        <input
                            type='number'
                            id='pagoId'
                            name='pagoId'
                            className='form-control rounded-3xl'
                            autoComplete='off'
                            value={this.state.form.pagoId}
                            onChange={this.manejadorChange}
                        />
        
                        <label htmlFor='nombre'>Desc. Pago</label>
                        <input
                            type='text'
                            id='descPago'
                            name='descPago'
                            className='form-control rounded-3xl'
                            autoComplete='off'
                            value={this.state.form.descPago}
                            onChange={this.manejadorChange}
                        />
        
                        <label htmlFor='total'>Total Pago</label>
                        <input
                            type='number'
                            id='totalPago'
                            name='totalPago'
                            className='form-control rounded-3xl'
                             autoComplete='off'
                            value={this.state.form.totalPago}
                            onChange={this.manejadorChange}
                        />
                        <div className='flex flex-row justify-around mt-4'>
                        <Link to={"/pago"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Editar'
                            className='btn btn-primary mt-3 mb-3 mr-4 rounded-3xl px-5'
                            onClick={()=>this.put()}
                        > Editar </Link>

                        <Link to={"/pago"}
                            style={{ color: 'black' }}
                            type='button'
                            value='Eliminar'
                            className='btn btn-danger mt-3 mb-3 rounded-3xl px-5'
                            onClick={()=>this.delete()}
                        >
                            Eliminar
                        </Link>
                        <Link to={"/pago"}
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
 
export default EditarFactura;