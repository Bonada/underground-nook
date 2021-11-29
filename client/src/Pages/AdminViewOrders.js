import React from "react";
import './AdminViewOrders.css';
import '../Components/Navigation/Navigation.css';
import AdminOrderRow from "../Components/Rows/AdminOrderRow";
import ExportDataModal from "../Components/Modals/ExportDataModal";
import Table from "../Components/Table";

function AdminViewOrders() {
  const headers = [
    "Order ID",
    "Recepient Name",
    "Address 1",
    "Address 2",
    "City",
    "State",
    "Zip",
    "Shipping Carrier",
    "Order Status",
    "Total",
    ""
  ];

  const rowComponent = <AdminOrderRow />;

  return (
  <div id="AdminViewOrders">
      <h1 className="AdminViewOrders_Title">View Orders</h1>
      <div className="container" id="AdminViewOrdersContainer">
        <div className="row">
        <a href="#" className="add-plant-button" data-bs-toggle="modal" data-bs-target="#exportDataModal">Export Shipping Data</a>
          <div className="col-md col-catalog">
            <div className="edit-catalog-pane">
              <Table headers={headers} row_comp={rowComponent}/>
            </div>
          </div>
        </div>
      </div>
      <ExportDataModal />
    </div>
  );
}

export default AdminViewOrders;