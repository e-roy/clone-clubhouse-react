import React from "react";
import style from "./upcoming.module.css";
import SubHeader from "../../../components/headers/SubHeader";
import data from "../../../data/upcomingCard.json";

function Calendar() {
  return (
    <div>
      <SubHeader pageTitle="UPCOMING FOR YOU" />
      <div className={style.upcoming_container}>Upcoming</div>
    </div>
  );
}

export default Calendar;
