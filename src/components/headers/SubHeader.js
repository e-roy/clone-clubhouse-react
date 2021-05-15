import React from "react";
import style from "./subheader.module.css";
import { Link } from "react-router-dom";

import { BsUpload } from "react-icons/bs";

import { AiOutlineSetting } from "react-icons/ai";

function SubHeader(props) {
  return (
    <div className={style.header}>
      <Link to="/home">
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h3>{props.pageTitle}</h3>
      <div className={style.nav_items}>
        {props.pageTitle === "UPCOMING FOR YOU" ? (
          <Link to="/home">
            <img src="/images/add-calendar.png" alt="" />
          </Link>
        ) : (
          ""
        )}
        {props.pageTitle === "" ? (
          <div className={style.actionBtn}>
            <Link to="/home">
              <BsUpload />
            </Link>
            <Link to="/home">
              <AiOutlineSetting />
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SubHeader;
