import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {GiConverseShoe} from 'react-icons/gi'

const Header = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.reducer_logIn);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{fontSize:'40px'}}><GiConverseShoe /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">장바구니</Nav.Link>              
              <NavDropdown title="🎁" id="basic-nav-dropdown">
                {
                  state && <NavDropdown.Item href="#action/3.1">마이페이지</NavDropdown.Item>
                }
                {
                  state
                  ? <NavDropdown.Item onClick={() => dispatch({type:'LOGOUT'})}>로그아웃</NavDropdown.Item>
                  : <NavDropdown.Item onClick={() => dispatch({type:'LOGIN'})}>로그인</NavDropdown.Item>
                }
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="jumbotron">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </>
  );
};

export default Header;
