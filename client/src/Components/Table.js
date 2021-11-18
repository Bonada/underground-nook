

function Table(props) {
	let headers = props.headers;
	let header_row = headers.map(item => <th scope="col">{item}</th>);

	return (
    <table className="table">
      <thead>
      	<tr>
        	{header_row}
        </tr>
      </thead>
      <tbody>
        {props.row_comp}
        {props.row_comp}
      </tbody>
    </table>
	);
}

export default Table;