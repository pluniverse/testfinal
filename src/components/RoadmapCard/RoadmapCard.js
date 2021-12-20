import React from "react";
import "./RoadmapCard.css";
import roadMapTextImg from "assets/images/roadmap-text-img.png";
import roadmapTick from "assets/images/roadmapTick.png";
import roadmapMark from "assets/images/roadmap-mark.png";

function RoadmapCard(props) {
  return (
    <div className="roadmap-card">
      <img
        className="roadmap-card-title-img"
        src={props.tickImg ? roadmapTick : roadMapTextImg}
        alt="..."
      />

      <div
        className={`roadmap-card-content-wrapper ${
          props.to === "left" ? "left" : "right"
        }`}
      >
        <div className="roadmap-card-content-left">
          <img
            src={roadmapMark}
            className="roadmap-card-content-left-img"
            alt=""
          />
        </div>
        <div className="roadmap-card-content-right">
          <p className="fs-28px green lh-1 mb-5px">{props.title}</p>
          {props.pointes?.map((point, index) => (
            <p key={index} className="fs-18px green lh-1">
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
