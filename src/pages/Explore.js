import React from "react";
import style from "../style/explore.module.css";
import { Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import SubHeader from "../components/SubHeader";
import Emoji from "react-apple-emojis";

function Explore() {
  const { people, conversation } = data;
  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="EXPLORE" />
        <Input
          style={{
            backgroundColor: "var(--bgSecondaryColor)",
            borderRadius: "0.8em",
            padding: "0.3em 1em",
            border: "none",
            boxShadow: "none",
          }}
          color="#000000"
          size="large"
          placeholder="Find People and Clubs"
          prefix={<img src="images/search.png" width="15px" alt="" />}
        ></Input>
      </div>
      <h6 className="mx-2" style={{ fontWeight: 600 }}>
        PEOPLE TO FOLLOW
      </h6>
      <div className={style.peopleContainer}>
        {people.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="" />
              <div className="ml-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show more people <DownOutlined />
        </button>
      </div>
      <h6 className="pt-3 mx-2" style={{ fontWeight: 600 }}>
        FIND CONVERSATIONS ABOUT...
      </h6>
      <div className="row mx-0 py-2">
        {conversation.map((item, index) => (
          <div key={index} className="col-6 px-2 mb-3">
            <div className={style.conversationCard}>
              <h6>
                <Emoji name={item.emoji} width={16} />
                <span>{item.title}</span>
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
