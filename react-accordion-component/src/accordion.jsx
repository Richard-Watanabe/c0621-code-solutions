import React from 'react';

const allLanguage = [
  {
    id: '1',
    name: 'Hypertext Markup Language',
    description: `Hypertext Markup Language (HTML) is the standard markup language
    for creating web pages and web applications. With Cascading Style Sheets (CSS)
    and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.`
  },
  {
    id: '2',
    name: 'Cascading Style Sheets',
    description: `Cascading Style Sheets (CSS) is a style sheet language used for
    describing the presentation of a document written in a markup language like HTML.
    CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.`
  },
  {
    id: '3',
    name: 'JavaScript',
    description: `JavaScript, often abbreviated JS, is a high-level, interpreted
    programming language that conforms to the ECMAScript specification. JavaScript
    has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and
    first-class functions.`
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLanguage: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    const clickedLanguage = event.target.getAttribute('clicked');
    if (clickedLanguage === this.state.openLanguage) {
      this.setState({
        openLanguage: ''
      });
    } else {
      this.setState({
        openLanguage: clickedLanguage
      });
    }
  }

  render() {
    const LanguageList = allLanguage.map(language => {
      return (
        <li key={language.id}>
          <li className='topic' clicked={language.name} onClick={this.toggle}>{language.name}</li>
          <li className={`${(language.name === this.state.openLanguage) ? '' : 'hide'} desc`}>{language.description}</li>
        </li>
      );
    });
    return <ul>{LanguageList}</ul>;
  }
}

export default Accordion;
