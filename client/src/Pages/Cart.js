import React from 'react'
import { Redirect } from "react-router-dom";
import './Cart.css';
import '../Components/Navigation/Navigation.css';
import CartItemCard from '../Components/Cards/CartItemCard.js'
import AddressRadio from '../Components/AddressRadio.js'
import AddPlantModal from '../Components/Modals/AddPlantModal.js'
import AddressModal from '../Components/Modals/AddressModal.js'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      loading: true,
      plants: [],
      price: 0.00,
      size: 0,
      address_loading: true,
      addresses: [],
      selected_address: null,
      redirect: null
    };
  }

  handleSubmit(shipping_radios, payment_radios) {
    if (!this.state.selected_address) {
      alert('Please select an address');
      return;
    }

    let name = this.props.currentUser.username;
    let street = this.state.selected_address.address;
    let aptno = this.state.selected_address.aptno;
    let city = this.state.selected_address.city;
    let state = this.state.selected_address.state;
    let zip = this.state.selected_address.zip;
    let payment_username = document.getElementById('PaymentUsername').value;
    if (payment_username == "") {
      alert('Please provide payment username info');
      return;
    }

    let checked_shipping = null;
    let checked_payment = null;

    for (var i = 0; i < shipping_radios.length; i++) {
      if (shipping_radios[i].checked) {
        checked_shipping = shipping_radios[i].value;
        break;
      }
    }
    for (var i = 0; i < payment_radios.length; i++) {
      if (payment_radios[i].checked) {
        checked_payment = payment_radios[i].value;
        break;
      }
    }

    fetch("http://localhost:3030/place-order", {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.currentUser.username,
        phonenumber: this.props.currentUser.phonenumber,
        userid: this.props.currentUser.userid,
        plantids: this.state.plants.map(p => p.id),
        price: this.state.price,
        address_name: name,
        address_st: street,
        address_aptno: aptno,
        address_city: city,
        address_state: state,
        address_zip: zip,
        shipping: checked_shipping,
        payment: checked_payment,
        payment_username: payment_username
      })
    })
    .then(async response => response.json())
    .then(data => {
      if (data.success) {
        alert("Your order has been placed, view it in the orders page");
        this.setState({redirect: "/Orders"});
      }
    })
    .catch(e => console.log(e));
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleRemove(pid) {
    fetch("http://localhost:3030/remove-from-cart", {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: this.props.currentUser.userid,
        plantid: pid
      })
    })
    .then(async response => response.json())
    .then(data => {
      if (data.success) {
        alert("Plant removed from cart");
        this._isMounted && this.getCartItems();
      }
    })
    .catch(e => console.log(e));
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getCartItems();
    this._isMounted && this.getAddresses();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser && prevProps.currentUser.userid) return;
    if (this.props.currentUser && this.props.currentUser.userid) {
      this.getCartItems();
      this.getAddresses();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  chooseAddress(a, i) {
    console.log(this.state);
    console.log(a);
    this.setState({
      selected_address: a
    });
    // Add styling to show which address is selected
  }

  async getAddresses() {
    fetch("http://localhost:3030/get-addresses", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: this.props.currentUser.userid
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success !== false) {
        if (data.addresses && data.addresses.length !== 0) {
          this.setState({
            addresses: data.addresses
          });
        }
        this.setState({
          address_loading: false,
        });

      }
    })
    .catch(e => console.log(e));
  }

  async getCartItems() {
    console.log("fetching cart");

    fetch("http://localhost:3030/get-cart", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: this.props.currentUser.userid
      })
    })
    .then(response => response.json())
    .then(data => {
      this._isMounted && this.setState({
        loading: false,
        plants: data.plants,
        price: data.total_price,
        size: data.size
      });
    })
    .catch(e => console.log(e));
  }

  getCartSection() {
    let plants = this.state.plants;
    let price = this.state.price;

    var cards = [];
    for (var i = 0; i < this.state.size; i++) {
      cards.push(<CartItemCard key={i} plant={plants[i]} handleRemove={this.handleRemove.bind(this, plants[i].id)} />);
    }

    return (
      <div className="OrderContents">
        {this.state.size ? cards : "You have no plants in your cart"}
        <button type = "button" className="AddPurgePlant-button" data-bs-toggle="modal" data-bs-target="#addPurgePlantModal">
          + Add Purge Plant
        </button>
        <div className="row" id="OrderTotal">
          <div className="col-md-6">
            <h1>Total</h1>
          </div>
          <div className="col-md-3">
            <h1 className="TotalPrice">${this.state.size ? price : 0.00}</h1>
          </div>
        </div>
      </div>
    );
  }

  render() {
    var showPage = '';
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    else {
      return (
        <div id="CartPage">
          <h1 className="CartPage_Title"> Shopping Cart</h1>
          <div className="container" id="CartPageContainer">
            <div className="row">
              <div className="col-md-3" id="Order">
                <h1 className="YourOrderTitle">Your Order</h1>
                {this.state.loading ? (null) : this.getCartSection()}
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
                        <div className="container addresses-container">
                          <div className="row">
                            {this.state.loading ? (null) : this.state.addresses.map((address, index) => {
                              return (
                                <div className="col-sm">
                                  <AddressRadio key={"Address " + index} id={"address" + index} address={address} onClick={() => this.chooseAddress(address, index)} isCart={true} />
                                </div>
                              );
                            })}

                            <div className="col-sm">
                              <a className="align-items-center d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#addAddressModal">
                                <h5 className="card-title">+ Add Address</h5>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                        <h1 className="AccordianTitle">Select Shipping Carrier</h1>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                        <div className="radio 1">
                          <input id="USPS" name="radio 1" type="radio" value="USPS" defaultChecked></input>
                          <label htmlFor="USPS" className="radio-label"> USPS - 3-Day Shipping ($14 for small orders | $15+ for larger orders with multiple items)</label>
                        </div>
                        <div className="radio 1">
                          <input id="Fedex_UPS" name="radio 1" type="radio" value="Fedex/UPS"></input>
                          <label  htmlFor="Fedex_UPS" className="radio-label"> FedEx / UPS - 2-Day Shipping ($19+ depending on order size)</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                        <h1 className="AccordianTitle">Select Payment Method</h1>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                        <h2 className="AccordianSubtitle">Select a Payment Method:</h2>
                        <div className="PaymentSelection">
                          <div className="radio 2">
                            <input id="PayPal" name="radio 2" type="radio" value="PayPal" defaultChecked></input>
                            <label htmlFor="PayPal" className="radio-label"> PayPal</label>
                          </div>
                          <div className="radio 2">
                            <input id="Venmo" name="radio 2" type="radio" value="Venmo"></input>
                            <label  htmlFor="Venmo" className="radio-label"> Venmo</label>
                          </div>
                          <div className="radio 2">
                            <input id="Zelle" name="radio 2" type="radio" value="Zelle"></input>
                            <label htmlFor="Zelle" className="radio-label"> Zelle</label>
                          </div>
                          <div className="radio 2">
                            <input id="CashApp" name="radio 2" type="radio" value="CashApp"></input>
                            <label  htmlFor="CashApp" className="radio-label"> CashApp</label>
                          </div>   
                          <div className="radio 2">
                            <input id="Facebook" name="radio 2" type="radio" value="Facebook"></input>
                            <label  htmlFor="Facebook" className="radio-label"> Facebook Pay</label>
                          </div>
                        </div>
                        <br ></br>
                        <h2 className="AccordianSubtitle">If you are using Venmo or Zelle as a payment method, enter you username for the payment system below. Otherwise, enter in your respective email or mobil number within the text box.</h2>
                        <br ></br>
                        <input type="text" id="PaymentUsername" name="PayPal_Username" className="require-if-active" data-require-pair="#PayPal"></input>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.size &&
                  <button type = "button" id="cart-placeOrder" className="PlaceOrder-button" onClick={
                    this.handleSubmit.bind(this, document.getElementsByName('radio 1'), document.getElementsByName('radio 2'))
                  }>
                      Place Order
                  </button>
                }
              </div>
            </div>
          </div>
      
          {/*  Add Address Modal */}
          {this.state.loading ? (null) : <AddressModal isNew={true} currentUser={this.props.currentUser} isAdmin={this.props.isAdmin} />}
          
          {/*  Add Purge Plant Modal */}
          <AddPlantModal id="addPurgePlantModal" title="Add Purge Plant" type="purge" userid={this.props.currentUser.userid}/>

        </div>
      );
    }
  }
}