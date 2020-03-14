import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="product">
        <h1 className="textProduct">
          {" "}
          <img width={"200px"} src={this.props.img} alt="" />
        </h1>
        <div className="productDelete">
          <h1 className="textProduct"> {this.props.name}</h1>
          <h1 className="textProduct"> Price: {this.props.price}</h1>
          <button
            className="product-buttons"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            Delete
          </button>
          <button
            className="product-buttons"
            onClick={() => this.props.handleDelete(this.props.id)} // change to handle edit//
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

// <img src={this.state.img}
