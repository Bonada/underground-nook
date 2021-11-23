import React from "react";
import '../Components/Navigation.css';
import './OrderPage.css';
import OrderPageRow from "./OrderPageRow";
import StateSelect from "./StateSelect.js";

function OrderPage() {
	function handleChange(event) {
		console.log(event.target.value);
	}
  	return (
		<div id="AdminViewOrders">
		
		<h1 className="AdminViewOrders_Title">Order #10028492</h1>
		
		<div className="container" id="AdminViewOrdersContainer">

			<div className="row">
				<div className="col">
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Recepient Name</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="Minying Cao" id="name" />
					</div>

					<div className="mb-3">
						<label htmlFor="street" className="form-label">Street</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="123 5th Ave" id="street" />
					</div>

					<div className="mb-3">
						<label htmlFor="city" className="form-label">City</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
					</div>

					<StateSelect />
					{/* <div className="mb-3">
						<label htmlFor="state" className="form-label">State</label>
						<br />
						
					</div> */}

					<div className="mb-3">
						<label htmlFor="zip" className="form-label">Zip Code</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="12180" id="zip" />
					</div>
				</div>
				<div className="col">
					<div className="mb-3">
						<label htmlFor="purchaserID" className="form-label">Purchaser ID</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="4524022054277037" id="purchaserID" />
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="minyingcao@gmail.com" id="email" />
					</div>

					<div className="mb-3">
						<label htmlFor="phoneNumber" className="form-label">Phone Number</label>
						<br />
						<input className="input-box-modal form-control" type="text" defaultValue="123-456-7890" id="phoneNumber" />
					</div>

					<div className="mb-3">
						<label htmlFor="shippingCarrier" className="form-label">Shipping Carrier</label>
						<br />
						<select class="form-select" aria-label="select shipping carrier" defaultValue="USPS" id="shippingCarrier">
							<option value="USPS">USPS</option>
							<option value="FedExOrUPS">FedEx/UPS</option>
						</select>
					</div>


					<div className="mb-3">
						<label htmlFor="orderStatus" className="form-label">Order Status</label>
						<br />
						<select class="form-select" aria-label="select order status" defaultValue="labeled" onChange={handleChange} id="orderStatus">
							<option value="invoice-sent">Invoice Sent</option>
							<option value="paid">Paid</option>
							<option value="assembled">Assembled</option>
							<option value="packaged">Packaged</option>
							<option value="labeled">Labeled</option>
						</select>
					</div>
					
				</div>
			</div>

			<div className="row save-changes-order-page">
				<div className="col">
					<button className="cart-button" type="button" data-bs-dismiss="modal">Save Changes</button>
				</div>
			</div>
			
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