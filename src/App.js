
import Login from './Components/Logins';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {Routes} from 'react-router-dom';
import Menu from './Components/Menu';



function App() {
  return (

    <Router>

      <Routes>

        <Route path='/' element={<Login />}/>
        <Route path='/menu' element={<Menu />}/>
          {/* <div className='app'>
          <Login />
          </div>
        </Route> */}

      </Routes>

      

    </Router>

    
  );
}

export default App;
