import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Cart from "./components/Cart";
import Liked from "./components/Liked";
import { prices } from "./constants/Prices";

const App = () => {
  const [cart, setCart] = useState([]);
  const [tagVisible, setTagVisible] = useState("all");
  const [heart, setHeart] = useState([]);
  const [status, setStatus] = useState(false);
  const [state, setState] = useState({
    items: [
      {
        id: 1,
        name: "HB White Tee",
        size: "",
        quantity: 0,
        tag: "top",
        img: "./images/top1.png",
        heart: false,
      },
      {
        id: 2,
        name: "Flight Risk Back Tee",
        size: "",
        quantity: 0,
        tag: "top",
        img: "./images/top2.png",
        heart: false,
      },
      {
        id: 3,
        name: "Sword Tour Tee",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top3.png",
        heart: false,
      },
      {
        id: 4,
        name: "HB Cover Tee",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top4.png",
        heart: false,
      },
      {
        id: 5,
        name: "Portrait Tee",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top5.png",
        heart: false,
      },
      {
        id: 6,
        name: "HB Purple Tee",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top6.png",
        heart: false,
      },
      {
        id: 7,
        name: "Flight Risk Tee",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top7.png",
        heart: false,
      },
      {
        id: 8,
        name: "Flight Risk Longsleeve",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top8.png",
        heart: false,
      },
      {
        id: 9,
        name: "Sad But True Longsleeve",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top9.png",
        heart: false,
      },
      {
        id: 10,
        name: "Skull Tour Longsleeve",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top10.png",
        heart: false,
      },
      {
        id: 11,
        name: "Over Me Longsleeve",
        size: "",
        price: 0,
        quantity: 0,
        tag: "top",
        img: "./images/top11.png",
        heart: false,
      },
      {
        id: 12,
        name: "Cover Sweatshorts",
        size: "",
        price: 0,
        quantity: 0,
        tag: "bottom",
        img: "./images/bottom.png",
        heart: false,
      },
      {
        id: 13,
        name: "Runaway Tour Beanie",
        size: "",
        price: 0,
        quantity: 0,
        tag: "acc",
        img: "./images/acc1.png",
        heart: false,
      },
      {
        id: 14,
        name: "HB Beanie",
        size: "",
        price: 0,
        quantity: 0,
        tag: "acc",
        img: "./images/acc2.png",
        heart: false,
      },
      {
        id: 15,
        name: "Runaway Tour Black Tote",
        size: "",
        price: 0,
        quantity: 0,
        tag: "acc",
        img: "./images/acc3.png",
        heart: false,
      },
      {
        id: 16,
        name: "Runaway Tour Natural Tote",
        size: "",
        price: 0,
        quantity: 0,
        tag: "acc",
        img: "./images/acc4.png",
      },
      {
        id: 17,
        name: "De Saint-Trupes Hat",
        size: "",
        price: 0,
        quantity: 0,
        tag: "acc",
        img: "./images/acc5.png",
        heart: false,
      },
    ],
  });

  const handleTag = (event) => {
    setTagVisible(event.target.value);
  };

  const changeSize = (id) => (event) => {
    console.log(event.target.value);
    let copyItems = [];
    state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.size = event.target.value;
      }
      console.log("copyItem", copyItem);
      copyItems.push(copyItem);
    });
    setState({ ...state, items: copyItems });
  };

  const changeQuantity = (id) => (event) => {
    console.log(event.target.value);
    let copyItems = [];
    state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.quantity = parseInt(event.target.value);
      }
      console.log("copyItem", copyItem);
      copyItems.push(copyItem);
    });
    setState({ ...state, items: copyItems });
  };

  const addToCart = (id) => () => {
    let newShoppingCart = [];
    let itemToAdd = {};
    state.items.forEach((item) => {
      if (item.id === id) {
        itemToAdd = item;
      }
    });
    let isExistingItemInCart = false;
    //checking if same item with different size is being added
    cart.forEach((item) => {
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
    //resetting input values
    let copyItems = [];
    state.items.forEach((item) => {
      let copyItem = { ...item };
      if (item.id === id) {
        copyItem.size = "";
        copyItem.quantity = 0;
      }
      copyItems.push(copyItem);
    });

    setState({ ...state, items: copyItems });
    setCart(newShoppingCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const clickTrash = (id) => {
    let copyCart = [...cart];
    let result = copyCart.filter((item) => item.id !== id);
    setCart(result);
  };

  const clickMinus = (id, size) => {
    console.log(id, "plus clicked");
    console.log(size, "plus size");
    let copyCart = [...cart];
    copyCart.forEach((item) => {
      if (item.id === id && item.size === size) {
        item.quantity--;
      }
    });
    setCart(copyCart);
  };
  const clickPlus = (id, size) => {
    let copyCart = [...cart];
    copyCart.forEach((item) => {
      if (item.id === id && item.size === size) {
        item.quantity++;
      }
    });
    setCart(copyCart);
  };

  const getSubtotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal = subtotal + item.quantity * prices[item.id];
    });
    return subtotal;
  };

  //want to get total quantity for total item in cart
  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity = item.quantity + totalQuantity;
    });
    return totalQuantity;
  };

  const clickHeart = (id) => {
    console.log("Heart Clicked!");
    let likedItems = [];
    let copyItems = [...state.items];
    copyItems.forEach((item) => {
      if (item.id === id) {
        item.heart = true;
        likedItems.push(item);
      }
      setStatus(!status);
    });
    console.log(likedItems, "likeditems");
    likedItems.forEach((item) => {
      if (item.id === id && !status) {
        heart.push(item);
      }
    });
    console.log(heart, "heart");
    setHeart(heart);
    setState({ ...state, items: copyItems });
  };

  return (
    <div>
      <Router>
        <Route render={() => <Nav getTotalQuantity={getTotalQuantity} />} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                listOfItems={state.items}
                tagVisible={tagVisible}
                handleTag={handleTag}
                changeSize={changeSize}
                changeQuantity={changeQuantity}
                addToCart={addToCart}
                clickHeart={clickHeart}
                status={status}
              />
            )}
          />

          <Route path="/about" component={About} />

          <Route path="/liked" exact render={() => <Liked heart={heart} />} />
          <Route
            path="/cart"
            exact
            render={() => (
              <Cart
                cart={cart}
                cartLength={cart.length}
                getSubtotal={getSubtotal}
                getTotalQuantity={getTotalQuantity}
                clearCart={clearCart}
                setCart={setCart}
                clickTrash={clickTrash}
                clickMinus={clickMinus}
                clickPlus={clickPlus}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
