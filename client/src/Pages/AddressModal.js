import StateSelect from "./StateSelect.js";

function AddressModal(props) {

    const handleSubmit = function() {
        console.log("Started submit");
        if (props.isNew) {
            // Call add address endpoint
        }
        else {
            // Call edit address endpoint
        }
    }

    const id = props.isNew ? "addAddressModal" : "editAddressModal";
    const title = props.isNew ? "Add Address" : "Edit Address";
    const name_input = props.isNew ? 
        <input className="input-box-modal form-control" type="text" placeholder="Enter Full Name" id="fullName" /> : 
        <input className="input-box-modal form-control" type="text" defaultValue={props.name} id="fullName" />;
    const street_input = props.isNew ? 
        <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" /> : 
        <input className="input-box-modal form-control" type="text" defaultValue={props.street} id="streetAddress" />;
    const city_input = props.isNew ? 
        <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" /> : 
        <input className="input-box-modal form-control" type="text" defaultValue={props.city} id="city" />;
    const zip_input = props.isNew ? 
        <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" /> : 
        <input className="input-box-modal form-control" type="text" defaultValue={props.zip} id="zipcode" />;
    const state_select = props.isNew ?
        <StateSelect state="" placeholder="AL" /> :
        <StateSelect state={props.state} placeholder="" />;
        
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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