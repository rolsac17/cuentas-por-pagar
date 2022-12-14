import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import axios from 'axios';
import {baseUrl, apiFacturasUrl} from '../Servicios/api';

class Factura extends React.Component {
  
  state = {
    facturas:[],
    AddFacturas:{
      "noFactura":"",
      "totalFactura":"",
      "proveedorId":""
    },
    estado:false
  }
  recargar = () =>
  {
    window.location.reload();
    this.AgregarFactura();
  }
  //  clickFactura(id){
  //    console.log(id);

  //    // NoFactura = document.getElementById('noFactura');
  //    // noFactura.value = this.state.obtenerFacturas.
  //  }
  
  //=========AgregarFacturas===============================
  manejadorChange = async e=>{
    await this.setState({
      AddFacturas:{
        ...this.state.AddFacturas,
        [e.target.name]:e.target.value
      }
    })

  }
  

  AgregarFactura=()=>{
    let url = baseUrl + apiFacturasUrl;

    axios.post(url, this.state.AddFacturas)
    .then( response => {
      console.log(response)
    })

  }

  //==========Poblacion De Las Tablas==========================

  

  componentDidMount(){
    let url = baseUrl + apiFacturasUrl;

    axios.get(url)
    .then(response => {
      this.setState({
        facturas:response.data
      })

      console.log(response);
    })
  }

  render() {
    
    //const [count, setCount] = useState(0);
    return (
      <>
        <Menu>  
        <div className='w-full flex flex-col center container items-center'>
          <div className='container m-5'style={{ width: '95%' }}
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
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='nombre'>Id Proveedor</label>
                  <input
                    type='number'
                    id='proveedorId'
                    name='proveedorId'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />
  
                  <label htmlFor='total'>Total Factura</label>
                  <input
                    type='number'
                    id='total'
                    name='totalFactura'
                    className='form-control rounded-3xl'
                    autoComplete='off'
                    onChange={this.manejadorChange}
                  />

                  <input
                    style={{ color: 'black'}}
                    type='button'
                    value='Guardar'
                    className='btn btn-primary hover: mt-3 mb-3 rounded-3xl w-1/3' 
                    id='button'
                    onClick={this.recargar}
                  />
                </form>
  
                <hr />
  
                <table className='table table-bordered table-striped'>
                  <thead>
                    <tr>
                      <th>Id Factura</th>
                      <th>No. Factura</th>
                      <th>Proveedor</th>
                      <th>Total</th>
                    </tr>
                  </thead>
  
                  <tbody >
                    {this.state.facturas.map((value, index)=>{
                      return(
                        <tr key={index}>
                          <td><Link to={"/editarFactura/"+value.facturaId}>{value.facturaId}</Link></td>
                          <td>{value.noFactura}</td>
                          <td>{value.proveedor.proveedorName}</td>
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
};

export default Factura;
