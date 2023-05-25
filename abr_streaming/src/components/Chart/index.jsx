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
    grid: {
      display: true,
      drawOnChartArea: true,
      drawTicks: true,
    },
  },
  x: {
    beginAtZero: true,
    min: 0,
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


/*
  */


// Define the data for the chart

/*
var chartDiv = null;
var ctx;

if (document) {
  chartDiv = document.getElementById("myChart");
  ctx = chartDiv.getContext("2d");
  initialdata.labels = submitedLabels;
  initialdata.datasets.data = submitedData;
  myChart = new Chart(ctx, {
    type: "line", // Type of chart (e.g., bar, line, pie)
    data: initialdata, // Data object we defined above
    segment: {
      borderColor: (ctx) =>
        skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "rgb(192,75,75)"),
      borderDash: (ctx) => skipped(ctx, [6, 6]),
    },
    spanGaps: true,
    options: genericOptions,
  });
}
return () => {
  myChart.destroy();
};  */


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
      <div style={{minHeight: "300px"}}>
        <Line data={initialdata} options={genericOptions} width={500} height={300}/>
      </div>
    );
  };
  
  export default LineChart;