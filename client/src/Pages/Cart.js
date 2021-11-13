import React, { Component } from 'react'
import './Cart.css';
import '../Components/Navigation.css';
import CartOrderCard from './CartOrderCard.js'
import CartAddresses from './CartAddresses.js'


function Cart() {

  function handleSubmit(event) {
    console.log(event.target.value);
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

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
              <button type = "button" className="AddPurgePlant-button" data-bs-toggle="modal" data-bs-target="#addPurgePlantModal">
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
    
      {/*  Add Address Modal */}
      <div className="modal fade" id="addAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Full Name" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <br />

                    <select className="input-box-modal form-control" id="state" name="state" value="Select State" onChange={handleChange}>
                      <option value="Select State" disabled>Select State</option>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" />
                  </div>
                </form>

                <div className="flex-box-submit-button">
                  <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Address Modal */}
      <div className="modal fade" id="editAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="Minying Cao" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="1761 15th St" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <br />
                    <select className="input-box-modal form-select" id="state" name="state" value="NY" onChange={handleChange}>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="12180" id="zipcode" />
                  </div>
                </form>
                <div className="flex-box-submit-button">
                  <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Add Purge Plant Modal */}
      <div className="modal fade" id="addPurgePlantModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Purge Plant</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Title</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Plant Title" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Price</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Price" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">Upload Screenshot</label>
                    <br />
                    <input className="input-box-modal form-control" type="file" id="fileupload" name="image">

                    </input>
                  </div>
                </form>

                <div className="flex-box-purge-plant-button">
                  <button className="purge-plant-button btn" type="submit" data-bs-dismiss="modal">Add Purge Plant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

  );
}

export default Cart;