import React from "react";
import './Settings.css';
import '../Components/Navigation/Navigation.css';
import AddressModal from '../Components/Modals/AddressModal.js';
import AddressCard from '../Components/Cards/AddressCard.js';
import EditInformation from "../Components/Edits/EditInformation.js";


function Settings(props) {

  // Get user addresses with api call

  return (
    <div className="settings">
      <div className="container basic-user-info-container">
        <div className="row">
          <div className="col-md">
            <img className="profile-picture" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" alt="Minying Cao Profile" width="300px" />
          </div>
          <div className="col-md">
            <EditInformation currentUser={props.currentUser} parent="Settings" onSubmit="save-settings"/>
          </div>
        </div>
      </div>

      <div className="container addresses-container">
        <h1 className="heading1">Addresses</h1>
        <div className="row">
          <div className="col-sm">
            <div className="card h-100" style={{ width: '18rem' }} data-bs-toggle="modal" data-bs-target="#addAddressModal">
              <div className="card-body align-items-center d-flex justify-content-center">
                <h5 className="card-title">+ Add Address</h5>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <AddressCard name="Minying Cao" street="1761 15th St" city="Troy, NY 12180" isDefault={true} />
          </div>

          <div className="col-sm">
            <AddressCard name="Minying Cao" street="1761 15th St" city="Troy, NY 12180" isDefault={false} />
          </div>

          <div className="col-sm">
            <AddressCard name="Minying Cao" street="1761 15th St" city="Troy, NY 12180" isDefault={false} />
          </div>
        </div>
      </div>

      {/*  Add Address Modal */}
      <AddressModal isNew={true} currentUser={props.currentUser} isAdmin={props.isAdmin} />

      {/* Edit Address Modal */}
      <AddressModal isNew={false} name="Minying Cao" street="1761 15th St" city="Troy" state="NY" zip="12180" currentUser={props.currentUser} isAdmin={props.isAdmin} />
    </div>
  );
}

export default Settings;