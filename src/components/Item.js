import React from "react";
import "../App.css";
import { prices } from "../constants/Prices";

const Item = (props) => {
  return (
    <div key={props.key} className="column">
      <div className="item">
        <div className="title">
          <h3>{props.item.name}</h3>
          <i
            onClick={() => props.clickHeart(props.item.id)}
            class={
              props.item.heart && props.status === true
                ? "fas fa-heart fa-lg"
                : "far fa-heart fa-lg"
            }
            id="heart"
          ></i>
        </div>
        <p>${prices[props.item.id]}</p>
        <img src={props.item.img} style={{ height: 150 }} />
        <br />
        <div className="itemBottom">
          <div className="selections">
            <div className="selection-left">
              <p>Size:</p>
              <p>Qty:</p>
            </div>
            <div className="selection-right">
              <select
                value={props.item.size}
                className="inputS"
                name="size"
                onChange={props.changeSize(props.item.id)}
              >
                <option value="">Select</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <input
                type="number"
                className="inputQ"
                value={props.item.quantity}
                min="1"
                onChange={props.changeQuantity(props.item.id)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={props.addToCart(props.item.id)}
            className="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
