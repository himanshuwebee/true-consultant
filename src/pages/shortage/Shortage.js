import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stepper from "../../components/Stepper";
import '../../components/CSS/Shortage.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const Shortage = () => {
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

    const data = [
        {
            id: 1,
            status: "Approved",
            description: "DSPT10021849951",
            type: "Shortages",
            date: "03/06/23",
            ds: "Resolved",
            amount: "$229.40",
            amazon: "$143.64",
        },
        {
            id: 2,
            status: "Denied",
            description: "DSPT10021849561",
            type: "Shortages",
            date: "02/15/23",
            ds: "Resolved",
            amount: "$542.40",
            amazon: "$13.64",
        },
        {
            id: 3,
            status: "Pending",
            description: "DSPT11391650271",
            type: "Shortages",
            date: "06/23/23",
            ds: "Pending Amazon Action",
            amount: "$852.40",
            amazon: "$0",
        },
        {
            id: 4,
            status: "Approved",
            description: "DSPT10021849489",
            type: "Shortages",
            date: "12/13/23",
            ds: "Resolved",
            amount: "$852.40",
            amazon: "$0",
        },
        {
            id: 5,
            status: "Denied",
            description: "DSPT10021849657",
            type: "Shortages",
            date: "01/05/23",
            ds: "Resolved",
            amount: "$852.40",
            amazon: "$0",
        },
        {
            id: 6,
            status: "Approved",
            description: "DSPT10021849999",
            type: "Shortages",
            date: "09/09/23",
            ds: "Pending Amazon Action",
            amount: "$520.40",
            amazon: "$183.64",
        },
        {
            id: 7,
            status: "Approved",
            description: "DSPT10021849852",
            type: "Shortages",
            date: "06/03/23",
            ds: "Resolved",
            amount: "$152.40",
            amazon: "$133.64",
        },
        {
            id: 8,
            status: "Denied",
            description: "DSPT10021849561",
            type: "Shortages",
            date: "10/10/23",
            ds: "Pending Amazon Action",
            amount: "$752.40",
            amazon: "$0",
        },
        {
            id: 9,
            status: "Denied",
            description: "DSPT10021849111",
            type: "Shortages",
            date: "07/30/23",
            ds: "Resolved",
            amount: "$113.40",
            amazon: "$35.26",
        },
        {
            id: 10,
            status: "Pending",
            description: "DSPT10021849159",
            type: "Shortages",
            date: "04/01/23",
            ds: "Pending Amazon Action",
            amount: "$332.40",
            amazon: "$13.64",
        },
        {
            id: 11,
            status: "Pending",
            description: "DSPT10021849620",
            type: "Shortages",
            date: "05/15/23",
            ds: "Resolved",
            amount: "$298.40",
            amazon: "$0",
        },
        {
            id: 12,
            status: "Approved",
            description: "DSPT10021849202",
            type: "Shortages",
            date: "01/01/23",
            ds: "Resolved",
            amount: "$827.40",
            amazon: "$443.64",
        },
        {
            id: 13,
            status: "Approved",
            description: "DSPT10021849001",
            type: "Shortages",
            date: "09/13/23",
            ds: "Resolved",
            amount: "$332.40",
            amazon: "$0",
        },
        {
            id: 14,
            status: "Pending",
            description: "DSPT10021849741",
            type: "Shortages",
            date: "09/13/23",
            ds: "Resolved",
            amount: "$852.40",
            amazon: "$13.64",
        },
        {
            id: 15,
            status: "Denied",
            description: "DSPT10021848569",
            type: "Shortages",
            date: "09/13/23",
            ds: "Pending Amazon Action",
            amount: "$926.40",
            amazon: "$0",
        },
        // Add more data as needed
    ];
    const [selectedOptions, setSelectedOptions] = useState("");
    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    const [selectedFilter, setSelectedFilter] = useState("All");
    const filteredData =
        selectedFilter === "All"
            ? data
            : data.filter((item) => item.status === selectedFilter);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="shortage-container1">
                <div className="shortage-container2">
                    <h1>Shortage</h1>
                    <div className="dropdown-vendor-shortages">
                        <Select
                            className="dropdown-inventory-shortages"
                            options={options}
                            value={selectedOptions}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="shortage-reconcile">
                    <h3>Shortage Reconciliation</h3>
                    <select className="dropdown-shortage">
                        <option>EUR</option>
                        <option>USD</option>
                    </select>
                </div>
                <div className="short-flex">
                    <div className="shortage-reconcile1">
                        <div className="current-previous">
                            <h4 className="shortage-curr">Current</h4>
                            <h4 className="shortage-prev">Previous</h4>
                        </div>
                        <div className="short-1">
                            <p className="row-1">
                                Total of Unsettled Shortages (Incl. of Discount)
                            </p>
                            <p className="sub-row-1">$ 36,230.20</p>
                            <p className="sub-row-2">$ 36,250.20</p>
                            <FontAwesomeIcon icon="eye" className="sub-icon-1" />
                        </div>
                        <div className="short-2">
                            <p className="row-2">Period Covered (Invoice Date)</p>
                            <p className="sub-row2-1">11/24/23</p>
                            <p className="sub-row2-2">09/04/22</p>
                            <FontAwesomeIcon icon="eye" className="sub-icon-2" />
                        </div>
                        <div className="short-3">
                            <p className="row-3">Total Unsettled Line Items</p>
                            <p className="sub-row3-1">1200</p>
                            <p className="sub-row3-2">600</p>
                        </div>
                        <div className="short-4">
                            <p className="row-4">Case Creation Date & Case Id</p>
                            <div className="sub-row4-1">
                                <p className="sub-row4-1-date">11/24/23</p>
                                <p className="sub-row4-1-amount">1423658</p>
                            </div>
                            <div className="sub-row4-2">
                                <p className="sub-row4-2-date">08/04/23</p>
                                <p className="sub-row4-2-amount">1423658</p>
                            </div>
                            <FontAwesomeIcon icon="eye" className="sub-icon-4" />
                        </div>
                        <div className="short-5">
                            <p className="row-5">
                                Outstanding Balance Amount & Outstanding Balance Confirm Date
                            </p>
                            <div className="sub-row5-1">
                                <p className="sub-row5-1-amount">$ 36,230.20</p>
                                <p className="sub-row5-1-date"> 08/04/23</p>
                            </div>
                            <div className="sub-row5-2">
                                <p className="sub-row5-2-amount">$ 06,230.20 </p>
                                <p className="sub-row5-2-date">08/04/23</p>
                            </div>
                            <FontAwesomeIcon icon="eye" className="sub-icon-5" />
                        </div>
                        <div className="short-7">
                            <p className="row-7">Payment Due Date Period</p>
                            <p className="sub-row7-1">06/16/23</p>
                            <p className="sub-row7-2">09/09/23</p>
                            <FontAwesomeIcon icon="eye" className="sub-icon-7" />
                        </div>
                        <div className="short-6">
                            <p className="row-6">Win Rate</p>
                            <p className="sub-row6-1">100.00 %</p>
                            <p className="sub-row6-2">100.00%</p>
                            <FontAwesomeIcon icon="eye" className="sub-icon-6" />
                        </div>
                        <div className="short-8">
                            <p className="row-8">
                                Amazon Offered Settlement Amount & Case Resolve Date
                            </p>
                            <div className="sub-row8-1">
                                <p className="sub-row8-1-amount">$ 36,230.20</p>
                                <p className="sub-row8-1-date"> 08/04/23</p>
                            </div>
                            <div className="sub-row8-2">
                                <p className="sub-row8-2-amount">$ 06,230.20 </p>
                                <p className="sub-row8-2-date">08/04/23</p>
                            </div>
                            <FontAwesomeIcon icon="eye" className="sub-icon-8" />
                        </div>
                    </div>
                    <div className="win-rate">
                        <div className="stage-types">
                            <Stepper />
                        </div>
                        <h3>Bulk Shortages</h3>
                        <div className="bulk-info">
                            <div className="info-1">
                                <p className="sub-info-1">Total Of Lines Scanned At Job Run :</p>
                                <p className="sub-info-2">3</p>
                            </div>
                            <div className="info-2">
                                <p className="sub-info2-1">YOY Net Shortages ($) :</p>
                                <p className="sub-info2-2">$ 4,500.35</p>
                            </div>
                            <div className="info-3">
                                <p className="sub-info3-1">Unsettled Shortages :</p>
                                <p className="sub-info3-2">47%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-container-2">
                    <h3>Itemized Shortage Dispute - Ongoing</h3>
                    <div className="item-sub-container">
                        <div className="item-sub-container-1">
                            <h4>Total Approved</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="item-sub-container-2">
                            <h4>Total Denied</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="item-sub-container-3">
                            <h4>Total Pending With Amazon</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="item-sub-container-4">
                            <h4>Total Disputed</h4>
                            <h3>$3423</h3>
                        </div>
                    </div>
                </div>
                <div className="heading-main-container">
                    <div className="heading-main">
                        <div className="heading-sub-main">
                            <h1 className="headin-1">FinOps Shortage</h1>
                            <h4 className="headin-2">Win Rate: 62.5%</h4>
                        </div>
                        <div className="itemized-shortage-container-1">
                            <button className="is-button-1">Import</button>
                            <button className="is-button-2">Export</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="filter-options">
                            <button
                                onClick={() => setSelectedFilter("Approved")}
                                className="filter-1"
                            >
                                Approved
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Denied")}
                                className="filter-2"
                            >
                                Denied
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Pending")}
                                className="filter-3"
                            >
                                Pending
                            </button>
                            <button
                                onClick={() => setSelectedFilter("All")}
                                className="filter-4"
                            >
                                All
                            </button>
                        </div>
                        <div className="table-container-is">
                            <table className="content-table-is">
                                <thead>
                                    <tr>
                                        <th>Dispute Id</th>
                                        <th>Dispute Type</th>
                                        <th>Dispute Date</th>
                                        <th>Dispute Status</th>
                                        <th>Dispute Amount</th>
                                        <th>Approved Amount (As per VC) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map((item) => (
                                        <tr
                                            key={item.id}
                                            className={item.status === "Denied" ? "active-row-is" : ""}
                                        >
                                            <td>{item.description}</td>
                                            <td>{item.type}</td>
                                            <td>{item.date}</td>
                                            <td>{item.ds}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.amazon}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="button-is">
                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className="button-is-1"
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shortage