import CatalogCard from './CatalogCard.js'

function Catalog() {
    return (
      <div>
        <div className="row">
          <div className="offset-md-1 col-md-3">
            <h1>Catalog</h1>
            <p>a collection of our plants</p>
          </div>
        </div>
        <div className="container-fluid"></div>
        <div className="row cards">
          <div className="row">&nbsp;</div>
          <div className="col-md-1"></div>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    );
  }

export default Catalog;