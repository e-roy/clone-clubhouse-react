import React from "react";
import InviteCard from "./InviteCard";

function InviteList(props) {
  return (
    <div>
      {props.people.map((item) => (
        <div key={item.id}>
          <InviteCard person={item} />
        </div>
      ))}
    </div>
  );
}

export default InviteList;
