import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import CustomButton from "./components/Button";
import LineChart from "./components/Chart";
import { Container, InnerContainer } from "./style";
import SaveChartButton from "./components/SaveButton";
import UploadButton from "./components/UploadButton";


function App() {
  const [tragectories, setTragectories] = useState("Trajectory");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [durations, setDurations] = useState();
  const [speeds, setSpeeds] = useState();
  const [isValid, setIsValid] = useState(true);


    if (isSubmitted) {
    const arrayTragectories = Object.values(tragectories);
    let submittedDurations = arrayTragectories.map((element) => {
      element = JSON.parse(element);
      return element.duration;
    });
    submittedDurations.unshift(0);
    
    for (let i = 1; i < submittedDurations.length; i++) {
      submittedDurations[i] = submittedDurations[i] + submittedDurations[i - 1];
    }
    let submittedSpeeds = arrayTragectories.map((element) => {
      element = JSON.parse(element);
      return element.speed;
    });
    submittedSpeeds.push(submittedSpeeds[submittedSpeeds.length - 1]);
    setDurations(submittedDurations);
    setSpeeds(submittedSpeeds);
    setIsSubmitted(false);
    } 

  return (
    <div className="App">
      <Container container>
        <InnerContainer item xs={5}>
          <InputField
            tragectories={tragectories}
            setTragectories={setTragectories}
            setIsSubmitted={setIsSubmitted}
            setIsValid={setIsValid}
            isValid={isValid}
          />
          <CustomButton
            tragectories={tragectories}
            setTragectories={setTragectories}
            setIsSubmitted={setIsSubmitted}
            setIsValid={setIsValid}
          />
        </InnerContainer>
        <InnerContainer item xs={5}>
          <LineChart durations={durations} speeds={speeds}/>
        </InnerContainer>
      </Container>
      <Container container flexDirection={"row"}>
      <SaveChartButton/>
      <UploadButton setTragectories={setTragectories}/>  
      </Container>  
    </div>
  );
}

export default App;
