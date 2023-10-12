import React from "react";
import "../components/style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../data";
function SingleMovie() {
  let { id } = useParams();
  let movie = data.find((elt) => elt.id === id);
  console.log(movie);
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
      <div className="singleMovie">
        <h1> {movie.title} </h1>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default SingleMovie;
