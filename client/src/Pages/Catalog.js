import React from "react";
import './Catalog.css';
import '../Components/Navigation/Navigation.css';
import CatalogCardModal from '../Components/Modals/CatalogCardModal.js';
import CatalogCard from '../Components/Cards/CatalogCard.js';

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
            return <CatalogCard key={"card"+index} species_name={plant['species_name']} common_name={plant['common_name']} price={'$' + plant['price']} description={plant['description']} img_url={plant['img_url']}
            onClick={() => this.setState({currentIndex: index}) }/>;
          })}

        </div>
      </div>
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
}