// import ppp from './PPP.png';

function CatalogCard() {
    return (
        <div className="col-md-2">
            <div className="catalog card" data-bs-toggle="modal" data-bs-target="#catalogModal">
                <div className="row">
                    <img className="catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img>
                    <h2 className="catalog-card-title card-title col-md-8 ">Pink Princess Philodendron</h2>
                    <div className="catalog-price-col card-text col-md-3 ">
                        <div className="row">&nbsp;</div>
                        <div className="row">
                            <p className="catalog-price col">$165+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default CatalogCard;