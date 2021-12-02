import StateSelect from "../Selects/StateSelect.js";

function AddressModal(props) {

    let useraddress = {
        name: "",
        fulladdress: "",
        street: "",
        number: "",
        city: "",
        state: "",
        zip: ""
    }

    let oldaddress = props.isNew ? useraddress : props.old

    function updateName(event) {
        console.log(event.target.value);
        useraddress.name = event.target.value;
    }

    function updateAddress(event) {
        console.log(event.target.value);
        useraddress.street = event.target.value;
    }

    function updateCity(event) {
        console.log(event.target.value);
        useraddress.city = event.target.value;
    }

    function updateState(event) {
        console.log(event.target.value);
        StateSelect.state = event.target.value;
        useraddress.state = event.target.value;
    }

    function updateZip(event) {
        console.log(event.target.value);
        useraddress.zip = event.target.value;
    }

    const handleSubmit = function (event) {
        console.log("Started submit");
        console.log("adding");
        if (props.isNew) {
            // Call add address endpoint
            fetch('http://localhost:3030/add-address', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: useraddress
                })
            })
            window.location.reload(false);
        }
        else {
            // Call edit address endpoint
            console.log("editing");
            fetch('http://localhost:3030/edit-address', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
    }

    const id = props.isNew ? "addAddressModal" : "editAddressModal";
    const title = props.isNew ? "Add Address" : "Edit Address";
    const name_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Full Name" id="fullName" onChange={updateName} /> :
        <input className="input-box-modal form-control" type="text" defaultValue={props.name} id="fullName" onChange={updateName} />;
    const street_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" onChange={updateAddress} /> :
        <input className="input-box-modal form-control" type="text" defaultValue={props.street} id="streetAddress" onChange={updateAddress} />;
    const city_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" onChange={updateCity} /> :
        <input className="input-box-modal form-control" type="text" defaultValue={props.city} id="city" onChange={updateCity} />;
    const zip_input = props.isNew ?
        <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" onChange={updateZip} /> :
        <input className="input-box-modal form-control" type="text" defaultValue={props.zip} id="zipcode" onChange={updateZip} />;
    const state_select = props.isNew ?
        <StateSelect state="" placeholder="AL" onChange={updateState} /> :
        <StateSelect state={props.state} placeholder="" onChange={updateState} />;

    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onMouseEnter={props.onMouseEnter}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <br />
                                    {name_input}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                    <br />
                                    {street_input}
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
                                    <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default AddressModal;