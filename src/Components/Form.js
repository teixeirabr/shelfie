import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // price: 0,
      // img: "",
      // defaultImg:
      //   "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"
    };
  }

  // handleImage = e => {
  //   this.setState({
  //     img: e.target.value
  //   });
  // };

  // handleName = e => {
  //   this.setState({
  //     name: e.target.value
  //   });
  // };

  // handlePrice = e => {
  //   this.setState({
  //     price: e.target.value
  //   });
  // };

  // handleReset = () => {
  //   this.setState({
  //     name: "",
  //     img: "",
  //     price: 0
  //   });
  // };

  handleAddProduct = () => {
    const { name, price, img } = this.props.state;
    axios
      .post("/api/product", { name, price, img })
      .then(res => {
        this.props.updateParentState(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    this.props.handleReset();

    // window.location.reload(false);
  };

  render() {
    return (
      <div className="form-shelfie">
        <section>
          <img src={this.props.state.defaultImg} alt="stuff" />
        </section>

        <section>
          Image URL
          <br />
          <input
            value={this.props.state.img}
            onChange={e => this.props.handleChanger(e)}
            name="img"
          />
        </section>

        <section>
          Product Name
          <br />
          <input
            value={this.props.state.name}
            onChange={e => this.props.handleChanger(e)}
            name="name"
          />
        </section>

        <section>
          Price
          <br />
          <input
            value={this.props.state.price}
            onChange={e => this.props.handleChanger(e)}
            name="price"
          />
        </section>
        <button
          className="button-form"
          onClick={e => this.props.handleReset(e)}
        >
          Cancel
        </button>
        <button className="button-form" onClick={this.handleAddProduct}>
          Add
        </button>
      </div>
    );
  }
}
