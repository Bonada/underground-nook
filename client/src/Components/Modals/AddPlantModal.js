import './Modal.css';
import React from 'react';
import Axios from 'axios';
import { parse } from 'dotenv';

function AddPlantModal(props){    
    let sname = '';
    let cname = '';
    let desc = '';
    let price = '';
    let file = '';

    function changeSname(event){
        sname = event.target.value;
    }

    function changeCname(event){
        cname = event.target.value;
    }

    function changeDesc(event){
        desc = event.target.value;
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    function changePrice(event){
        console.log(event.target.value);
        price = event.target.value;
        // console.log("VALUE: ", event.target.value );
        // console.log("NAME: ", this.state.name);
    }

    function changeFiles(event){
        file = event.target.files[0];
        console.log(event.target.files[0]);
        // console.log(this.state);
    }

    async function handleSubmit(event, type, uid){
        event.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "uur2huja");
        
        let imageurl;
        let floatprice = parseFloat(price);

        Axios.post("https://api.cloudinary.com/v1_1/undergroundnook/image/upload", formData)
        .then((response) => {
            console.log(response['data']['url']);
            imageurl = response['data']['url'];
            // this.setState({img: response['data']['url']});

            if (type == "purge") {
                fetch("api/add-purge-plant", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userid: uid,
                        sname: sname,
                        // cname: cname,
                        // desc: desc,
                        price: floatprice,
                        img: response['data']['url']
                    })
                })
                // Reload cart page for new item to show up
                window.location.reload(false);
            }
            else {
                fetch("api/add-plant", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        sname: sname,
                        cname: cname,
                        desc: desc,
                        price: floatprice,
                        img: response['data']['url']
                    })
                })
            }
        });
    }

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="AddPlantModalLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Scientific Name</label>
                                    <br />
                                    <input onChange={changeSname} className="input-box-modal form-control" type="text" placeholder="Enter a Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Common Name</label>
                                    <br />
                                    <input onChange={changeCname}  className="input-box-modal form-control" type="text" placeholder="Enter a Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descriptionOfPlant" className="form-label">Description</label>
                                    <br />
                                    <textarea onChange={changeDesc}  className="input-box-modal form-control" type="text" placeholder="Enter a Description" id="descriptionOfPlant" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <br />
                                    <input onChange={changePrice}  className="input-box-modal form-control" type="text" placeholder="Enter a Price" id="price" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fileUpload" className="form-label">Upload Screenshot</label>
                                    <br />
                                    <input type="file" onChange={changeFiles} className="input-box-modal form-control" id="fileUpload" name="file" accept="image/*"></input>
                                </div>
                                <div id="filename" className="mb-3">
                                    
                                </div>
                            </form>
                            <div className="flex-box-submit-button">
                                <button onClick={(e) => handleSubmit(e, props.type, props.userid)} className="cart-button" id="AddPlantModalButton" type="submit" data-bs-dismiss="modal" >Add Plant</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPlantModal;