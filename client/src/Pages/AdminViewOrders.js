import React from "react";
import './AdminViewOrders.css';
import '../Components/Navigation.css';
import AdminOrderRow from "./AdminOrderRow";
import Table from "../Components/Table";


function AdminViewOrders() {
  const headers = [
    "Order ID",
    "Purchaser ID",
    "Recepient Name",
    "Street",
    "City",
    "State",
    "Zip",
    "Shipping Carrier",
    "Order Status",
    "Total"
  ];

  const rowComponent = <AdminOrderRow />;

  return (
  <div id="AdminViewOrders">
      <h1 className="AdminViewOrders_Title">View Orders</h1>
      <div className="container" id="AdminViewOrdersContainer">
        <div className="row">
          <div className="col-md col-catalog">
            <div className="edit-catalog-pane">
              <Table headers={headers} row_comp={rowComponent}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewOrders;