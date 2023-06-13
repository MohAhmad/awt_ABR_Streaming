import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-dragdata";
import { Chart, registerables} from "chart.js";
import {convertTragectoriesToObject} from '../../shared/helper';

function updateSpeeds(tragectories, index, value){
  if(!tragectories) tragectories= localStorage.getItem("tragectories");
  let newTragectories = convertTragectoriesToObject(tragectories);
  const objectToBeUpdated = JSON.parse(newTragectories[index]);
  newTragectories[index] = JSON.stringify({...objectToBeUpdated, speed: value})
  return newTragectories.toString();
}

const LineChart = ({ durations, speeds, setTragectories, tragectories, setIsSubmitted}) => {
  Chart.register(require("chartjs-plugin-dragdata"));
  Chart.register(...registerables);
  const lineChartRef = useRef(null);

  const initialData = {
    labels: durations,
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
        max: Math.max(speeds),
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
        round: 1,
          showTooltip: true,
         onDragEnd: function(e, datasetIndex, index, value) {
            const updatedTragectories = updateSpeeds(tragectories, index, value);
            setTragectories(updatedTragectories);
            // localStorage.setItem("tragectories", updatedTragectories);
            setIsSubmitted(true);
            // localStorage.setItem("tragectories", updatedTragectories);
          },
      },
    },
  };  
 
  return (
    <div style={{ minHeight: "300px", background: "white" }}>
      <Line ref={lineChartRef} data={initialData} options={genericOptions} width={500} height={300} />
    </div>
  );
};

export default LineChart;
