import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      isOpen: true
    });
  }

  handleClickClose() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (this.state.isOpen === false) {
      return <div>
        <div className="center">
          <i className="fas fa-child"></i>
        </div>
        <i className="fas fa-bars" onClick={this.handleClickOpen}></i>
      </div>;
    } else {
      return <div>
              <div className="center">
                <i className="fas fa-child"></i>
              </div>
              <div className="menu">
                <div className="overlay" onClick={this.handleClickClose}>
                   <h2 className="menu-title margin-bottom inline-block">Menu</h2><br></br>
                   <a href='#' className="margin-bottom cursor inline-block">About</a><br></br>
                   <a href='#' className="margin-bottom cursor inline-block">Get Started</a><br></br>
                   <a href='#' className="margin-bottom cursor inline-block">Sign In</a><br></br>
                 </div>
               </div>
             </div>;
    }
  }
}

export default AppDrawer;
