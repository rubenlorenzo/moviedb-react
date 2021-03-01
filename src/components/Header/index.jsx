import React, { useState } from "react";
import history from "history/browser";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import "./Header.scss";

function Header(props) {
  let [querySearch, setQuerySearch] = useState("");

  return (
    <Navbar>
      <Navbar.Brand href="/">Moviedb-React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Top10</Nav.Link>
          <Nav.Link href="#link"></Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2"
            onChange={handleChange}
          />
          <Button variant="outline-success" onClick={handleSubmit}>
            Buscar
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

  function handleChange(e) {
    setQuerySearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.replace("/movies/search/1?query=" + querySearch);
    window.location.reload();
  }
}

export default Header;
