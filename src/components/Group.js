import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./CSS/Group.css";

const MP = [
  { value: "Overbilling", label: "Overbilling" },
  { value: "Shortage", label: "Shortage" },
  { value: "Financial Dashboard", label: "Financial Dashboard" },
  { value: "Price Claim", label: "Price Claim" },
  { value: "Invoice Reconcilliation", label: "Invoice Reconcilliation" },
  { value: "OPS Chargebacks", label: "OPS Chargebacks" },
];

const Internal = [
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

const External = [
  { value: "Justin", label: "Justin" },
  { value: "Natalie", label: "Natalie" },
  { value: "Ben", label: "Ben" },
  { value: "Ryan", label: "Ryan" },
  { value: "Miller", label: "Miller" },
  { value: "Cody", label: "Cody" },
  { value: "Kandis", label: "Kandis" },
  { value: "Erick", label: "Erick" },
  { value: "Meghan", label: "Meghan" },
];

const VcGroup = [
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

function Group() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/ManageUser");
  };

  const [selectedMP, setSelectedMP] = useState("");
  const handleMP = (selectedMP) => {
    setSelectedMP(selectedMP);
  };

  const [selectedVcGroup, setSelectedVcGroup] = useState("");
  const handleVcGroup = (selectedVcGroup) => {
    setSelectedVcGroup(selectedVcGroup);
  };

  const [selectedInternal, setSelectedInternal] = useState("");
  const handleInternal = (selectedInternal) => {
    setSelectedInternal(selectedInternal);
  };

  const [selectedExternal, setSelectedExternal] = useState("");
  const handleExternal = (selectedExternal) => {
    setSelectedExternal(selectedExternal);
  };

  const [selectedType, setSelectedType] = useState("Internal");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const userList = selectedType === "Internal" ? Internal : External;

  return (
    <div className="group-main-container">
      <div className="group-user">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow-group"
          onClick={handleBack}
        />
        <h1>Manage Groups</h1>
      </div>
      <div className="group-container-big">
        <div className="group-first-container">
          <div className="group-name">
            <h3>Group Name</h3>
            <input
              type="text"
              placeholder="Group Name"
              className="GroupName-please"
            />
          </div>
          <div className="group-type">
            <div className="radio-group-gp">
              <h3>Group Type</h3>
              <label>
                <input
                  type="radio"
                  value="yes"
                  name="option"
                  className="radio-btns-gp"
                  checked={selectedType === "Internal"}
                  onChange={() => handleTypeChange("Internal")}
                />
                Internal
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  name="option"
                  className="radio-btns-1-gp"
                  checked={selectedType === "External"}
                  onChange={() => handleTypeChange("External")}
                />
                External
              </label>
            </div>
          </div>
        </div>

        {/* 2nd Container */}

        <div className="group-second-container">
          <div className="group-menu-permission">
            <h3>Menu Permission</h3>
            <Select
              className="Menu-dd-group"
              options={MP}
              value={selectedMP}
              onChange={handleMP}
              placeholder="Select Menu "
            />
          </div>

          <div className="internal-external-list">
            <h3>{`${selectedType} User`}</h3>
            <Select
              className="Menu-dd-group"
              options={userList}
              value={selectedInternal}
              onChange={handleInternal}
              placeholder={`Select ${selectedType} User`}
            />
          </div>
        </div>

        {/* 3rd Container */}
        <div className="group-third-container">
          <div className="vendor-group-central">
            <h3>VC Account</h3>
            <Select
              className="Menu-dd-group"
              options={VcGroup}
              value={selectedVcGroup}
              onChange={handleVcGroup}
              placeholder="Select VC Account "
            />
          </div>
        </div>
        <div className="group-btns">
          <button className="group-submit">Submit</button>
          <button className="group-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Group;
