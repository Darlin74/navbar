import React, {Component} from 'react';
import './App.css';
import Navbard from './Components/Navbar.js';
import Carouselslide from './Components/Carousel.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
        <Navbard/>
        </div>
    );
  }
}

export default App;
