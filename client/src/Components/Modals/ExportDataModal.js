import './Modal.css';
import ShippingCarrierSelect from '../Selects/ShippingCarrierSelect';

function ExportDataModal(handleSubmit) {
    // function handleSubmit(event) {
    //     console.log(event.target.value);
    // }

    function getCSV(event){
        fetch("http://localhost:3030/get-csv", {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.text())
          .then(data => {
            console.log(data)
            var textToWrite = data;
            var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
            var fileNameToSaveAs = "test.csv";

            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                // Chrome allows the link to be clicked
                // without actually adding it to the DOM.
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                // Firefox requires the link to be added to the DOM
                // before it can be clicked.
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                // downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
            downloadLink.click();
          })
    }

    return (
        <div className="modal fade" id="exportDataModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Export Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form onSubmit={handleSubmit}>
                                <ShippingCarrierSelect />
                            </form>
                            <div className="flex-box-submit-button">
                                <button onClick={getCSV} className="cart-button" type="submit" data-bs-dismiss="modal">Export as CSV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default ExportDataModal;