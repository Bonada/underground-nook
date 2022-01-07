import './Modal.css';
// import StateSelect from "../Selects/StateSelect.js";
// import ShippingCarrierSelect from "../Selects/ShippingCarrierSelect.js";

function EditOrderModal(props) {
    // function handleSubmit(event) {
    //     console.log(event.target.value);
    // }
    console.log(props.order);
    let id = props.order.id;
    let paystatus = props.order.paystatus;
    let paymentmethod = props.order.paymentmethod;
    let paymentinfo = props.order.paymentinfo;
    let address = props.order.address;
    let aptno = props.order.aptno;
    let city = props.order.city;
    let state = props.orderstate;
    let zip = props.order.zip;
    let shippingcarrier = props.order.shippingcarrier;
    let orderstatus = props.order.orderstatus;
    let price = props.order.price;

    function changepaystatus(event){
        console.log(event.target.value);
        paystatus = event.target.value;
    }

    function changemethod(event){
        console.log(event.target.value);
        paymentmethod = event.target.value;
    }

    function changepaymentinfo(event){
        console.log(event.target.value);
        paymentinfo = event.target.value;
    }

    function changeaddress(event){
        console.log(event.target.value);
        address = event.target.value;
    }

    function changeshippingcarrier(event){
        console.log(event.target.value);
        shippingcarrier = event.target.value;
    }

    function changeaptno(event){
        console.log(event.target.value);
        aptno = event.target.value;
    }

    function changecity(event){
        console.log(event.target.value);
        city = event.target.value;
    }

    function changestate(event){
        console.log(event.target.value);
        state = event.target.value;
    }

    function changezip(event){
        console.log(event.target.value);
        zip = event.target.value;
    }

    function changeprice(event){
        console.log(event.target.value);
        price = event.target.value;
    }

    function changeorderstatus(event){
        console.log(event.target.value);
        orderstatus = event.target.value;
    }

    async function handleSubmit(event){
        // console.log(this.state);
        let floatprice = parseFloat(price);


            fetch("/api/update-order", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    paystatus: paystatus,
                    paymentmethod: paymentmethod,
                    paymentinfo: paymentinfo,
                    address: address,
                    aptno: aptno,
                    city: city,
                    state: state,
                    zip: zip,
                    shippingcarrier: shippingcarrier,
                    orderstatus: orderstatus,
                    price: floatprice
                })
            })
            window.location.reload(false);
        event.preventDefault();
    }

    return (
        
        <div className="modal fade" id="editOrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="EditOrderModalLabel">Edit Order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <h2>{id}</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="address1" className="form-label">Address</label>
                                    <br />
                                    <input onChange={changeaddress} className="input-box-modal form-control" type="text" defaultValue={address} id="address1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="aptno" className="form-label">Apt/Suite No.</label>
                                    <br />
                                    <input onChange={changeaptno} className="input-box-modal form-control" type="text" defaultValue={aptno} id="aptno" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <br />
                                    <input onChange={changecity} className="input-box-modal form-control" type="text" defaultValue={city} id="city" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <br />

                                    <select onChange={changestate} className="input-box-modal form-select" id="state" name="state" defaultValue={state}>
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
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <br />
                                    <input onChange={changezip} className="input-box-modal form-control" type="text" defaultValue={zip} id="zip" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Shipping Carrier</label>
                                    <select onChange={changeshippingcarrier} className="input-box-modal form-control" id="state" name="state" defaultValue="Select Shipping Carrier">
                                        <option value="Select Shipping Carrier" disabled>Select Shipping Carrier</option>
                                        <option value="USPS">USPS</option>
                                        <option value="FedEx">FedEx</option>
                                        <option value="UPS">UPS</option>
                                    </select>
                                
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                                    <br />
                                    <input onChange={changemethod} className="input-box-modal form-control" type="text" defaultValue={paymentmethod} id="paymentMethod" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentInfo" className="form-label">Payment Info (username)</label>
                                    <br />
                                    <input onChange={changepaymentinfo} className="input-box-modal form-control" type="text" defaultValue={paymentinfo} id="paymentInfo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
                                    <br />
                                    <input onChange={changepaystatus} className="input-box-modal form-control" type="text" defaultValue={paystatus} id="paymentStatus" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="orderStatus" className="form-label">Order Status</label>
                                    <br />
                                    <input onChange={changeorderstatus} className="input-box-modal form-control" type="text" defaultValue={orderstatus} id="orderStatus" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <br />
                                    <input onChange={changeprice} className="input-box-modal form-control" type="text" defaultValue={price} id="paymentStatus" />
                                </div>
                            </form>
                            <div className="flex-box-submit-button">
                                <button onClick={handleSubmit} className="cart-button" id="EditOrderButton" type="submit" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default EditOrderModal;