function AdminEditRow(props) {
    return (
        <tr>
            <td className="img-col"><img className="admin-catalog-img card-img-top" src={props.img_url} alt="Nanouk"></img></td>
            <td className="title-col">{props.name}</td>
            <td className="description-col">{props.desc}</td>
            <td className="price-col">$15</td>
            <td className="edit-col">
            <div className="edit-container">
                <i class="ri-pencil-line"></i>
                <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#editPlantModal">Edit</a>
            </div>
            
            <div className="edit-container">
                <i className="ri-delete-bin-line"></i>
                <a href="#" className="card-link">Remove</a>
            </div>
            </td>
        </tr>
    );
}

export default AdminEditRow;