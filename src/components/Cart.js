import React, { Component } from "react";
import { prices } from "../constants/Prices";
import "../App.css";

const Cart = (props) => {
  const cartList =
    props.cart &&
    props.cart.map((item) => {
      return (
        <div>
          {item.quantity > 0 && (
            <div className="cart-item">
              <img src={item.img} />
              <p>{item.name}</p>
              <p>{item.size}</p>
              <p>${prices[item.id]}</p>
              <p>
                <i
                  onClick={() => props.clickMinus(item.id, item.size)}
                  class="fas fa-minus-circle"
                ></i>
                {item.quantity}
                <i
                  onClick={() => props.clickPlus(item.id, item.size)}
                  class="fas fa-plus-circle"
                ></i>
              </p>
              <p>${prices[item.id] * item.quantity}</p>
              <i
                onClick={() => props.clickTrash(item.id, item.size)}
                class="fas fa-trash-alt fa-lg"
                style={{ color: "darkred" }}
              ></i>
            </div>
          )}
        </div>
      );
    });

  let tax = props.getSubtotal() * 0.08875;

  return (
    <div>
      <h1><i class="fas fa-shopping-cart"></i> CART ({props.getTotalQuantity()}):</h1>

      <div>
        {props.cartLength > 0 ? (
          <div className="cart">
            <div className="cart-left">
              <div className="cart-label">
                <h4></h4>
                <h4>Item</h4>
                <h4>Size</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
                <h4></h4>
              </div>
              <div>{cartList}</div>

              {/* <h3>Subtotal: ${props.getSubtotal()}</h3><br/><br/> */}
              
            </div>
            <div className="cart-right">
              <h4>Order Summary</h4>
              <div className="cart-right-inside">
                <div className="cart-right-left">
                  <p4>Subtotal:</p4>
                  <br />
                  <p4>Shipping:</p4>
                  <br />
                  <p4>Tax:</p4>
                  <br />
                  <br />
                  <p4 className="total">Total:</p4><br/><br/><br/>
                  <button type="submit" onClick={props.clearCart} className="cart-button-checkout">
                    Checkout
                  </button>
                </div>
                <div className="cart-right-right">
                  <p4>${props.getSubtotal()}.00</p4>
                  <br />
                  <p4>$4.99</p4>
                  <br />
                  <p4>${tax.toFixed(2)}</p4>
                  <br />
                  <br />
                  <p4 className="total">${(props.getSubtotal() + 4.99 + tax).toFixed(2)}</p4><br/><br/><br/>
                  <button type="submit" onClick={props.clearCart} className="cart-button">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="emptyCart">Your Cart is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
