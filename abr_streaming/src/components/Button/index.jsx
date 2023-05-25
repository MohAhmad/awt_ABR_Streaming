import React from "react";
import Button from "@mui/material/Button";
import { FormulaCheck } from "./helper";

const CustomButton = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const status = FormulaCheck(props.tragectories, props.setTragectories);
    if (status) {
      props.setIsValid(true);
    } else {
      props.setIsValid(false);
    }
    console.log("Status: ", status, "  Valid: ");
    if (status) props.setIsSubmitted(true);
    console.log(" Is Valid after: ");
  }

  return (
    <Button
      variant="contained"
      size="large"
      color="success"
      style={{ textTransform: "initial" }}
      onClick={handleSubmit}
    >
      Enque Job
    </Button>
  );
};
export default CustomButton;
