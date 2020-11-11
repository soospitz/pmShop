import React, { Component } from "react";
import Item from "./Item";
import "../App.css";

const Home = (props) => {
  const itemList =
      props.listOfItems && props.tagVisible === "all"
        ? props.listOfItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              changeSize={props.changeSize}
              changeQuantity={props.changeQuantity}
              addToCart={props.addToCart}
              handleSubmit={props.handleSubmit}
              clickHeart={props.clickHeart}
              status={props.status}
            />
          ))
        : props.listOfItems
            .filter((item) => item.tag === props.tagVisible)
            .map((item) => (
              <Item
                key={item.id}
                item={item}
                changeSize={props.changeSize}
                changeQuantity={props.changeQuantity}
                addToCart={props.addToCart}
                handleSubmit={props.handleSubmit}
                clickHeart={props.clickHeart}
                status={props.status}
              />
            ));


    return (
      <div>
        <div className="tag">
          <button onClick={props.handleTag} value="top" className="button">
            Top
          </button>
          <button
            onClick={props.handleTag}
            value="bottom"
            className="button"
          >
            Bottom
          </button>
          <button onClick={props.handleTag} value="acc" className="button">
            Accessories
          </button>
          <button onClick={props.handleTag} value="all" className="button">
            All
          </button>
        </div>

        <div className="cards">{itemList}</div>
      </div>
    );

}


export default Home;
