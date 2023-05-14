import React, {useState, useEffect} from 'react';
import './App.css';
import Chart from 'chart.js/auto'
import InputField from './components/InputField'; 
import CustomButton from './components/Button'; 
import {Container, InnerContainer} from './style'

function App() {
  const [tragectories, setTragectories] = useState('Trajectory');
  const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
  const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
  const genericOptions = {
  fill: true,
  interaction: {
    intersect: false
  },
  radius: 0,
};

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
    var chartDiv = null;
    var ctx ;
    useEffect(()=>{
    let myChart;
    if(document){
    chartDiv = document.getElementById('myChart'); 
    ctx = chartDiv.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'line', // Type of chart (e.g., bar, line, pie)
      data: data, // Data object we defined above
      segment: {
        borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
        borderDash: ctx => skipped(ctx, [6, 6]),
      },
      spanGaps: true,
      options: genericOptions,
    })

}
return ()=>{
  myChart.destroy();
}

}, [])




  return (
    <div className="App">
      <Container container>
      <InnerContainer item xs={5}>
        <InputField tragectories={tragectories} setTragectories={setTragectories} /> 
        <CustomButton tragectories={tragectories} setTragectories={setTragectories}/>  
      </InnerContainer>
      <InnerContainer item xs={5}>
      <InnerContainer item><canvas id="myChart"/></InnerContainer> 
      </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
