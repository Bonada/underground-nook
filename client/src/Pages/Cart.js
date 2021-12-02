import React from 'react'
import './Cart.css';
import '../Components/Navigation/Navigation.css';
import CartOrderCard from '../Components/Cards/CartOrderCard.js'
import CartAddresses from '../Components/CartAddresses.js'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      loading: true,
      plants: [],
      price: 0.00,
      size: 0
    };
    // this.handleSubmit = this.handleSubmit.bind(this, event);
    // this.handleChange = this.handleChange.bind(this, event);
  }

  handleSubmit(event) {
    console.log(event.target.value);
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getCartItems();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser && prevProps.currentUser.userid) return;
    if (this.props.currentUser && this.props.currentUser.userid) {
      this.getCartItems();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async getCartItems() {
    console.log("fetching cart");
    console.log(this.props.currentUser.userid == null);
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
      cards.push(<CartOrderCard key={i} plant={plants[i]} />);
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
                      <div className="radio">
                        <input id="USPS" name="radio" type="radio" checked></input>
                        <label htmlFor="USPS" className="radio-label"> USPS - 3-Day Shipping ($14 for small orders | $15+ for larger orders with multiple items)</label>
                      </div>
                      <div className="radio">
                        <input id="Fedex_UPS" name="radio" type="radio"></input>
                        <label  htmlFor="Fedex_UPS" className="radio-label"> FedEx / UPS - 2-Day Shipping ($19+ depending on order size)</label>
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
                        <div className="radio">
                          <input id="PayPal" name="radio" type="radio" checked></input>
                          <label htmlFor="PayPal" className="radio-label"> PayPal</label>
                        </div>
                        <div className="radio">
                          <input id="Venmo" name="radio" type="radio"></input>
                          <label  htmlFor="Venmo" className="radio-label"> Venmo</label>
                        </div>
                        <div className="radio">
                          <input id="Zelle" name="radio" type="radio" checked></input>
                          <label htmlFor="Zelle" className="radio-label"> Zelle</label>
                        </div>
                        <div className="radio">
                          <input id="CashApp" name="radio" type="radio"></input>
                          <label  htmlFor="CashApp" className="radio-label"> CashApp</label>
                        </div>   
                        <div className="radio">
                          <input id="Facebook" name="radio" type="radio"></input>
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
                  <form onSubmit={this.handleSubmit}>
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

                      <select className="input-box-modal form-control" id="state" name="state" value="Select State" onChange={this.handleChange}>
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
                  <form onSubmit={this.handleSubmit}>
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
                      <select className="input-box-modal form-select" id="state" name="state" value="NY" onChange={this.handleChange}>
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
                  <form onSubmit={this.handleSubmit}>
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
}
// function Cart(props) {

//   const [gotCart, setGotCart] = useState(false);

//   function this.handleSubmit(event) {
//     console.log(event.target.value);
//   }

//   function this.handleChange(event) {
//     console.log(event.target.value);
//   }

//   function getCartItems(id) {
//     console.log("fetching cart");
//     fetch("http://localhost:3030/get-cart", {
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         userid: id
//       })
//     })
//     .then(async response => {
//       const data = await response.json();
//       console.log(data);

//       var cards = [];
//       for (var i = 0; i < data.size; i++) {
//         cards.push(<CartOrderCard key={i} plant={data.plants[i]} />);
//       }
//       setGotCart(true);

//       return (
//         <div className="OrderContents">
//           {cards}
//           <button type = "button" className="AddPurgePlant-button" data-bs-toggle="modal" data-bs-target="#addPurgePlantModal">
//             + Add Purge Plant
//           </button>
//           <div className="row" id="OrderTotal">
//             <div className="col-md-6">
//               <h1>Total</h1>
//             </div>
//             <div className="col-md-3">
//               <h1 className="TotalPrice">${data.total_price}</h1>
//             </div>
//           </div>
//         </div>
//       );
//     })
//     .catch(e => console.log(e));
//     // return (
//     //   <div className="OrderContents">
//     //     <button type = "button" className="AddPurgePlant-button" data-bs-toggle="modal" data-bs-target="#addPurgePlantModal">
//     //       + Add Purge Plant
//     //     </button>
//     //     <div className="row" id="OrderTotal">
//     //       <div className="col-md-6">
//     //         <h1>Total</h1>
//     //       </div>
//     //       <div className="col-md-3">
//     //         <h1 className="TotalPrice">$0.00</h1>
//     //       </div>
//     //     </div>
//     //   </div>
//     // );
//   }

//   return (
//     <div id="CartPage">
//       <h1 className="CartPage_Title"> Shopping Cart</h1>
//       <div className="container" id="CartPageContainer">
//         <div className="row">
//           <div className="col-md-3" id="Order">
//             <h1 className="YourOrderTitle">Your Order</h1>
//           </div>
//           <div className="col-md-1">
//             {props.currentUser && getCartItems(props.currentUser.userid)}
//           </div>
//           <div className="col-md-8">
//             <div className="accordion" id="accordionPanelsStayOpenExample">
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                     <h1 className="AccordianTitle">Select Delivery Address</h1>
//                   </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//                   <div className="accordion-body">
//                     <h2 className="AccordianSubtitle">Select or Add an Address:</h2>
//                       <CartAddresses />
//                   </div>
//                 </div>
//               </div>
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//                     <h1 className="AccordianTitle">Select Shipping Carrier</h1>
//                   </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//                   <div className="accordion-body">
//                     <div className="radio">
//                       <input id="USPS" name="radio" type="radio" checked></input>
//                       <label htmlFor="USPS" className="radio-label"> USPS - 3-Day Shipping ($14 for small orders | $15+ for larger orders with multiple items)</label>
//                     </div>
//                     <div className="radio">
//                       <input id="Fedex_UPS" name="radio" type="radio"></input>
//                       <label  htmlFor="Fedex_UPS" className="radio-label"> FedEx / UPS - 2-Day Shipping ($19+ depending on order size)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="accordion-item">
//                 <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//                     <h1 className="AccordianTitle">Select Payment Method</h1>
//                   </button>
//                 </h2>
//                 <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
//                   <div className="accordion-body">
//                     <h2 className="AccordianSubtitle">Select a Payment Method:</h2>
//                     <div className="PaymentSelection">
//                       <div className="radio">
//                         <input id="PayPal" name="radio" type="radio" checked></input>
//                         <label htmlFor="PayPal" className="radio-label"> PayPal</label>
//                       </div>
//                       <div className="radio">
//                         <input id="Venmo" name="radio" type="radio"></input>
//                         <label  htmlFor="Venmo" className="radio-label"> Venmo</label>
//                       </div>
//                       <div className="radio">
//                         <input id="Zelle" name="radio" type="radio" checked></input>
//                         <label htmlFor="Zelle" className="radio-label"> Zelle</label>
//                       </div>
//                       <div className="radio">
//                         <input id="CashApp" name="radio" type="radio"></input>
//                         <label  htmlFor="CashApp" className="radio-label"> CashApp</label>
//                       </div>   
//                       <div className="radio">
//                         <input id="Facebook" name="radio" type="radio"></input>
//                         <label  htmlFor="Facebook" className="radio-label"> Facebook Pay</label>
//                       </div>  
//                     </div>
//                     <br ></br>
//                     <h2 className="AccordianSubtitle">If you are using Venmo or Zelle as a payment method, enter you username for the payment system below. Otherwise, enter in your respective email or mobil number within the text box.</h2>
//                     <br ></br>
//                     <input type="text" id="PaymentUsername" name="PayPal_Username" className="require-if-active" data-require-pair="#PayPal"></input>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button type = "button" className="PlaceOrder-button">
//                 Place Order
//             </button>
//           </div>
//         </div>
//       </div>
    
//       {/*  Add Address Modal */}
//       <div className="modal fade" id="addAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="container">
//                 <form onSubmit={this.handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="fullName" className="form-label">Full Name</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter Full Name" id="fullName" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="streetAddress" className="form-label">Street Address</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="city" className="form-label">City</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="state" className="form-label">State</label>
//                     <br />

//                     <select className="input-box-modal form-control" id="state" name="state" value="Select State" onChange={this.handleChange}>
//                       <option value="Select State" disabled>Select State</option>
//                       <option value="AL">AL</option>
//                       <option value="AK">AK</option>
//                       <option value="AR">AR</option>
//                       <option value="AZ">AZ</option>
//                       <option value="CA">CA</option>
//                       <option value="CO">CO</option>
//                       <option value="CT">CT</option>
//                       <option value="DC">DC</option>
//                       <option value="DE">DE</option>
//                       <option value="FL">FL</option>
//                       <option value="GA">GA</option>
//                       <option value="HI">HI</option>
//                       <option value="IA">IA</option>
//                       <option value="ID">ID</option>
//                       <option value="IL">IL</option>
//                       <option value="IN">IN</option>
//                       <option value="KS">KS</option>
//                       <option value="KY">KY</option>
//                       <option value="LA">LA</option>
//                       <option value="MA">MA</option>
//                       <option value="MD">MD</option>
//                       <option value="ME">ME</option>
//                       <option value="MI">MI</option>
//                       <option value="MN">MN</option>
//                       <option value="MO">MO</option>
//                       <option value="MS">MS</option>
//                       <option value="MT">MT</option>
//                       <option value="NC">NC</option>
//                       <option value="NE">NE</option>
//                       <option value="NH">NH</option>
//                       <option value="NJ">NJ</option>
//                       <option value="NM">NM</option>
//                       <option value="NV">NV</option>
//                       <option value="NY">NY</option>
//                       <option value="ND">ND</option>
//                       <option value="OH">OH</option>
//                       <option value="OK">OK</option>
//                       <option value="OR">OR</option>
//                       <option value="PA">PA</option>
//                       <option value="RI">RI</option>
//                       <option value="SC">SC</option>
//                       <option value="SD">SD</option>
//                       <option value="TN">TN</option>
//                       <option value="TX">TX</option>
//                       <option value="UT">UT</option>
//                       <option value="VT">VT</option>
//                       <option value="VA">VA</option>
//                       <option value="WA">WA</option>
//                       <option value="WI">WI</option>
//                       <option value="WV">WV</option>
//                       <option value="WY">WY</option>
//                     </select>
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="zipcode" className="form-label">Zip Code</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" />
//                   </div>
//                 </form>

//                 <div className="flex-box-submit-button">
//                   <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Submit</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Address Modal */}
//       <div className="modal fade" id="editAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Edit Address</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="container">
//                 <form onSubmit={this.handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="fullName" className="form-label">Full Name</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" defaultValue="Minying Cao" id="fullName" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="streetAddress" className="form-label">Street Address</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" defaultValue="1761 15th St" id="streetAddress" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="city" className="form-label">City</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="state" className="form-label">State</label>
//                     <br />
//                     <select className="input-box-modal form-select" id="state" name="state" value="NY" onChange={this.handleChange}>
//                       <option value="AL">AL</option>
//                       <option value="AK">AK</option>
//                       <option value="AR">AR</option>
//                       <option value="AZ">AZ</option>
//                       <option value="CA">CA</option>
//                       <option value="CO">CO</option>
//                       <option value="CT">CT</option>
//                       <option value="DC">DC</option>
//                       <option value="DE">DE</option>
//                       <option value="FL">FL</option>
//                       <option value="GA">GA</option>
//                       <option value="HI">HI</option>
//                       <option value="IA">IA</option>
//                       <option value="ID">ID</option>
//                       <option value="IL">IL</option>
//                       <option value="IN">IN</option>
//                       <option value="KS">KS</option>
//                       <option value="KY">KY</option>
//                       <option value="LA">LA</option>
//                       <option value="MA">MA</option>
//                       <option value="MD">MD</option>
//                       <option value="ME">ME</option>
//                       <option value="MI">MI</option>
//                       <option value="MN">MN</option>
//                       <option value="MO">MO</option>
//                       <option value="MS">MS</option>
//                       <option value="MT">MT</option>
//                       <option value="NC">NC</option>
//                       <option value="NE">NE</option>
//                       <option value="NH">NH</option>
//                       <option value="NJ">NJ</option>
//                       <option value="NM">NM</option>
//                       <option value="NV">NV</option>
//                       <option value="NY">NY</option>
//                       <option value="ND">ND</option>
//                       <option value="OH">OH</option>
//                       <option value="OK">OK</option>
//                       <option value="OR">OR</option>
//                       <option value="PA">PA</option>
//                       <option value="RI">RI</option>
//                       <option value="SC">SC</option>
//                       <option value="SD">SD</option>
//                       <option value="TN">TN</option>
//                       <option value="TX">TX</option>
//                       <option value="UT">UT</option>
//                       <option value="VT">VT</option>
//                       <option value="VA">VA</option>
//                       <option value="WA">WA</option>
//                       <option value="WI">WI</option>
//                       <option value="WV">WV</option>
//                       <option value="WY">WY</option>
//                     </select>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="zipcode" className="form-label">Zip Code</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" defaultValue="12180" id="zipcode" />
//                   </div>
//                 </form>
//                 <div className="flex-box-submit-button">
//                   <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Save</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*  Add Purge Plant Modal */}
//       <div className="modal fade" id="addPurgePlantModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Add Purge Plant</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="container">
//                 <form onSubmit={this.handleSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="fullName" className="form-label">Title</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter Plant Title" id="fullName" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="streetAddress" className="form-label">Price</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="text" placeholder="Enter Price" id="streetAddress" />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="zipcode" className="form-label">Upload Screenshot</label>
//                     <br />
//                     <input className="input-box-modal form-control" type="file" id="fileupload" name="image">

//                     </input>
//                   </div>
//                 </form>

//                 <div className="flex-box-purge-plant-button">
//                   <button className="purge-plant-button btn" type="submit" data-bs-dismiss="modal">Add Purge Plant</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>      
//     </div>

//   );
// }

// export default Cart;