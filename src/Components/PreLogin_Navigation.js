import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home";
import './Navigation.css';
import Logo from '../Images/Logo.png'; // gives image path

/*global FB*/

export default class PreLogin_Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleFacebookInfo = this.handleFacebookInfo.bind(this);
    this.startLogin = this.startLogin.bind(this);
    this.startLogout = this.startLogout.bind(this);
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

  startLogin() {
    try {
      FB.login();
      this.userLoggedIn = true;
    }
    catch (e) {
      console.log(e);
      console.log("Login unsuccesful");
      this.userLoggedIn = false;
    }
  }

  startLogout() {
    try {
      FB.logout();
      this.userLoggedIn = false;
    }
    catch (e) {
      console.log(e);
      console.log("Logout unsuccesful");
      this.userLoggedIn = true;
    }
  }

  render() {
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

          <button className="btn " id="NavbarButton" onClick={this.startLogin}> 
            <i class="ri-facebook-circle-fill ri-lg"></i> Log In with Facebook
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
}

//ReactDOM.render(<PreLogin_Navigation />, document.getElementById("root"));
