
import React, {Component} from 'react';
import {Navbar, Nav , Container} from 'react-bootstrap';
import Carouselslide from '../Components/Carousel';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

class Navbard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <BrowserRouter>
      

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/skills">skills</Nav.Link>
      <Nav.Link as={Link} to="/outlook">outlook</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
      <Routes>

          <Route path="/" element={<Carouselslide/>}/>
          <Route path="/" element={<Skills/>}/>

      </Routes>
      </BrowserRouter>
    );
  }
}

export default Navbard;

