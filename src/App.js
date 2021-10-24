import logo from './logo.svg';
import monstera from './Monstera.png';
import micans from './Micans.png';
import nanaouk from './Nanaouk.png';
import cebublue from './CebuBlue.png';
import minying from './Minying.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Catalog from './Catalog.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <Router>
      <header className="App-header container-fluid">
        <div>
          <ul>
            <li>
              <Link to="/Catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/Catalog">
            <Catalog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </header>
    </Router >
  );
}

export default App;




