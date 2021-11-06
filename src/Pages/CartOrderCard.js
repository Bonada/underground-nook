// import ppp from './PPP.png';

function CartOrderCard() {
    return (
        <div className="OrderContent">
            <div className="order card" data-bs-toggle="modal" data-bs-target="#orderModal">
                <div className="row">
                    <img className="order-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img>
                    <h2 className="order-card-title card-title col-md-8 ">Pink Princess Philodendron</h2>
                    <div className="order-price-col card-text col-md-3 ">
                    <div className="row">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <p className="order-price col">Price: $165.00</p>
                        </div>
                        <div className="col-md-2">
                            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartOrderCard;