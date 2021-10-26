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
      <div id="Post-Login_NavBar" class="Post-Login_NavBar">
      <nav class="navbar navbar-expand-lg ">
        <div id="WebsiteTitle">
          <Link to="/">Home</Link>
        </div>
        <div class = "containerLinks"></div>
        <i class="fa fa-info-circle fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/About">About Us</Link>
        </div>
        <i class="fa fa-pagelines fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/Catalog">Catalog</Link>
        </div>
        <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/Cart">Cart</Link>
        </div>
        <i style={{margin: "0px"}} class="fa fa-user fa-lg" aria-hidden="true"></i>
        <div class="dropdown">
          <button class="dropbtn"> Insert Name 
            <i class="fa fa-caret-down"></i>
          </button>   
          <div class="dropdown-content">
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
