import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home";
import './Navigation.css';
import Logo from '../Images/Logo.png'; // gives image path

export default function PreLogin_Navigation() {
  return (
    <Router>
      <div id="Pre-Login_NavBar" className="Pre-Login_NavBar">
      <nav className="navbar navbar-expand-lg ">
        <img className="img-fluid" id="Logo" src={Logo} />
        <div id="WebsiteTitle">
          <Link to="/">Underground Nook</Link>
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

        <button className="btn " id="NavbarButton" type="submit"> 
          <i className="ri-facebook-circle-fill ri-lg"></i> Log In with Facebook
        </button>
      </nav>
    </div>

      {/* <hr /> */}

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
      </Switch>
    </Router>
  );
}

//ReactDOM.render(<PreLogin_Navigation />, document.getElementById("root"));
