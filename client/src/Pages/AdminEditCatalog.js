import React from "react";
import './AdminEditCatalog.css';
import '../Components/Navigation.css';
import AddPlantModal from './AddPlantModal.js';
import EditPlantModal from "./EditPlantModal";
import Table from "../Components/Table";
import AdminEditCatalogRow from "./AdminEditCatalogRow";

function AdminEditCatalog() {

  const table_header = ["", "Name", "Description", "Price", ""];
  const table_rows = <AdminEditCatalogRow />;

  return (
  <div id="AdminEditCatalog">
      <h1 className="AdminEditCatalog_Title">Edit Catalog</h1>
      <div className="container" id="AdminEditCatalogContainer">
        <div className="row">
          <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#addPlantModal">+ Add Plant</a>
          <div className="col-md col-catalog">
            <div className="edit-catalog-pane">
              <Table headers={table_header} row_comp={table_rows} />
            </div>
          </div>          
        </div>
      </div>
      <AddPlantModal />
      <EditPlantModal />
    </div>
  );
}

export default AdminEditCatalog;