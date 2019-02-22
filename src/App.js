import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { isEmail, isValidation } from "./helpers/auth";
class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: ""
    };
  }

  onTextChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
  };
  onTextValidation = () => {
    if (!isValidation(this.state.email).success) {
      this.setState({ emailError: isValidation(this.state.email).error });
      return false;
    }
    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    const valid = this.onTextValidation();
    console.log(valid);
    if (!valid) {
      console.log("fuck", this.state);
    }
  };
  render() {
    console.log(this.state.emailError);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onTextChange}
              className="validation"
              name="email"
              type="text"
              placeholder="e-mail"
              onFocus=""
            />
            <div style={{ color: "red", fontSize: "12px" }}>
              {this.state.emailError}
            </div>
            <button type="submit">click</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
