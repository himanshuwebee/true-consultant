import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Bar, Line } from "react-chartjs-2";
import "../components/CSS/Ops.css";

const OpsChargeback = () => {
    const options8 = [
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

    const barData = {
        label: "Bar Data",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
        type: "bar", // Specify the type as 'bar'
    };

    const lineData = {
        label: "Line Data",
        fill: false,
        borderColor: "#a62230",
        backgroundColor: "#a62230",
        // borderColor: "rgba(255, 99, 132, 1)",
        data: [28, 48, 40, 19, 86, 27, 90],
        type: "line", // Specify the type as 'line'
    };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [barData, lineData],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const options1 = [
        { value: "January", label: "January" },
        { value: "Feburary", label: "Feburary" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
    ];

    const options2 = [
        { value: "QTR 1", label: "QTR 1" },
        { value: "QTR 2", label: "QTR 2" },
        { value: "QTR 3", label: "QTR 3" },
        { value: "QTR 4", label: "QTR 4" },
    ];

    const options0004 = [
        { value: "2023", label: "2023" },
        { value: "2021", label: "2022" },
        { value: "2020", label: "2020" },
    ];

    const Months = [
        { value: "January", label: "January" },
        { value: "Feburary", label: "Feburary" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
    ];

    const Issue = [
        { value: "Prep-Bagging", label: "Prep-Bagging" },
        { value: "Preb-Set Creation", label: "Preb-Set Creation" },
        { value: "ASN Accuracy", label: "ASN Accuracy" },
        { value: "Overage PO Units", label: "Overage PO Units" },
    ];

    const Sub = [
        { value: "asn_otnc", label: "asn_otnc" },
        {
            value: "asn_imia_invalid_or_missing_arn",
            label: "asn_imia_invalid_or_missing_arn",
        },
    ];

    const Status = [
        { value: "Charged", label: "Charged" },
        { value: "Dispute Approved", label: "Dispute Approved" },
        { value: "Dispute Rejected", label: "Dispute Rejected" },
        { value: "Waived Graced period", label: "Waived Graced period" },
        {
            value: "Dispute- Needs more information",
            label: "Dispute- Needs more information",
        },
        { value: "Reversed", label: "Reversed" },
        { value: "Waived", label: "Waived" },
    ];
    const Set = [
        {
            id: 1,
            year: "2021",
            month: "Feburary",
            Status: "Dispute Approved",
            Asin: "B0787FVC2Q",
            Issue: "Prep-Bagging",
            SubIssue: "asn_otnc",
            Infraction: "$ 625.60",
            Units: "50",
        },

        {
            id: 2,
            year: "2022",
            month: "March",
            Status: "Charged",
            Asin: "B0787FVB1Q",
            Issue: "Prep-Set Creation",
            SubIssue: "asn_otnc",
            Infraction: "$ 255.60",
            Units: "20",
        },

        {
            id: 3,
            year: "2021",
            month: "April",
            Status: "Waived Grace Period",
            Asin: "B0787FVB2Z",
            Issue: "ASN Accuracy",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 605.60",
            Units: "37",
        },

        {
            id: 4,
            year: "2023",
            month: "October",
            Status: "Reversed",
            Asin: "B0754GVC2Q",
            Issue: "Overage PO Units",
            SubIssue: "asn_otnc",
            Infraction: "$ 255.60",
            Units: "25",
        },

        {
            id: 5,
            year: "2021",
            month: "December",
            Status: "ASN Accuracy",
            Asin: "Z9787FVC2Q",
            Issue: "Prep-Bagging",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 705.60",
            Units: "55",
        },

        {
            id: 6,
            year: "2023",
            month: "January",
            Status: "Waived",
            Asin: "G0327FVC2Q",
            Issue: "Overage PO Units",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 425.60",
            Units: "40",
        },

        {
            id: 7,
            year: "2022",
            month: "September",
            Status: "Dispute Rejected",
            Asin: "B0787GJH2Q",
            Issue: "Prep-Set Creation",
            SubIssue: "asn_otnc",
            Infraction: "$ 605.60",
            Units: "47",
        },

        {
            id: 8,
            year: "2023",
            month: "June",
            Status: "Dispute Needs More Info",
            Asin: "B0788LOC2Q",
            Issue: "Prep-Set Creation",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 825.60",
            Units: "70",
        },

        {
            id: 9,
            year: "2023",
            month: "August",
            Status: "Reversed",
            Asin: "B0787FVC6O",
            Issue: "ASN Accuracy",
            SubIssue: "asn_otnc",
            Infraction: "$ 905.60",
            Units: "85",
        },

        {
            id: 10,
            year: "2022",
            month: "November",
            Status: "Waived Grace Period",
            Asin: "B0787FVT2Q",
            Issue: "Overage PO Nnits",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 325.14",
            Units: "35",
        },

        {
            id: 11,
            year: "2021",
            month: "April",
            Status: "Waived",
            Asin: "J0787GVC2Z",
            Issue: "Prep-Bagging",
            SubIssue: "asn_otnc",
            Infraction: "$ 488.88",
            Units: "41",
        },

        {
            id: 12,
            year: "2021",
            month: "October",
            Status: "Dispute Approved",
            Asin: "B0787FVC2Q",
            Issue: "Prep-Bagging",
            SubIssue: "asn_otnc",
            Infraction: "$ 625.60",
            Units: "50",
        },

        {
            id: 13,
            year: "2023",
            month: "June",
            Status: "Dispute Rejected",
            Asin: "B0514FVC2Q",
            Issue: "Prep-Bagging",
            SubIssue: "asn_otnc",
            Infraction: "$ 115.60",
            Units: "15",
        },

        {
            id: 14,
            year: "2023",
            month: "July",
            Status: "Dispute Approved",
            Asin: "B0787FVC2Q",
            Issue: "Dispute -Needs More Info",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 265.60",
            Units: "26",
        },

        {
            id: 15,
            year: "2022",
            month: "December",
            Status: "Waived Grace Period",
            Asin: "B0787FVC9P",
            Issue: "Prep-Bagging",
            SubIssue: "asn_otnc",
            Infraction: "$ 625.60",
            Units: "50",
        },

        {
            id: 16,
            year: "2023",
            month: "March",
            Status: "Dispute Approved",
            Asin: "B0787FVC2Q",
            Issue: "Overage PO Units",
            SubIssue: "asn_otnc",
            Infraction: "$ 589.90",
            Units: "47",
        },

        {
            id: 17,
            year: "2021",
            month: "Feburary",
            Status: "Charged",
            Asin: "A0587FVC2Z",
            Issue: "ASN Accuracy",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 666.60",
            Units: "55",
        },

        {
            id: 18,
            year: "2022",
            month: "May",
            Status: "Dispute Rejected",
            Asin: "B0787FBC2Q",
            Issue: "ASN Accuracy",
            SubIssue: "asn_otnc",
            Infraction: "$ 544.60",
            Units: "65",
        },

        {
            id: 19,
            year: "2022",
            month: "December",
            Status: "Overage PO Units",
            Asin: "C0787GVC2Q",
            Issue: "Prep-Set Creation",
            SubIssue: "asn_imia_invalid_or_missing_arn",
            Infraction: "$ 105.60",
            Units: "15",
        },

        {
            id: 20,
            year: "2023",
            month: "September",
            Status: "Dispute Approved",
            Asin: "B0787FVE6P",
            Issue: "Prep-Set Creation",
            SubIssue: "asn_otnc",
            Infraction: "$ 625.60",
            Units: "27",
        },
    ];

    const [filteredData, setFilteredData] = useState(Set);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedColumn, setSelectedColumn] = useState("Infraction");

    // Function to filter data based on selections

    // Function to handle column selection
    const handleColumnSelection = (column) => {
        setSelectedColumn(column);
    };

    // options for drop down

    const [selectedOptions8, setSelectedOptions8] = useState("");
    const handleChange = (selectedOptions8) => {
        setSelectedOptions8(selectedOptions8);
    };

    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const handleChange1 = (selectedOptions1) => {
        setSelectedOptions1(selectedOptions1);
    };

    const [selectedOptions2, setSelectedOptions2] = useState("");
    const handleChange2 = (selectedOptions2) => {
        setSelectedOptions2(selectedOptions2);
    };

    const [selectedOptions0004, setSelectedOptions0004] = useState([]);
    const handleChange0004 = (selectedOptions0004) => {
        setSelectedOptions0004(selectedOptions0004);
    };

    const [selectedMonths, setSelectedMonths] = useState([]);
    const handleChange040 = (selectedMonths) => {
        setSelectedMonths(selectedMonths);
    };

    // Options for ASIN level Split

    const [selectedStatus, setSelectedStatus] = useState([]);
    const handleChangeStatus = (selectedStatus) => {
        setSelectedStatus(selectedStatus);
    };

    const [selectedIssue, setSelectedIssue] = useState([]);
    const handleChangeIssue = (selectedIssue) => {
        setSelectedIssue(selectedIssue);
    };

    const [selectedSub, setSelectedSub] = useState([]);
    const handleChangeSub = (selectedSub) => {
        setSelectedSub(selectedSub);
    };

    //

    useEffect(() => {
        const filtered = Set.filter(
            (item) =>
                (selectedOptions0004.length === 0 ||
                    selectedOptions0004.some((option) => option.value === item.year)) &&
                (selectedMonths.length === 0 ||
                    selectedMonths.some((option) => option.value === item.month)) &&
                (selectedStatus.length === 0 ||
                    selectedStatus.some((option) => option.value === item.Status)) &&
                (selectedIssue.length === 0 ||
                    selectedIssue.some((option) => option.value === item.Issue)) &&
                (selectedSub.length === 0 ||
                    selectedSub.some((option) => option.value === item.SubIssue)) &&
                item.Asin.includes(searchTerm)
        );

        setFilteredData(filtered);
    }, [
        selectedOptions0004,
        selectedMonths,
        selectedStatus,
        selectedIssue,
        selectedSub,
        searchTerm,
        Set,
    ]);

    return (
        <>
            <div className="operational-chargeback-container">
                <div className="dropdown-vendor-invoice-ops">
                    <h1>OPS Chargeback</h1>
                    <Select
                        className="dropdown-inventory-invoice-ii"
                        options={options8}
                        value={selectedOptions8}
                        onChange={handleChange}
                    />
                </div>

                <div className="oc-heading-box">
                    <div className="oc-heading-box-1">
                        <div className="prev-table-oc">
                            <h2>Dispute Amount</h2>
                        </div>
                        <div className="itemized-cards-oc">
                            <div className="item-oc">
                                <div className="table-container-oc">
                                    <table class="content-table-oc">
                                        <thead>
                                            <tr>
                                                <th>Total Disputed ($)</th>
                                                <th>Total Approved ($)</th>
                                                <th>Total Denied ($)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>$8,847.91</td>
                                                <td>$4,712.67</td>
                                                <td>$2,520.49</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="oc-heading-box-2">
                        <Bar data={data} options={options} />
                    </div>
                </div>
                <div className="split">
                    <h2>Chargeback Split</h2>

                    <Select
                        className="ops-csplit-option1"
                        options={options0004}
                        placeholder="Select Year"
                        value={selectedOptions0004}
                        onChange={handleChange0004}
                    />

                    <Select
                        className="ops-csplit-option2"
                        options={Months}
                        placeholder="Select Months"
                        value={selectedMonths}
                        onChange={handleChange040}
                    />
                </div>
                <table class="content-table-split">
                    <thead>
                        <tr>
                            <th>Chargeback Issue Type</th>
                            <th>Total Deduction ($)</th>
                            <th>Total Disputed ($)</th>
                            <th>Dispute Approved ($)</th>
                            <th>Dispute Denied ($)</th>
                            <th>Pending Disputed Line Items($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Incorrect Freight</td>
                            <td>36,2356.00</td>
                            <td>34,250.10</td>
                            <td>30,230.46</td>
                            <td>52 %</td>
                            <td>520</td>
                        </tr>
                        <tr class="active-row-split">
                            <td>Incorrect Code</td>
                            <td>50,000.00</td>
                            <td>36,000.00</td>
                            <td>23,852.90</td>
                            <td>38 %</td>
                            <td>850</td>
                        </tr>
                        <tr>
                            <td>Incorrect Agreement</td>
                            <td>30,323.25</td>
                            <td>29,230.20</td>
                            <td>26,450.80</td>
                            <td>42 %</td>
                            <td>3210</td>
                        </tr>
                        <tr>
                            <td>Duplicate Agreement</td>
                            <td>28,687.78</td>
                            <td>25,148.30</td>
                            <td>25,468.00</td>
                            <td>38 %</td>
                            <td>980</td>
                        </tr>
                    </tbody>
                </table>

                <div className="split-1">
                    <h2>Infraction Type</h2>
                    <Select
                        className="dropdown-inventory-ops-1"
                        options={options1}
                        placeholder="Select Year"
                        value={selectedOptions1}
                        onChange={handleChange1}
                    />
                    <Select
                        className="dropdown-inventory-ops-2"
                        options={options2}
                        placeholder="Select QTR"
                        value={selectedOptions2}
                        onChange={handleChange2}
                    />
                </div>
                <table class="content-table-split">
                    <thead>
                        <tr>
                            <th>Chargeback Issue Type</th>
                            <th>QTR 1</th>
                            <th>QTR 2</th>
                            <th>QTR 3</th>
                            <th>QTR 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Incorrect Freight</td>
                            <td>36,2356.00</td>
                            <td>34,250.10</td>
                            <td>30,230.46</td>
                            <td>52 %</td>
                        </tr>
                        <tr class="active-row-split">
                            <td>Incorrect Code</td>
                            <td>50,000.00</td>
                            <td>36,000.00</td>
                            <td>23,852.90</td>
                            <td>38 %</td>
                        </tr>
                        <tr>
                            <td>Incorrect Agreement</td>
                            <td>30,323.25</td>
                            <td>29,230.20</td>
                            <td>26,450.80</td>
                            <td>42 %</td>
                        </tr>
                        <tr>
                            <td>Duplicate Agreement</td>
                            <td>28,687.78</td>
                            <td>25,148.30</td>
                            <td>25,468.00</td>
                            <td>38 %</td>
                        </tr>
                    </tbody>
                </table>
                <div className="asin-split">
                    <h2>Operational Chargebacks - ASIN Level Split</h2>
                    <div className="asin-split-dd-1">
                        <Select
                            className="dd-1"
                            placeholder="Select Year"
                            options={options0004}
                            isMulti={true}
                            value={selectedOptions0004}
                            onChange={handleChange0004}
                        />
                        <Select
                            className="dd-2"
                            options={Months}
                            isMulti={true}
                            placeholder="Select Months"
                            value={selectedMonths}
                            onChange={handleChange040}
                        />
                        <Select
                            className="dd-3"
                            options={Status}
                            isMulti={true}
                            placeholder="Select Status"
                            value={selectedStatus}
                            onChange={handleChangeStatus}
                        />
                        <input
                            type="text"
                            placeholder="Enter ASIN, B08Y675271..."
                            className="search-box-asin-ops-split"
                        />
                    </div>
                    <div className="asin-split-dd-2">
                        <Select
                            className="dd2-1"
                            options={Issue}
                            isMulti={true}
                            placeholder="Select Issue Type"
                            value={selectedIssue}
                            onChange={handleChangeIssue}
                        />
                        <Select
                            className="dd2-2"
                            isMulti={true}
                            options={Sub}
                            placeholder="Select Sub Issue"
                            value={selectedSub}
                            onChange={handleChangeSub}
                        />
                    </div>
                    <div className="three-split-buttons">
                        <button className="button-asin-split-1">Search</button>
                        <button className="button-asin-split-2">Reset</button>
                        <button className="button-asin-split-3">Export</button>
                    </div>
                </div>
                <div className="switch-fractions">
                    <h4
                        className={`actual-amount ${selectedColumn === "Infraction" ? "selected" : ""
                            }`}
                        onClick={() => handleColumnSelection("Infraction")}
                    >
                        Infraction ($)
                    </h4>
                    <h4
                        className={`actual-units ${selectedColumn === "Units" ? "selected" : ""
                            }`}
                        onClick={() => handleColumnSelection("Units")}
                    >
                        Infraction (Units)
                    </h4>
                </div>
                <div className="asin-split-table">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ASIN</th>
                                <th>Issue</th>
                                <th>Sub Issue</th>
                                <th>{selectedColumn}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                                    <td>{item.Asin}</td>
                                    <td>{item.Issue}</td>
                                    <td>{item.SubIssue}</td>

                                    <td>{selectedColumn === "Infraction" ? item.Infraction : item.Units}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OpsChargeback;