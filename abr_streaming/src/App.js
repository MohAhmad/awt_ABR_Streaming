import React, { useEffect, useState } from "react";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import LineChart from "./components/Chart";
import { Container, InnerContainer } from "./style";
import SaveAsImageButton from "./components/SaveAsImageButton";
import SaveJSONButton from "./components/SaveJSONButton";
import UploadButton from "./components/UploadButton";
import {convertTragectoriesToObject} from './shared/helper';

const initialTragectories = "[{duration: 400, speed: 500}, {duration: 900, speed: 900},{duration: 600, speed: 400}, {duration: 1200, speed: 200}, {duration: 800, speed: 60}, {duration: 400, speed: 600}, {duration: 800, speed: 1200}]";

function App() {
  const [tragectories, setTragectories] = useState("");
  useEffect(()=>{
    const storedTragectories = localStorage.getItem("tragectories");
    if(!tragectories && storedTragectories){
      setTragectories(storedTragectories);
    }
    else{
      setTragectories(initialTragectories);
    }
    setIsSubmitted(true);
  }, []);
 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [durations, setDurations] = useState([]);
  const [speeds, setSpeeds] = useState([]);

    if (isSubmitted) {

    const stringTragectories = convertTragectoriesToObject(tragectories);
  
    let submittedDurations= [0];
    let submittedSpeeds= [];
    stringTragectories.forEach((stringTragectory, index) => {
      const startDuration = submittedDurations[index];
      const { duration, speed } = JSON.parse(stringTragectory);
      submittedDurations.push(duration + startDuration);
      submittedSpeeds.push(speed);
    });  
    
    submittedSpeeds.push(submittedSpeeds[submittedSpeeds.length - 1]);
    setDurations(submittedDurations);
    setSpeeds(submittedSpeeds);
    localStorage.setItem("tragectories", tragectories);
    setIsSubmitted(false);
    }   

  return (
    <div className="App">
      <Container container>
        <InnerContainer item xs={5} container>
          <InputField
            tragectories={tragectories}
            setTragectories={setTragectories}
            setIsSubmitted={setIsSubmitted}
            setIsValid={setIsValid}
            isValid={isValid}
          />
          <SubmitButton
            tragectories={tragectories}
            setTragectories={setTragectories}
            setIsSubmitted={setIsSubmitted}
            setIsValid={setIsValid}
          />
        </InnerContainer>
        <InnerContainer item xs={5}>
          <LineChart durations={durations} speeds={speeds} setTragectories={setTragectories} tragectories={tragectories} setIsSubmitted={setIsSubmitted}/>
        </InnerContainer>
      </Container>
      <Container container flexDirection={"row"} justifyContent={"space-evenly"} sx={{mt: "100px"}}>
      <SaveAsImageButton/>
      <UploadButton setTragectories={setTragectories} isValid={isValid} tragectories={tragectories}/>  
      <SaveJSONButton tragectories={tragectories} isValid={isValid}/>
      </Container>  
    </div>
  );  
}

export default App;
