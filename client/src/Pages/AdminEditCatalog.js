import React from "react";
import './AdminEditCatalog.css';
import '../Components/Navigation/Navigation.css';
import AddPlantModal from '../Components/Modals/AddPlantModal.js';
import EditPlantModal from "../Components/Modals/EditPlantModal";
import Table from "../Components/Table";
import AdminEditCatalogRow from "../Components/Rows/AdminEditCatalogRow";
import AdminDashboardCatalogRow from "../Components/Rows/AdminEditRow";
import AdminEditRow from "../Components/Rows/AdminEditRow";

export default class AdminEditCatalog extends React.Component {

  constructor(props) {
    super(props);
    
    this.table_header = ["", "Name", "Description", "Price", ""];

    this.state = {
      loading: true,
      plants: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    console.log("mounted")
    this.populateAdminCatalog();
  }

  getTableRows(plant, index) {
    return (
      <AdminEditRow key={"catrow"+index} id={plant['id']} name={plant['species_name']} price={plant['price']} desc={plant['description']} img_url={plant['img_url']}
      onClick={() => this.setState({currentIndex: index})}/>
    );
  }

  render() {
    return (
    <div id="AdminEditCatalog">
        <h1 className="AdminEditCatalog_Title">Edit Catalog</h1>
        <div className="container" id="AdminEditCatalogContainer">
          <div className="row">
            <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#addPlantModal">+ Add Plant</a>
            
            <div className="col-md col-catalog">
            
              <div className="edit-catalog-pane">
                <Table headers={this.table_header} row_comp={this.state.loading ? (null) : this.state.plants.map((plant, index) => this.getTableRows(plant, index))} />
              </div>
            </div>
            {this.state.loading ? (null) : <EditPlantModal plant={this.state.plants[this.state.currentIndex]}/>}
          </div>
        </div>

        <AddPlantModal id="addPlantModal" title="Add Plant to Catalog" type="catalog"/>
      </div>
    );
  }

  async populateAdminCatalog() {
    fetch("api/get-plants", {
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
