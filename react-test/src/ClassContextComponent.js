import React, { Component } from "react";
// import { ThemeContext } from "./App";

export class ClassContextComponent extends Component {
  themestyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return (
      <></>
      // <ThemeContext.Consumer>
      //   {(darkTheme) => {
      //     return <div style={this.themestyles(darkTheme)}>Class Theme</div>;
      //   }}
      // </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
