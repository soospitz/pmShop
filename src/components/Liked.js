import React, { Component } from "react";
import { prices } from "../constants/Prices";
import "../App.css";

const Liked = (props) => {
  const likedList = props.heart.map((item) => {
    return (
      <div className="column" id="items-liked">
        <div className="item-liked">
          <div className="title">
            <h3>{item.name}</h3>
            <i class={"fas fa-heart fa-lg"} id="heart"></i>
          </div>
          <p>${prices[item.id]}</p>
          <img src={item.img} style={{ height: 150 }} />
          <br />
          <div className="itemBottom"></div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>
        Liked <i class="fas fa-heart fa-sm" id="heart"></i>
      </h1>
      <div>{likedList}</div>
    </div>
  );
};

export default Liked;
