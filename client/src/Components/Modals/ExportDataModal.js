import './Modal.css';
import ShippingCarrierSelect from '../Selects/ShippingCarrierSelect';

function ExportDataModal(handleSubmit) {
    // function handleSubmit(event) {
    //     console.log(event.target.value);
    // }

    return (
        <div className="modal fade" id="exportDataModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Export Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <ShippingCarrierSelect />
                            </form>
                            <div className="flex-box-submit-button">
                                <button className="cart-button" type="submit" data-bs-dismiss="modal">Export as CSV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default ExportDataModal;