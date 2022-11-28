import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';


export default function NavBar() {

  let pfp = createAvatar(style, {
    seed: 'sayan@asia.com',
    dataUri: true,
    // ... and other options
  });

  return (
    <React.Fragment>
      <Navbar sticky='top' bg="dark">
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
              <Dropdown.Item onClick={() => window.location.href = "/signin"} as="button">Login</Dropdown.Item>
              <Dropdown.Item onClick={() => window.location.href = "/signup"} as="button">SignUp</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Nav>
          <img
            src={pfp}
            className="rounded-circle"
            style={{
              width: '50px',
            }}
            alt=""
          />
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
