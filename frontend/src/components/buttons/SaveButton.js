import React from "react";
import "./SaveButton.css";

const SaveButton = ({ onClick }) => {
  return (
    <button className="save-button" onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
