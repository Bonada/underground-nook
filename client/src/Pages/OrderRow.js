function OrderRow(props) {
    return (
        <tr>
            <th scope="row">{props.address} <br />{props.address}</th>
            <th className="align-middle">{props.orderid}</th>
            <th className="align-middle">{props.payment}</th>
            <th className="align-middle">{props.status}</th>
        </tr>
    );
}

export default OrderRow;