import React from "react";
import './About.css';
import '../Components/Navigation/Navigation.css';

//import minying from './Minying.jpg';

function About() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-1 col-md-8">
            <h1 className="page-header">About Us</h1>
            <p className="page-caption">Underground Nook is an NYC-based company dedicated to selling plants.</p>
          </div>
        </div><div className="container-fluid">
          <div className="row cards">
            <div className="row">&nbsp;</div>
            <div className="offset-md-1 col-md-4 d-flex justify-content-center">
              <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/226459487_4524022057610370_3907888330237286568_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TjGPQobyMS4AX8qJm71&_nc_ht=scontent-lga3-2.xx&oh=1c6998be4882972003086bbc00887140&oe=61AA80DB" className="minying" alt="Minying Cao"></img>
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