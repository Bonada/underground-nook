function AdminDashboardCatalogRow(props) {
    return (
        <tr>
            <td><img className="admin-catalog-img card-img-top" src={props.img_url} alt="PPP"></img></td>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{'$' + (parseFloat(props.price)).toFixed(2)}</td>
        </tr>
    );
}

export default AdminDashboardCatalogRow;