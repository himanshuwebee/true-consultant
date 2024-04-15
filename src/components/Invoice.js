import React, { useState } from "react";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import "./CSS/Invoice.css";

const pageSize = 10;

const options21 = [
  { value: "US - Rebelution US", label: "US - Rebelution US" },
  { value: "US - Bud Industries", label: "US - Bud Industries" },
  { value: "US - MEDCO Corporations", label: "US - MEDCO Corporation" },
  { value: "CA - Reuzel, Inc", label: "CA - Reuzel, Inc" },
  { value: "US - CRC Industries", label: "US - CRC Industries" },
  { value: "US - LEDVANCE LLC", label: "US - LEDVANCE LLC" },
  { value: "US - Shop-Vac", label: "US - Shop-Vac" },
  { value: "US - ORS-Nasco Industrial", label: "US - ORS-Nasco Industrial" },
  { value: "US - United Weavers", label: "US - United Weavers" },
  { value: "US - Simply 7 Snacks LLC.", label: "US - Simply 7 Snacks LLC." },
  { value: "US - Evapo Rust", label: "US - Evapo Rust" },
];

const Invoice = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const tableHeaders = [
    "Sl No.",
    "Batch Number",
    "Po Perioed",
    "Audit Start Date",
    "Need to be Invoiced Amount",
    "Invoice Creation Date",
    "Count Of Invoice Created",
    "Invoice Submitted($)",
    "Payement Date",
    "Payement Number",
    "Net Payement Received ($)",
    "Recovery Rate (%)",
    "Expected Payement Due Date",
    "Cron Job Trigger Date",
    "Finding Completion",
    "Invoice Completion",
    "Status",
    "Progress Bar",
  ];

  const tableContents = [
    [
      1,
      "VN11062020115444_01122",
      "01/01/22-04/30/23",
      "06/14/23",
      "$137,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$54,261.23",
      "60.82%",
      "08/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      2,
      "VN11062020117444_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$137,217.67",
      "07/04/23",
      372,
      "$113,616.45",
      "Multiple",
      "Multiple",
      "$71,261.23",
      "87.82%",
      "08/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      3,
      "VN11062020115444_01122",
      "01/01/22-04/30/23",
      "06/14/23",
      "$155,217.67",
      "07/04/23",
      332,
      "$163,616.45",
      "Multiple",
      "Multiple",
      "$81,261.23",
      "90.82%",
      "08/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      4,
      "VN11062020115444_01122",
      "01/01/22-04/30/23",
      "06/14/23",
      "$137,217.67",
      "07/04/23",
      213,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$81,261.23",
      "60.82%",
      "08/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      5,
      "VN11062020115444_01122",
      "01/01/22-04/30/23",
      "06/14/23",
      "$137,217.67",
      "07/04/23",
      465,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$81,261.23",
      "80.82%",
      "08/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      6,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      7,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      8,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      9,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      10,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      11,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      12,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
    [
      13,
      "VN11062020115994_01122",
      "01/06/22-04/30/23",
      "06/14/23",
      "$177,217.67",
      "07/04/23",
      332,
      "$133,616.45",
      "Multiple",
      "Multiple",
      "$41,261.23",
      "58.82%",
      "09/07/23",
      "08/04/23",
      "NA",
      "NA",
      "Complete",
      "Completed",
    ],
  ];

  const totalItems = tableContents.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentTableContents = tableContents.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [selectedOptions0004, setSelectedOptions0004] = useState("");
  const handleChange21 = (selectedOptions0004) => {
    setSelectedOptions0004(selectedOptions0004);
  };


  return (
    <div className="invoice-container">
      <div className="invoice-container2">
        <h1>Invoice Reconciliation</h1>
        <div className="dropdown-vendor-invoice">
          <Select
            className="dropdown-inventory-invoice"
            options={options21}
            value={selectedOptions0004}
            onChange={handleChange21}
          />
        </div>
      </div>

      <div className="button-container-1">
        <button className="invoice-button-1">New Request</button>
        <NavLink to="/UploadLog" className="invoice-button-2">
          Upload Log
        </NavLink>
        <NavLink to="/JobStatus" className="invoice-button-3">
          Job Status
        </NavLink>
        <button className="invoice-button-4">Export</button>
      </div>

      <div className="table-container-invoice">
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  style={{
                    background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' ,
                    border: "1px solid black",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentTableContents.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={{
                  background: rowIndex % 2 === 0 ? "#f0f0f0" : "#ffffff",
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ border: "1px solid black" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="invoice-prev-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className="invoice-next-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Invoice;
