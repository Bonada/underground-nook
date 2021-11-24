function EditInformation() {
  return <form onSubmit="save-settings">
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
  </form>;
}

export default EditInformation
