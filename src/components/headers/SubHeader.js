import React from "react";
import style from "./subheader.module.css";
import { Link } from "react-router-dom";

function SubHeader(props) {
  return (
    <div className={style.header}>
      <Link to="/home">
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h3>{props.pageTitle}</h3>
      <div className={style.nav_items}>
        {/* <Link to="/invite">
          <img src="/images/invite.png" alt="" />
        </Link> */}
      </div>
    </div>
  );
}

export default SubHeader;
