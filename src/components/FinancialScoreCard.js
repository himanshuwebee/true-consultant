import React, { useState, useRef } from "react";
import "./CSS/Financial.css";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import axios from "axios";

const options = [
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


const generateComboChartData = () => {
  return {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        label: "Bar Dataset 1",
        type: "bar",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81],
      },
      {
        label: "Bar Dataset 2",
        type: "bar",
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.6)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 55, 75, 70],
      },
    ],
  };
};

const generateComparativeLineChartData = () => {
  return {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        label: "Line Dataset 1",
        type: "line",
        fill: false,
        borderColor: "#FF6384",
        borderWidth: 2,
        pointBorderColor: "#FF6384",
        pointBackgroundColor: "#FF6384",
        pointHoverBackgroundColor: "#FF6384",
        pointHoverBorderColor: "#FF6384",
        data: [30, 40, 50, 60],
      },
      {
        label: "Line Dataset 2",
        type: "line",
        fill: false,
        borderColor: "#4BC0C0",
        borderWidth: 2,
        pointBorderColor: "#4BC0C0",
        pointBackgroundColor: "#4BC0C0",
        pointHoverBackgroundColor: "#4BC0C0",
        pointHoverBorderColor: "#4BC0C0",
        data: [55, 65, 75, 85],
      },
    ],
  };
};


const generateComparativeChartData = () => {
  return {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        label: "Bar Dataset 1",
        type: "bar",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81],
      },
      {
        label: "Bar Dataset 2",
        type: "bar",
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.6)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [45, 55, 75, 70],
      },
      {
        label: "Line Dataset 1",
        type: "line",
        fill: false,
        borderColor: "#FF6384",
        borderWidth: 2,
        pointBorderColor: "#FF6384",
        pointBackgroundColor: "#FF6384",
        pointHoverBackgroundColor: "#FF6384",
        pointHoverBorderColor: "#FF6384",
        data: [30, 40, 50, 60],
      },
      {
        label: "Line Dataset 2",
        type: "line",
        fill: false,
        borderColor: "#4BC0C0",
        borderWidth: 2,
        pointBorderColor: "#4BC0C0",
        pointBackgroundColor: "#4BC0C0",
        pointHoverBackgroundColor: "#4BC0C0",
        pointHoverBorderColor: "#4BC0C0",
        data: [55, 65, 75, 85],
      },
    ],
  };
};


