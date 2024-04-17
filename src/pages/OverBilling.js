import React, { useState } from "react";
import "../components/CSS/overbillings.css";
import Select from "react-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";

const OverBilling = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-prev-arrow" onClick={onClick}>
            <UilArrowLeft size="25" color="white" />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-next-arrow" onClick={onClick}>
            <UilArrowRight size="25" color="white" />
        </div>
    );

    const CarouselComponent = () => {
        const settings = {
            infinite: true,
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
        };

        const [selectedCard, setSelectedCard] = useState(null);

        const handleCardClick = (card) => {
            setSelectedCard(card);
        };

        const handleCloseClick = () => {
            setSelectedCard(null);
        };

        const cardContent = [
            {
                title: "Quantity Mismatch",
                progress: 75,
                color: "white",
                amount: " $ 36,970 ",
            },
            {
                title: "Incorrect Freight",
                progress: 95,
                color: "white",
                amount: " $ 52,970 ",
            },
            {
                title: "Incorrect Code",
                progress: 85,
                color: "white",
                amount: " $ 10,970 ",
            },
            {
                title: "Promotional Overbilling",
                progress: 46,
                color: "white",
                amount: " $ 66,970 ",
            },
            {
                title: "Return Overbilling",
                progress: 29,
                color: "white",
                amount: " $ 87,970 ",
            },
            {
                title: "Card 6",
                progress: 67,
                color: "white",
                amount: " $ 73,970 ",
            },
        ];

        return (
            <div style={{ position: "relative" }}>
                <Slider {...settings}>
                    {cardContent.map((card, index) => (
                        <motion.div
                            key={index}
                            className="jhelan"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleCardClick(card)}
                        >
                            <h3 className="jhelan-title">{card.title}</h3>
                            <div className="progress-bar" style={{ width: "30%", margin: 35 }}>
                                <CircularProgressbar
                                    value={card.progress}
                                    text={`${card.progress}%`}
                                    styles={{
                                        path: { stroke: card.color },
                                        text: { fill: card.color, fontSize: "20px" },
                                    }}
                                />
                                <h2 className="overbill-numbers">{card.amount}</h2>
                            </div>
                        </motion.div>
                    ))}
                </Slider>

                <AnimatePresence>
                    {selectedCard && (
                        <motion.div
                            key="expanded-card"
                            className="ExpandedCard"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: "fixed",
                                top: "18%",
                                left: "22%",
                                transform: "translate(-50%, -50%)",
                                width: "50%",
                                height: "45vh",
                                zIndex: 9999,
                                borderRadius: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                padding: "1rem",
                                background: "rgb(240,128,128)",
                                boxShadow: "your box shadow",
                            }}
                        >
                            <div
                                className="crosshair"
                                style={{
                                    cursor: "pointer",
                                    color: "white",
                                }}
                            >
                                <UilTimes onClick={handleCloseClick} />
                            </div>
                            <h2 className="carousal-title">{selectedCard.title}</h2>
                            <div className="overbill-info">
                                <div className="info-container1">
                                    <h4>Agreements Scanned</h4>
                                    <p>40</p>
                                </div>
                                <div className="info-container2">
                                    <h4>CoOp Invoices Scanned</h4>
                                    <p>1,253</p>
                                </div>
                                <div className="info-container3">
                                    <h4>PO's Scanned</h4>
                                    <p>1,163</p>
                                </div>
                                <div className="info-container4">
                                    <h4>Overbilling Identified</h4>
                                    <p>$ 11,405.27</p>
                                </div>
                            </div>
                            <div className="chartContainer" style={{ width: "70%" }}></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

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

    function createData(name, trackingId, date, status, percentage) {
        return { name, trackingId, date, status, percentage };
    }

    const rows = [
        createData("Incorrect Fright", 362356.0, 65231.0, 6547.25, 47),
        createData("Incorrect Code", 522310.0, 24652.3, 3698.25, 36),
        createData("Incorrect Aggrement", 18908.44, 11789.9, 1112.05, 68),
        createData("Duplicate Aggrement", 12508.04, 321.0, 3791.82, 48),
    ];

    const generateComboChartData = () => {
        return {
            labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
            datasets: [
                {
                    label: "Bar Dataset 1",
                    type: "bar",
                    // backgroundColor: "rgba(75,192,192,0.4)",
                    backgroundColor: "rgba(166,34,38,0.7)",
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 1,
                    // hoverBackgroundColor: "rgba(75,192,192,0.6)",
                    hoverBackgroundColor: "rgba(167,36,38,0.8)",
                    hoverBorderColor: "rgba(166,34,38,0.7)",
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
                    label: "Comparison Dataset 1",
                    type: "bar",
                    backgroundColor: " rgba(99,102,106,0.4) ",
                    borderColor: "#bcc4bd ",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(99,102,106,0.6)",
                    hoverBorderColor: "#858483",
                    data: [55, 65, 75, 85],
                },
                {
                    label: "Comparison Dataset 2",
                    type: "bar",
                    backgroundColor: "rgba(75, 192, 192, 0.4)",
                    borderColor: "#abb9bb",
                    // backgroundColor: "rgba(255, 159, 64, 0.4)",
                    // borderColor: "rgba(255, 159, 64, 1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(75, 192, 192, 0.5)",
                    hoverBorderColor: "rgba(75, 192, 192, 0.2)",
                    data: [75, 85, 95, 105],
                },
            ],
        };
    };
    const data = [
        {
            id: 1,
            description: "Incorrect Freight",
            type: "362,356.00",
            date: "65,231.00",
            ds: "6547.25",
            amount: "40",
        },
        {
            id: 2,
            description: "Incorrect Code",
            type: "522,310.00",
            date: "24,652.30",
            ds: "3698.25",
            amount: "36",
        },
        {
            id: 3,
            description: "Incorrect Agreement",
            type: "18,908.44",
            date: "11,789.90",
            ds: "1112.05",
            amount: "68",
        },
        {
            id: 4,
            description: "Duplicate Agreement",
            type: "12,508.04",
            date: "321.00",
            ds: "3791.82",
            amount: "48",
        },
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
            <div className="overbill-container1">
                <div className="overbill-container2">
                    <h1>OverBilling</h1>
                    <div className="dropdown-vendor">
                        <Select
                            className="dropdown-inventory"
                            options={options}
                            value={selectedOptions}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="cards-updates">
                    <div className="carousal-cards1">
                        <CarouselComponent />
                    </div>
                    <div className="updates">
                        <div className="heading-update">
                            <h3>Updates</h3>
                        </div>
                        <div className="actual-updates">
                            <ul>
                                <li>Krishna has ordered Apple smart watch 2500mh battery.</li>
                                <li className="listed-2">
                                    Krishna has ordered Apple smart watch 2500mh battery.
                                </li>
                                <li className="listed-2">
                                    Krishna has ordered Apple smart watch 2500mh battery.
                                </li>
                                <li className="listed-2">
                                    Krishna has ordered Apple smart watch 2500mh battery.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="summary-currency">
                    <h2>Summary</h2>
                    <select className="dropdown1-i">
                        <option>EUR</option>
                        <option>USD</option>
                    </select>
                </div>
                <div className="table-winrate">
                    <div className="overbill-table">
                        <table className="content-table-ob">
                            <thead>
                                <tr>
                                    <th>Quantity Mismatch</th>
                                    <th>Findings ($)</th>
                                    <th>Prior Adjustments</th>
                                    <th>Net Off</th>
                                    <th className="width-small">Win Rate %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.description}</td>
                                        <td>{item.type}</td>
                                        <td>{item.date}</td>
                                        <td>{item.ds}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="overbill-winrate">
                        <h3>Win Rate</h3>
                        <div className="overbill-winrate1">
                            <h4>Disputed Amount ($): 3,1205.87 </h4>
                            <h4>Amount Received ($): 4,500.35 </h4>
                            <h4>Amount Win Rate % : 47% </h4>
                        </div>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="histogram" style={{ width: 1200, height: 1000 }}>
                        <Line data={generateComboChartData()} className="combo-chart" />
                    </div>
                </div>
                <div className="prev-table-ic">
                    <h2>Jobs In Progress</h2>
                    <button className="export-ic">EXPORT</button>
                </div>
                <div className="table-container-ic">
                    <table class="content-table-ic">
                        <thead>
                            <tr>
                                <th>Vendor Name</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Agreement Id/Dispute Id</th>
                                <th>Pending Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>142641542</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr class="active-row-ic">
                                <td>AU - Califia Farms</td>
                                <td>11/04/22 07:09 AM</td>
                                <td>Shortage Reconciliation</td>
                                <td>7934982</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                            <tr>
                                <td>AU - Califia Farms</td>
                                <td>11/14/22 05:45 PM</td>
                                <td>Quantity Mismatch</td>
                                <td>874651654</td>
                                <td>Pending for QA Verification</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default OverBilling