import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation";

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
