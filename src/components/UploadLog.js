import React, { useState } from "react";
import Select from "react-select";
import "./CSS/UploadLog.css";

const options007 = [
  { value: "Completed", label: "Completed" },
  { value: "Denied", label: "Denied" },
  { value: "Pending", label: "Pending" },
];

function UploadLog() {
  const [selectedOptions007, setSelectedOptions007] = useState("");
  const handleChange = (selectedOptions007) => {
    setSelectedOptions007(selectedOptions007);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const data = [
    {
      id: 1,
      name: "1",
      date: "US - Rebelution US",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 2,
      name: "2",
      date: "US - Bud Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 3,
      name: "3",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 4,
      name: "4",
      date: "US - United Weavers",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 5,
      name: "5",
      date: "US - Evapo Rust",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Pending",
    },
    {
      id: 6,
      name: "6",
      date: "US - Shop-Vac",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 7,
      name: "7",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Denied",
    },
    {
      id: 8,
      name: "8",
      date: "US - Bud Industries",
      type: "VN11062020115444_0112",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 9,
      name: "9",
      date: "US - MEDCO Corporations",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 10,
      name: "10",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Denied",
    },
    {
      id: 11,
      name: "11",
      date: "US - Shop-Vac",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 12,
      name: "12",
      date: "US - CRC Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 13,
      name: "13",
      date: "US - Bud Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 14,
      name: "14",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 15,
      name: "15",
      date: "US - CRC Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Pending",
    },
    {
      id: 16,
      name: "16",
      date: "US - MEDCO Corporations",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 17,
      name: "17",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "0.00 %",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 18,
      name: "18",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_01122 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Pending",
    },
    {
      id: 19,
      name: "19",
      date: "US - MEDCO Corporations",
      type: "VN11062020115444_01122 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 20,
      name: "20",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_01122",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 21,
      name: "21",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_01122",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 22,
      name: "22",
      date: "US - Bud Industries",
      type: "VN11062020115444_01122 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 23,
      name: "23",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 24,
      name: "24",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Denied",
    },
    {
      id: 25,
      name: "25",
      date: "US - ORS-Nasco Industrial",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 26,
      name: "26",
      date: "US - Bud Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 27,
      name: "27",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_0112",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 28,
      name: "28",
      date: "US - CRC Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 29,
      name: "29",
      date: "US - MEDCO Corporations",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 30,
      name: "30",
      date: "US - Evapo Rust",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 31,
      name: "31",
      date: "US - MEDCO Corporations",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Denied",
    },
    {
      id: 32,
      name: "32",
      date: "US - CRC Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 33,
      name: "33",
      date: "US - Evapo Rust",
      type: "VN11062020115444_0112",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 34,
      name: "34",
      date: "CA - Reuzel, Inc",
      type: "VN11062020115444_0112",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 35,
      name: "35",
      date: "US - CRC Industries",
      type: "VN11062020115444_0112 ",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Completed",
    },
    {
      id: 36,
      name: "36",
      date: "US - Evapo Rust",
      type: "VN11062020115444_0112",
      agreementId: "IR Final Pyements Recon upload",
      tasks: "Shardha Thaker",
      ud: "Jan 4, 2024",
      status: "Pending",
    },
  ];

  // Checkbox state
  const [selectedRows, setSelectedRows] = useState([]);

  // Calculate the indexes of the first and last rows for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle checkbox change
  const handleCheckboxChange = (rowId) => {
    const isSelected = selectedRows.includes(rowId);

    if (isSelected) {
      // If already selected, remove from the list
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // If not selected, add to the list
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = () => {
    if (selectedRows.length === currentRows.length) {
      // If all rows are selected, clear the selection
      setSelectedRows([]);
    } else {
      // If not all rows are selected, select all
      setSelectedRows(currentRows.map((row) => row.id));
    }
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <span
        key={i}
        onClick={() => handlePageChange(i)}
        style={{
          cursor: "pointer",
          marginRight: "5px",
          textDecoration: i === currentPage ? "underline" : "none",
        }}
      >
        {i}
      </span>
    );
  }

  const filteredData = data.filter((row) => {
    if (selectedOptions007.length === 0) {
      return true; // Display all rows if no status is selected
    } else {
      return selectedOptions007.some((option) =>
        row.status.toLowerCase().includes(option.value.toLowerCase())
      );
    }
  });

  return (
    <div className="uploadlog-container">
      <div className="first-heading">
        <h1>Invoice Reconciliation Upload Log</h1>
      </div>
      <div className="search-summary">
        <div className="search-reset">
          <h4>Search VC Name</h4>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter VC Name"
              className="search-box-1"
            />
            <div className="request-button-as">
              <button className="button-request-as btn-modal-as-1">
                Search
              </button>
              <button className="button-request-as btn-modal-as-2">
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="search-reset-2">
          <div className="select-vendor">
            <h4>Select Status</h4>
            <Select
              options={options007}
              value={selectedOptions007}
              onChange={handleChange}
              isMulti={true}
              className="multi-select"
            />
          </div>
          <div className="request-button-as">
            <button className="button-request-as btn-modal-as-3">
              Export Selected As Zip
            </button>
            <button className="button-request-as btn-modal-as-4">
              Export Selected As Excel
            </button>
          </div>
        </div>
      </div>

      <div className="table-container-ac">
        <table className="content-table-ac">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === currentRows.length}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th>Sl Number</th>
              <th>Venodr Name</th>
              <th>Batch Number </th>
              <th>File Type</th>
              <th>Uploaded By</th>
              <th>Uploaded Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {selectedOptions007.length > 0
              ? filteredData.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                    <td>{row.type}</td>
                    <td>{row.agreementId}</td>
                    <td>{row.tasks}</td>
                    <td>{row.ud}</td>
                    <td>{row.status}</td>
                  </tr>
                ))
              : currentRows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                    <td>{row.type}</td>
                    <td>{row.agreementId}</td>
                    <td>{row.tasks}</td>
                    <td>{row.ud}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className="button-container">
          <button
            className="ac-prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers}
          <button
            className="ac-next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastRow >= data.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadLog;
