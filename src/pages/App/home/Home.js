import React, { useState } from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";

import Header from "../../../components/headers/Header";
import RoomInfoCard from "../../../components/room_card/RoomInfoCard";
import BottomSheet from "../../../components/bottom_sheets/BottomSheet";

import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import Emoji from "react-apple-emojis";

import newRoomData from "../../../data/newRoom.json";
import roomCardData from "../../../data/roomCard.json";
import roomCardExploreData from "../../../data/roomCardExplore.json";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);
  const [exploreRoomsVisiblity, setExploreRooms] = useState(false);

  return (
    <div>
      {loaderVisibility ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/loader.gif" alt="" />
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={style.home_container}>
        <RoomInfoCard cards={roomCardData} />
        {exploreRoomsVisiblity ? (
          <div>
            <RoomInfoCard cards={roomCardExploreData} />
            <div className={style.seeMore}>
              <p style={{ marginBottom: "0" }}>
                To see more rooms,
                <Link to="/explore">
                  <span className={style.followMore}> follow more people.</span>
                </Link>
              </p>
              <p>Or start a room of your own :)</p>
            </div>
          </div>
        ) : (
          <div className={style.exploreBtn}>
            <button onClick={() => setExploreRooms(true)}>
              <Emoji name="globe-showing-europe-africa" width={16} />
              <span>Explore</span>
            </button>
          </div>
        )}
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mx-1" />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={roomCardData.find((item) => item.id === cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      />
      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemsVisible={(item) => setItemsVisible(item)}
      />
    </div>
  );
}

export default Home;
