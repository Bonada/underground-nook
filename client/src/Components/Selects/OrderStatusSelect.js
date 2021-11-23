function OrderStatusSelect() {
    return (
        <div className="mb-3">
            <label htmlFor="orderStatus" className="form-label">Order Status</label>
            <br />
            <select class="form-select" aria-label="select order status" defaultValue="labeled" id="orderStatus">
                <option value="invoice-sent">Invoice Sent</option>
                <option value="paid">Paid</option>
                <option value="assembled">Assembled</option>
                <option value="packaged">Packaged</option>
                <option value="labeled">Labeled</option>
            </select>
        </div>
    );
}

export default OrderStatusSelect;