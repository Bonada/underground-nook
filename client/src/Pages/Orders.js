import React from "react";
import './Orders.css';
import '../Components/Navigation.css';
import OrderRow from './OrderRow.js';

export default class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      orders: []
    }
  }

  componentDidMount() {
    console.log("mounted")
    this.populateOrders();
  }

  render() {
    return (
      <div className="container-fluid justify-content-center">
        <div className="row">
          <div className="offset-md-1 col-md-3">
            <h1 className="orders-header">Orders</h1>
          </div>
        </div>
        <table className="orders table table-bg">
          <thead>
            <tr>
              <th scope="col">Address</th>
              <th scope="col">Order ID</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Order Status</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <OrderRow />
            <OrderRow />
            <OrderRow />
          </tbody>
        </table>
      </div>
    );
  }

  async populateOrders() {
    fetch("http://localhost:3030/get-user-orders", {
      method: 'GET',
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          orders: data
        });
        console.log(data);
      });
  }
}