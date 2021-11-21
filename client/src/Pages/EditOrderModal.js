import './Modal.css';
import StateSelect from "./StateSelect.js";
import ShippingCarrierSelect from "./ShippingCarrierSelect.js";

function EditOrderModal(handleSubmit) {
    function handleSubmit(event) {
        console.log(event.target.value);
    }

    return (
        <div className="modal fade" id="editOrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Order</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="recepientName" className="form-label">Recepient Name</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Enter a Name" id="recepientName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address1" className="form-label">Address 1</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="1761 15th St" id="address1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address2" className="form-label">Address 2</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="" id="address2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
                                </div>
                                <StateSelect />
                                <div className="mb-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="12180" id="zip" />
                                </div>
                                <ShippingCarrierSelect />
                                <div className="mb-3">
                                    <label htmlFor="orderStatus" className="form-label">Order Status</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Paid" id="orderStatus" />
                                </div>
                            </form>
                            <div className="flex-box-submit-button">
                                <button className="cart-button" type="submit" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default EditOrderModal;