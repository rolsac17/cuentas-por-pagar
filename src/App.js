
import Login from './Components/Logins';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {Routes} from 'react-router-dom';
import Menu from './Components/Menu';
import Proveedores from './Components/Proveedores';



function App() {

  return (

    <Router>

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/proveedores' element={<Proveedores />} />

      </Routes>
      

    </Router>

    
  );
}

export default App;
