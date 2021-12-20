import React from "react";
import "./BackedByCard.css";

function BackedByCard(props) {
  return (
    <div className="backed-by-card">
      <img src={props.img} alt="" />
    </div>
  );
}

export default BackedByCard;
