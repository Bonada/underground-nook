import logo from './logo.svg';
import ppp from './PPP.png';
import monstera from './Monstera.png';
import micans from './Micans.png';
import nanaouk from './Nanaouk.png';
import cebublue from './CebuBlue.png';
import minying from './Minying.jpg';
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

function App() {
  return (
    <header className="App-header container-fluid">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        Navbar goes here
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-3">
          <h1>Catalog</h1>
          <p>a collection of our plants</p>
        </div>
      </div>
      <div className="container-fluid">
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
    </header>
  );
}

export default App;


