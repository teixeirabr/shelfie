import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      defaultImg:
        "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg",
      inventory: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        // console.log(res.data);
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(`get request err: ${err}`));
  };

  handleDelete = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => {
        axios
          .get(`/api/inventory`)
          .then(res => {
            console.log(res);
            this.setState({ inventory: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateParentState = arr => {
    this.setState({
      inventory: arr
    });
  };

  handleEdit = id => {
    axios
      .put(`/api/product/${id}`, {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      })
      .then(res => {
        this.setState({
          inventory: res.data
        });
      });
  };

  handleChanger = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleReset = () => {
    this.setState({
      name: "",
      img: "",
      price: 0
    });
  };

  render() {
    console.log(this.state.inventory);
    return (
      <div className="App">
        <Header />
        <div className="main">
          {/* {this.state.inventory[0]} */}
          <Dashboard
            updateParentState={this.updateParentState}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            inventory={this.state.inventory}
          />

          <Form
            updateParentState={this.updateParentState}
            state={this.state}
            handleChanger={this.handleChanger}
            handleReset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}
