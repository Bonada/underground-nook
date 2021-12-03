// import ppp from './PPP.png';

function CartItemCard(props) {
    return (
      <div className="OrderContent">
        <div className="order card" data-bs-toggle="modal" data-bs-target="#orderModal">
          <div className="row">
            <img className="order-img card-img-top" src={props.plant.img_url} alt="PPP"></img>
            <h2 className="order-card-title card-title col-md-8 ">{props.plant.species_name}</h2>
            <div className="order-price-col card-text col-md-3 ">
              <div className="row">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <p className="order-price col">${props.plant.price}</p>
              </div>
              <div className="col-md-1" onClick={props.handleRemove}>
                <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartItemCard;