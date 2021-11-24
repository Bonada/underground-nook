import StateSelect from "../Selects/StateSelect.js";

function AddAddressModal(props) {
    function handleSubmit(event) {
        console.log(event.target.value);
        
    }

    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
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
                                    <label htmlFor="city" className="form-label">Street Address</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" />
                                </div>
                                <StateSelect />
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
        </div>);
}

export default AddAddressModal;