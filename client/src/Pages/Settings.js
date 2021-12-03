import React from "react";
import './Settings.css';
import '../Components/Navigation/Navigation.css';
import AddressModal from '../Components/Modals/AddressModal.js';
import AddressCard from '../Components/Cards/AddressCard.js';
import EditInformation from "../Components/Edits/EditInformation.js";


export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      addresses: [],
      currentIndex: 0
    };
  }
  currentAddress = {}

  updateOld() {

  }

  // Get user addresses with api call

  render() {
    return (
      <div className="settings">
        <div className="container basic-user-info-container">
          <div className="row">
            <div className="col-md">
              <img className="profile-picture" src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/226848957_4524022060943703_6194489319445931835_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=n3IESs-gxKEAX8NvLXV&_nc_ht=scontent-lga3-2.xx&oh=2b7631efff9821d4eb42bd3a1c8f728b&oe=6195B0A3" alt="Minying Cao Profile" width="300px" />
            </div>
            <div className="col-md">
              <EditInformation currentUser={this.props.currentUser} parent="Settings" onSubmit="save-settings" />
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

            {this.state.loading ? (null) : this.state.addresses.map((address, index) => {
              console.log(this.state.addresses);
              console.log(address, index);
              return (<div className="col-sm">
                <AddressCard key={"address " + index} address={address}
                  onClick={() => this.setState({ currentIndex: index })} />
              </div>);
            })}
          </div>
        </div>

        {/*  Add Address Modal */}
        <AddressModal isNew={true} currentUser={this.props.currentUser} isAdmin={this.props.isAdmin} />

        {/* Edit Address Modal */}
        <AddressModal isNew={false} old={this.currentAddress} currentUser={this.props.currentUser} isAdmin={this.props.isAdmin} onMouseEnter={this.updateOld} />
      </div>
    )

  }

  async populateAddresses() {
    fetch("http://localhost:3030/get-addresses", {
      method: 'POST',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          addresses: data
        });
      });
  }
}