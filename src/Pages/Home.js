import React from "react";
import './Home.css';
import '../Components/Navigation.css';

function Home() {
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
    </div>
  );
}

export default Home;