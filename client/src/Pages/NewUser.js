import React from "react";
import './NewUser.css';
import '../Components/Navigation.css';

function NewUser() {
  return (
    <div id="HomePage">
      <h1 id="Home_Title">Welcome to the Underground Nook</h1>
      <p>Hello new user! Before you continue on, please provide some additional information about yourself in order to enhance your experience.</p>

      <form onSubmit="create-settings">
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
          <button className="btn save-button" type="button">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default NewUser;