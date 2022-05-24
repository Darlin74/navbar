import React, {Component} from 'react';
import './App.css';
import Navbard from './Components/Navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <Navbard/>
    );
  }
}

export default App;
