import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Home.css";
import moment from "moment-timezone";
import Profile from "./images/pic.jpg";

function Home() {
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  useEffect(() => {
    const updateDates = () => {
      const date = new Date();

      const timeZone1 = "America/New_York";
      const timeZone2 = "Asia/Kolkata";
      const formattedDate1 = moment(date).tz(timeZone1).format("HH:mm:ss");
      const formattedDate2 = moment(date).tz(timeZone2).format("HH:mm:ss");

      setFormattedDate1(formattedDate1);
      setFormattedDate2(formattedDate2);
    };

    updateDates();
    const intervalId = setInterval(updateDates, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fcontainer">
      <div className="profile">
        <div className="photo">
          <img src={Profile} alt="prof" className="photo-1"></img>
        </div>

        <div className="photo-info">
          <h4>Krishna Kant Singh</h4>
        </div>

        <div className="time-zone">
          <div className="CST-zone">
            <h4>CST</h4>
            <p>{formattedDate1}</p>
          </div>
          <div className="IST-zone">
            <h4>IST</h4>
            <p>{formattedDate2}</p>
          </div>
        </div>
      </div>
      <div className="fcontainer-1">
        <div className="fsubcontainer fsubcontainer-1">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Overbilling" className="home-short">
                Overbilling
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
        <div className="fsubcontainer fsubcontainer-2">
          <div className="flip-card">
            <div className="front">
              <h3>
              <NavLink to="/Shortage" className="home-short">
                Shortages
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
        <div className="fsubcontainer fsubcontainer-3">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Financial" className="home-short">
                Financial Scorecard
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="fcontainer-2">
        <div className="fsubcontainer fsubcontainer-1c">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Coming" className="home-short">
                Price Claim
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
        <div className="fsubcontainer fsubcontainer-2c">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Coming" className="home-short">
                Invoice Reconciliation
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
        <div className="fsubcontainer fsubcontainer-3c">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Coming" className="home-short">
                Operational Chargebacks
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="fcontainer-3">
        <div className="fsubcontainer fsubcontainer-1c">
          <div className="flip-card">
            <div className="front">
            <h3>
              <NavLink to="/Coming" className="home-short">
                Reports
              </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


