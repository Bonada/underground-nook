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
        // make call to API to delete from db
    }

    return (
        <tr id="row-10028492" className="displayed-row">
            <th scope="row">
            <Link to={"/OrderPage?id=" + props.order.id}>{props.order.id}</Link>
            </th>
            <td>{props.order.username}</td>
            <td>{props.order.address}</td>
            <td>-</td>
            <td>Troy</td>
            <td>NY</td>
            <td>12180</td>
            <td>USPS</td>
            <td>Paid</td>
            <td>{props.order.price}</td>

            <td className="edit-col">
                <div className="edit-container">
                    <i class="ri-pencil-line"></i>
                    <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#editOrderModal">Edit</a>
                </div>
                
                <div className="edit-container">
                    <i className="ri-delete-bin-line"></i>
                    <a href="#" className="card-link" onClick={handleDeleteClicked}>Remove</a>
                </div>
            </td>
            <EditOrderModal />
        </tr>
    );
}

export default AdminOrderRow;