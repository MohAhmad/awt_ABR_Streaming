import React from "react";
import Button from '@mui/material/Button';


const CustomButton = (props)=>{
    function handleSubmit(event){
        event.preventDefault();
        FormulaCheck(props.tragectories);
        //showShart(props.tragectories)        
    }

    const FormulaCheck = (props) => {

        const propsWithoutBrace = props.replace(/[\[\]]/g, ''); //to delete []            console.log(propsWithoutBrace)
        const propsWithQuotationmarks = propsWithoutBrace.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":'); // to put "" for the words
        const regex = /\{.*?\}/g;
        const matches = propsWithQuotationmarks.match(regex); // to divide the array into chunks of the right formale
        matches.map((element) => {
        try {  
            const { duration, speed } = JSON.parse(element);
        // Überprüfe, ob duration und speed Zahlen sind
        if (typeof duration === "number" && typeof speed === "number") {
            // Formel ist gültig
            console.log("Formel ist gültig");
        } else {
            // Formel ist ungültig
            console.log("Formel ist ungültig");
        }
        } catch (error) {
        // Fehler beim Parsen der Formel
        console.log("Fehler beim Parsen der Formel");      
    };})
};

    return(
        <Button
          variant="contained"
          size="large"
          color="success"
          style={{textTransform: 'initial'}}
          onClick={handleSubmit}
          >Enque Job</Button>
    );
}
    export default CustomButton;