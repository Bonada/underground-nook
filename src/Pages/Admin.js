import React from "react";
import './Admin.css';
import '../Components/Navigation.css';

function Admin() {
  return (
  <div id="Admin-Dashboard-Page">
      <h1 className="CartPage_Title"> Admin Dashboard</h1>
      <div className="container" id="CartPageContainer">
        <div className="row">
          <div className="col-md-5">
            <div className="edit-catalog-pane">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/1a565b/3138887356/il_1140xN.3138887356_4n0k.jpg" alt="PPP"></img></td>
                    <td>Pink Princess Philodendron</td>
                    <td>This beautiful PPP is well rooted and ships in a 4" pot.</td>
                    <td>$165</td>
                  </tr>
                  <tr>
                    <td><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/b0d3b1/3138956994/il_1588xN.3138956994_c45f.jpg" alt="Monstera Adansonii"></img></td>
                    <td>Monstera Adansonii</td>
                    <td>A green Mostera plant, also known as the Swiss cheese plant. Includes 4" pot.</td>
                    <td>$15</td>
                  </tr>
                  <tr>
                    <td><img className="admin-catalog-img card-img-top" src="https://i.etsystatic.com/25913068/r/il/e13afe/3186672225/il_1588xN.3186672225_eccq.jpg" alt="Nanouk"></img></td>
                    <td>Nanouk</td>
                    <td>Pink and Green striped Nanouk plant. Includes 4" pot.</td>
                    <td>$15</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="container flex-box-edit-catalog-button">
                <button className="btn btn-primary edit-catalog-button" type="button">Edit Catalog</button>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="view-orders-pane">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Address</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10028492</th>
                    <td>1761 15th St Troy, NY 12180</td>
                    <td>Yes</td>
                    <td>Delivered</td>
                  </tr>
                  <tr>
                    <th scope="row">29482932</th>
                    <td>212 Bugbee Ln Southwick, MA 01077</td>
                    <td>Yes</td>
                    <td>Approved</td>
                  </tr>
                  <tr>
                    <th scope="row">12920293</th>
                    <td>861 Michigan Ave Schenectady, NY 12309</td>
                    <td>No</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
              <div className="container flex-box-view-orders-button">
                <button className="btn btn-primary view-orders-button" type="button">View Orders</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;