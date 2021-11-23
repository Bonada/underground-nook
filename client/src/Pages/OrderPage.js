import React from "react";
import '../Components/Navigation/Navigation.css';
import './OrderPage.css';
import OrderPageRow from "../Components/Rows/OrderPageRow";

function OrderPage() {
  	return (
		<div id="AdminViewOrders">
			<h1 className="AdminViewOrders_Title">Order #10028492</h1>
			
			<div className="container" id="AdminViewOrdersContainer">
				<p className="p-tag">Purchaser ID: <a href="#">4524022054277037</a></p>
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
									<OrderPageRow />
									<OrderPageRow />
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<h2 className="total-price">Total: $125.00</h2>
			</div>
		</div>
  );
}

export default OrderPage;