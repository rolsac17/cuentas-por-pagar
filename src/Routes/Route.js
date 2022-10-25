import Login from '../Components/Logins';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Menu from '../Components/Menu';
import Proveedores from '../Components/Proveedores';
import Reportes from '../Components/Reportes';
import Factura from '../Components/Facturas';
import Historial from '../Components/Historial';
import Resumen from '../Components/Resumen';

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path='/menu' element={<Resumen />} />
        <Route path='/proveedores' element={<Proveedores />} />
        <Route path='/reportes' element={<Reportes />} />
        <Route path='/factura' element={<Factura />} />
        <Route path='/historial' element={<Historial />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
