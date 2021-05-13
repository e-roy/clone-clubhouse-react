import React from "react";
import style from "./invite.module.css";
import SubHeader from "../../../components/headers/SubHeader";

function Invite() {
  return (
    <div>
      <SubHeader pageTitle="YOU HAVE 1 INVITE" />
      <div className={style.invite_container}>friends invite</div>
    </div>
  );
}

export default Invite;
