import StateSelect from "../Selects/StateSelect.js";

function AddressModal(props) {

    let useraddress = props.isNew ? {
        fulladdress: "",
        address: "",
        aptno: "",
        city: "",
        state: "",
        zip: ""
    } : {
        fulladdress: props.address.fulladdress,
        address: props.address.address,
        aptno: props.address.aptno,
        city: props.address.city,
        state: props.address.state,
        zip: props.address.zip
    }

    let oldaddress = props.isNew ? null : props.address

    function updateAddress(event) {
        console.log(event.target.value);
        useraddress.address = event.target.value;
    }

    function updateAptno(event) {
        console.log(event.target.value);
        useraddress.aptno = event.target.value;
    }

    function updateCity(event) {
        console.log(event.target.value);
        useraddress.city = event.target.value;
    }

    function updateState(event) {
        // console.log(oldaddress.state);
        console.log(event.target.value);
        // StateSelect.value = event.target.value;
        useraddress.state = event.target.value;
    }

    function updateZip(event) {
        console.log(event.target.value);
        useraddress.zip = event.target.value;
    }

    const handleSubmit = function (event) {
        console.log("Started submit");
        if (props.isNew) {
            console.log("adding");
            // Call add address endpoint
            fetch('/api/add-address', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: props.currentUser.userid,
                    address: useraddress
                })
            }).then(async addaddress_response => {
                const data = await addaddress_response.json()
                console.log(data);
            })
                .catch(e => {
                    console.log(e);
                });
        }
        else {
            // Call edit address endpoint
            console.log("editing");
            console.log(oldaddress);
            fetch('/api/edit-address', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: props.currentUser.userid,
                    old: oldaddress,
                    update: useraddress
                })
            })
                .then(async addaddress_response => {
                    const data = await addaddress_response.json()
                    console.log(data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
        event.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    const id = props.isNew ? "addAddressModal" : "editAddressModal";
    const title = props.isNew ? "Add Address" : "Edit Address";
    const street_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" onChange={updateAddress} /> :
        <input className="input-box-modal form-control" type="text" value={oldaddress.address} id="streetAddress" onChange={updateAddress} />;
    const aptno_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Apt/Suite No." id="aptno" onChange={updateAptno} /> :
        <input className="input-box-modal form-control" type="text" value={oldaddress.aptno} id="aptno" onChange={updateAptno} />;
    const city_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" onChange={updateCity} /> :
        <input className="input-box-modal form-control" type="text" value={oldaddress.city} id="city" onChange={updateCity} />;
    const zip_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" onChange={updateZip} /> :
        <input className="input-box-modal form-control" type="text" value={oldaddress.zip} id="zipcode" onChange={updateZip} />;
    const state_select = props.isNew ?
        <StateSelect defaultState='Select State' handleChange={updateState} /> :
        <StateSelect defaultState={oldaddress.state} handleChange={updateState} />;

    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onMouseEnter={props.onMouseEnter}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="AddressLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                    <br />
                                    {street_input}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="aptno" className="form-label">Apt/Suite No.</label>
                                    <br />
                                    {aptno_input}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <br />
                                    {city_input}
                                </div>
                                {state_select}
                                <div className="mb-3">
                                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                                    <br />
                                    {zip_input}
                                </div>

                                <div className="flex-box-submit-button">
                                    <button className="submit-button btn" id="Address" type="submit" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default AddressModal;