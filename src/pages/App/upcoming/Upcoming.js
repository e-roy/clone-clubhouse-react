import React from "react";
import style from "./upcoming.module.css";
import SubHeader from "../../../components/headers/SubHeader";
import UpcomingCard from "../../../components/upcoming_card/UpcomingCard";
import upcomingData from "../../../data/upcomingCard.json";

function Calendar() {
  return (
    <div>
      <SubHeader pageTitle="UPCOMING FOR YOU" />
      <div className={style.todayBanner}>TODAY</div>
      <div className={style.upcoming_container}>
        <UpcomingCard upcoming={upcomingData} />
      </div>
    </div>
  );
}

export default Calendar;
