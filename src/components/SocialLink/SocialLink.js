import React from "react";

function SocialLink(props) {
  return (
    <a href={props.route} target="_blank" rel="noopener">
      <img
        style={{ width: "40px", cursor: "pointer" }}
        src={props.img}
        alt="..."
      />
    </a>
  );
}

export default SocialLink;
