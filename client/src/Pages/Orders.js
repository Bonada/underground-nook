import React from "react";
import './Orders.css';
import '../Components/Navigation/Navigation.css';
import OrderRow from '../Components/Rows/OrderRow.js';

export default class Orders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      orders: [],
      userId: ""
    }
  }

  componentDidMount() {
    console.log("mounted");
    setTimeout(() => {
      this.setState({ userId: this.props.currentUser.userid });
      console.log(this.state.userId);
      this.populateOrders();
    }, 100);
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
            {this.state.loading ? (null) : this.state.orders.map((order, index) => {
              console.log(order, index);
              return <OrderRow key={index} address="test" orderid="orderid" payment="payment" status="status" />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  async populateOrders() {
    fetch("http://localhost:3030/get-user-orders", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.userId
      })
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