function FinancialScoreCard() {
    // Search Feature

    const [selectedOptions, setSelectedOptions] = useState("");
    const handleChange = (selectedOptions) => {
      setSelectedOptions(selectedOptions);
    };
    const [fileData, setFileData] = useState(null);
  
    // Drop Down For Tables
  
    //1. CoOp
  
    const [coopOptions, setCoopOptions] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (selectedOption) => {
      setCoopOptions([...coopOptions, selectedOption]);
      setDropdownOpen(false);
    };
  
    //2. Operational Chargeback
  
    const [chargeOptions, setChargeOptions] = useState([]);
    const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  
    const toggleDropdown1 = () => {
      setDropdownOpen1(!isDropdownOpen1);
    };
  
    const handleOptionSelect1 = (selectedOption1) => {
      setCoopOptions([...chargeOptions, selectedOption1]);
      setDropdownOpen1(false);
    };
  
    // Modal 3 for Upload financial data
  
    const [modal3, setModal3] = useState(false);
    const toggleModal3 = () => {
      setModal3(!modal3);
      setSelectedFileName("");
      setFileData(null);
    };
  
    if (modal3) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  
    //Switch Button
  
    const [isSimulating, setSimulating] = useState(false);
    const handleChange8 = () => {
      setSimulating(!isSimulating);
    };
    const stopLabel = "Stop";
    const simulateLabel = "Simulate";
    const width = Math.max(stopLabel.length, simulateLabel.length) * 15;
  
    const handleDiameter = 30;
    const checkedPos = width - handleDiameter;
    const uncheckedPos = 0;
  
    //Upload Function
  
    const [selectedFileName, setSelectedFileName] = useState("");
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [fileContent, setFileContent] = useState("");
  
    const handleCancelClick = () => {
      setSelectedFileName("");
      setSelectedFile("");
      setFileContent("");
      fileInputRef.current.value = null;
    };
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setSelectedFileName(selectedFile.name);
        setSelectedFile(selectedFile);
        setFileUrl("`/uploads/${selectedFile.name}`");
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          setFileContent(content);
          console.log("File Content:", content);
        };
  
        reader.readAsText(selectedFile);
      }
    };
  
    const handleFileUpload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
  
        const response = await axios.post(
          "http://localhost:5000/uploads",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        setFileUrl(response.data.fileUrl);
  
        alert("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("File upload failed. Please try again.");
      }
    };
  

  // const [isSimulating, setSimulating] = useState(false);

  // ... (existing code)

  return (
    <div className="financial-container">
      <div className="financia-first">
        <h1>Financial Dashboard</h1>
        <div className="dropdown-vendor-financial">
          <Select
            className="dropdown-inventory-financial"
            options={options}
            value={selectedOptions}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="finanicial-headings-links">
        <h2>Overview</h2>
        <NavLink className="link1">Upload Log</NavLink>
        <NavLink className="link2">PO's Scrap Log</NavLink>
        <NavLink className="link3" onClick={toggleModal3}>
          Upload Finanical Data
        </NavLink>
        <button className="financial-btn-1">Export as PDF</button>
        <button className="financial-btn-2">Export</button>
      </div>

      <div className="financial-mid-container">
        <div className="first-fin-container">
          <div className="first-fin-sub1">
            <h2 className="EBITDA-percent">0.00%</h2>
            <h3 className="EBITDA-written">EBITDA % (YTD)</h3>
          </div>
          <div className="first-fin-sub2">
            <Line data={generateComboChartData()} className="combo-chart" />
          </div>
        </div>
        <div className="second-fin-container">
          <div className="second-fin-sub1">
            <h2 className="EBITDA-percent">$0.00</h2>
            <h3 className="EBITDA-written">EBITDA ($) YTD</h3>
          </div>
          <div className="first-fin-sub2">
            <Line data={generateComparativeLineChartData()} className="combo-chart" />
          </div>
        </div>
        <div className="third-fin-container">
          <div className="third-fin-sub1">
            <h2 className="EBITDA-percent">$0.00</h2>
            <h3 className="EBITDA-written">Provision Deduction YTD</h3>
          </div>
          <div className="first-fin-sub2">
            <Line data={generateComparativeChartData()} className="combo-chart" />
          </div>
        </div>
      </div>

      {/* Modal for Uploading Financial Data */}

      {modal3 && (
        <div className="modal3">
          <div onClick={toggleModal3} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal3" onClick={toggleModal3}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h1 className="ufile-financial">Upload File</h1>
            <div className="ufile-financial1">
              <h4 className="samplefile">Download Sample File</h4>
              <h4 className="view-history">View History</h4>
            </div>
            <div className="search-box-fs">
              <input
                type="text"
                placeholder="Choose an excel file to upload"
                className="search-box-1-fs"
                value={selectedFileName}
                readOnly
              />
              <input
                type="file"
                onChange={handleFileChange}
                placeholder="Choose an Excel File To Upload"
                className="search-box-1-fs"
                ref={fileInputRef}
                style={{ display: "none" }}
                id="fileInput"
              />

              <div className="request-button-fs-1">
                <label
                  htmlFor="fileInput"
                  className="button-request-fs btn-modal-fs-1"
                >
                  Choose...
                </label>

                {fileContent && (
                  <div>
                    <p>File Content:</p>
                    <pre>{fileContent}</pre>
                  </div>
                )}

                {fileUrl && (
                  <div>
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    <embed
                      src={fileUrl}
                      width="0"
                      height="0"
                      type="application/pdf"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="request-button-fs-upload">
              <button
                className="button-request-as btn-modal-fs-upload"
                onClick={handleFileUpload}
              >
                Upload
              </button>
              <button
                className="button-request-as btn-modal-fs-close"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="yearly-comp-button">
        <h2 className="yearly-comp">Yearly Comparison</h2>

        <Switch
          onChange={handleChange8}
          checked={isSimulating}
          className="react-switch"
          height={30}
          width={width}
          checkedIcon={<div className="switch-label-stop">Stop</div>}
          uncheckedIcon={<div className="switch-label-simulate">Simulate</div>}
          handleDiameter={handleDiameter}
          checkedPos={checkedPos}
          uncheckedPos={uncheckedPos}
        />
      </div>

      {isSimulating ? (
        // Render the new content for simulation
        <div className="scrollable-container-2">
        <div className="table-and-boxes-container-2">
          <table className="content-table-finance-2">
            <thead>
              <tr>
                <th>Sales Matrices</th>
                <th>Jan To Nov - 2023</th>
                <th>Projected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PO's Placed</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>PO's Accepted</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>PO Acceptance Rate</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>Payments Received - Inventory Sales</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>Payments Received - Inventory Sales</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>Payments Received - Dropship Sales</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>% +/- (Previous Year)</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>2023 Total Payment Receipt Forecast </td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>% +/- (Previous Year)</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>Gross Margin %</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>Gross Profit</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>SG&A % </td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
              <tr>
                <td>SG&A ($)</td>
                <td>36,2356.00</td>
                <td>34,250.10</td>
              </tr>
            </tbody>
          </table>

          <div className="table-space-2"></div>

          {/* Second Table */}
          <table className="content-table-finance-2">
            <thead>
              <tr>
                <th>Deductions</th>
                <th>Amount (2023)</th>
                <th>Amount (2022)</th>
                <th>Amount (2021)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AMS (Excl. Credit Card)</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>AMS (Credit Card Spend)</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>C2FO Credit Memo</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>
                  <div className="coop-cell-2">
                    <button onClick={toggleDropdown}>
                      CoOp (Incl. Accruals, Promotions, PP, Straight Pays Etc){" "}
                      {isDropdownOpen ? (
                        <span>&#9650;</span>
                      ) : (
                        <span>&#9660;</span>
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-options">
                        <p onClick={() => handleOptionSelect("Option 1")}>
                          Option 1
                        </p>
                        <p onClick={() => handleOptionSelect("Option 2")}>
                          Option 2
                        </p>
                      </div>
                    )}
                  </div>
                </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>
                  <div className="chargeback-cell-2">
                    <button onClick={toggleDropdown1}>
                      Operational Chargeback Total{" "}
                      {isDropdownOpen1 ? (
                        <span>&#9650;</span>
                      ) : (
                        <span>&#9660;</span>
                      )}
                    </button>
                    {isDropdownOpen1 && (
                      <div className="dropdown-options-1">
                        <p onClick={() => handleOptionSelect1("Option 1")}>
                          Chargeback Option 1
                        </p>
                        <p onClick={() => handleOptionSelect1("Option 2")}>
                          Chargeback Option 2
                        </p>
                      </div>
                    )}
                  </div>
                </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Net Post Audit Deduction</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Net Price Claim</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Net Shortage</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Return Deduction</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Net Return Freight Charges</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Net Return Handling Charges</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Quick Pay Discount</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>EBITDA %</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>EBITDA </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>% +/- Against Previous Year</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Provision Deduction</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <div className="table-space-2"></div>
              <tr>
                <td>Refunds & Reversals</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>OC - SIOC Incentive </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>
                  <div className="coop-cell-2">
                    <button onClick={toggleDropdown}>
                      CoOp (Incl. Accruals, Promotions, PP, Straight Pays Etc){" "}
                      {isDropdownOpen1 ? (
                        <span>&#9650;</span>
                      ) : (
                        <span>&#9660;</span>
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div className="dropdown-options">
                        <p onClick={() => handleOptionSelect("Option 1")}>
                          Option 1
                        </p>
                        <p onClick={() => handleOptionSelect("Option 2")}>
                          Option 2
                        </p>
                      </div>
                    )}
                  </div>
                </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>

              <tr>
                <td>Return Refund</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr>
                <td>Provision Reversal </td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
                <td>36,2356.00</td>
              </tr>
              <tr></tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="box-main-container">
            <div className="box-container-1">
              <h4>Current</h4>
              <h2>0.00% </h2>
              <h3>EBITDA % (YTD)</h3>
            </div>
            <div className="box-container-2">
              <h4>Simulated</h4>
              <h2>0.00% </h2>
              <h3>EBITDA % (YTD)</h3>
            </div>
            <div className="box-container-3">
              <h4>Current</h4>
              <h2>$0.00</h2>
              <h3>EBITDA ($) (YTD)</h3>
            </div>
            <div className="box-container-4">
              <h4>Simulated</h4>
              <h2>$0.00 </h2>
              <h3>EBITDA ($) (YTD)</h3>
            </div>
          </div>
        </div>
      </div>
       
      ) : (
        // Render the default content
        <div className="scrollable-container">
        <table className="content-table-finance">
          <thead>
            <tr>
              <th>Sales Matrices</th>
              <th>Jan To Nov - 2023</th>
              <th>2022</th>
              <th>2021</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PO's Placed</td>
              <td>$ 36,2356.00</td>
              <td>$ 34,250.10</td>
              <td>$ 30,230.46</td>
            </tr>
            <tr>
              <td>PO's Accepted</td>
              <td>$ 362,356.00</td>
              <td>$ 341,250.10</td>
              <td>$ 300,230.46</td>
            </tr>
            <tr>
              <td>PO Acceptance Rate</td>
              <td>82.50%</td>
              <td>65.06%</td>
              <td>54.18%</td>
            </tr>
            <tr>
              <td>Payments Received - Inventory Sales</td>
              <td>$ 271,161,168.25</td>
              <td>$ 201,161,168.25</td>
              <td>$ 211,161,168.25</td>
            </tr>
            <tr>
              <td>Payments Received - Dropship Sales</td>
              <td>$ 00.00</td>
              <td>$ 00.00</td>
              <td>$ 00.00</td>
            </tr>
            <tr>
              <td>% +/- (Previous Year)</td>
              <td>-</td>
              <td>5.31%</td>
              <td>24.72%</td>
            </tr>
            <tr>
              <td>2023 Total Payment Receipt Forecast </td>
              <td>$ 326,114,014.28</td>
              <td>$ 34,250.10</td>
              <td>$ 30,230.46</td>
            </tr>
            <tr>
              <td>% +/- (Previous Year)</td>
              <td>42.96%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Gross Margin %</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Gross Profit</td>
              <td>$ 135,880,839.91</td>
              <td>$ 115,880,839.91</td>
              <td>$ 105,880,839.91</td>
            </tr>
            <tr>
              <td>SG&A % </td>
              <td>20</td>
              <td>20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>SG&A ($)</td>
              <td>$ 54,352,335.76</td>
              <td>$ 34,352,335.76</td>
              <td>$ 14,352,335.76</td>
            </tr>
          </tbody>
        </table>

        <div className="table-space"></div>

        {/* Second Table */}
        <table className="content-table-finance">
          <thead>
            <tr>
              <th>Deductions</th>
              <th>Amount (2023)</th>
              <th>Amount (2022)</th>
              <th>Amount (2021)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AMS (Excl. Credit Card)</td>
              <td>$ 804.94</td>
              <td>$ 19,925.36</td>
              <td>$ 31,246.18</td>
            </tr>
            <tr>
              <td>AMS (Credit Card Spend)</td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
            </tr>
            <tr>
              <td>C2FO Credit Memo</td>
              <td>$ 36,2356.00</td>
              <td>00.00</td>
              <td>00.00</td>
            </tr>
            <tr>
              <td>
                <div className="coop-cell">
                  <button onClick={toggleDropdown}>
                    CoOp (Incl. Accruals, Promotions, PP, Straight Pays Etc){" "}
                    {isDropdownOpen ? (
                      <span>&#9650;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-options">
                      <p onClick={() => handleOptionSelect("Option 1")}>
                        Option 1
                      </p>
                      <p onClick={() => handleOptionSelect("Option 2")}>
                        Option 2
                      </p>
                    </div>
                  )}
                </div>
              </td>
              <td>$ 76,110,230.20</td>
              <td>$ 46,110,230.20</td>
              <td>$ 12,110,230.20</td>
            </tr>
            <tr>
              <td>
                <div className="chargeback-cell">
                  <button onClick={toggleDropdown1}>
                    Operational Chargeback Total{" "}
                    {isDropdownOpen1 ? (
                      <span>&#9650;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </button>
                  {isDropdownOpen1 && (
                    <div className="dropdown-options-1">
                      <p onClick={() => handleOptionSelect1("Option 1")}>
                        Chargeback Option 1
                      </p>
                      <p onClick={() => handleOptionSelect1("Option 2")}>
                        Chargeback Option 2
                      </p>
                    </div>
                  )}
                </div>
              </td>
              <td>$ 1,36,2356.00</td>
              <td>$ 1,16,2356.00</td>
              <td>$ 1,13,2356.00</td>
            </tr>
            <tr>
              <td>Net Post Audit Deduction</td>
              <td>$ 2,138,256.23</td>
              <td>$ 578,33.45</td>
              <td>$ 133,362.66</td>
            </tr>
            <tr>
              <td>Net Price Claim</td>
              <td>$ 36,256.00</td>
              <td>$ 26,236.00</td>
              <td>$ 06,235.00</td>
            </tr>
            <tr>
              <td>Net Shortage</td>
              <td>$ 2,36,2356.00</td>
              <td>$ 645.21</td>
              <td>$ 478.00</td>
            </tr>
            <tr>
              <td>Return Deduction</td>
              <td>$ 2,846.86</td>
              <td>$ 6,2356.00</td>
              <td>$ 5,2356.00</td>
            </tr>
            <tr>
              <td>Net Return Freight Charges</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
            </tr>
            <tr>
              <td>Net Return Handling Charges</td>
              <td>$ 41.56</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
            </tr>
            <tr>
              <td>Quick Pay Discount</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
            </tr>
            <tr>
              <td>Total Deduction</td>
              <td>$ 82,769,558.25</td>
              <td>$ 52,769,558.25</td>
              <td>$ 32,769,558.25</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>EBITDA %</td>
              <td>- 0.17%</td>
              <td>- 0.11%</td>
              <td>- 3.47%</td>
            </tr>
            <tr>
              <td>EBITDA </td>
              <td>$ -461,472.72</td>
              <td>$ -239,201.23</td>
              <td>$ -39,235.00</td>
            </tr>
            <tr>
              <td>% +/- Against Previous Year</td>
              <td>0.00%</td>
              <td>0.00%</td>
              <td>-114.00%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Provision Deduction</td>
              <td>$ 836,89324</td>
              <td>$ 3,670,213.48</td>
              <td>$ 16,364.12</td>
            </tr>
            <div className="table-space"></div>
            <tr>
              <td>Refunds & Reversals</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
              <td>$ 0.00</td>
            </tr>
            <tr>
              <td>OC - SIOC Incentive </td>
              <td>$ </td>
              <td>$ </td>
              <td>$ </td>
            </tr>
            <tr>
              <td>
                <div className="coop-cell">
                  <button onClick={toggleDropdown}>
                    CoOp (Incl. Accruals, Promotions, PP, Straight Pays Etc){" "}
                    {isDropdownOpen1 ? (
                      <span>&#9650;</span>
                    ) : (
                      <span>&#9660;</span>
                    )}
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-options">
                      <p onClick={() => handleOptionSelect("Option 1")}>
                        Option 1
                      </p>
                      <p onClick={() => handleOptionSelect("Option 2")}>
                        Option 2
                      </p>
                    </div>
                  )}
                </div>
              </td>
              <td>$ 791,192.06</td>
              <td>$ 105,482.34</td>
              <td>$ 80,582.15</td>
            </tr>

            <tr>
              <td>Return Refund</td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
            </tr>
            <tr>
              <td>Provision Reversal </td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
              <td>36,2356.00</td>
            </tr>
            <tr></tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      )}

      {/* ... (existing code) */}
    </div>
  );
}

export default FinancialScoreCard;
