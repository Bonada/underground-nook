import React from "react";
import './NewUser.css';
import '../Components/Navigation/Navigation.css';

function NewUser(props) {
  let name = props.currentUser.username.split(" ");
  return (
    <div id="NewUser">
      <div id="Welcome_Message">
        <h1 id="User_Page_Title">Welcome to the Underground Nook</h1>
        <p id="User_Page_Description">Hello new user! Before you continue on, please provide some additional information about yourself in order to enhance your experience.</p>
      </div>
      <form id="Settings_Info" onSubmit="create_user-settings">
        <div className="row">
          <label htmlFor="firstname" id="NewUser-label" className="form-label heading">First Name</label>
          <input className="input-box" type="text" defaultValue={name[0]} id="firstname" />
        </div>

        <div className="row">
          <label htmlFor="lastname" id="NewUser-label" className="form-label heading">Last Name</label>
          <input className="input-box" type="text" defaultValue={name[1]} id="lastname" />
        </div>

        <div className="row">
          <label htmlFor="email" id="NewUser-label" className="form-label heading">Email</label>
          <input className="input-box" type="email" defaultValue={props.currentUser.email} id="email" />
        </div>

        <div className="row">
          <label htmlFor="phonenumber" id="NewUser-label" className="form-label heading">Phone Number</label>
          <input className="input-box" type="text" placeholder="Ex. 1234567890" id="phonenumber" />
        </div>

        <div className="row flex-box-save-button" id="NewUserButton">
          <button className="btn_save-button" type="button">
            <h1 id="NewUser_ButtonText">Submit</h1>
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewUser;