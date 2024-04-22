import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineGraph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Line Graph Data",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#00A15D",
            borderWidth: 3,
            lineTension: 0.3, 
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.parsed.y;
            }
          }
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}  width="150" height="50"/>;
};

export default LineGraph;
