import React from "react";
import style from "./profile.module.css";
import SubHeader from "../../../components/headers/SubHeader";
// import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

function Profile() {
  return (
    <div>
      <div className={style.profileContainer}>
        <SubHeader pageTitle="" />
        <img
          src="/images/user-img.jpg"
          alt=""
          className={style.profile_image}
        />
        <h4>This Dude</h4>
        <p>@thisdude</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="" />
          <div>
            <p>Joined 14-July-2020</p>
            <p>
              Nominated by <span>Another Guy</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </div>
  );
}

export default Profile;
