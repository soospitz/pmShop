import React, { Component } from "react";
import Item from "./Item";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemList =
      this.props.listOfItems && this.props.tagVisible === "all"
        ? this.props.listOfItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              changeSize={this.props.changeSize}
              changeQuantity={this.props.changeQuantity}
              addToCart={this.props.addToCart}
              handleSubmit={this.props.handleSubmit}
            />
          ))
        : this.props.listOfItems
            .filter((item) => item.tag === this.props.tagVisible)
            .map((item) => (
              <Item
                key={item.id}
                item={item}
                changeSize={this.props.changeSize}
                changeQuantity={this.props.changeQuantity}
                addToCart={this.props.addToCart}
                handleSubmit={this.props.handleSubmit}
              />
            ));


    return (
      <div>
        <div className="tag">
          <button onClick={this.props.handleTag} value="top" className="button">
            Top
          </button>
          <button
            onClick={this.props.handleTag}
            value="bottom"
            className="button"
          >
            Bottom
          </button>
          <button onClick={this.props.handleTag} value="acc" className="button">
            Accessories
          </button>
          <button onClick={this.props.handleTag} value="all" className="button">
            All
          </button>
        </div>

        <div className="cards">{itemList}</div>
      </div>
    );
  }
}

export default Home;
