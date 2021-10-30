import React from "react";
import './Orders.css';
import '../Components/Navigation.css';
import OrderRow from "./OrderRow.js"

function Orders() {
  return (
    <div className="container-fluid justify-content-center">
      <div className="row">
        <div className="offset-md-1 col-md-3">
          <h1 className="catalog-header">Orders</h1>
        </div>
      </div>
      <div className="offset-md-1 col-md-10 orders-bg">
        <div className="order row header">
          <div className="col-md-4">
            <h1>Address</h1>
          </div>
          <div className="col-md-4">
            <h1>Order ID</h1>
          </div>
          <div className="col-md-2">
            <h1>Paid?</h1>
          </div>
          <div className="col-md-2">
            <h1>Status</h1>
          </div>
        </div>
        <OrderRow />
        <OrderRow />
        <OrderRow />
      </div>
    </div>
  );
}

export default Orders;