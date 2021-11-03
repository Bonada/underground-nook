import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostLogin_Navigation from "./Components/PostLogin_Navigation";
import PreLogin_Navigation from "./Components/PreLogin_Navigation";
import Admin_Navigation from "./Components/Admin_Navigation";
// import About from "./Pages/About";
// import Cart from "./Pages/Cart";
// import Catalog from "./Pages/Catalog";
// import Home from "./Pages/Home";
// import Orders from "./Pages/Orders";
// import Settings from "./Pages/Settings";

function App() {  
  return (
    <div className="App">
      <Router>
        <Admin_Navigation />
      </Router>
    </div>
    
  );
}

export default App;
