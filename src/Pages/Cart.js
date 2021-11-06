import React, { Component } from 'react'
import './Cart.css';
import '../Components/Navigation.css';
import CartOrderCard from './CartOrderCard.js'
import CartAddresses from './CartAddresses.js'


function Cart() {
  return (
    <div id="CartPage">
      <h1 className="CartPage_Title"> Shopping Cart</h1>
      <div className="container" id="CartPageContainer">
        <div className="row">
          <div className="col-md-3" id="Order">
            <h1 className="YourOrderTitle">Your Order</h1>
            <div className="OrderContents">
              <CartOrderCard />
              <CartOrderCard />
              <button type = "button" className="AddPurgePlant-button">
                + Add Purge Plant
              </button>
              <div className="row" id="OrderTotal">
                <div className="col-md-6">
                  <h1>Total</h1>
                </div>
                <div className="col-md-3">
                  <h1 className="TotalPrice">$207.00</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-8">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <h1 className="AccordianTitle">Select Delivery Address</h1>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <h2 className="AccordianSubtitle">Select or Add an Address:</h2>
                      <CartAddresses />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <h1 className="AccordianTitle">Select Shipping Carrier</h1>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <div class="radio">
                      <input id="USPS" name="radio" type="radio" checked></input>
                      <label for="USPS" class="radio-label"> USPS - 3-Day Shipping ($14 for small orders | $15+ for larger orders with multiple items)</label>
                    </div>
                    <div class="radio">
                      <input id="Fedex_UPS" name="radio" type="radio"></input>
                      <label  for="Fedex_UPS" class="radio-label"> FedEx / UPS - 2-Day Shipping ($19+ depending on order size)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <h1 className="AccordianTitle">Select Payment Method</h1>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                    <h2 className="AccordianSubtitle">Select a Payment Method:</h2>
                    <div className="PaymentSelection">
                      <div class="radio">
                        <input id="PayPal" name="radio" type="radio" checked></input>
                        <label for="PayPal" class="radio-label"> PayPal</label>
                      </div>
                      <div class="radio">
                        <input id="Venmo" name="radio" type="radio"></input>
                        <label  for="Venmo" class="radio-label"> Venmo</label>
                      </div>
                      <div class="radio">
                        <input id="Zelle" name="radio" type="radio" checked></input>
                        <label for="Zelle" class="radio-label"> Zelle</label>
                      </div>
                      <div class="radio">
                        <input id="CashApp" name="radio" type="radio"></input>
                        <label  for="CashApp" class="radio-label"> CashApp</label>
                      </div>   
                      <div class="radio">
                        <input id="Facebook" name="radio" type="radio"></input>
                        <label  for="Facebook" class="radio-label"> Facebook Pay</label>
                      </div>  
                    </div>
                    <br ></br>
                    <h2 className="AccordianSubtitle">If you are using Venmo or Zelle as a payment method, enter you username for the payment system below. Otherwise, enter in your respective email or mobil number within the text box.</h2>
                    <br ></br>
                    <input type="text" id="PaymentUsername" name="PayPal_Username" class="require-if-active" data-require-pair="#PayPal"></input>
                  </div>
                </div>
              </div>
            </div>
            <button type = "button" className="PlaceOrder-button">
                Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;