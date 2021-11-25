import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import '../Components/Navigation/Navigation.css';
import HexagonPlants from '../Images/HexagonPlants.PNG'; // gives image path
import Plant1 from '../Images/Plant1.PNG'; // gives image path
import Plant2 from '../Images/Plant2.PNG'; // gives image path

export default function Home(props) {
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
      <img className="img-fluid" id="HexagonsImage" src={HexagonPlants} alt="Hexagon Plants" />
      <img className="img-fluid" id="Plant1" src={Plant1} alt="Plant 1" />
      <img className="img-fluid" id="Plant2" src={Plant2} alt="Plant2" />
    </div>
  );
}

  // async getPlants() {
  //   fetch("http://localhost:3030/get-plants", {
  //           method: 'GET',
  //           mode: 'cors'
  //       })
  //           .then(response => response.json())
  //           .then(data => {
  //               console.log(data);
  //           });
  // }

//}