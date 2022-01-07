function AdminEditCatalogRow() {
    return (
      <tr>
        <td className="img-col"><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img></td>
        <td className="title-col">Pink Princess Philodendron</td>
        <td className="description-col">This beautiful PPP is well rooted and ships in a 4" pot.</td>
        <td className="price-col">$165</td>
        <td className="edit-col">
          <div className="edit-container">
            <i className="ri-pencil-line"></i>
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

export default AdminEditCatalogRow;