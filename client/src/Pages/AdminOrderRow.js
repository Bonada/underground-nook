function AdminOrderRow() {
    return (
        <tr>
            <th scope="row">10028492</th>
            <td>
                {/* <input id="name" class="form-control" type="text" defaultValue="Minying Cao"/> */}
                Minying Cao
            </td>
            <td>
                {/* <input id="street" class="form-control" type="text" defaultValue="1761 15th St"/> */}
                1761 15th St
            </td>
            <td>
                {/* <input id="city" class="form-control" type="text" defaultValue="Troy"/> */}
                Troy
            </td>
            <td>
                {/* <input id="state" class="form-control" type="text" defaultValue="NY"/> */}
                NY
            </td>
            <td>
                {/* <input id="zip" class="form-control" type="text" defaultValue="12180"/> */}
                12180
            </td>
            <td>
                {/* <input id="phoneNumber" class="form-control" type="text" defaultValue="1234567890"/> */}
                1234567890
            </td>
            <td>
                {/* <input id="email" class="form-control" type="text" defaultValue="minyingcao@gmail.com"/> */}
                minyingcao@gmail.com
            </td>
            <td>
                {/* <select class="form-select" aria-label="select shipping carrier" defaultValue="USPS">
                    <option value="USPS">USPS</option>
                    <option value="FedExOrUPS">FedEx/UPS</option>
                </select> */}
                USPS
            </td>
            <td>
                {/* <select class="form-select" aria-label="select order status" defaultValue="labeled">
                    <option value="invoice-sent">Invoice Sent</option>
                    <option value="paid">Paid</option>
                    <option value="assembled">Assembled</option>
                    <option value="packaged">Packaged</option>
                    <option value="labeled">Labeled</option>
                </select> */}
                Paid
            </td>
            <td>
                {/* <input id="totalPrice" class="form-control" type="number" min="0.01" step="0.01" max="2500" defaultValue="25.67"/> */}
                $25.67
            </td>
      </tr>
    );
}

export default AdminOrderRow;