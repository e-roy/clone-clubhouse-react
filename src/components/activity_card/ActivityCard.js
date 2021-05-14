import React from "react";
import style from "./activityCard.module.css";

function ActivityCard(props) {
  return (
    <div className={style.activityCardContainer}>
      <div className="container">
        <div className="row">
          <div className="col-1 px-0">
            <img src={props.card.image} alt="" />
          </div>

          <div className="col-9 px-2">
            <span className={style.cardTitle}>{props.card.title}</span>{" "}
            <span className={style.cardDescription}>
              {props.card.description}
            </span>
          </div>
          <div className="col-2 px-0 card-time">
            <span className={style.cardTime}>{props.card.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
