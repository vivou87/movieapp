import React from "react";
import "../components/style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <div className="Login">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Moviz Planet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navActive" : "navDisabled"
                }
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navActive" : "navDisabled"
                }
                to="/movies"
              >
                Movies
              </NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navActive" : "navDisabled"
                }
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="login">Login page</div>
    </div>
  );
}

export default Login;
