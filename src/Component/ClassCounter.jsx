import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `clicked ${this.state.count} times`;
    }
  }
  countHandler = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };
  nameInputHandler = (e) => {
    const value = e.target.value;
    this.state.name = value;
    this.setState({ name: value });
  };
  render() {
    return (
      <div>
        <button onClick={this.countHandler}>count : {this.state.count}</button>
        <input type="text" onChange={(e) => this.nameInputHandler(e)} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default ClassCounter;
