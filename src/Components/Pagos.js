import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import axios from 'axios';
import {baseUrl, apiPagoUrl} from '../Servicios/api';
import { useRouteLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Pago extends React.Component {
  
    state = {
      pago:[],
      AddPago:{
        "descPago":"",
        "totalPago":"",
        "facturaId":""
      },
      estado:false
    }
    recargar = () =>
    {
      window.location.reload();
      this.AgregarPago();
    }

  //=========AgregarProveedor===============================
    manejadorChange = async e=>{
        await this.setState({
            AddPago:{
            ...this.state.AddPago,
            [e.target.name]:e.target.value
          }
        })
    
      }

      AgregarPago=()=>{
        let url = baseUrl + apiPagoUrl;
    
        axios.post(url, this.state.AddPago)
        .then( response => {
          console.log(response)
        })
      }
 //==========Poblacion De Las Tablas==========================

 clickProveedor(id){
    console.log(id);
  }

  componentDidMount(){
    let url = baseUrl + apiPagoUrl;

    axios.get(url)
    .then(response => {
      this.setState({
        pago:response.data
      })
      
    })
  }
  

render() {
    return ( 
        <>
        <Menu>
        <div className='w-full flex flex-col center container items-center'>
            <div className="container m-5 content-center" style={{width:"95%"}}>

                <header className="bg-[#a21caf] rounded-3xl">
                    <h1 className='text-center text-white hover:text-white px-2 py-2 text-base font-medium rounded-md font-bold' >
                        Formulario de Pago</h1>
                </header>

                <main className='px-1 pt-6 text-center flex flex-col center container items-center'>
                <div  className='rounded-3xl bg-slate-100 w-4/12 mt-8'>
                <form>
                    <div className='flex flex-col center container items-center mb-12 mt-16'>
                  <label htmlFor='id' className='font-bold'>ID de factura</label>
                  <input
                    type='number'
                    id='facturaId'
                    name='facturaId'
                    className='form-control rounded-3xl w-5/6'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
                </div>
                <div className='flex flex-col center container items-center mb-16'>
                  <label htmlFor='email' className='font-bold'>Pago</label>
                  <input
                    type='number'
                    id='totalPago'
                    name='totalPago'
                    className='form-control rounded-3xl w-3/4'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
                </div>
                <div className='flex flex-col center container items-center mb-16'>
                  <label htmlFor='email' className='font-bold'>Descripción del Pago</label>
                  <input
                    type='text'
                    id='descPago'
                    name='descPago'
                    className='form-control rounded-3xl w-3/4'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
                  <hr />

<table className='table table-bordered table-striped'>
    <thead>
        <tr>
        <th>Pago Id</th>
        <th>Monto Pagado</th>
        <th>Descripción</th>
        <th>Factura Id</th>
        </tr>
    </thead>

    

    <tbody >
    {this.state.pago.map((value, index)=>{
        return(
            <tr key={index}>
            <td><Link to={"/editarPago/"+value.pagoId}>{value.pagoId}</Link></td>
            <td>{value.totalPago}</td>
            <td>{value.descPago}</td>
            <td>{value.facturaId}</td>
            </tr>
        )
        })}
    </tbody>
</table>
                </div>
                <div>
                  <input
                    style={{ color: 'black' }}
                    type='button'
                    value='Verificar'
                    className='hover: mt-3 mb-3 rounded-3xl w-1/3 bg-indigo-900 text-white p-2 hover:bg-indigo-400' 
                    id='button'
                    onClick={this.recargar}
                  />
                  </div>
                </form>
                </div>
              </main>
  
              <footer></footer>

            </div>
        </div>
        </Menu>
        </>
     );
}
};
export default Pago;