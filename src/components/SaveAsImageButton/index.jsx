import React from "react";
import Button from "@mui/material/Button";

const SaveAsImageButton = () => {
    function saveChart() {
        var canvas = document.getElementById('lineChart');
        var tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempCtx = tempCanvas.getContext('2d');
        tempCtx.fillStyle = 'white';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        // Draw the original chart onto the new canvas
        tempCtx.drawImage(canvas, 0, 0);
        var image = tempCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = 'chart.png';
        link.href = image;
        link.click();
    }

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      style={{ textTransform: "initial", marginTop: '20px'}}
      onClick={saveChart}
    >
      Save Chart as png
    </Button>
  );
};
export default SaveAsImageButton;
