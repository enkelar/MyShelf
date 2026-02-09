import React from "react";

const SaveButton = ({ onClick }) => {
  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "rgb(30, 21, 70)",
    margin: "8px",
    border: "none",
    borderRadius: "4px",
    color: "#ffffff",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
