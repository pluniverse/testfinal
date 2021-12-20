import React from "react";
import { useTimer } from "react-timer-hook";

const TimerComp = ({ expiryTimestamp, li_color, className, card_btn, btn_action }) => {
  const { seconds, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <>
      {days === 0 && hours === 0 && seconds === 0 ? (
        <button
          type="button"
          className={`nft-btn ${className}-nft-btn text-light d-flex align-items-center justify-content-center border-0`}
          onClick={() => btn_action()}
        >
          {card_btn}
        </button>
      ) : (
        <div
          style={{
            color: li_color,
            fontWeight: "500",
            fontSize: "0.9rem",
          }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <p>
            {days} days {hours} hours {seconds} seconds
          </p>
          <p>Before Minting</p>
        </div>
      )}
    </>
  );
};

export default TimerComp;
