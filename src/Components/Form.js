import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: "",
      defaultImg:
        "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg"
    };
  }

  handleImage = e => {
    this.setState({
      img: e.target.value
    });
  };

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePrice = e => {
    this.setState({
      price: e.target.value
    });
  };

  handleReset = () => {
    this.setState({
      name: [],
      img: [],
      price: 0
    });
  };

  handleAddProduct = () => {
    const { name, price, img } = this.state;
    axios
      .post("/api/product", { name, price, img })
      .then(res => {
        this.props.updateParentState(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    this.handleReset();
    // window.location.reload(false);
  };

  // handleDelete = id => {
  //   axios
  //     .delete(`/api/product/${id}`)
  //     .then(res => {
  //       res.sendStatus(200);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // handleEdit = (name, price, img, id) => {
  //   console.log(name, price, img, id);
  //   axios.put(`/api/product/${id}`, { name, price, img }).then(res => {
  //     let { name, price, img } = res.data;
  //     this.setState({
  //       name: name,
  //       price: price,
  //       img: img
  //     });
  //   });
  // };

  render() {
    return (
      <div className="form-shelfie">
        <section>
          <img src={this.state.defaultImg} alt="stuff" />
        </section>

        <section>
          Image URL
          <br />
          <input value={this.state.img} onChange={e => this.handleImage(e)} />
        </section>

        <section>
          Product Name
          <br />
          <input value={this.state.name} onChange={e => this.handleName(e)} />
        </section>

        <section>
          Price
          <br />
          <input value={this.state.price} onChange={e => this.handlePrice(e)} />
        </section>
        <button className="button-form" onClick={e => this.handleReset(e)}>
          Cancel
        </button>
        <button className="button-form" onClick={this.handleAddProduct}>
          {" "}
          Add
        </button>
      </div>
    );
  }
}
