import React, { Component } from "react";
import { Link } from "react-router-dom";
import { prices } from "../constants/Prices";
import "../App.css";

const Cart = (props) => {
  const cartList =
    props.cart &&
    props.cart.map((item) => {
      return (
        <fieldset>
          <p className="cart">
            {item.name}: {item.size}
          </p>
          <p>
            ${prices[item.name]} x{item.quantity}
          </p>
        </fieldset>
      );
    });
  console.log(props.getTotalQuantity(), "total quantity");
  console.log(props.cartLength, "cartLength");

  return (
    <div>
      <h1>Cart ({props.getTotalQuantity()}):</h1>
      <div>{cartList}</div>

      {props.cartLength > 0 && (
        <div>
          <h3>Subtotal: ${props.getSubtotal()}</h3>

          <button type="submit" onClick={props.clearCart}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
