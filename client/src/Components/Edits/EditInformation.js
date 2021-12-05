function EditInformation(props) {
  let name = props.currentUser.username ? props.currentUser.username.split(" ") : ["", ""];

  let firstname_label = props.parent + "_fname-label";
  let lastname_label = props.parent + "_lname-label";
  let email_label = props.parent + "_email-label";
  let number_label = props.parent + "_number-label";

  let classes = "form-label heading" + (props.parent === "Settings" ? "2" : "");

  let updateFirst = function(event) {
    console.log(event.target.value);
    name[0] = event.target.value;
  }

  let updateLast = function(event) {
    console.log(event.target.value);
    name[1] = event.target.value;
  }

  let updateEmail = function(event) {
    console.log(event.target.value);
    props.currentUser.email = event.target.value;
  }

  let updatePhone = function (event) {
    console.log(event.target.value);
    props.currentUser.phonenumber = event.target.value;
    console.log(props.currentUser.phonenumber)
  }

  let handleSubmit = async function(event) {
    props.currentUser.username = name[0] + ' ' + name[1];
    event.preventDefault();
    fetch("http://localhost:3030/edit-info", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: props.currentUser.userid,
        name: props.currentUser.username,
        email: props.currentUser.email,
        phonenumber: props.currentUser.phonenumber
      })
    })
      .then(response => response.json())
      .then(data => {
      });
    // setTimeout(() => {
    //   window.location.reload();
    // }, 50);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <label htmlFor="fname" id={firstname_label} className={classes}>First Name</label>
        <input className="input-box" type="text" defaultValue={name[0]} id="fname" onChange={updateFirst}/>
      </div>

      <div className="row">
        <label htmlFor="lname" id={lastname_label} className={classes}>Last Name</label>
        <input className="input-box" type="text" defaultValue={name[1]} id="lname" onChange={updateLast}/>
      </div>

      <div className="row">
        <label htmlFor="email" id={email_label} className={classes}>Email</label>
        <input className="input-box" type="email" defaultValue={props.currentUser.email} id="email" onChange={updateEmail}/>
      </div>

      <div className="row">
        <label htmlFor="phonenumber" id={number_label} className={classes}>Phone Number</label>
        <input className="input-box" type="text" defaultValue={props.currentUser.phonenumber || "000"} id="phonenumber" onChange={updatePhone}/>
      </div>

      <div className="row flex-box-save-button" id="edit-information-div-btn">
        <button className="btn save-button" id="edit-information-save-btn" type="submit">Save</button>
      </div>
    </form>
  );
}

export default EditInformation
