import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./CSS/ManageUser.css";
import ClientTable from "./ClientData";
import UserTable from "./UserData";
import GroupTable from "./GroupData";
import { CData, udata , gdata } from "./CUG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MarketPlace = [
  { value: "US", label: "US" },
  { value: "MX", label: "MX" },
  { value: "AE", label: "AE" },
  { value: "FR", label: "FR" },
  { value: "DE", label: "DE" },
  { value: "GB", label: "GB" },
  { value: "IT", label: "IT" },
  { value: "SA", label: "SA" },
  { value: "EG", label: "EG" },
  { value: "AU", label: "AU" },
  { value: "ES", label: "ES" },
  { value: "NL", label: "NL" },
  { value: "PL", label: "PL" },
];

const OrgName = [
  { value: "US - Rebelution US", label: "US - Rebelution US" },
  { value: "FR - Bud Industries", label: "FR - Bud Industries" },
  { value: "US - MEDCO Corporations", label: "US - MEDCO Corporation" },
  { value: "CA - Reuzel, Inc", label: "CA - Reuzel, Inc" },
  { value: "IT - CRC Industries", label: "IT - CRC Industries" },
  { value: "AE - LEDVANCE LLC", label: "AE - LEDVANCE LLC" },
  { value: "US - Shop-Vac", label: "US - Shop-Vac" },
  { value: "SA - ORS-Nasco Industrial", label: "SA - ORS-Nasco Industrial" },
  { value: "DE - United Weavers", label: "DE - United Weavers" },
  { value: "CA - Simply 7 Snacks LLC.", label: "CA - Simply 7 Snacks LLC." },
  { value: "GB - Evapo Rust", label: "GB - Evapo Rust" },
  { value: "US - 10 Strawberry Street", label: "US - 10 Strawberry Street" },
];

function ManageUser() {
  const [selectedMarketPlace, setSelectedMarketPlace] = useState("");
  const handleMarketPlace = (selectedMarketPlace) => {
    setSelectedMarketPlace(selectedMarketPlace);
  };

  const [selectedOrgName, setSelectedOrgName] = useState("");
  const handleOrgName = (selectedOrgName) => {
    setSelectedOrgName(selectedOrgName);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 15; // Number of items per page

  const [activeTab, setActiveTab] = useState("Client");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  const dataMap = {
    Client: CData,
    User: udata,
    Group: gdata,
  };

  const currentData = dataMap[activeTab];

  const totalPages = Math.ceil(currentData.length / pageSize);

  const paginatedData = currentData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const getTitle = () => {
    switch (activeTab) {
      case "Client":
        return "Manage Clients";
      case "User":
        return "Manage Users";
      case "Group":
        return "Manage Groups";
      default:
        return "Manage Clients";
    }
  };

  return (
    <div className="manage-user-main-container">
      <div className="manage-user-heading-container">
        <div className="manage-user-heading-container-1">
          <h1>{getTitle()}</h1>
          <input
            type="text"
            placeholder="Seach Name/Email"
            className="manage-user-search"
          />
          <button className="manage-user-search-btn">Search</button>
          <h3>Contact Us</h3>
          <FontAwesomeIcon icon={faFacebook} className="fbook"/>
          <FontAwesomeIcon icon={faTwitter} className="twitter"/> 
          <FontAwesomeIcon icon={faLinkedin} className="ln"/>
        </div>
        <div className="filter-buttons">
          <button
            className={`manage-user-Client ${
              activeTab === "Client" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Client")}
          >
            Client
          </button>
          <button
            className={`manage-user-User ${
              activeTab === "User" ? "active" : ""
            }`}
            onClick={() => handleTabChange("User")}
          >
            User
          </button>
          <button
            className={`manage-user-Group ${
              activeTab === "Group" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Group")}
          >
            Group
          </button>
        </div>
      </div>
      <div className="dd-manage-user">
        <Select
          className="dd-mp-ms"
          options={MarketPlace}
          value={selectedMarketPlace}
          onChange={handleMarketPlace}
          placeholder="Select Market Place"
        />
        <Select
          className="dd-on-ms"
          options={OrgName}
          value={selectedOrgName}
          onChange={handleOrgName}
          placeholder="Select Org Name"
        />
      </div>
      <div className="mu-table-container">
        {activeTab === "Client" && <ClientTable data={paginatedData} />}
        {activeTab === "User" && <UserTable data={paginatedData} />}
        {activeTab === "Group" && <GroupTable data={paginatedData} />}
        {totalPages > 1 && (
          <div>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              className="client-pn-prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <button
              className="client-pn-next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            >
              Next
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default ManageUser;
