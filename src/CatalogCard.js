import ppp from './PPP.png';

function CatalogCard() {
    return (
      <div className="col-md-2">
        <div className="card">
          <div className="row">
            <img className="card-img-top" src={ppp} alt="PPP"></img>
            <h2 className="card-title col-md-7 ">Pink Princess Philodendron</h2>
            <div className="card-text col-md-4 ">
              <div className="row">&nbsp;</div>
              <div className="row">
                <p className="col">$165+</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }

export default CatalogCard;