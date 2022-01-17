import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handledClick = this.handledClick.bind(this);
  }

  handledClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    return (
      <div>
        <button onClick={this.handledClick}>{buttonText}</button>
      </div>
    );
  }
}

export default State;
