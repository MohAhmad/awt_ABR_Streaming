import React from "react";

const UploadButton = ({setTragectories}) => {

  const handleFileChange = async (e) => {
    if (e.target.files) {
        e.preventDefault();
        const file = e.target.files.item(0)
        const text = await file.text();
        setTragectories(text);
    }
  };

  return (
    <form>
    <input type="file" onChange={handleFileChange} />
  </form>
  );
};
export default UploadButton;