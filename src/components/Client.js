import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./CSS/Client.css";

const AmazonVc = [
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

const AccManager = [
  { value: "Laxmi Kumari", label: "Laxmi Kumari" },
  { value: "Shradha Thaker", label: "Shradha Thaker" },
  { value: "Kunwar Chawla", label: "Kunwar Chawla" },
  { value: "Amit Kumar", label: "Amit Kumar" },
  { value: "Shital Pandey", label: "Shital Pandey" },
  { value: "Kriti singh", label: "Kriti singh" },
  { value: "Ankita raj", label: "Ankita raj" },
  { value: "Namita rani nath", label: "Namita rani nath" },
  { value: "Simran Gill", label: "Simran Gill" },
  { value: "Shambhawi Sharma", label: "Shambhawi Sharma" },
  { value: "Dibya Agarwal", label: "Dibya Agarwal" },
  { value: "Arpita Barua", label: "Arpita Barua" },
  { value: "Hrithik Kumar", label: "Hrithik Kumar" },
];

const ModuleAccess = [
  { value: "Overbilling", label: "Overbilling" },
  { value: "Shortage", label: "Shortage" },
  { value: "Financial Dashboard", label: "Financial Dashboard" },
  { value: "Price Claim", label: "Price Claim" },
  { value: "Invoice Reconcilliation", label: "Invoice Reconcilliation" },
  { value: "OPS Chargebacks", label: "OPS Chargebacks" },
];

const Net = [
  { value: "Net 7", label: "Net 7" },
  { value: "Net 30", label: "Net 30" },
  { value: "Net 45", label: "Net 45" },
  { value: "Net 90", label: "Net 90" },
];

function Client() {

  const [selectedAmazonVc, setSelectedAmazonVc] = useState("");
  const handleAmazonVc = (selectedAmazonVc) => {
    setSelectedAmazonVc(selectedAmazonVc);
  };

  const [selectedAccManager, setSelectedAccManager] = useState("");
  const handleAccManager = (selectedAccManager) => {
    setSelectedAccManager(selectedAccManager);
  };

  const [selectedModuleAccess, setSelectedModuleAccess] = useState("");
  const handleModuleAccess = (selectedModuleAccess) => {
    setSelectedModuleAccess(selectedModuleAccess);
  };

  const [selectedNet, setSelectedNet] = useState("");
  const handleNet = (selectedNet) => {
    setSelectedNet(selectedNet);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [ReferenceModal, setReferenceModal] = useState(false);
  const toggleModal50 = () => {
    setReferenceModal(!ReferenceModal);
  };

  if (ReferenceModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // New state variable for references
  const [references, setReferences] = useState([]);
  const [referredBy, setReferredBy] = useState("");
  const [serviceFee, setServiceFee] = useState("");

  const handleReferredByChange = (event) => {
    setReferredBy(event.target.value);
  };

  const handleServiceFeeChange = (event) => {
    setServiceFee(event.target.value);
  };

  const handleSaveReference = () => {
    // Validate if both fields are filled
    if (referredBy && serviceFee) {
      // Create a new reference object
      const newReference = { referredBy, serviceFee };

      // Add the new reference to the references array
      setReferences([...references, newReference]);

      // Clear the input fields
      setReferredBy("");
      setServiceFee("");
    } else {
      // Handle validation error (both fields are required)
      // You can show an alert or any error message to the user
      alert("Both fields are required");
    }
  };

  const handleEditReference = (index, field, value) => {
    // Create a copy of the references array
    const updatedReferences = [...references];

    // Update the specified field for the reference at the given index
    updatedReferences[index][field] = value;

    // Update the state with the modified references
    setReferences(updatedReferences);
  };

  const navigate = useNavigate();

  // ... Your existing state variables and functions ...

  const handleBack = () => {
    // Use the navigate function to navigate back to a specific page
    navigate("/ManageUser"); // Replace "/your-specific-page" with the actual path
  };

  return (
    <div className="client-container">
      <div className="headin-back">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow"
          onClick={handleBack}
        />
        <h1>Manage Clients</h1>
      </div>
      <div className="client-container-1">
        <div className="client-first-container">
          <div className="Org-name">
            <h4>Organization Name</h4>
            <input
              type="text"
              placeholder="Organization Name"
              className="Org-name-please"
            />
          </div>
          <div className="Vc-name">
            <h4>Amazon Venderal Central</h4>
            <Select
              className="AmazonVc-DD"
              options={AmazonVc}
              value={selectedAmazonVc}
              onChange={handleAmazonVc}
              placeholder="Amazon VC"
            />
          </div>
          <div className="Market-name">
            <h4>Market Place</h4>
            <input
              type="text"
              placeholder="Market Place"
              className="Market-name-please"
            />
          </div>
        </div>

        {/* Second Container */}

        <div className="client-second-container">
          <div className="Customer-name">
            <h4>Customer POC</h4>
            <input
              type="text"
              placeholder="Customer Name"
              className="Customer-name-please"
            />
          </div>
          <div className="Customer-name-1">
            <h4>Customer Email Id</h4>
            <input
              type="text"
              placeholder="Customer Email Id"
              className="Customer-name-please-1"
            />
          </div>
          <div className="Acc-name">
            <h4>Account Manager</h4>
            <Select
              className="AccManager-DD"
              options={AccManager}
              value={selectedAccManager}
              onChange={handleAccManager}
              placeholder="Account Manager"
            />
          </div>
        </div>

        {/* 3rd container */}

        <div className="client-third-container">
          <div className="Contract-name">
            <h4>Contract Start Date</h4>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy" // You can customize the date format
              isClearable
              placeholderText="Click to select a date"
              className="Calendar-start-date"
            />
          </div>
          <div className="Contract-name-1">
            <h4>Customer End Date</h4>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              isClearable
              placeholderText="Click to select a date"
              className="Calendar-start-date-1"
            />
          </div>
          <div className="Module-name">
            <h4>Module Access</h4>
            <Select
              className="Module-DD"
              options={ModuleAccess}
              value={selectedModuleAccess}
              onChange={handleModuleAccess}
              placeholder="Module Access"
            />
          </div>
        </div>

        {/* Modal for Add reference */}

        {ReferenceModal && (
          <div className="modal50">
            <div onClick={toggleModal50} className="overlay"></div>
            <div className="modal-content-50">
              <h2>Add Reference</h2>
              <button className="close-modal-50" onClick={toggleModal50}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="reference-flex">
              <div className="ip-field-1">
                <input
                  type="text"
                  placeholder="Referred By"
                  className="Referred-by"
                  onChange={handleReferredByChange}
                />
              </div>
              <div className="ip-field-2">
                <input
                  type="text"
                  placeholder="Service Fee"
                  className="Service-fee"
                  onChange={handleServiceFeeChange}
                />
              </div>
            </div>
            <div className="ref-bttns">
              <button className="ref-1" onClick={handleSaveReference}>
                Save
              </button>
              <button className="ref-2" onClick={toggleModal50}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* 4th Container */}

        <div className="client-fourth-container">
          <div className="Org-name-1">
            <h4>References</h4>
            {references.map((reference, index) => (
              <div className="endgame" key={index}>
                <input
                  type="text"
                  placeholder="Referred By"
                  className="Referred-by"
                  value={reference.referredBy}
                  onChange={(e) =>
                    handleEditReference(index, "referredBy", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Service Fee"
                  className="Service-fee"
                  value={reference.serviceFee}
                  onChange={(e) =>
                    handleEditReference(index, "serviceFee", e.target.value)
                  }
                />
              </div>
            ))}
            <button className="reference-add" onClick={toggleModal50}>
              ADD References
            </button>
          </div>
          <div className="jsp">
            <h4>Jupiter Service Fee %</h4>
            <input type="text" placeholder="Service Fee" className="jsp-fee" />
          </div>
          <div className="net-payement">
            <h4>Net Payement</h4>
          <Select
              className="pay-per"
              options={Net}
              value={selectedNet}
              placeholder="Select Percentage"
              onChange={handleNet}
            />
          </div>
        </div>
        <div className="last-bttns">
          <button className="last-submit">Submit</button>
          <button className="last-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Client;
