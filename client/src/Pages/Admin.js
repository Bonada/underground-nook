import React from "react";
import './Admin.css';
import '../Components/Navigation/Navigation.css';
import AdminDashboardOrderRow from "../Components/Rows/AdminDashboardOrderRow";
import AdminDashboardCatalogRow from "../Components/Rows/AdminDashboardCatalogRow";
import Table from "../Components/Table.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      plantsloading: true,
      ordersloading: true,
      plants: [],
      orders: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    console.log("mounted")
    this.populateAdminCatalog();
  }

  render() {
    const catalog_headers = ["Image", "Title", "Description", "Price"];
    const catalog_row = this.state.plantsloading ? (null) : this.state.plants.map((plant, index) => {
                          console.log(plant, index);
                          return <AdminDashboardCatalogRow
                                    key={"catrow"+index}
                                    name={plant['species_name']}
                                    price={plant['price']}
                                    desc={plant['description']}
                                    img_url={plant['img_url']}
                                    onClick={() => this.setState({currentIndex: index})}
                                  />;
                        });

    const order_headers = ["Order Id", "Name", "Payment Status", "Order Status"];
    const order_row = this.state.plantsloading ? (null) : this.state.orders.map((order, index) => {
                      console.log(order, index);
                      return <AdminDashboardOrderRow
                                key={"catrow"+index}
                                order={order}
                                onClick={() => this.setState({currentIndex: index})}
                              />;
                    });

    return (
      <div id="AdminDashboardPage">
          <h1 className="AdminDashboardPage_Title">Admin Dashboard</h1>
          <div className="container" id="AdminDashboardPageContainer">
            <div className="row">
              <div className="col-md-5 col-catalog">
                <div className="edit-catalog-pane">
                  <Table headers={catalog_headers} row_comp={catalog_row} />
                  <div className="container flex-box-edit-catalog-button">
                    <Link className="Adminlinks" to="/AdminEditCatalog"><button className="btn btn-primary edit-catalog-button" type="button">Edit Catalog</button></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="view-orders-pane">
                  <Table headers={order_headers} row_comp={order_row}/>
                  <div className="container flex-box-view-orders-button">
                  <Link className="Adminlinks" to="/AdminViewOrders"> <button className="btn btn-primary view-orders-button" type="button">Edit Orders</button></Link>
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
              plantsloading: false,
              plants: data
            });
          });

  fetch("http://localhost:3030/get-orders", {
    method: 'GET',
    mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          ordersloading: false,
          orders: data
        });
      });
  }

}