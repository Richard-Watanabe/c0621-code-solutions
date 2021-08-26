import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('State:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
