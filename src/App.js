import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Admin_Navigation from "./Components/Admin_Navigation";

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
