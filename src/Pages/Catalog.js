import React from "react";
import './Catalog.css';
import '../Components/Navigation.css';

import CatalogCard from './CatalogCard.js'

function Catalog() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="offset-md-1 col-md-3">
          <h1 className="catalog-header">Catalog</h1>
          <p className="catalog-caption">a collection of our plants</p>
        </div>
      </div>
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