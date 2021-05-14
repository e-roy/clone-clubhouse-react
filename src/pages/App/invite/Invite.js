import React, { useState } from "react";
import style from "./invite.module.css";
import SubHeader from "../../../components/headers/SubHeader";
import InviteList from "../../../components/invite_card/InviteList";
import peopleData from "../../../data/invite.json";

function Invite() {
  const [peopleSearch, setPeopleSearch] = useState("");
  const filteredPeople = peopleData.filter((peopleData) =>
    peopleData.name.toLowerCase().includes(peopleSearch.toLowerCase())
  );

  return (
    <div>
      <SubHeader pageTitle="YOU HAVE 1 INVITE" />
      <div className={style.invite_container}>
        <div className={style.headlineText}>
          <p style={{ marginBottom: "0" }}>
            Who's a great potential addition to Clubhouse?
          </p>
          <p style={{ marginBottom: "0" }}>
            You'll get credit for the invite on their profile!
          </p>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search of Invite a phone #"
            onChange={(e) => setPeopleSearch(e.target.value)}
          ></input>
          <div>
            <InviteList people={filteredPeople} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
