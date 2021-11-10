import React from "react";
import './AdminEditCatalog.css';
import '../Components/Navigation.css';

function AdminEditCatalog() {
  return (
  <div id="AdminEditCatalog">
      <h1 className="AdminEditCatalog_Title">Edit Catalog</h1>
      <div className="container" id="AdminEditCatalogContainer">
        <div className="row">
          <a href="#" className="add-plant-button">+ Add Plant</a>
          <div className="col-md col-catalog">
          
            <div className="edit-catalog-pane">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="img-col"><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img></td>
                    <td className="title-col">Pink Princess Philodendron</td>
                    <td className="description-col">This beautiful PPP is well rooted and ships in a 4" pot.</td>
                    <td className="price-col">$165</td>
                    <td className="edit-col">
                      <div className="edit-container">
                        <i class="ri-pencil-line"></i>
                        <a href="#" className="card-link">Edit</a>
                      </div>
                      
                      <div className="edit-container">
                        <i className="ri-delete-bin-line"></i>
                        <a href="#" className="card-link">Remove</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="img-col"><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/b0d3b1/3138956994/il_1588xN.3138956994_c45f.jpg" alt="Monstera Adansonii"></img></td>
                    <td className="title-col">Monstera Adansonii</td>
                    <td className="description-col">A green Mostera plant, also known as the Swiss cheese plant. Includes 4" pot.</td>
                    <td className="price-col">$15</td>
                    <td className="edit-col">
                      <div className="edit-container">
                        <i class="ri-pencil-line"></i>
                        <a href="#" className="card-link">Edit</a>
                      </div>
                      
                      <div className="edit-container">
                        <i className="ri-delete-bin-line"></i>
                        <a href="#" className="card-link">Remove</a>
                      </div>
                    </td>

                  </tr>
                  <tr>
                    <td className="img-col"><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/e13afe/3186672225/il_1588xN.3186672225_eccq.jpg" alt="Nanouk"></img></td>
                    <td className="title-col">Nanouk</td>
                    <td className="description-col">Pink and Green striped Nanouk plant. Includes 4" pot.</td>
                    <td className="price-col">$15</td>
                    <td className="edit-col">
                      <div className="edit-container">
                        <i class="ri-pencil-line"></i>
                        <a href="#" className="card-link">Edit</a>
                      </div>
                      
                      <div className="edit-container">
                        <i className="ri-delete-bin-line"></i>
                        <a href="#" className="card-link">Remove</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEditCatalog;