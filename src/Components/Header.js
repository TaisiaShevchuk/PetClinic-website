import React, { Component } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './Cherry.jpg';
import Home from '../Pages/Home';
import Pets from '../Pages/Pets';
import Login from '../Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class Header extends Component {
  render() {
return (
  <>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/">
      <img
      src={logo}
      height="30"
      width="30"
      className="d-inline-block align-top"
      alt="Logo"
      /> Pet Clinic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/login"> Login </Nav.Link>
          <Nav.Link href="/pets"> Pets </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Pets" element={<Pets/>} />
            <Route exact path="/Login" element={<Login/>} />
        </Routes>
    </Router>
    </>
    );
  }
}
