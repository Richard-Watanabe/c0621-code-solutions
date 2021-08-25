import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClickPlay() {
    this.setState({
      isCounting: true
    });
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  handleClickStop() {
    this.setState({
      isCounting: false
    });
    clearInterval(this.timer);
  }

  handleReset() {
    this.setState({
      count: 0
    });
  }

  render() {
    if (this.state.isCounting === false) {
      return <div>
               <div className="circle" onClick={this.handleReset}>
                 <h1 className="number" onClick={this.handleReset}>{this.state.count}</h1>
               </div>
               <i className="fas fa-play" onClick={this.handleClickPlay}></i>
            </div>;
    } else {
      return <div>
               <div className="circle">
                 <h1 className="number">{this.state.count}</h1>
               </div>
               <i className="fas fa-pause" onClick={this.handleClickStop}></i>
             </div>;
    }
  }
}

export default Stopwatch;
