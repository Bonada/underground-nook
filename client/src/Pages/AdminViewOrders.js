import React from "react";
import './AdminViewOrders.css';
import '../Components/Navigation/Navigation.css';
import AdminOrderRow from "../Components/Rows/AdminOrderRow";
import ExportDataModal from "../Components/Modals/ExportDataModal";
import EditOrderModal from "../Components/Modals/EditOrderModal";
import Table from "../Components/Table";

export default class AdminViewOrders extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orders: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    console.log("mounted")
    this.populateAdminOrders();
  }

  handleDeleteClicked(plants, id) {
      fetch("http://localhost:3030/delete-order", {
          method: 'DELETE',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              plants: plants,
              id: id
          })
      })
      .then(async response => response.json())
      .then(data => {
        if (data.success) {
          alert("Order removed");
          this.populateAdminOrders();
        }
      })
      .catch(e => console.log(e));
  }

  render(){

    const headers = [
      "Order ID",
      "Recepient Name",
      "Address",
      "Apt/Suit No.",
      "City",
      "State",
      "Zip",
      "Shipping Carrier",
      "Order Status",
      "Total",
      ""
    ];

    const rowComponent = this.state.loading ? (null) : this.state.orders.map((order, index) => {
      console.log(order, index);
      return <AdminOrderRow
                key={"catrow"+index}
                order={order}
                onClick={() => this.setState({currentIndex: index})}
                handleDeleteClicked={this.handleDeleteClicked.bind(this, order.plants, order.id)}
              />;
    });

  return (
    <div id="AdminViewOrders">
        <h1 className="AdminViewOrders_Title">View Orders</h1>
        <div className="container" id="AdminViewOrdersContainer">
          <div className="row">
          <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#exportDataModal">Export Shipping Data</a>
            <div className="col-md col-catalog">
              <div className="edit-catalog-pane">
                <Table headers={headers} row_comp={rowComponent}/>;
              </div>
            </div>
          </div>
        </div>
        {this.state.loading || this.state.orders == 0 ? (null) : <EditOrderModal order={this.state.orders[this.state.currentIndex]}/>}
      <ExportDataModal></ExportDataModal>
      </div>
    );
  }

  async populateAdminOrders() {
    fetch("http://localhost:3030/get-orders", {
            method: 'GET',
            mode: 'cors'
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
              loading: false,
              orders: data
            });
          });
  }
}