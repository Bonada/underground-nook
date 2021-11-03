import React from "react";
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

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleFacebookInfo = this.handleFacebookInfo.bind(this);
    this.userLoggedIn = false;
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.Event.subscribe('auth.login', function(response) {
        console.log("login_event");
        if (response.status === 'connected') {
          this.userLoggedIn = true;
          this.handleFacebookInfo();
        } else {
          console.log("Log in cancelled");
        }
      }.bind(this));

      FB.Event.subscribe('auth.logout', function(response) {
        console.log("logout_event");
        if (response.status === 'unknown') {
          this.userLoggedIn = false;
          // Redirect to homepage
          console.log("Redirecting to homepage...");
        } else {
          console.log("Log out didn't work");
        }
      }.bind(this));
    }.bind(this);
  }

  handleFacebookInfo() {
    // Get user information with api call to /me
    FB.api('/me', {fields: 'name, email, picture'}, function(response) {
      console.log(response);

      // If user doesn't exist in database, add their information and redirect to registration
      fetch('http://localhost:3030/add-user', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: response.name,
          username: response.name,
          email: response.email
        })
      })
      .then(async response => {
        const data = await response.json()
        console.log(data);

        if (data.success) {     // New user was added to database
          // Redirect to registration page
          console.log("Redirecting to registration...");
        }
        else {
          // Redirect to catalog page
          console.log("Redirecting to catalog...");
        }
      })
      .catch(e => {
        console.log(e);
      });
    });
  }

  render() {
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
            data-use-continue-as="true"
            >
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
}

ReactDOM.render(<Navigation />, document.getElementById("root"));
