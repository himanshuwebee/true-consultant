import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./CSS/EE.css";


const GroupTable = ({ data  }) => {
  
    const navigate = useNavigate();

    const handleEditClick = () => {
      navigate("/Group");
    };
    
  return (
    <table className="user-data-import">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Name</th>
          <th>Group Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.Name}</td>
            <td>{row.GroupType}</td>
            <td>
              {/* Add action buttons or links based on your requirements */}
              <FontAwesomeIcon icon={faEye} className="eye"/> {/* Eye icon */}
              <FontAwesomeIcon icon={faEdit} className="edit" onClick={handleEditClick} /> {/* Edit icon */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GroupTable;
