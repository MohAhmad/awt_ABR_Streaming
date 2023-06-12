import React from "react";
import { Chart, registerables} from "chart.js";
import { Line } from "react-chartjs-2";
import 'chartjs-plugin-dragdata';

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
      max: 1000,
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
    dragData: {
      dragData: true,
      dragX: true,
      dragY: true,
      round: 1,
      showTooltip: true,
      onDragStart: function(e, element) {
        console.log("Drag");
        // ...
      },
      onDrag: function(e, datasetIndex, index, value) {
        console.log("Drag");
        // ...
      },
      onDragEnd: function(e, datasetIndex, index, value) {
        console.log("DragEnd!");
        // ...
      },
    },
  },
  }

const LineChart = ({durations, speeds}) => {
  Chart.register(...registerables);
    const initialdata = {
        labels: durations,  //submitedLabels, 
        datasets: [
          {
            label: "Trajectory",
            data: speeds, //submitedData
            backgroundColor: "lightblue", // Background color of the bars
            borderColor: "#00008B",  // Border color of the bars
            borderWidth: 1, // Border width of the bars
            stepped: true,
          },
        ],
        };

    return (
      <div style={{minHeight: "300px", background:'white'}}>
        <Line id="lineChart" data={initialdata} options={genericOptions} width={500} height={300} />
      </div>
    );
  };
  
  export default LineChart;