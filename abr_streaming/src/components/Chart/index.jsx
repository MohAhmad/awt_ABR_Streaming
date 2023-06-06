import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const maxSpeed = 1000;

const genericOptions = {
fill: true,
responsive: true,
interaction: {
  intersect: false,
},
radius: 0,
scales: {
  y: {
    beginAtZero: true,
    max: maxSpeed,
    title: {
      display: true,
      text: "Bandwidth in kbit/s",
    },
    grid: {
      display: true,
      drawOnChartArea: true,
      drawTicks: true,
    },
  },
  x: {
    beginAtZero: true,
    min: 0,
    title: {
      display: true,
      text: "Time",
    },
    grid: {
      display: true,
      drawOnChartArea: true,
    },
  },
},
plugins: {
  title: {
    display: true,
    text: "Trajectory",
  },
  legend: {
    position: "bottom",
  },
},
};



const LineChart = (props) => {
    var initialdata = {
        labels: props.durations, //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //submitedLabels, 
        datasets: [
          {
            label: "Trajectory",
            data: props.speeds, // [12, 19, 3, 5, 2, 3], //submitedData
            backgroundColor: "lightblue", // rgba(255, 99, 132, 0.2)', // Background color of the bars
            borderColor: "#00008B", // rgba(255, 99, 132, 1)', // Border color of the bars
            borderWidth: 1, // Border width of the bars
            stepped: true,
          },
        ],
        };
    return (
      <div style={{minHeight: "300px", backGround:'white'}}>
        <Line id="lineChart" data={initialdata} options={genericOptions} width={500} height={300}/>
      </div>
    );
  };
  
  export default LineChart;