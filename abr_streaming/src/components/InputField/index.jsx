
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputField = (props)=>{
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    setIsValid(event.target.value.startsWith('['));
    props.setTragectories(event.target.value);
  }

  const inputStyle = {
    border: isValid ? '1px solid rgba(0, 0, 0, 0.23)' : '2px solid red'
  };
    return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
    </Box>)
    }
    export default InputField;