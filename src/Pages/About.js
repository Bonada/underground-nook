import React from "react";
import './About.css';
import '../Components/Navigation.css';

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
              <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" className="minying" alt="Minying Cao"></img>
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