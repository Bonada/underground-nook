import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import OrderPage from "../../Pages/OrderPage";


function OrderRow(props) {
    return (
        <tr>
            <th scope="row"> {props.order.address} </th>
            <th className="align-middle"><Link to={"/OrderPage?id=" + props.order.id}>{props.order.id}</Link></th>
            <th className="align-middle">{props.order.paystatus}</th>
            <th className="align-middle">{props.order.orderstatus}</th>
            <th className="align-middle">{"$" + props.order.price}</th>
        </tr>
    );

        

}

export default OrderRow;