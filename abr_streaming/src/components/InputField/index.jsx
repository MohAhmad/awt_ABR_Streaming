
import React, { useState } from "react";
import {Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {FormulaCheck} from './helper'


const InputField = (props)=>{
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    props.setTragectories(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const status = FormulaCheck(props.tragectories, props.setTragectories);
    if(status){
      setIsValid(true)
    }else{
      setIsValid(false);
    };
    console.log("Status: ", status, "  Valid: ", isValid);
    if(status) props.setIsSubmited(true);
    console.log( " Is Valid after: ", isValid);
    //showShart(props.tragectories)        
}

  const inputStyle = {
    border: isValid ? '1px solid rgba(0, 0, 0, 0.23)' : '2px solid red'
  };
    return(
      <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="filled-multiline-flexible"
          label={props.tragectories}
          multiline
          minRows={10}
          maxRows={20}
          variant='filled'
          onChange={handleChange}
          InputProps={{
            style: inputStyle
          }}
          color='primary'
        />
    </Box>
    <Button
    variant="contained"
    size="large"
    color="success"
    style={{textTransform: 'initial'}}
    onClick={handleSubmit}
    >Enque Job</Button>
    </>)
    }
    export default InputField;