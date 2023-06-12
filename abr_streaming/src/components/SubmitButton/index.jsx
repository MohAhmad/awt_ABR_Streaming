import React from "react";
import Button from "@mui/material/Button";
import { FormulaCheck } from "../../shared/helper";

const SubmitButton = ({tragectories, setTragectories, setIsSubmitted, setIsValid}) => {
  function handleSubmit() {
    const status = FormulaCheck(tragectories, setTragectories);
    if (status) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (status) setIsSubmitted(true);
  }

  return (
    <Button
      variant="contained"
      size="large"
      color="success"
      style={{ textTransform: "initial", maxWidth: "150px", margin: "auto"}}
      onClick={handleSubmit}
    >
      Enque Job
    </Button>
  );
};
export default SubmitButton;
