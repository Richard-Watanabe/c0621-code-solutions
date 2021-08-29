import React from 'react';

const imagesArray = [
  {
    id: 1,
    image: 'https://img.pokemondb.net/artwork/large/vaporeon.jpg'
  },
  {
    id: 2,
    image: 'https://img.pokemondb.net/artwork/large/umbreon.jpg'
  }, {
    id: 3,
    image: 'https://img.pokemondb.net/artwork/large/jolteon.jpg'
  }, {
    id: 4,
    image: 'https://img.pokemondb.net/artwork/large/espeon.jpg'
  }, {
    id: 5,
    image: 'https://img.pokemondb.net/artwork/large/flareon.jpg'
  }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClickForward = this.handleClickForward.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleDots = this.handleDots.bind(this);
  }

  handleClickForward() {
    if (this.state.count === (imagesArray.length - 1)) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
    clearInterval(this.dotTimer);
    this.dotTimer = setInterval(() => {
      if (this.state.count === (imagesArray.length - 1)) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }, 3000);
  }

  handleClickBack() {
    if (this.state.count === 0) {
      this.setState({
        count: imagesArray.length - 1
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
    clearInterval(this.dotTimer);
    this.dotTimer = setInterval(() => {
      if (this.state.count === (imagesArray.length - 1)) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }, 3000);
  }

  componentDidMount() {
    clearInterval(this.dotTimer);
    this.dotTimer = setInterval(() => {
      if (this.state.count === (imagesArray.length - 1)) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }, 3000);
  }

  handleDots(num) {
    this.setState({
      count: num
    });
    clearInterval(this.dotTimer);
    this.dotTimer = setInterval(() => {
      if (this.state.count === (imagesArray.length - 1)) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }, 3000);
  }

  render() {
    const dots = imagesArray.map((image, i) => {
      if (i === this.state.count) {
        return <i key={imagesArray.id} className="fas fa-circle" onClick={() => this.handleDots(i)} ></i>;
      } else {
        return <i key={imagesArray.id} className="far fa-circle" onClick={() => this.handleDots(i)}></i>;
      }
    });
    return (
      <div className="container flex">
        <i className="fas fa-angle-left angle" onClick={this.handleClickBack}></i>
        <div className="image-container flex">
          <img className="image" src={imagesArray[this.state.count].image}></img>
          <div>{dots}</div>
        </div>
        <i className="fas fa-angle-right angle" onClick={this.handleClickForward}></i>
      </div>
    );
  }
}

export default Carousel;
