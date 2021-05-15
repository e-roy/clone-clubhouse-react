import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header}>
      <Link to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>
      <div className={style.nav_items}>
        <Link to="/invite">
          <img src="/images/invite.png" alt="" />
        </Link>
        <Link to="/upcoming">
          <img src="/images/calendar.png" alt="" />
        </Link>
        <Link to="/activity">
          <img src="/images/bell.png" alt="" />
        </Link>
        <Link to="/profile">
          <img src="/images/b1.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
