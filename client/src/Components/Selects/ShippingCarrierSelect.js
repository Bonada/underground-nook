function ShippingCarrierSelect() {
    return (
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Shipping Carrier</label>
            <select className="input-box-modal form-control" id="state" name="state" defaultValue="Select Shipping Carrier">
                <option value="Select Shipping Carrier" disabled>Select Shipping Carrier</option>
                <option value="USPS">USPS</option>
                <option value="FedEx">FedEx</option>
                <option value="UPS">UPS</option>
            </select>
        </div>
    );
}

export default ShippingCarrierSelect;