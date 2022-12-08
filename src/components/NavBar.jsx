import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';
import { useCurrentUser } from '../CurrentUserContext';
import { useCookies } from 'react-cookie';


export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const { currentUser, fetchCurrentUser } = useCurrentUser();
  const [pfp, setPfp] = useState(null);
  useEffect(() => { fetchCurrentUser() }, [])

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      if (currentUser.teacher) {
        setPfp(createAvatar(style, { seed: currentUser.teacher.email, dataUri: true }));
      }
      else if (currentUser.student) {
        setPfp(createAvatar(style, { seed: currentUser.student.email, dataUri: true }));
      } else {
        setPfp(null);
      }
    }
  }, [currentUser])

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
            <img src="logo-no-background.png" width='80px' alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <DropdownButton
              size='sm'
              variant="outline-primary"
              id="dropdown-item-button"
              title="Actions"
            >
              {!pfp ? <div>
                <Dropdown.Item onClick={() => window.location.href = "/signin"} as="button">Login</Dropdown.Item>
                <Dropdown.Item onClick={() => window.location.href = "/signup"} as="button">SignUp</Dropdown.Item>
              </div> : <div>
              <Dropdown.Item onClick={() => {
                removeCookie('token');
                window.location.href = "/signin";
              }} as="button">Log out</Dropdown.Item>
             {currentUser.teacher && <Dropdown.Item onClick={() => window.location.href = "/createexam"} as='button'>
              Create Exam
              </Dropdown.Item>}
              </div> }
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Nav>
          {pfp && <a href='/profile'>
            <img
              src={pfp}
              className="rounded-circle"
              style={{
                width: '50px',
              }}
              alt=""
            />
          </a>}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
