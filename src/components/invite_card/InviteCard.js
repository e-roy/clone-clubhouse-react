import React from "react";
import style from "./inviteCard.module.css";

function InviteCard(props) {
  const personIcon = props.person.name
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");
  return (
    <div className={style.inviteCardContainer}>
      <div className={style.inviteIcon}>{personIcon}</div>
      <div className={style.friend}>
        <h3>{props.person.name}</h3>
        <span>{props.person.friends} friends on Clubhouse</span>
      </div>
      <div>
        <button>Invite</button>
      </div>
    </div>
  );
}

export default InviteCard;
