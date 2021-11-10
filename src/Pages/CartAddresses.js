
function CartAddresses() {
  return (
    <div className="container addresses-container">

      <div className="row">
        <div className="col-sm">
          <div className="card h-100 cart" style={{width: '18rem'}} data-bs-toggle="modal" data-bs-target="#addAddressModal">
            <div className="card-body align-items-center d-flex justify-content-center">
              <h5 className="card-title">+ Add Address</h5>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card h-100 cart" style={{width: '18rem'}}>
            <div className="card-body">
              <p className="card-text">Minying Cao</p>
              <p className="card-text">1761 15th St</p>
              <p className="card-text">Troy, NY 12180</p>

              <a data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                Edit
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card h-100 cart" style={{width: '18rem'}}>
            <div className="card-body">
              <p className="card-text">Minying Cao</p>
              <p className="card-text">1761 15th St</p>
              <p className="card-text">Troy, NY 12180</p>
            
              <a data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default CartAddresses;