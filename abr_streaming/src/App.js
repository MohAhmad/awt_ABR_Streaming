import React, {useState, useEffect} from 'react';
import './App.css';
import Chart from 'chart.js/auto'
import InputField from './components/InputField'; 
import {Container, InnerContainer} from './style'

function App() {
  const [tragectories, setTragectories] = useState('Trajectory');
  const [isSubmited, setIsSubmited] = useState(false);
  const [submitedLabels, setSubmitedLabels] = useState([]);
  const [submitedData, setSubmitedData] = useState([]);
  const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
  const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
  const genericOptions = {
  fill: true,
  interaction: {
    intersect: false
  },
  radius: 0,
};

if(isSubmited){ 
  const arrayTragectories = Object.values(tragectories);
  const initialDurations = arrayTragectories.map((element) => {
    element = JSON.parse(element);
    return element.duration;

  })
  let durations = arrayTragectories.map((element) => {
    element = JSON.parse(element);
    return element.duration;

  })

  for (let i = 1; i < durations.length; i++) { 
    durations[i] = durations[i] + durations[i-1];
  } 
  const speeds = arrayTragectories.map((element) => {
    element = JSON.parse(element);
    return element.speed;

  })
  setSubmitedLabels(durations);
  setSubmitedData(speeds);
  setIsSubmited(false);
}
// Define the data for the chart
var initialdata = {
  labels: submitedLabels,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'Trajectory',
    data: submitedData,//[12, 19, 3, 5, 2, 3],
    backgroundColor: 'lightblue', // rgba(255, 99, 132, 0.2)', // Background color of the bars
    borderColor: 'lightblue', // rgba(255, 99, 132, 1)', // Border color of the bars
    borderWidth: 1, // Border width of the bars
    stepped: true,
  }]
};
    var chartDiv = null;
    var ctx ;
    useEffect(()=>{ 
    let myChart;
    if(document){
    chartDiv = document.getElementById('myChart'); 
    ctx = chartDiv.getContext('2d');
    initialdata.labels= submitedLabels;
    initialdata.datasets.data=submitedData;
    myChart = new Chart(ctx, { 
      type: 'line', // Type of chart (e.g., bar, line, pie)
      data: initialdata, // Data object we defined above
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

}, [submitedData, submitedLabels])




  return (
    <div className="App">
      <Container container>
      <InnerContainer item xs={5}>
        <InputField tragectories={tragectories} setTragectories={setTragectories} setIsSubmited={setIsSubmited}/> 
      </InnerContainer>
      <InnerContainer item xs={5}>
      <InnerContainer item><canvas id="myChart"/></InnerContainer> 
      </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
