import React from "react";
import style from "./activity.module.css";
import SubHeader from "../../../components/headers/SubHeader";
import ActivityCard from "../../../components/activity_card/ActivityCard";
import data from "../../../data/activity.json";

function Notifications() {
  return (
    <div>
      <SubHeader pageTitle="ACTIVITY" />
      <div className={style.activity_container}>
        {data.map((item) => (
          <div key={item.id}>
            <ActivityCard card={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
