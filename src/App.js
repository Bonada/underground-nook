import logo from './logo.svg';
import ppp from './PPP.png';
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
import './App.css';

function CatalogCard() {
  return (
    <div className="col-md-2">
      <div className="card">
        <div className="row">
          <img className="card-img-top" src={ppp} alt="PPP"></img>
          <h2 className="card-title col-md-7 ">Pink Princess Philodendron</h2>
          <div className="card-text col-md-4 ">
            <div className="row">&nbsp;</div>
            <div className="row">
              <p className="col">$165+</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

function Catalog() {
  return (
    <div>
      <div className="row">
        <div className="offset-md-1 col-md-3">
          <h1>Catalog</h1>
          <p>a collection of our plants</p>
        </div>
      </div>
      <div className="container-fluid"></div>
      <div className="row cards">
        <div className="row">&nbsp;</div>
        <div className="col-md-1"></div>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="row">
        <div className="offset-md-1 col-md-8">
          <h1>About Us</h1>
          <p>Underground Nook is an NYC-based company dedicated to selling plants.</p>
        </div>
      </div><div className="container-fluid">
        <div className="row cards">
          <div className="row">&nbsp;</div>
          <div className="offset-md-1 col-md-4 d-flex justify-content-center">
            <img src={minying} className="profile" alt="Minying Cao"></img>
          </div>
          <div className="col-md-5">
            Minying Cao is the proud owner of Underground Nook. She started this company as a pastime during the
            pandemic and continues to operate out of her home in New York City, where she takes care of plants and sells
            them online.
          </div>
        </div>
      </div>
    </div>
  );
}

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




