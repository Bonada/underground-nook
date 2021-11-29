function OrderRow(props) {
    return (
        <tr>
            <th scope="row">{props.address.street} <br />{props.address.city + ',' + props.address.state + props.address.zip}</th>
            <th className="align-middle">{props.orderid}</th>
            <th className="align-middle">{props.payment}</th>
            <th className="align-middle">{props.status}</th>
        </tr>
    );
}

export default OrderRow;