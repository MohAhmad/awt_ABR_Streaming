import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";


const InputField = ({tragectories, setTragectories, setIsSubmitted, setIsValid, isValid}) => {
  const handleChange = (event) => {
    setTragectories(event.target.value);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileText = event.target?.result;
      if(tragectories && isValid){
        setTragectories(tragectories.concat(fileText));
      }
      else{
        setTragectories(fileText);
      }
    };

    reader.readAsText(file);

  };


  const inputStyle = {
    border: isValid ? "1px solid rgba(0, 0, 0, 0.23)" : "2px solid red",
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <TextField
        id="filled-multiline-flexible"
        label={tragectories}
        multiline
        minRows={10}
        maxRows={20}
        variant="filled"
        onChange={handleChange}
        value={tragectories}
        InputProps={{
          style: inputStyle,
        }}
        color="primary"
      />
    </Box>
  );
};
export default InputField;
