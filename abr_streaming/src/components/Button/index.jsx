import React from "react";
import Button from '@mui/material/Button';


const CustomButton = ()=>{
    function handleSubmit(event){
        event.preventDefault();
        //showShart(props.tragectories)        
    }
    return(
        <Button
          variant="contained"
          size="large"
          color="success"
          style={{textTransform: 'initial'}}
          onClick= {handleSubmit}
        >
            Enque Job
        </Button>
        );

    }
    export default CustomButton;