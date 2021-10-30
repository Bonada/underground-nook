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

function statusChangeCallback(response) {
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    let userid = "";
    let username = "";
    let email = "";
    // Get user information with api call to /me
    FB.api('/me', {fields: 'name, email, picture'}, function(response) {
      console.log(response);
      userid = response.name;
      username = response.name;
      email = response.email;
    });

    fetch('http://localhost:3030/add-user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: userid,
        username: username,
        email: email
      })
    })
    .then(async response => {
      try {
       const data = await response.json()
       console.log('response data?', data)
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
    // If user doesn't exist in database, add their information and redirect to registration
    // If user exists in database, update navbar and keep users at current webpage
  } else {                                 // Not logged into your webpage or we are unable to tell.
    console.log("Not logged in");
  }
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

        <div id="status"></div>

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
