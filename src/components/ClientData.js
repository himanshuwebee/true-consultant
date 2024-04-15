import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./CSS/EE.css";


const ClientTable = ({ data  }) => {

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/Client");
  };
  
  return (
    <table className="user-data-import">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Market Place</th>
          <th>Org Name</th>
          <th>Org Owner Email</th>
          <th>Client Name</th>
          <th>Amazon Portal Account</th>
          <th>FD Monthly Cron Job</th>
          <th>Overbilling</th>
          <th>Financial Dashboard</th>
          <th>Invoicing</th>
          <th>Re-Run Vendors</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.marketPlace}</td>
            <td>{row.orgName}</td>
            <td>{row.orgOwnerEmail}</td>
            <td>{row.clientName}</td>
            <td>{row.amazonPortalAccount}</td>
            <td>{row.fdMonthlyCronJob}</td>
            <td>{row.overbilling}</td>
            <td>{row.financialDashboard}</td>
            <td>{row.invoicing}</td>
            <td>{row.reRunVendors}</td>
            <td>
              <FontAwesomeIcon icon={faEye} className="eye"/> {/* Eye icon */}
              <FontAwesomeIcon icon={faEdit} className="edit" onClick={handleEditClick}/> {/* Edit icon */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
