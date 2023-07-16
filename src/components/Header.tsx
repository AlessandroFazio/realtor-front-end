"use client";

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Realtor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Buy</Nav.Link>
                <Nav.Link href="#link">Rent</Nav.Link>
                <Nav.Link href="#link">Sell</Nav.Link>
                <Nav.Link href="#link">Agent finder</Nav.Link>
                <Nav.Link className="justify-content-end" href="#link">Help</Nav.Link>
                <Nav.Link className="justify-content-end" href="#link">Sign in</Nav.Link>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}