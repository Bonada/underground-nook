import React from "react";
import './Orders.css';
import '../Components/Navigation/Navigation.css';
import OrderRow from '../Components/Rows/OrderRow.js';

export default class Orders extends React.Component {

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
    window.addEventListener('load', this.populateUserOrders());
  }

  render() {
    return (
      <div className="container-fluid justify-content-center">
        <div className="row">
          <div className="offset-md-1 col-md-3" id="OrderHeader">
            <h1 className="orders-header">Orders</h1>
          </div>
          <table className="orders table table-bg">
            <thead>
              <tr>
                <th scope="col">Address</th>
                <th scope="col">Order ID</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Order Status</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {this.state.loading ? (null) : this.state.orders.map((order, index) => {
                console.log(this.state.orders);
                console.log(order, index);
                return <OrderRow key={"order" + index} order={order}
                  onClick={() => this.setState({ currentIndex: index })} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  async populateUserOrders() {

    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // let id = urlParams.get("id");
    console.log(this.props);
    let id = this.props.currentUser['userid'];
    // alert(id);
    fetch("/api/get-user-orders", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: id
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          orders: data
        });
      });
  }

}