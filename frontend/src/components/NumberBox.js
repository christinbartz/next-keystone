import React from "react";

function NumberBox({ number, text }) {
  return (
    <div className="box">
      <div className="content">
        <h2>{number}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default NumberBox;
