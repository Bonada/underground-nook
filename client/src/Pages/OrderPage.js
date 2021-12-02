import React from "react";
import '../Components/Navigation/Navigation.css';
import './OrderPage.css';
import OrderPageRow from "../Components/Rows/OrderPageRow";

export default class OrderPage extends React.Component {

	componentDidMount() {
		console.log("mounted")
		window.addEventListener('load', this.populateUserOrders());
	  }

	  constructor(props) {
		super(props);
	
		this.state = {
		  loading: true,
		  order: '',
		  currentIndex: 0,
		  plants: []
		};
	  }

	render(){
		return (
			
			<div id="AdminViewOrders">
				{this.state.loading ? (null) : 
				<div>
				<h1 className="AdminViewOrders_Title">{"Order id: " + this.state.order.id}</h1>
				
				<div className="container" id="AdminViewOrdersContainer">
					<p className="p-tag">Purchaser ID: <a href="#">{this.state.order.userid}</a></p>
					<p className="p-tag">Status: {this.state.order.orderstatus}</p>
					<div className="row">
						<div className="col-md col-catalog">
							<div className="edit-catalog-pane">
								<table class="table">
									<thead>
									<tr>
										<th scope="col">Plant ID</th>
										<th scope="col">Image</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
									</tr>
									</thead>
									<tbody>
									{this.state.plants.map((plant, index) => {
										return <OrderPageRow key={"plant" + index} plant={plant}/>;
									})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<h2 className="total-price">{"Total: $" + parseFloat(this.state.order.price).toFixed(2)}</h2>
				</div>
			</div>
		}
		</div>
	);
}

  async populateUserOrders(){
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get("id");
    // console.log(this.props);
    // let id = this.props.currentUser['userid'];
    // alert(id);
    fetch("http://localhost:3030/get-order", {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  orderid: id
              })
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
			  this.setState({
                order: data
              });

			  fetch("http://localhost:3030/get-order-plants", {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						plants: data['plants']
					})
				})
				.then(response => response.json())
				.then(data => {
					console.log(data);
					this.setState({
						loading: false,
						plants: data
					});
				});

            });

	
  }

}
