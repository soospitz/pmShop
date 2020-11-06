import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Cart from "./components/Cart";
import { prices } from "./constants/Prices";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          name: "top1",
          size: "",
          quantity: 0,
          tag: "top",
          img: "./images/top1.png",
        },
        {
          id: 2,
          name: "top2",
          size: "",
          quantity: 0,
          tag: "top",
          img: "./images/top2.png",
        },
        {
          id: 3,
          name: "top3",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top3.png",
        },
        {
          id: 4,
          name: "top4",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top4.png",
        },
        {
          id: 5,
          name: "top5",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top5.png",
        },
        {
          id: 6,
          name: "top6",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top6.png",
        },
        {
          id: 7,
          name: "top7",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top7.png",
        },
        {
          id: 8,
          name: "top8",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top8.png",
        },
        {
          id: 9,
          name: "top9",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top9.png",
        },
        {
          id: 10,
          name: "top10",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top10.png",
        },
        {
          id: 11,
          name: "top11",
          size: "",
          price: 0,
          quantity: 0,
          tag: "top",
          img: "./images/top11.png",
        },
        {
          id: 12,
          name: "bottom",
          size: "",
          price: 0,
          quantity: 0,
          tag: "bottom",
          img: "./images/bottom.png",
        },
        {
          id: 13,
          name: "acc1",
          size: "",
          price: 0,
          quantity: 0,
          tag: "acc",
          img: "./images/acc1.png",
        },
        {
          id: 14,
          name: "acc2",
          size: "",
          price: 0,
          quantity: 0,
          tag: "acc",
          img: "./images/acc2.png",
        },
        {
          id: 15,
          name: "acc3",
          size: "",
          price: 0,
          quantity: 0,
          tag: "acc",
          img: "./images/acc3.png",
        },
        {
          id: 16,
          name: "acc4",
          size: "",
          price: 0,
          quantity: 0,
          tag: "acc",
          img: "./images/acc4.png",
        },
      ],
      cart: [],
      total: {},
      tagVisible: "all",
    };
  }

  handleTag = (event) => {
    this.setState({ tagVisible: event.target.value });
    console.log("handle tag!");
  };

  changeSize = (id) => (event) => {
    console.log(event.target.value);
    let copyItems = [];
    this.state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.size = event.target.value;
      }
      console.log("copyItem", copyItem);
      copyItems.push(copyItem);
    });
    this.setState({ items: copyItems });
  };

  changeQuantity = (id) => (event) => {
    console.log(event.target.value);
    let copyItems = [];
    this.state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.quantity = parseInt(event.target.value);
      }
      console.log("copyItem", copyItem);
      copyItems.push(copyItem);
    });
    this.setState({ items: copyItems });
  };

  addToCart = (id) => () => {
    let newShoppingCart = [];
    let itemToAdd = {};
    this.state.items.forEach((item) => {
      if (item.id === id) {
        itemToAdd = item;
      }
    });
    let isExistingItemInCart = false;

    this.state.cart.forEach((item) => {
      if (item.id === itemToAdd.id && item.size === itemToAdd.size) {
        itemToAdd.quantity = item.quantity + itemToAdd.quantity;
        newShoppingCart.push(itemToAdd);
        isExistingItemInCart = true;
      } else {
        newShoppingCart.push(item);
      }
    });

    if (!isExistingItemInCart) {
      newShoppingCart.push(itemToAdd);
    }

    let copyItems = [];
    this.state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.size = "";
        copyItem.quantity = 0;
      }
      copyItems.push(copyItem);
    });

    this.setState({ cart: newShoppingCart, items: copyItems });
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  getSubtotal = () => {
    let subtotal = 0;
    this.state.cart.forEach((item) => {
      subtotal = subtotal + item.quantity * prices[item.name];
    });
    return subtotal;
  };

  //want to get total quantity for total item in cart
  getTotalQuantity = () => {
    let totalQuantity = 0;
    this.state.cart.forEach((item) => {
      totalQuantity = item.quantity + totalQuantity;
    });
    return totalQuantity;
  };

  render() {
    return (
      <div>
        <Router>
          <Route
            render={() => <Nav getTotalQuantity={this.getTotalQuantity} />}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home
                  listOfItems={this.state.items}
                  tagVisible={this.state.tagVisible}
                  handleTag={this.handleTag}
                  changeSize={this.changeSize}
                  changeQuantity={this.changeQuantity}
                  addToCart={this.addToCart}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />

            <Route path="/about" component={About} />

            <Route
              path="/cart"
              exact
              render={() => (
                <Cart
                  cart={this.state.cart}
                  cartLength={this.state.cart.length}
                  getSubtotal={this.getSubtotal}
                  getTotalQuantity={this.getTotalQuantity}
                  clearCart={this.clearCart}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
