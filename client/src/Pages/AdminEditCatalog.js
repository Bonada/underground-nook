import React from "react";
import './AdminEditCatalog.css';
import '../Components/Navigation/Navigation.css';
import AddPlantModal from '../Components/Modals/AddPlantModal.js';
import EditPlantModal from "../Components/Modals/EditPlantModal";
import AdminDashboardCatalogRow from "../Components/Rows/AdminEditRow";
import AdminEditRow from "../Components/Rows/AdminEditRow";


export default class AdminEditCatalog extends React.Component {

  constructor(props) {
    super(props);
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

  render() {
    return (
    <div id="AdminEditCatalog">
        <h1 className="AdminEditCatalog_Title">Edit Catalog</h1>
        <div className="container" id="AdminEditCatalogContainer">
          <div className="row">
            <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#addPlantModal">+ Add Plant</a>
            
            <div className="col-md col-catalog">
            
              <div className="edit-catalog-pane">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.loading ? (null) : this.state.plants.map((plant, index) => {
                        return (
                          <div onClick={() => this.setState({currentIndex: index}) } >
                          <AdminEditRow key={"catrow"+index} name={plant['species_name']} price={plant['price']} desc={plant['description']} img_url={plant['img_url']}
                          onClick={() => this.setState({currentIndex: index})}/>
                          </div>
                         )
                  })}                    
                  </tbody>
                </table>
              </div>
            </div>
            {this.state.loading ? (null) : <EditPlantModal plant={this.state.plants[this.state.currentIndex]}/>}
          </div>
        </div>

        <div id="editModalDiv">
        </div>
        <AddPlantModal />
      </div>
    );
  }

  async populateAdminCatalog() {
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
