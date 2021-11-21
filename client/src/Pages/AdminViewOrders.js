import React from "react";
import './AdminViewOrders.css';
import '../Components/Navigation.css';
import AdminOrderRow from "./AdminOrderRow";
import ExportDataModal from "./ExportDataModal";

function AdminViewOrders() {
  return (
  <div id="AdminViewOrders">
      <h1 className="AdminViewOrders_Title">View Orders</h1>
      <div className="container" id="AdminViewOrdersContainer">
        <div className="row">
        <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#exportDataModal">Export Shipping Data</a>
          <div className="col-md col-catalog">
            <div className="edit-catalog-pane">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Recepient Name</th>
                    <th scope="col">Address 1</th>
                    <th scope="col">Address 2</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                    <th scope="col">Shipping Carrier</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <AdminOrderRow />
                  <AdminOrderRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ExportDataModal />
    </div>
  );
}

export default AdminViewOrders;