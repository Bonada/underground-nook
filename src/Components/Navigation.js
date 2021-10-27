import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Settings from "../Pages/Settings";
import './Navigation.css';

export default function Navigation() {
  return (
    <Router>
      <div id="Post-Login_NavBar" className="Post-Login_NavBar">
      <nav className="navbar navbar-expand-lg ">
        <div id="WebsiteTitle">
          <Link to="/">Home</Link>
        </div>

        <div className = "containerLinks"></div>
        <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
     
        <div className="Links">
          <Link to="/About">About Us</Link>
        </div>
        <i className="fa fa-pagelines fa-lg" aria-hidden="true"></i>
        <div className="Links">
          <Link to="/Catalog">Catalog</Link>
        </div>
        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
        <div className="Links">
          <Link to="/Cart">Cart</Link>
        </div>

        <div className="dropdown">
          <button className="dropbtn btn"> Minying 
            <i className="fa fa-caret-down"></i>
          </button>   
          <div className="dropdown-content">
            <div id="DropDown">
              <Link to="/Settings">Settings</Link>
            </div>
            <div id="DropDown">
              <Link to="/Orders">Orders</Link>
            </div>
          </div>
        </div> 
      </nav>
    </div>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Catalog">
          <Catalog />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
        <Route path="/Orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Navigation />, document.getElementById("root"));
