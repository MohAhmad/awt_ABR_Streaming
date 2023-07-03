import React from "react";

const UploadButton = ({setTragectories, isValid, tragectories}) => {

  const handleFileChange = async (e) => {
    if (e.target.files) {
        e.preventDefault();
        const file = e.target.files.item(0)
        if(!file) return;
        const fileText = await file.text();
        if(tragectories && isValid){
          setTragectories(tragectories.concat(fileText));
        }
        else{
          setTragectories(fileText);
        }
    }
  };

  return (
    <form>
    <input type="file" onChange={handleFileChange} />
  </form>
  );
};
export default UploadButton;