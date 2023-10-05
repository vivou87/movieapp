import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Modal } from "react-bootstrap";
import ReactStars from "react-stars";
// import { PiArrowClockwiseBold } from "react-icons/pi";
import "./style.css";
function NavBar(props) {
  // This state should be declared in the App.js
  const [newMovie, setNewMovie] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Moviz Planet</Navbar.Brand>
        <ReactStars
          count={10}
          onChange={(newRating) => {
            props.setRating(newRating);
          }}
          size={24}
          value={props.rating}
          color2={"#ffd700"}
          half={false}
        />
        <button
          onClick={() => {
            props.setRating(0);
          }}
        >
          Reset
        </button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                props.setSearch(event.target.value);
              }}
            />
            <Button variant="outline-success" onClick={handleShow}>
              Add movie
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h1 className="form-label">Add new movie</h1>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Title</Form.Label>
              {/* this is the field of the title */}
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(event) => {
                  setNewMovie({ ...newMovie, title: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Movie cover</Form.Label>
              {/* this is the field of the movie cover */}
              <Form.Control
                type="text"
                onChange={(event) => {
                  setNewMovie({ ...newMovie, imgUrl: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Cast</Form.Label>
              {/* this is the field of the cast  */}
              <Form.Control
                type="text"
                onChange={(event) => {
                  setNewMovie({ ...newMovie, cast: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Rating</Form.Label>
              {/* this is the rating field */}
              <Form.Control
                type="number"
                onChange={(event) => {
                  setNewMovie({ ...newMovie, rating: +event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setNewMovie({ ...newMovie, desc: event.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.setMovies([...props.movies, newMovie]);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavBar;
