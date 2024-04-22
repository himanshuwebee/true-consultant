import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const AreaGraph = () => {
  useEffect(() => {
    const chart = new Chart("area-graph", {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Area Graph Data",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(0,161,93,0.03)",
          borderColor: "rgba(0,161,93,1)",
          lineTension: 1.3, 
          pointRadius: 0,
        }]
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          }
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
     
    });

    return () => chart.destroy();
  }, []);

  return <canvas id="area-graph" width="150" height="80"/>;
};

export default AreaGraph;
