import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Catalog from "../Pages/Catalog";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Orders from "../Pages/Orders";
import Settings from "../Pages/Settings";
import AdminEditCatalog from "../Pages/AdminEditCatalog";
import AdminViewOrders from "../Pages/AdminViewOrders";
import Logo from '../Images/Logo.png'; // gives image path
import './Navigation.css';

/*global FB*/

export default function Navigation(props) {
  const admin_ids = ['4524022054277037', '2034884766556492', '1839081979786582'];

  const [userType, setUserType] = useState("Pre-Login");
  const [redirect, setRedirect] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  // Check if user is admin or general user based on id
  const handleUserLogin = (id, redirect=false) => {
    // Set user type to render new navbar, update userId with logged in user
    if (admin_ids.includes(id)) {
      setUserType("Admin");
      console.log("Admin user is logged in");
      // Redirect to admin homepage if admin and redirect is desired
      if (redirect) {
        console.log("Redirecting to admin page...");
        setRedirect("/Admin");
      }
    } else {
      setUserType("Post-Login");
      console.log("General user is logged in");
      // Redirect to catalog page if general user and redirect is desired
      if (redirect) {
        console.log("Redirecting to catalog...");
        setRedirect("/Catalog");
      }
    }
  }

  window.fbAsyncInit = function() {
    // Check initial login status
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        fetch('http://localhost:3030/get-user', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({userid: response.authResponse.userID})
        })
        .then(async user_response => {
          const data = user_response.json();
          setUserInfo(data);
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
        handleUserLogin(response.authResponse.userID);
      }
      else {
        setUserType("Pre-Login");
        console.log("User not logged in");
      }
    });
  };

  const handleFacebookInfo = () => {
    // Get user information with api call to /me
    FB.api('/me', {fields: 'name, email, picture'}, function(fb_response) {
      console.log(fb_response);

      setUserInfo({
        userid: fb_response.id,
        username: fb_response.name,
        email: fb_response.email
      });

      console.log(userInfo);

      // If user doesn't exist in database, add their information and redirect to registration
      fetch('http://localhost:3030/add-user', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: fb_response.id,
          username: fb_response.name,
          email: fb_response.email
        })
      })
      .then(async adduser_response => {
        const data = await adduser_response.json()
        console.log(data);

        if (data.success) {     // New user was added to database
          // Redirect to registration page
          console.log("Redirecting to registration...");
          //setCurrentPage("Registration");
          setRedirect("/Registration");
        }
        else {
          handleUserLogin(userInfo.userid, true);
        }
      })
      .catch(e => {
        console.log(e);
      });
    });
  }

  const startLogin = () => {
    try {
      FB.login(function(response) {
        console.log("login_event");
        if (response.status === 'connected') {
          handleFacebookInfo();
        } else {
          console.log("Log in cancelled");
        }
      });
    }
    catch (e) {
      console.log(e);
      console.log("Login unsuccesful");
    }
  }

  const startLogout = () => {
    try {
      FB.logout(function(response) {
        console.log("logout_event");
        if (response.status === 'unknown') {
          // Redirect to homepage
          console.log("Redirecting to homepage...");
          setUserType("Pre-Login");
          setUserInfo({});
          setRedirect("/");
        } else {
          console.log("Log out didn't work");
        }
      });
    }
    catch (e) {
      console.log(e);
      console.log("Logout unsuccesful");
    }
  }

  // Try redirect with else branch
  var showPage = '';
  if (redirect) {
    showPage = <Redirect to={redirect} />;
  }
  else {
    showPage = '';
  }

  return (
    <Router >
      <div id={userType + "_NavBar"} className={userType + "_NavBar"}>
        <nav className="navbar navbar-expand-lg ">
          <img className="img-fluid" id="Logo" alt="Logo" src={Logo} />
          <div id="WebsiteTitle">
            <Link to="/">Underground Nook</Link>
          </div>

          <div className = "containerLinks"></div>

          {userType === "Admin" &&
            <i className="fa ri-admin-line fa-lg" aria-hidden="true"></i>
          }
          {userType === "Admin" && 
            <div className="Links">
              <Link to="/Admin">Admin Page</Link>
            </div>
          }


          <i className="fa fa-info-circle fa-lg" aria-hidden="true"></i>
          <div className="Links">
            <Link to="/About">About Us</Link>
          </div>
          <i className="fa fa-pagelines fa-lg" aria-hidden="true"></i>
          <div className="Links">
            <Link to="/Catalog">Catalog</Link>
          </div>

          {userType === "Pre-Login" &&
            <button className="btn " id="NavbarButton" onClick={startLogin}> 
              <i className="ri-facebook-circle-fill ri-lg"></i> Log In with Facebook
            </button>
          }

          {(userType === "Admin" || userType === "Post-Login") &&
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
          }
          {(userType === "Admin" || userType === "Post-Login") &&
            <div className="Links">
              <Link to="/Cart">Cart</Link>
            </div>
          }

          {(userType === "Admin" || userType === "Post-Login") &&
            <div className="dropdown">
              <button className="dropbtn btn"> <p>{userInfo.username}</p>
                <i className="fa fa-caret-down"></i>
              </button>   
              <div className="dropdown-content">
                <div id="DropDown">
                  <Link to="/Settings">Settings</Link>
                </div>
                <div id="DropDown">
                  <Link to="/Orders">Orders</Link>
                </div>
                <div id="DropDown">
                  <button id="LogoutBtn" onClick={startLogout}>Log Out</button>
                </div>
              </div>
            </div>
          } 
        </nav>
      </div>

      {showPage}

      <Switch>
          <Route exact path="/">
            <Home currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
          </Route>
          {userType === "Admin" &&
            <Route path="/Admin">
              <Admin currentUser={userInfo.userid} />
            </Route>
          }
          <Route path="/AdminViewOrders">
              <AdminViewOrders />
          </Route>
          <Route path="/AdminEditCatalog">
            <AdminEditCatalog />
          </Route>
          <Route path="/About">
            <About currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
          </Route>
          <Route path="/Catalog">
            <Catalog currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
          </Route>
          {(userType === "Admin" || userType === "Post-Login") &&
            <Route path="/Cart">
              <Cart currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
            </Route>
          }
          {(userType === "Admin" || userType === "Post-Login") &&
            <Route path="/Settings">
              <Settings currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
            </Route>
          }
          {(userType === "Admin" || userType === "Post-Login") &&
            <Route path="/Orders">
              <Orders currentUser={userInfo.userid} isAdmin={admin_ids.includes(userInfo.userid)} />
            </Route>
          }
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Navigation />, document.getElementById("root"));
