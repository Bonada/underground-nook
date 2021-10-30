function OrderRow() {
    return (
        <div>
            <div className="row">&nbsp;</div>
            <div className="order row">
                <div className="col-md-4">
                    <h2 className="order-text">861 Michigan Ave <br /> Schenectady, NY 12309</h2>
                </div>
                <div className="col-md-4">
                    <div className="row">&nbsp;</div>
                    <h2 className="order-text">id1</h2>
                </div>
                <div className="col-md-2">
                    <div className="row">&nbsp;</div>
                    <h2 className="order-text">Paid</h2>
                </div>
                <div className="col-md-2">
                    <div className="row">&nbsp;</div>
                    <h2 className="order-text">Delivered</h2>
                </div>
            </div>
        </div>
    );
}

export default OrderRow;