import React from "react";
import style from "./activity.module.css";
import SubHeader from "../../../components/headers/SubHeader";
import data from "../../../data/activity.json";

function Notifications() {
  return (
    <div>
      <SubHeader pageTitle="ACTIVITY" />
      <div className={style.activity_container}>Activity</div>
    </div>
  );
}

export default Notifications;
