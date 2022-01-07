function AdminDashboardOrderRow(props) {
    return (
        <tr>
            <th scope="row">{props.order.id}</th>
            <td>{props.order.username}</td>
            <td>{props.order.paystatus}</td>
            <td>{props.order.orderstatus}</td>
      </tr>
    );
}

export default AdminDashboardOrderRow;