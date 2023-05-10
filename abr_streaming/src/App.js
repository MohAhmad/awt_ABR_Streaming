import React, {useState} from 'react';
import './App.css';
import Chart from './components/Chart';
import InputField from './components/InputField'; 
import CustomButton from './components/Button'; 
import {Container, InnerContainer} from './style'


function App() {
  const [tragectories, setTragectories] = useState('ksl');
  var ctx = document.getElementById('myChart'); //.getContext('2d');

// Define the data for the chart
var data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Background color of the bars
    borderColor: 'rgba(255, 99, 132, 1)', // Border color of the bars
    borderWidth: 1 // Border width of the bars
  }]
};

// Create the chart
var CustomChart = new Chart(ctx, {
  type: 'bar', // Type of chart (e.g., bar, line, pie)
  data: data, // Data object we defined above
  options: {
    responsive: true, // Make the chart responsive
    scales: {
      y: {
        beginAtZero: true // Start the y-axis at zero
      }
    }
  }
});

  return (
    <div className="App">
      <Container container>
      <InnerContainer xs={6}>
        <InputField tragectories={tragectories} setTragectories={setTragectories} /> 
        <CustomButton/>  
      </InnerContainer>
      <InnerContainer xs={6}>
      <div style="width: 800px;"><canvas id="myChart"></canvas></div>
        <CustomChart/>  
      </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
