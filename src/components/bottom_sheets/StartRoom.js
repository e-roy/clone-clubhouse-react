import React, { useState } from "react";
import style from "./bottomSheet.module.css";
import Emoji from "react-apple-emojis";

function StartRoom(props) {
  const [room, setRoom] = useState("open");
  return (
    <div>
      <div className={style.switch_Line}></div>
      <div className="text-right">
        <button className={style.addTopicBtn}>+ Add a topic</button>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room === "open" ? style.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <Emoji name="globe-showing-americas" width={48} />
          </div>
          Open
        </button>
        <button
          className={room === "social" ? style.active : ""}
          onClick={() => setRoom("social")}
        >
          {" "}
          <div>
            <Emoji name="globe-showing-americas" width={48} />
          </div>
          Social
        </button>
        <button
          className={room === "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}
        >
          {" "}
          <div>
            <Emoji name="locked" width={48} />
          </div>
          Closed
        </button>
      </div>
      <p>
        Start a room{" "}
        <span>
          {room === "closed"
            ? "for people I choose"
            : room === "social"
            ? "with people I follow"
            : "open to everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
          <span>
            <Emoji name="party-popper" width={18} />
          </span>
          Let's go
        </button>
      </div>
    </div>
  );
}

export default StartRoom;
