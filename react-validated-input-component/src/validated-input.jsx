import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      password: event.target.value
    });
    if (event.target.value.length >= 8) {
      this.setState({
        isValid: true
      });
    } else {
      this.setState({
        isValid: false
      });
    }
  }

  render() {
    if (this.state.isValid === true) {
      return <form>
      <label htmlFor="password">Password</label><br></br>
      <input type="password" name="password" id="password" onChange={this.handleChange}></input>
      <i className="fas fa-check"></i>
    </form>;
    } else if (this.state.password.length === 0) {
      return (
        <form>
          <label htmlFor="password">Password</label><br></br>
          <input type="password" name="password" id="password" onChange={this.handleChange}></input>
          <i className="fas fa-times"></i>
          <p>A password is required.</p>
        </form>
      );
    } else {
      return (
      <form>
        <label htmlFor="password">Password</label><br></br>
        <input type="password" name="password" id="password" onChange={this.handleChange}></input>
        <i className="fas fa-times"></i><br></br>
        <p>Your password is too short.</p>
      </form>
      );
    }
  }
}

export default ValidatedInput;
