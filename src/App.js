import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Catalog from "./Pages/Catalog";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Settings from "./Pages/Settings";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/" exact component={() => <About />} />
          <Route path="/" exact component={() => <Cart />} />
          <Route path="/" exact component={() => <Catalog />} />
          <Route path="/" exact component={() => <Orders />} />
          <Route path="/" exact component={() => <Settings />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
