import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import cls from './NavbarComponent.module.scss';

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>Brand</Link>
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to={'/main'}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/second'}>Features</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
