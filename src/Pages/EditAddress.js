export function EditAddress() {
  return <div className="card h-100" style={{ width: '18rem' }}>
    <div className="card-body">
      <p className="card-text">Minying Cao</p>
      <p className="card-text">1761 15th St</p>
      <p className="card-text">Troy, NY 12180</p>
      <div className="edit-address-block">
        <div className="container address-card">
          <i className="ri-delete-bin-line"></i>
          <a href="#" className="card-link">Remove</a>
        </div>
        <div className="container address-card">
          <i className="ri-pencil-line"></i>
          <a className="card-link" data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
            Edit Address
          </a>
        </div>
        <div className="container edit-card">
          <i class="ri-arrow-go-back-line"></i>
          <a href="#" className="card-link">Set as Default</a>
        </div>
      </div>
    </div>
  </div>;
}

export default EditAddress
