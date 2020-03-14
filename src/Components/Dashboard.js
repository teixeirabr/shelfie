import React, { Component } from "react";
import Product from "../Components/Product";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props.inventory);
    let mappedInventory = this.props.inventory.map(e => {
      return (
        <Product
          updateParentState={this.props.updateParentState}
          handleDelete={this.props.handleDelete}
          key={e.id}
          id={e.id}
          name={e.name}
          price={e.price}
          img={e.img}
        />
      );
    });
    return (
      <div>
        <div>{mappedInventory}</div>
      </div>
    );
  }
}
