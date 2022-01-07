import React from "react";
import './About.css';
import '../Components/Navigation/Navigation.css';

import minying from '../Images/minying.jpg';

function About() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-1 col-md-8">
            <h1 className="page-header">About Us</h1>
            <p className="page-caption" id="AboutUs-page-caption">Underground Nook is an NYC-based company dedicated to selling plants.</p>
          </div>
        </div><div className="container-fluid">
          <div className="row cards">
            <div className="row">&nbsp;</div>
            <div className="offset-md-1 col-md-4 d-flex justify-content-center">
              <img src={minying} className="minying" alt="Minying Cao"></img>
            </div>
            <div className="col-md-5">
              Minying Cao is the proud owner of Underground Nook. She started this company as a pastime during the
              pandemic and continues to operate out of her home in New York City, where she takes care of plants and sells
              them online.
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;