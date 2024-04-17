import React, { useState } from "react";
import Select from "react-select";
import "../components/CSS/Price.css";

const PriceClaim = () => {
    const options6 = [
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

    const data6 = [
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
    const [selectedOptions6, setSelectedOptions6] = useState("");
    const handleChange = (selectedOptions) => {
        setSelectedOptions6(selectedOptions6);
    };
    const [selectedFilter, setSelectedFilter] = useState("All");
    const filteredData =
        selectedFilter === "All"
            ? data6
            : data6.filter((item) => item.status === selectedFilter);

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
            <div className="price-container">
                <div className="price-container2">
                    <h1>Price Claim</h1>
                    <div className="dropdown-vendor-price">
                        <Select
                            className="dropdown-inventory-price"
                            options={options6}
                            value={selectedOptions6}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="price-container-2">
                    <h3>Price Claim Dispute</h3>
                    <div className="price-sub-container">
                        <div className="price-sub-container-1">
                            <h4>Total Approved</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="price-sub-container-2">
                            <h4>Total Denied</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="price-sub-container-3">
                            <h4>Total Pending With Amazon</h4>
                            <h3>$3423</h3>
                        </div>
                        <div className="price-sub-container-4">
                            <h4>Total Disputed</h4>
                            <h3>$3423</h3>
                        </div>
                    </div>
                </div>
                <div className="heading-main-container">
                    <div className="heading-main-price">
                        <div className="heading-sub-main-price">
                            <h1 className="headin-price-1">Price Claim</h1>
                            <h4 className="headin-price-2">Win Rate: 62.5%</h4>
                        </div>
                        <div className="itemized-shortage-container-1">
                            <button className="price-button-1">Import</button>
                            <button className="price-button-2">Export</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="filter-price-options">
                            <button
                                onClick={() => setSelectedFilter("Approved")}
                                className="filter-price-1"
                            >
                                Approved
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Denied")}
                                className="filter-price-2"
                            >
                                Denied
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Pending")}
                                className="filter-price-3"
                            >
                                Pending
                            </button>
                            <button
                                onClick={() => setSelectedFilter("All")}
                                className="filter-price-4"
                            >
                                All
                            </button>
                        </div>
                        <div className="table-container-price">
                            <table className="content-table-price">
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
                                            className={item.status === "Denied" ? "active-row-price" : ""}
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

                            <div className="button-price">
                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className="button-price-1"
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

export default PriceClaim