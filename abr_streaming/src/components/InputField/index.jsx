import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputField = (props)=>{
    function handleChange(event){
        props.setTragectories(event.target.value);
    }
   
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
          style={{width: '100%', minHeight: '100% !important', borderRadius: '20px', border: 'none'}}
          color='primary'
          onChange={handleChange}
        />
    </Box>)
    }
    export default InputField;