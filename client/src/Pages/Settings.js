import React from "react";
import './Settings.css';
import '../Components/Navigation/Navigation.css';
import AddressModal from '../Components/Modals/AddressModal.js';
import AddressCard from '../Components/Cards/AddressCard.js';
import EditInformation from "../Components/Edits/EditInformation.js";


export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      loading: true,
      addresses: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    this._isMounted = true;
    console.log(this.state.addresses);
    this._isMounted && this.populateAddresses();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser && prevProps.currentUser.userid) return;
    if (this.props.currentUser && this.props.currentUser.userid) {
      this.populateAddresses();
    }
  }



  // Get user addresses with api call

  render() {
    return (
      <div className="settings">
        <div className="container basic-user-info-container">
          <div className="row">
            <div className="col-md">
              <img className="profile-picture" src={"https://graph.facebook.com/" + this.props.currentUser.userid + "/picture?type=large"} alt="Minying Cao Profile" width="300px" />
            </div>
            <div className="col-md">
              {this.state.loading ? null : <EditInformation currentUser={this.props.currentUser} parent="Settings" onSubmit="save-settings" />}
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

            {this.state.loading ? (null) : (console.log(this.state.addresses), this.state.addresses.map((address, index) => {
              console.log(this.state.addresses);
              console.log(address, index);
              return (<div className="col-sm">
                <AddressCard key={"address " + index} address={address}
                  onClick={() => {this.setState({ currentIndex: index }); console.log(this.state.currentIndex)}} />
              </div>);
            }))}
          </div>
        </div>

        {/*  Add Address Modal */}
        {this.state.loading ? (null) : <AddressModal isNew={true} currentUser={this.props.currentUser} isAdmin={this.props.isAdmin} />}

        {/* Edit Address Modal */}
        {(this.state.loading || this.state.addresses.length === 0) ? (null) : <AddressModal isNew={false} address={this.state.addresses[this.state.currentIndex]} currentUser={this.props.currentUser} isAdmin={this.props.isAdmin} />}
      </div>
    )

  }

  async populateAddresses() {
    fetch("/api/get-addresses", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: this.props.currentUser.userid,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success !== false) {
          console.log(data);
          if (data.addresses && data.addresses.length !== 0) {
            this.setState({
              addresses: data.addresses
            });
          }
          this.setState({
            loading: false,
          });

        }
      });
  }
}