import React from "react";
import Button from "@mui/material/Button";

const SaveJSONButton = ({isValid, tragectories}) => {
    function saveAsJSON() {
        const link = document.createElement('a');
        const blob = new Blob([tragectories], {type: "application/json"});
        var url  = URL.createObjectURL(blob);
        link.download = 'chart.json';
        link.href = url;
        link.textContent="Download chart.json"
        link.click();
    }

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      style={{ textTransform: "initial", marginTop: '20px'}}
      onClick={saveAsJSON}
      disabled={!tragectories || !isValid}
    >
      Save Chart as JSON
    </Button>
  );
};
export default SaveJSONButton;
