import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./CSS/User.css";

const ModuleAccess = [
  { value: "Overbilling", label: "Overbilling" },
  { value: "Shortage", label: "Shortage" },
  { value: "Financial Dashboard", label: "Financial Dashboard" },
  { value: "Price Claim", label: "Price Claim" },
  { value: "Invoice Reconcilliation", label: "Invoice Reconcilliation" },
  { value: "OPS Chargebacks", label: "OPS Chargebacks" },
];

const Portal = [
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

function User() {
  const navigate = useNavigate();
  const handleBack = () => {
    // Use the navigate function to navigate back to a specific page
    navigate("/ManageUser"); // Replace "/your-specific-page" with the actual path
  };

  const [selectedPortal, setSelectedPortal] = useState("");
  const handlePortal = (selectedPortal) => {
    setSelectedPortal(selectedPortal);
  };

  const [selectedModuleAccess, setSelectedModuleAccess] = useState("");
  const handleModuleAccess = (selectedModuleAccess) => {
    setSelectedModuleAccess(selectedModuleAccess);
  };

  return (
    <div className="User-main-container">
      <div className="headin-user">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow-user"
          onClick={handleBack}
        />
        <h1>Manage Users</h1>
      </div>
      <div className="user-container-user">
        <div className="user-first-container">
          <div className="first-name">
            <h3>First Name</h3>
            <input
              type="text"
              placeholder="First Name"
              className="First-name-please"
            />
          </div>

          <div className="second-name">
            <h3>Last Name</h3>
            <input
              type="text"
              placeholder="Last Name"
              className="second-name-please"
            />
          </div>
        </div>

        <div className="user-second-container">
          <div className="user-email">
            <h3>Email/User Id</h3>
            <input
              type="text"
              placeholder="Email"
              className="Email-name-please"
            />
          </div>
          <div className="Amazon-Vc">
            <h3>Amazon Portal Account</h3>
            <Select
              className="Portal-dd"
              options={Portal}
              value={selectedPortal}
              onChange={handlePortal}
              placeholder="Select Amazon Portal Account "
            />
          </div>
        </div>

        <div className="user-third-container">
          <div className="modle-permission">
            <h3>Menu Permission</h3>
            <Select
              className="Menu-dd"
              options={ModuleAccess}
              value={selectedPortal}
              onChange={handleModuleAccess}
              placeholder="Select Menu "
            />
          </div>
          <div className="radio-group">
            <h3>Is Admin</h3>
            <label >
              <input type="radio" value="yes" name="option" className="radio-btns" />
              Yes
            </label>
            <label>
              <input type="radio" value="no" name="option" className="radio-btns-1" />
              No
            </label>
          </div>

          <div className="radio-group-i">
            <h3>Is Internal</h3>
            <label >
              <input type="radio" value="yes" name="option" className="radio-btns-i" />
              Yes
            </label>
            <label>
              <input type="radio" value="no" name="option" className="radio-btns-1-i" />
              No
            </label>
          </div>
        </div>
        <div className="user-buttons">
          <button className="user-submit">Submit</button>
          <button className="user-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default User;
