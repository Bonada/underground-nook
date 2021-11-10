import React from "react";
import './Settings.css';
import '../Components/Navigation.css';
import AddAddress  from "./AddAddress.js";
import AddAddressModal from './AddAddressModal.js';
import EditAddress from './EditAddress.js';
import EditAddressModal from './EditAddressModal.js';
import EditInformation  from "./EditInformation.js";
import EditDefault from "./EditDefault.js";


function Settings() {
  return (
    <div className="settings">
      <div className="container basic-user-info-container">
        <div className="row">
          <div className="col-md">
            <img className="profile-picture" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" alt="Minying Cao Profile Image" width="300px" />
          </div>
          <div className="col-md">
            <EditInformation />
          </div>
        </div>
      </div>

      <div className="container addresses-container">
        <h1 className="heading1">Addresses</h1>
        <div className="row">
          <div className="col-sm">
            <AddAddress />
          </div>

          <div className="col-sm">
            <EditDefault />
          </div>

          <div className="col-sm">
            <EditAddress />
          </div>

          <div className="col-sm">
            <EditAddress />
          </div>
        </div>
      </div>

      {/*  Add Address Modal */}
      <AddAddressModal />

      {/* Edit Address Modal */}
      <EditAddressModal />
    </div>
  );
}

export default Settings;