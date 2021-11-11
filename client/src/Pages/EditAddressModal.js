import StateSelect from './StateSelect.js';

function EditAddressModal(handleSubmit, handleChange) {
    function handleSubmit(event) {
        console.log(event.target.value);
    }

    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
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
                                    <label htmlFor="city" className="form-label">Street Address</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
                                </div>
                                <StateSelect />
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
        </div>);
}

export default EditAddressModal;


