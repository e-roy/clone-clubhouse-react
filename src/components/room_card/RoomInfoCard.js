import React from "react";
import style from "./roomCard.module.css";
import { BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import Emoji from "react-apple-emojis";

function RoomInfoCard(props) {
  return (
    <div className={style.dailyCard}>
      {props.cards.map((item) => (
        <div key={item.id}>
          <div className={style.roomCardContainer}>
            <h6>{item.title}</h6>
            <h2>{item.sub_title}</h2>
            <div className={style.roomMembers}>
              <div className={style.roomCardAvatar}>
                <img src="/images/user-img.jpg" alt=""></img>
                <img src="/images/user-img2.jpg" alt=""></img>
              </div>
              <div>
                {item.members.map((person, index) => (
                  <div key={index}>
                    <p>
                      {person.first_name} {person.last_name}{" "}
                      <Emoji name="speech-balloon" width={16} />
                    </p>
                  </div>
                ))}
                <div className={style.roomTotals}>
                  <span className="">1.8k</span>
                  <BsFillPersonFill />
                  <span className=""> /</span>
                  <span className="">5</span>
                  <BsChatDotsFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomInfoCard;
