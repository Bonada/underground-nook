import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import EditOrderModal from "../Modals/EditOrderModal";

function AdminOrderRow(props) {
    function hideRow() {
        document.getElementById("row-10028492").classList.add("hidden-row");
        document.getElementById("row-10028492").classList.add("displayed-row");
    }

    function handleDeleteClicked() {
        hideRow();
        fetch("http://localhost:3030/delete-order", {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: props.order.id
                    })
                })
        window.location.reload(false);
    }

    return (
        <tr id="row-10028492" className="displayed-row">
            <th scope="row">
            <Link to={"/OrderPage?id=" + props.order.id}>{props.order.id}</Link>
            </th>
            <td>{props.order.username}</td>
            <td>{props.order.address.address}</td>
            <td>{props.order.address.aptno}</td>
            <td>{props.order.address.city}</td>
            <td>{props.order.address.state}</td>
            <td>{props.order.address.zip}</td>
            <td>{props.order.shippingcarrier}</td>
            <td>{props.order.paystatus}</td>
            <td>{props.order.price}</td>

            <td className="edit-col">
                <div className="edit-container">
                    <i className="ri-pencil-line"></i>
                    <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#editOrderModal">Edit</a>
                </div>
                
                <div className="edit-container">
                    <i className="ri-delete-bin-line"></i>
                    <a href="#" className="card-link" onClick={handleDeleteClicked}>Remove</a>
                </div>
            </td>
            {/* <EditOrderModal /> */}
        </tr>
    );
}

export default AdminOrderRow;