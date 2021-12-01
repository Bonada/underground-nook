function OrderPageRow(props) {
    return (
        <tr className="OrderPageRow">
            <th scope="row">{props.plant.id}</th>
            <td><img src={props.plant.img_url} alt="Plant 2" /></td>
            <td>{props.plant.species_name}</td>
            <td>${props.plant.price}</td>
        </tr>
    );
}

export default OrderPageRow;