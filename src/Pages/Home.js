import React from "react";
import './Home.css';
import '../Components/Navigation.css';
import fetch from 'node-fetch';

export default class Home extends React.Component {
  render() {
      return (
        <div className="home">
            <div id="NavBarResponsive" class="embed-responsive">
            </div>
            <h1 id="Home_Title">Underground Nook</h1>
            <button>VIEW CATALOG</button>
            <div class="rectangle1"></div>
            <div class="rectangle2"></div>
            <div class="rectangle3"></div>
            <div class="rectangle4"></div>
            <button onClick={() => { this.getPlants(); }}>TEST GET PLANTS</button>
        </div>
      );
  }

  async getPlants() {
    fetch("http://localhost:3030/get-plants", {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
  }

}