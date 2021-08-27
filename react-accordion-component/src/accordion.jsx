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
    id: '003',
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
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    if (this.state.isOpen === false) {
      const LanguageList = allLanguage.map(language =>
        <li className="no-deco" onClick={this.toggle} key={language.id}>{language.name}</li>
      );
      return <ul>{LanguageList}</ul>;
    } else {
      const LanguageList = allLanguage.map(language =>
        <li onClick={this.toggle} key={language.id}>{language.name}
          <div>
            {language.description}
          </div>
        </li>
      );
      return <ul>{LanguageList}</ul>;
    }
  }
}

export default Accordion;
