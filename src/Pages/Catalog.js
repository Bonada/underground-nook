import React from "react";
import './Catalog.css';
import '../Components/Navigation.css';

import CatalogCard from './CatalogCard.js'

export default class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      plants: []
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => { this.populateCards() });
  }

  render (){
    return(
    <div className="catalog">
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-1 col-md-3">
            <h1 className="catalog-header">Catalog</h1>
            <p className="catalog-caption">a collection of our plants</p>
          </div>
        </div>
        <div className="row cards">
          <div className="row">&nbsp;</div>
          <div className="col-md-1"></div>

          {this.state.loading ? (null) : this.state.plants.map((plant, index) => {
            console.log(plant, index);
            return <CatalogCard key={"card"+index} species_name={plant['species_name']} common_name={plant['common_name']} price={plant['price']} description={plant['description']} img_url={plant['img_url']}/>;
          })}

        </div>
      </div>
      <div className="modal fade" id="catalogModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="catalog modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="catalog card">
                  <div className="row">
                    <img className="catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img>
                  </div>
                </div>
                <div className="row">&nbsp;</div>
                <div className="row">
                  <h2>Pink Princess Philodendron</h2>
                </div>
                <div className="row">
                  <p>This beautiful PPP is well rooted and ships in a 4" pot.</p>
                  <p>Price: $175.00</p>
                </div>
              </div>
            </div>
            <div className="catalog modal-footer">
              <button className="cart-button btn-primary" type="button" data-bs-dismiss="modal">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
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
}