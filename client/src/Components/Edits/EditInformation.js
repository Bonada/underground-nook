function EditInformation(props) {
  let name = props.currentUser.username ? props.currentUser.username.split(" ") : "";

  let firstname_label = props.parent + "_fname-label";
  let lastname_label = props.parent + "_lname-label";
  let email_label = props.parent + "_email-label";
  let number_label = props.parent + "_number-label";

  let classes = "form-label heading" + (props.parent === "Settings" ? "2" : "");

  return (
    <form onSubmit={props.onSubmit}>
      <div className="row">
        <label htmlFor="fname" id={firstname_label} className={classes}>First Name</label>
        <input className="input-box" type="text" defaultValue={name[0]} id="fname" />
      </div>

      <div className="row">
        <label htmlFor="lname" id={lastname_label} className={classes}>Last Name</label>
        <input className="input-box" type="text" defaultValue={name[1]} id="lname" />
      </div>

      <div className="row">
        <label htmlFor="email" id={email_label} className={classes}>Email</label>
        <input className="input-box" type="email" defaultValue={props.currentUser.email} id="email" />
      </div>

      <div className="row">
        <label htmlFor="phonenumber" id={number_label} className={classes}>Phone Number</label>
        <input className="input-box" type="text" defaultValue={props.currentUser.phonenumber || "000"} id="phonenumber" />
      </div>

      <div className="row flex-box-save-button" id="edit-information-div-btn">
        <button className="btn save-button" id="edit-information-save-btn" type="button">Save</button>
      </div>
    </form>
  );
}

export default EditInformation
