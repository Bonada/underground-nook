import React from "react";
import './Admin.css';
import '../Components/Navigation.css';
import AdminDashboardOrderRow from "./AdminDashboardOrderRow";
import AdminDashboardCatalogRow from "./AdminDashboardCatalogRow";

export default class Admin extends React.Component {

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
      <div id="AdminDashboardPage">
          <h1 className="AdminDashboardPage_Title">Admin Dashboard</h1>
          <div className="container" id="AdminDashboardPageContainer">
            <div className="row">
              <div className="col-md-5 col-catalog">
                <div className="edit-catalog-pane">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.loading ? (null) : this.state.plants.map((plant, index) => {
                        console.log(plant, index);
                        return <AdminDashboardCatalogRow key={"catrow"+index} name={plant['species_name']} price={plant['price']} desc={plant['description']} img_url={plant['img_url']}
                        onClick={() => this.setState({currentIndex: index}) }/>;
                      })}
                    </tbody>
                  </table>
                  <div className="container flex-box-edit-catalog-button">
                    <button className="btn btn-primary edit-catalog-button" type="button" onClick={event => window.location.href='/AdminEditCatalog'}>Edit Catalog</button>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="view-orders-pane">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Order Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AdminDashboardOrderRow />
                      <AdminDashboardOrderRow />
                      <AdminDashboardOrderRow />
                    </tbody>
                  </table>
                  <div className="container flex-box-view-orders-button">
                    <button className="btn view-orders-button" type="button" onClick={event => window.location.href='/AdminViewOrders'}>View Orders</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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