import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import '../Components/Navigation.css';
import HexagonPlants from '../Images/HexagonPlants.PNG'; // gives image path
import Plant1 from '../Images/Plant1.PNG'; // gives image path
import Plant2 from '../Images/Plant2.PNG'; // gives image path

function Home() {
  return (
    <div id="HomePage">
      <h1 id="Home_Title">Underground Nook</h1>
      <Link to="/Catalog">
        <button type = "button" className="home-catalog-button">
          VIEW CATALOG
        </button>
      </Link>
      
      <div className="rectangle1"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      <div className="rectangle4"></div>
      <img className="img-fluid" id="HexagonsImage" src={HexagonPlants} />
      <img className="img-fluid" id="Plant1" src={Plant1} />
      <img className="img-fluid" id="Plant2" src={Plant2} />
    </div>
  );
}

export default Home;