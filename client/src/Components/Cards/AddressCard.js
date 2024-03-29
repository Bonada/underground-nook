export function AddressCard(props) {
  return <div className="card h-100" style={{ width: '18rem' }} onClick={props.onClick}>
    <div className="card-body">
      <p className="card-text">{props.address.aptno} {props.address.address}</p>
      <p className="card-text">{props.address.city}, {props.address.state} {props.address.zip}</p>
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
        {!props.isDefault &&
          <div className="container edit-card">
            <i className="ri-arrow-go-back-line"></i>
            <a href="#" className="card-link">Set as Default</a>
          </div>
        }
      </div>
    </div>
  </div>;
}

export default AddressCard
