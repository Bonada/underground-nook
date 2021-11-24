import React from "react";
import './Catalog.css';
import '../Components/Navigation.css';
import CatalogCardModal from './CatalogCardModal.js';
import CatalogCard from './CatalogCard.js';

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      plants: [],
      currentIndex: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    console.log("mounted")
    this.populateCards();
  }

  render (){
    return(
    <div className="catalog">
          <div className="offset-md-1 col-md-3">
            <h1 className="catalog-header">Catalog</h1>
            <p className="catalog-caption">a collection of our plants</p>
          </div>
          <section class="searchbar">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">🔍</span>
              </div>
                  <input type="text" class="form-control" id="itemSearch" onKeyUp={() => { this.searchListings(); }} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>
          </section>

          {this.state.loading ? (null) : this.state.plants.map((plant, index) => {
            console.log(plant, index);
            return <CatalogCard key={"card"+index} species_name={plant['species_name']} common_name={plant['common_name']} price={'$' + plant['price']} description={plant['description']} img_url={plant['img_url']}
            onClick={() => this.setState({currentIndex: index}) }/>;
          })}

      {this.state.loading ? (null) : <CatalogCardModal plant={this.state.plants[this.state.currentIndex]}/>}
          
    </div>
    )
  }

    async populateCards() {
      fetch("http://localhost:3030/get-plants", {
              method: 'GET',
              mode: 'cors'
          })
            .then(response => response.json())
            .then(data => {
              this.setState({
                loading: false,
                plants: data
              });
            });
    }

    searchListings() {
      // Declare variables
      var input, filter, list, listings, p, i, txtValue;
      input = document.getElementById("itemSearch");
      filter = input.value.toUpperCase();
      listings = document.getElementsByClassName("col-md-2");
      console.log(listings);

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < listings.length; i++) {
          p = listings[i].getElementsByTagName("h2")[0];
          txtValue = p.textContent || p.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              listings[i].style.display = "";
          } else {
              listings[i].style.display = "none";
          }
          // Reposition footer as needed based on element removal/addition
      }
  }

}