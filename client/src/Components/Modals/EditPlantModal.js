import './Modal.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { parse } from 'dotenv';
import './Modal.css';

function EditPlantModal(props) {
    
    let id = props.plant.id;
    let sname = props.plant.species_name;
    let cname = props.plant.common_name;
    let desc = props.plant.description;
    let price = props.plant.price;
    let file = '';

    function changesname(event){
        console.log(event);
        console.log(event.target.value);
        sname = event.target.value;
    }

    function changecname(event){
        console.log(event);
        console.log(event.target.value);
        cname = event.target.value;
    }

    function changedesc(event){
        console.log(event);
        console.log(event.target.value);
        desc = event.target.value;
    }

    function changeprice(event){
        console.log(event);
        console.log(event.target.value);
        price = event.target.value;
    }

    function changefiles(event){
        console.log(event);
        console.log(event.target.files[0]);
        file = event.target.files[0];
    }

    async function handleSubmit(event){
        // console.log(this.state);
        
        let imageurl;
        let floatprice = parseFloat(price);

        if(file != ''){

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "uur2huja");

            Axios.post("https://api.cloudinary.com/v1_1/undergroundnook/image/upload", formData)
            .then((response) => {
                console.log(response['data']['url']);
                imageurl = response['data']['url'];

                fetch("http://localhost:3030/update-plant", {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id,
                        sname: sname,
                        cname: cname,
                        desc: desc,
                        price: floatprice,
                        img: imageurl
                    })
                })

            });
        }
        else{

            fetch("http://localhost:3030/update-plant", {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: id,
                            sname: sname,
                            cname: cname,
                            desc: desc,
                            price: floatprice
                        })
                    })
        }
        window.location.reload(false);
        event.preventDefault();
    }


    return (
        <div className="modal fade" id="editPlantModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Plant</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h1>{props.plant.species_name}</h1>
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <br />
                                    <input onChange={changesname} className="input-box-modal form-control" type="text" placeholder="Default Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Common Name</label>
                                    <br />
                                    <input onChange={changecname} className="input-box-modal form-control" type="text" placeholder="Enter a Name" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descriptionOfPlant" className="form-label">Description</label>
                                    <br />
                                    <textarea onChange={changedesc} className="input-box-modal form-control" type="text"placeholder="Description" id="descriptionOfPlant" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <br />
                                    <input onChange={changeprice} className="input-box-modal form-control" type="text" placeholder="Price" id="price" />
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
                                    <input onChange={changefiles} id="file-upload" type="file"/>
                                </div>
                            </form>
                            <div className="flex-box-submit-button">
                                <button onClick={handleSubmit} className="cart-button" id="edit-plant-modal-button" type="submit" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPlantModal;