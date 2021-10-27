import React from "react";
import './Settings.css';
import '../Components/Navigation.css';

function Settings() {
  return (
    <div className="settings">
      <h1>Settings Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img className="profile-picture" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" alt="Minying Cao Profile Image" width="300px" />
          </div>
          <div className="col-sm">
            <label for="fname" className="form-label heading2">First Name</label>
            <br />
            <input className="input-box" type="text" value="Minying" className="form-control" id="fname" />
            <label for="lname" className="form-label heading2">Last Name</label>
            <br />
            <input className="input-box" type="text" value="Cao" className="form-control" id="lname" />
            <label for="email" className="form-label heading2">Email</label>
            <br />
            <input className="input-box" type="email" value="minyingcao12@gmail.com" className="form-control" id="email" />
            <button className="save-button" type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h1 className="heading1">Addresses</h1>

        <div className="row">
          <div className="col-sm">
            <div className="card h-100" style={{width: '18rem'}} data-bs-toggle="modal" data-bs-target="#addAddressModal">
              <div className="card-body align-items-center d-flex justify-content-center">
                <h5 className="card-title">+ Add Address</h5>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card h-100" style={{width: '18rem'}}>
              <div className="card-body">
                <p className="card-text-bold">Default Address</p>
                <p className="card-text">Minying Cao</p>
                <p className="card-text">1761 15th St</p>
                <p className="card-text">Troy, NY 12180</p>
                <p className="card-text">Phone Number: 800-123-4567</p>
                <a href="#" className="card-link">Remove</a>

                <a data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                  Edit Address
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card h-100" style={{width: '18rem'}}>
              <div className="card-body">
                <p className="card-text">Minying Cao</p>
                <p className="card-text">1761 15th St</p>
                <p className="card-text">Troy, NY 12180</p>
                <p className="card-text">Phone Number: 800-123-4567</p>
                <a href="#" className="card-link">Remove</a>
              
                <a data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                  Edit Address
                </a>
                <br />
                <a href="#" className="card-link">Set as Default</a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card h-100" style={{width: '18rem'}}>
              <div className="card-body">
                <p className="card-text">Minying Cao</p>
                <p className="card-text">1761 15th St</p>
                <p className="card-text">Troy, NY 12180</p>
                <p className="card-text">Phone Number: 800-123-4567</p>
                <a href="#" className="card-link">Remove</a>
                <a data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                  Edit Address
                </a>
                <br />
                <a href="#" className="card-link">Set as Default</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*  Add Address Modal */}
      <div className="modal fade" id="addAddressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="mb-3">
                    <label for="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box" type="text" placeholder="Enter Full Name" className="form-control" id="fullName" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="phoneNumber" className="form-label">Phone Number</label>
                    <br />
                    <input className="input-box" type="text" placeholder="Enter Phone Number" className="form-control" id="phoneNumber" />
                  </div>
                  <div className="mb-3">
                    <label for="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box" type="text" placeholder="Enter Street Address" className="form-control" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label for="city" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box" type="text" placeholder="Enter City" className="form-control" id="city" />
                  </div>
                  <div className="mb-3">
                    <label for="state" className="form-label">State</label>
                    <br />

                    <select className="input-box" className="form-select" id="state" name="state">
                      <option value="" disabled selected>Select a State</option>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>  
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>  
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>  
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>  
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>      
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>  
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label for="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box" type="text" placeholder="Enter Zip Code" className="form-control" id="zipcode" />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button className="submit-button" type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Address Modal */}
      <div className="modal fade" id="editAddressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  <div className="mb-3">
                    <label for="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box" type="text" value="Minying Cao" className="form-control" id="fullName" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="phoneNumber" className="form-label">Phone Number</label>
                    <br />
                    <input className="input-box" type="text" value="800-123-4567" className="form-control" id="phoneNumber" />
                  </div>
                  <div className="mb-3">
                    <label for="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box" type="text" value="1761 15th St" className="form-control" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label for="city" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box" type="text" value="Troy" className="form-control" id="city" />
                  </div>
                  <div className="mb-3">
                    <label for="state" className="form-label">State</label>
                    <br />
                    <select className="input-box" className="form-select" id="state" name="state">
                      <option value="" disabled selected>NY</option>
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>  
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>  
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>  
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>  
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>      
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>  
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box" type="text" value="12180" className="form-control" id="zipcode" />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button className="submit-button" type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;