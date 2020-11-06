import React, { Component } from "react";
import "../App.css";
import {prices} from "../constants/Prices";

const Item = (props) => {
    console.log("item",props.item)
  return (
    <div key={props.key} className="column">
      
        
          <h3>
            {props.item.name} (${prices[props.item.name]})
          </h3>
          <img src={props.item.img} style={{ height: 150 }} />
          <br />
          <label>
            Size:
            <select
              value={props.item.size}
              name="size"
              onChange={props.changeSize(props.item.id)}
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <br />
          <label>
            Quantity:
            <input
              type="number"
              value={props.item.quantity}
              min="1"
              onChange={props.changeQuantity(props.item.id)}
            />
          </label>
          <button
            type="submit"
            onClick={props.addToCart(props.item.id)}
            className="button"
          >
            Add to Cart
          </button>
        
      
    </div>
  );
}

export default Item;
