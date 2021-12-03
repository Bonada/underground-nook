import React from "react";
import './Catalog.css';
import '../Components/Navigation/Navigation.css';
import CatalogCardModal from '../Components/Modals/CatalogCardModal.js';
import CatalogCard from '../Components/Cards/CatalogCard.js';

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      loading: true,
      plants: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    console.log("mounted")
    this._isMounted = true;
    this._isMounted && this.populateCards();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render (){
    return(
    <div className="catalog">
          <div className="offset-md-1 col-md-3">
            <h1 className="catalog-header">Catalog</h1>
            <p className="catalog-caption">a collection of our plants</p>
          </div>
          <section className="searchbar">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">🔍</span>
              </div>
                  <input type="text" className="form-control" id="itemSearch" onKeyUp={() => { this.searchListings(); }} placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>
          </section>

          {this.state.loading ? (null) : this.state.plants.map((plant, index) => {
            console.log(plant, index);
            return <CatalogCard key={"card"+index} species_name={plant['species_name']} common_name={plant['common_name']} price={plant['price']} description={plant['description']} img_url={plant['img_url']}
            onClick={() => this.setState({currentIndex: index}) }/>;
          })}

      {this.state.loading ? (null) : <CatalogCardModal plant={this.state.plants[this.state.currentIndex]} currentUser={this.props.currentUser} />}
          
    </div>
    )
  }

  async populateCards() {
    fetch("http://localhost:3030/get-available-plants", {
            method: 'GET',
            mode: 'cors'
        })
          .then(response => response.json())
          .then(data => {
            this._isMounted && this.setState({
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