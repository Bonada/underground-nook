import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


function OrderRow(props) {
    return (
        <tr>
            <th scope="row"> {props.order.address.address} </th>
            <th className="align-middle"><Link to={"/OrderPage?id=" + props.order.id}>{props.order.id}</Link></th>
            <th className="align-middle">{props.order.paystatus}</th>
            <th className="align-middle">{props.order.orderstatus}</th>
            <th className="align-middle">{"$" + props.order.price}</th>
        </tr>
    );

        

}

export default OrderRow;