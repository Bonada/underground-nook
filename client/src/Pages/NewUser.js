import React from "react";
import './NewUser.css';
import '../Components/Navigation.css';

function NewUser() {
  return (
    <div id="NewUser">
      <div id="Welcome_Message">
        <h1 id="User_Page_Title">Welcome to the Underground Nook</h1>
        <p id="User_Page_Description">Hello new user! Before you continue on, please provide some additional information about yourself in order to enhance your experience.</p>
      </div>
      <form id="Settings_Info" onSubmit="create_user-settings">
        <div className="row">
          <label htmlFor="firstname" id="NewUser-label" className="form-label heading">First Name</label>
          <input className="input-box" type="text" defaultValue="John" id="firstname" />
        </div>

        <div className="row">
          <label htmlFor="lastname" id="NewUser-label" className="form-label heading">Last Name</label>
          <input className="input-box" type="text" defaultValue="Doe" id="lastname" />
        </div>

        <div className="row">
          <label htmlFor="email" id="NewUser-label" className="form-label heading">Email</label>
          <input className="input-box" type="email" defaultValue="abc123@gmail.com" id="email" />
        </div>

        <div className="row">
          <label htmlFor="phonenumber" id="NewUser-label" className="form-label heading">Phone Number</label>
          <input className="input-box" type="text" defaultValue="1234567890" id="phonenumber" />
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