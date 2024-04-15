import React from "react";
import "./CSS/Sidebar.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NavLink } from 'react-router-dom'
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsBook,BsFillFileTextFill , BsFillHouseDoorFill, BsFillExclamationDiamondFill } from 'react-icons/bs';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsFillExclamationDiamondFill className='icon_header' /> JUPITER
          
        </div>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink to="/"> 
            <BsFillHouseDoorFill className='icon' /> Home
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Overbilling"> 
            <BsGrid1X2Fill className='icon' /> OverBilling
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Shortage"> 
            <BsFillArchiveFill className='icon' /> Shortage
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Financial"> 
            <BsFillFileTextFill className='icon' /> Financial Scorecard
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/priceClaim"> 
            <BsFillGrid3X3GapFill className='icon' />Price Claim
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Invoice"> 
            <BsListCheck className='icon' /> Invoice Reconciliation
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Ops"> 
            <BsMenuButtonWideFill className='icon' />OPS Chargebacks
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Coming"> 
          <BsBook className='icon' /> Reports
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/ManageUser"> 
          <BsPeopleFill className='icon' /> Manage Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
