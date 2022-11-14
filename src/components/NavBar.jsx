import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function NavBar() {
  return (
    <React.Fragment>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href='/'
            style={{
              color: 'white',
              fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            <img src="https://i.imgur.com/p5DZiZC.png" width='80px' alt=""/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <DropdownButton
            size='sm'
              variant="outline-primary"
              id="dropdown-item-button"
              title="Actions"
            >
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Nav>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            style={{
              width: '40px',
            }}
            alt=""
          />
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
