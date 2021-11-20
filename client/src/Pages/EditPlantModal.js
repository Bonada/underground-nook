import './AddEditPlantModal.css';

function EditPlantModal(handleSubmit) {
    function handleSubmit(event) {
        console.log(event.target.value);
    }

    return (
        <div className="modal fade plantModal" id="editPlantModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Plant</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Default Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descriptionOfPlant" className="form-label">Description</label>
                                    <br />
                                    <textarea className="input-box-modal form-control" type="text" defaultValue="Default Description....." id="descriptionOfPlant" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <br />
                                    <input className="input-box-modal form-control" type="text" defaultValue="Default Price" id="price" />
                                </div>
                                <p className="field-name">
                                    Change Image
                                </p>
                                <div className="mb-3">
                                    <label htmlFor="file-upload" class="custom-file-upload">
                                        <i class="ri-image-add-fill"></i>
                                        <p>Drop your image here, or browse</p>
                                        <p>Supports: JPG, PNG</p>
                                    </label>
                                    <input id="file-upload" type="file"/>
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

export default EditPlantModal;