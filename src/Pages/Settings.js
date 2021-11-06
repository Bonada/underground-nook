import React from "react";
import './Settings.css';
import '../Components/Navigation.css';

function Settings() {
  function handleSubmit(event) {
    console.log(event.target.value);
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="settings">
      <div className="container basic-user-info-container">
        <div className="row">
          <div className="col-md">
            <img className="profile-picture" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" alt="Minying Cao Profile Image" width="300px" />
          </div>
          <div className="col-md">

            <div className="row">
              <label htmlFor="fname" className="form-label heading2">First Name</label>
              <input className="input-box" type="text" defaultValue="Minying" id="fname" />
            </div>

            <div className="row">
              <label htmlFor="lname" className="form-label heading2">Last Name</label>
              <input className="input-box" type="text" defaultValue="Cao" id="lname" />
            </div>
            
            <div className="row">
              <label htmlFor="email" className="form-label heading2">Email</label>
              <input className="input-box" type="email" defaultValue="minyingcao12@gmail.com" id="email" />
            </div>
          
            <div className="row">
              <label htmlFor="phonenumber" className="form-label heading2">Phone Number</label>
              <input className="input-box" type="text" defaultValue="1234567890" id="phonenumber" />
            </div>

            <div className="row flex-box-save-button">
              <button className="btn save-button" type="button">Save</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container addresses-container">
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


                <div className="container">
                  <i className="ri-delete-bin-line"></i>
                  <a href="#" className="card-link">Remove</a>
                </div>

              
                <div className="container">
                  <i className="ri-pencil-line"></i>
                  <a className="card-link" data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                      Edit Address
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card h-100" style={{width: '18rem'}}>
              <div className="card-body">
                <p className="card-text">Minying Cao</p>
                <p className="card-text">1761 15th St</p>
                <p className="card-text">Troy, NY 12180</p>

                <i className="ri-delete-bin-line"></i>
                <a href="#" className="card-link">Remove</a>
                <i className="ri-pencil-line"></i>
                <a className="card-link" data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                  Edit Address
                </a>
                <br></br>
                <i className="ri-arrow-go-back-line"></i>
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
                <i className="ri-delete-bin-line"></i>
                <a href="#" className="card-link">Remove</a>
                <i className="ri-pencil-line"></i>
                <a className="card-link" data-bs-toggle="modal" data-bs-target="#editAddressModal" href="">
                  Edit Address
                </a>
                <br></br>
                <i className="ri-arrow-go-back-line"></i>
                <a href="#" className="card-link">Set as Default</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Add Address Modal */}
      <div className="modal fade" id="addAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Full Name" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Street Address" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter City" id="city" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <br />

                    <select className="input-box-modal form-control" id="state" name="state" value="Select State" onChange={handleChange}>
                      <option value="Select State" disabled>Select State</option>
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
                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" placeholder="Enter Zip Code" id="zipcode" />
                  </div>
                </form>

                <div className="flex-box-submit-button">
                  <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Address Modal */}
      <div className="modal fade" id="editAddressModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="Minying Cao" id="fullName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="1761 15th St" id="streetAddress" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">Street Address</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="Troy" id="city" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <br />
                    <select className="input-box-modal form-select" id="state" name="state" value="NY" onChange={handleChange}>
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
                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                    <br />
                    <input className="input-box-modal form-control" type="text" defaultValue="12180" id="zipcode" />
                  </div>
                </form>
                <div className="flex-box-submit-button">
                  <button className="submit-button btn" type="submit" data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;