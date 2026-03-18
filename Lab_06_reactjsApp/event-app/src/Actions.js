import React, { useState } from "react";
import "./Actions.css";

function Actions() {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  
  const showMessage = () => {
    setMessage("Hello! You clicked the button 🎉");
  };

  
  const changeBackground = () => {
    setBgColor(bgColor === "#ffffff" ? "#222831" : "#ffffff");
  };

  const showAlert = () => {
    alert("This is an alert message!");
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1
        style={{ color: textColor }}
        onMouseOver={() => setTextColor("#ff5722")}
        onMouseOut={() => setTextColor("#000000")}
      >
        Event Handling App
      </h1>

      <div className="button-group">
        <button onClick={showMessage}>Show Message</button>
        <button onClick={changeBackground}>Change Background</button>
        <button onClick={showAlert}>Show Alert</button>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Actions;