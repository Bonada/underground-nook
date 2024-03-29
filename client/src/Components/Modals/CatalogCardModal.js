function CatalogCardModal(props) {
  console.log(props);

  function handleSubmit(pid, uid) {
    if (uid == null) {
      alert("Log in to purchase plants");
      return;
    }
    fetch("api/add-to-cart", {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: uid,
        plantid: pid
      })
    })
    .then(async response => await console.log(response.json()),
    window.location.reload(false))
    .catch(e => console.log(e));
  }

  return <div className="modal fade" id="catalogModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="catalog modal-header">
          <h5 className="modal-title" id="exampleModalLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="catalog card">
              <div className="row">
                <img className="catalog-img card-img-top" src={props.plant.img_url} alt="PPP"></img>
              </div>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <h2>{props.plant.species_name}</h2>
            </div>
            <div className="row">
              <h2>{props.plant.common_name}</h2>
            </div>
            <div className="row">
              <p>{props.plant.description}</p>
              <p>{'$' + (parseFloat(props.plant.price)).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="catalog modal-footer">
          <button className="cart-button" type="button" id="CatalogCardSubmit" data-bs-dismiss="modal" onClick={handleSubmit.bind(null, props.plant.id, props.currentUser.userid)}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>;
}

export default CatalogCardModal