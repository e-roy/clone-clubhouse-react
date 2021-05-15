import React from "react";
import style from "./upcoming_card.module.css";

function UpcomingCard(props) {
  return (
    <div>
      <div>
        {props.upcoming.map((item) => (
          <div key={item.id} className={style.upcomingCardContainer}>
            <div className={style.upcomingCardTop}>
              <div>
                <p className={style.upcomingTime}>{item.time}</p>
                <p className={style.upcomingTitle}>{item.title}</p>
                <p className={style.upcomingClub}>{item.club}</p>
              </div>
              <div className={style.upcomingBell}>
                <img src="/images/bell.png" alt="" />
              </div>
            </div>
            <div className={style.upcomingCardIcons}>
              {item.images.map((icon, index) => (
                <div key={index}>
                  <img src={icon} alt="" />
                </div>
              ))}
            </div>
            <div className={style.upcomingCardBottom}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingCard;
