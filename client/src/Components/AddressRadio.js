export function AddressRadio(props) {
  return <div onClick={props.onClick}>
      <div className="address radio">
        <input id="address" name="address radio" type="radio"></input>
        <label htmlFor="address" className="radio-label">{props.address.address} {props.address.aptno && "Apt #" + props.address.aptno} <br></br> {props.address.city}, {props.address.state} {props.address.zip}</label>
      </div>
  </div>;
}

export default AddressRadio