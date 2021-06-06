import React from "react";

class Counter extends React.Component {
  //(1) (firstMount)
  //not running (secondMount)
  constructor(props) {
    super(props);
    this.state = { count: this.props.initCount || 0 };
    this.increasing = this.increasing.bind(this);
  }

  // (3) (firstMount)
  // (3) (secondMount)
  componentDidMount() {
    // context this, what is this?, what is self?.
    console.log("3 did first mount");
    // this.timerID = setInterval(() => this.autoIncrease(), 1000);

    // event listern api dom
    // settimeout, ...
  }

  // firstUnMount
  componentWillUnmount() {
    console.log("unmuont 1");

    // debounce, throttle
    clearInterval(this.timerID);
  }

  //(1) should update secondMount
  // shouldComponentUpdate(_, nextState) {
  //   // Chống rerender
  //   console.log(this.state.count, "0 CURRENT STATE");
  //   console.log({ nextState });
  //   return this.state.count !== nextState.count;
  // }

  //2 did update secondMount
  componentDidUpdate() {
    console.log("2, DID UPDATE");
  }

  // autoIncrease() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }

  increasing() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // (2)
  // (1)
  render() {
    console.log("RENDER, 1");

    return (
      <div>
        <h1>Hello, class!</h1>
        <button onClick={this.increasing}>Increase One</button>
        <h2>count: {this.state.count}.</h2>
      </div>
    );
  }
}

export default React.memo(Counter);
export { Counter };
