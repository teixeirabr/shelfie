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
      inventory: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("/api/inventory")
  //     .then(res => {
  //       this.setState({
  //         inventory: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  componentDidMount() {
    this.getItems();
  }
  // componentDidUpdate(prevProps, prevState) {
  //   const { inventory } = this.state;
  //   if (prevState.inventory !== inventory) this.getItems();
  // }
  getItems = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        console.log(res.data);
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(`get request err: ${err}`));
  };

  handleDelete = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(response => {
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

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          {/* {this.state.inventory[0]} */}
          <Dashboard
            updateParentState={this.updateParentState}
            handleDelete={this.handleDelete}
            inventory={this.state.inventory}
          />

          <Form updateParentState={this.updateParentState} />
        </div>
      </div>
    );
  }
}
