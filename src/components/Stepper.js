// // Main Code

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import "./CSS/Stepper.css";
import AwardSvg from "../assets/images/img1.png";

const fixedCheckpoints = [
  { name: "Stage 1", coordinates: { x: 10, y: 10 }, status: "ember" },
  { name: "Stage 2", coordinates: { x: 45, y: 10 }, status: "" },
  { name: "Stage 3", coordinates: { x: 85, y: 10 }, status: "" },
  { name: "Stage 4", coordinates: { x: 85, y: 42 }, status: "" },
  { name: "Stage 5", coordinates: { x: 45, y: 42 }, status: "" },
  { name: "Stage 6", coordinates: { x: 10, y: 42 }, status: "" },
  { name: "Stage 7", coordinates: { x: 10, y: 75 }, status: "" },
  { name: "Stage 8", coordinates: { x: 45, y: 75 }, status: "" },
  { name: "Settled", coordinates: { x: 84, y: 75 }, status: "" },
];

const Stepper = () => {
  const [checkpoints, setCheckpoints] = useState(fixedCheckpoints);
  const [activeStep, setActiveStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAward, setShowAward] = useState(true); // Set showAward to true initially
  const [confettiDuration, setConfettiDuration] = useState(5000);

  useEffect(() => {
    if (activeStep === checkpoints.length) {
      setShowConfetti(true);
      setShowAward(true);
      Swal.fire({
        title: "Congratulations!",
        text: "You are at the final stage!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        setShowConfetti(false);
      }, confettiDuration);
    }
  }, [activeStep, checkpoints.length, confettiDuration]);

  const handleStepClick = (step) => {
    if (step === 6) {
      const shouldContinue = window.confirm(
        "Do you wish to continue to Station 7?"
      );
      if (shouldContinue) {
        setActiveStep(step);
      } else {
        setCheckpoints((prevCheckpoints) => {
          const updatedCheckpoints = [...prevCheckpoints];
          updatedCheckpoints.splice(6, 1);
          updatedCheckpoints[6] = {
            name: "Station 7",
            coordinates: { x: 10, y: 75 },
            status: "",
          };
          return updatedCheckpoints;
        });

        // If the user clicks Cancel at station 6, set active step to 9
        setActiveStep(9);
      }
    } else {
      setActiveStep(step);
    }

    setCheckpoints((prevCheckpoints) => {
      return prevCheckpoints.map((checkpoint, index) => {
        if (index < step - 1) {
          return { ...checkpoint, status: "completed" };
        } else if (index === step - 1) {
          return { ...checkpoint, status: "active" };
        } else {
          return checkpoint;
        }
      });
    });
  };

  // const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="metro-map">
      <h3>Stages</h3>

      <style>
        {`
          .metro-map .station.active circle {
            fill: red;
          }

          .metro-map .station.completed circle {
            fill: green;
          }

          .metro-map .station circle {
            fill: none;
          }

          .metro-map .station.ember circle {
            fill: #F9A851;
          }

          .award-svg, .station9-image {
            position: absolute;
            width: 40px;
            height: 40px;
            transition: opacity 0.5s ease-in-out;
          }

          .award-hidden, .station9-hidden {
            opacity: 0;
          }
        `}
      </style>
      <svg className="line-chart">
        {checkpoints.map((checkpoint, index) => (
          <g
            key={index}
            className={`station ${checkpoint.status}`}
            onClick={() => handleStepClick(index + 1)}
          >
            {index === 8 ? (
              <>
                <image
                  className={`station9-image ${
                    showAward ? "" : "station9-hidden"
                  }`}
                  href={AwardSvg}
                  x={`${checkpoint.coordinates.x - 2}%`}
                  y={`${checkpoint.coordinates.y - 7}%`}
                />
                <circle
                  cx={`${checkpoint.coordinates.x}%`}
                  cy={`${checkpoint.coordinates.y}%`}
                  r="15"
                  stroke="#000"
                  strokeWidth="2"
                  style={{ opacity: 0 }}
                />
              </>
            ) : (
              <circle
                cx={`${checkpoint.coordinates.x}%`}
                cy={`${checkpoint.coordinates.y}%`}
                r="15"
                stroke="#000"
                strokeWidth="2"
              />
            )}
            <text
              x={`${checkpoint.coordinates.x}%`}
              y={`${checkpoint.coordinates.y + 10}%`}
              textAnchor="middle"
              fontSize="10"
              fill={checkpoint.status === "completed" ? "black" : "black"}
              className="checkp"
            >
              {checkpoint.name}
            </text>
          </g>
        ))}

        {checkpoints.length > 1 &&
          checkpoints.map((checkpoint, index) => {
            const nextCheckpoint = checkpoints[index + 1];
            if (nextCheckpoint) {
              return (
                <line
                  key={`line-${index}`}
                  className={`line ${
                    checkpoint.status === "completed" ? "completed" : ""
                  }`}
                  x1={`${checkpoint.coordinates.x}%`}
                  y1={`${checkpoint.coordinates.y}%`}
                  x2={`${nextCheckpoint.coordinates.x}%`}
                  y2={`${nextCheckpoint.coordinates.y}%`}
                />
              );
            }
            return null;
          })}
      </svg>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </div>
  );
};

export default Stepper;


