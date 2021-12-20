import React from "react";
import "./Card.css";
 
import textImg from "assets/images/text-img.png";

function Card(props) {
  return (
    <div className="special-features-card">
      <div className="special-features-card-left">
        <img className={props.className} src={props.image} alt="" />
      </div>
      <div className="special-features-card-right">
        <p className="fs-30px green lh-1 waghu-family mb-8px">
          {props.title} <br />
          <img src={textImg} alt="" />
        </p>
        <p className="fs-22px white weight-8">{props.subtitle}</p>
      </div>
    </div>
  );
}


export default Card;
