import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    if (this.state.clickCount >= 18) {
      return <button className="white" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 15) {
      return <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 12) {
      return <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 9) {
      return <button className="red-orange white-text" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 6) {
      return <button className="lavender white-text" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount >= 3) {
      return <button className="purple white-text" onClick={this.handleClick}>Hot Button</button>;
    }
    return <button onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
