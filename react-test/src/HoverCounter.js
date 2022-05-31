import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
//Using the HOC
class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Hover {count} Times</button>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
