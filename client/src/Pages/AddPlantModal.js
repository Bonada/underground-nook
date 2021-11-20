import React from 'react';
import Axios from 'axios';
import './AddEditPlantModal.css';
import { parse } from 'dotenv';

class AddPlantModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {sname: '', cname: '', desc: '', price: '', file: '', img: ''};

        this.changeSname = this.changeSname.bind(this);
        this.changeCname = this.changeCname.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeFiles = this.changeFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeSname(event){
        this.setState({sname: event.target.value});
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    changeCname(event){
        this.setState({cname: event.target.value});
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    changeDesc(event){
        this.setState({desc: event.target.value});
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    changePrice(event){
        console.log(event.target.value);
        this.setState({price: event.target.value});
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    changeFiles(event){
        console.log(event.target.files[0]);
        this.setState({file: event.target.files[0]});
        event.target.files = null;
    }

    async handleSubmit(event){
        // console.log(this.state);
        const formData = new FormData();
        formData.append("file", this.state.file);
        formData.append("upload_preset", "uur2huja");
        
        let imageurl;
        let floatprice = parseFloat(this.state.price);

        Axios.post("https://api.cloudinary.com/v1_1/undergroundnook/image/upload", formData)
        .then((response) => {
            console.log(response['data']['url']);
            imageurl = response['data']['url'];
            this.setState({img: response['data']['url']});

            fetch("http://localhost:3030/add-plant", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sname: this.state.sname,
                    cname: this.state.cname,
                    desc: this.state.desc,
                    price: floatprice,
                    img: this.state.img
                })
            })

        });
    
        event.preventDefault();
    }

    render() {
    return (
        <div className="modal fade plantModal" id="addPlantModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Plant to Catalog</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Scientific Name</label>
                                    <br />
                                    <input onChange={this.changeSname} value={this.state.sname} className="input-box-modal form-control" type="text" placeholder="Enter a Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Common Name</label>
                                    <br />
                                    <input onChange={this.changeCname} value={this.state.cname} className="input-box-modal form-control" type="text" placeholder="Enter a Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descriptionOfPlant" className="form-label">Description</label>
                                    <br />
                                    <textarea onChange={this.changeDesc} value={this.state.desc} className="input-box-modal form-control" type="text" placeholder="Enter a Description" id="descriptionOfPlant" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <br />
                                    <input onChange={this.changePrice} value={String(this.state.price)} className="input-box-modal form-control" type="text" placeholder="Enter a Price" id="price" />
                                </div>
                                <p className="field-name">
                                    Upload Image
                                </p>
                                <div className="mb-3">
                                    <label htmlFor="file-upload" class="custom-file-upload">
                                        <i class="ri-image-add-fill"></i>
                                        <p>Drop your image here, or browse</p>
                                        <p>Supports: JPG, PNG</p>
                                    </label>
                                    <input onChange={this.changeFiles} id="file-upload" type="file"/>
                                </div>
                                <div id="filename" className="mb-3">
                                    {this.state.file['name']}
                                </div>
                            </form>
                            <div className="flex-box-submit-button">
                                <button onClick={this.handleSubmit} className="cart-button" type="submit" data-bs-dismiss="modal" >Add Plant</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default AddPlantModal;