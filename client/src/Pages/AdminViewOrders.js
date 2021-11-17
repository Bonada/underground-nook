import React from "react";
import './AdminViewOrders.css';
import '../Components/Navigation.css';
import AdminOrderRow from "./AdminOrderRow";

function AdminViewOrders() {
  return (
  <div id="AdminViewOrders">
      <h1 className="AdminViewOrders_Title">View Orders</h1>
      <div className="container" id="AdminViewOrdersContainer">
        <div className="row">
          <div className="col-md col-catalog">
            <div className="edit-catalog-pane">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Shipping Carrier</th>
                    <th scope="col">Order Status</th>
                    <th scope="col">Total</th>
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
    </div>
  );
}

export default AdminViewOrders;