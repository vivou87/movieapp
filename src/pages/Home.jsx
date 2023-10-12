import React from "react";
import "../components/style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Moviz Planet</Navbar.Brand>
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
            <Nav.Link>
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
      <div className="home">
        <h1>This is the home page</h1>
      </div>
    </div>
  );
}

export default Home;
