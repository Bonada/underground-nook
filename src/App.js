import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
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
        <Navigation />
      </Router>
    </div>
    
  );
}

export default App;
