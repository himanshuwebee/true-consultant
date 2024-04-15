import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { UilTimes } from "@iconscout/react-unicons";

const ExpandedCard = ({ selectedCard, handleCloseClick }) => {
  const data = {
    // Your chart data here
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        position: "absolute",
        width: "60%",
        height: "70vh",
        zIndex: 9,
        left: "13rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1rem",
        background: selectedCard.color.backGround, // Update with your actual color
        boxShadow: selectedCard.color.boxShadow, // Update with your actual boxShadow
      }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={handleCloseClick} />
      </div>
      <span style={{ color: "white", fontSize: "26px", fontWeight: "bold", textShadow: "0px 0px 15px white" }}>
        {selectedCard.title}
      </span>
      <div className="chartContainer" style={{ width: "70%" }}>
        {/* Render your chart here */}
        <Line data={data} />
      </div>
      <span style={{ color: "rgb(236, 236, 236)", fontSize: "15px" }}>
        {selectedCard.content}
      </span>
    </motion.div>
  );
};

export default ExpandedCard;
