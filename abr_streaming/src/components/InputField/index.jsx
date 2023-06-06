import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  const handleChange = (event) => {
    props.setTragectories(event.target.value);
  };

  const inputStyle = {
    border: props.isValid ? "1px solid rgba(0, 0, 0, 0.23)" : "2px solid red",
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
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
        variant="filled"
        onChange={handleChange}
        value={props.tragectories}
        InputProps={{
          style: inputStyle,
        }}
        color="primary"
      />
    </Box>
  );
};
export default InputField;
