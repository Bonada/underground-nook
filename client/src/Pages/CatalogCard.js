function CatalogCard(props) {
    console.log("MAKING: ", props);
    
    return (
        <div className="col-md-2" onClick={props.onClick}>
            <div className="catalog-card" data-bs-toggle="modal" data-bs-target="#catalogModal">
                    <img className="catalog-img card-img-top" src={props.img_url} alt="PPP"></img>
                    <h2 className="catalog-card-title card-title col-md-8 ">{props.species_name}</h2>
                    <div className="catalog-price-col card-text col-md-3 ">
                            <p className="catalog-price col"> {'$' + (parseFloat(props.price)).toFixed(2)}</p>
                    </div>
            </div>
        </div>);
}

export default CatalogCard;