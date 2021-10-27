import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Settings from "../Pages/Settings";
import './Navigation.css';

/*global FB*/

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    //testAPI();
  } else {                                 // Not logged into your webpage or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this webpage.';
  }
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', {fields: 'name, email, picture'}, function(response) {
    console.log(response);
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

export default function Navigation() {
  window.fbAsyncInit = function() {
    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };

  return (
    <Router>
      <div id="Post-Login_NavBar" className="Post-Login_NavBar">
      <nav className="navbar navbar-expand-lg ">
        <div id="WebsiteTitle">
          <Link to="/">Home</Link>
        </div>
        <div className = "containerLinks"></div>
        <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/About">About Us</Link>
        </div>
        <i className="fa fa-pagelines fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/Catalog">Catalog</Link>
        </div>
        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/Cart">Cart</Link>
        </div>

    
        <i style={{margin: "0px"}} className="fa fa-user fa-lg" aria-hidden="true"></i>
        <div id="Links">
          <Link to="/Settings">Settings</Link>
        </div>

        <div
          id="Links"
          className="fb-login-button"
          data-width=""
          data-size="medium"
          data-button-type="login_with"
          data-layout="rounded"
          data-auto-logout-link="true"
          data-use-continue-as="false"
          scope="public_profile,email">
        </div>

        {/* <div className="dropdown">
          <button className="dropbtn"> Insert Name 
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
        </div>  */}
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
