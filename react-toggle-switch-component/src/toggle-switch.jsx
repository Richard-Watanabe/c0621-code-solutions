import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
    this.handleClickOff = this.handleClickOff.bind(this);
    this.handleClickOn = this.handleClickOn.bind(this);
  }

  handleClickOff() {
    this.setState({
      isOn: false
    });
  }

  handleClickOn() {
    this.setState({
      isOn: true
    });
  }

  render() {
    if (!this.state.isOn) {
      return (
        <div className="off" onClick={this.handleClickOn}>
          <div className="circle-off"></div>
          <span className="text">OFF</span>
        </div>
      );
    } else {
      return (
        <div className="on" onClick={this.handleClickOff}>
          <div className="circle-on"></div>
          <span className ="text">ON</span>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
