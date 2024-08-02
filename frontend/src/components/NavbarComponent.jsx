import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Navbar, Container, Nav, Row} from 'react-bootstrap';
import './NavbarComponent.css';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

/* 
  - I imported the folloing:
  - FontAwesomeIcon component from @fortawesome/react-fontawesome
  - Navbar, Container, Nav, Row components from react-bootstrap.
  - css style file i.e NavbarComponent.css.
  - faHeart and faGithub components @fortawesome library.
  - Link component from the react-router-dom.
*/

const NavbarComponent = () => {

  return (
    <>
      <Navbar className="nav-class" expand="sm">
        <Container fluid>
          {/* Application Name */}
          <Navbar.Brand>
            <Link to="/" id="brand-id">Expressearch</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Row>
                <Nav className="me-auto">
                  <ul className="navbar-nav me-auto mb-2 mb-sm-0">           
                  </ul>
                  <ul className="d-flex navbar-nav me-2 mb-2 mb-sm-0">
                    {/* Favourites Page Link/Button */}
                    <Link to="/favourites" id="nav-link-class">
                      <FontAwesomeIcon icon={faHeart} className="font-awesome-icons" id="heart-icon"/>&nbsp;Favourites
                    </Link>
                    
                    {/* Github Repository Link Button */}
                    <Nav.Link href="https://github.com/Jonamk458/Search-App-Beta" target="_blank" id="nav-link-class"><FontAwesomeIcon icon={faGithub} className="font-awesome-icons" id="github-icon"/>&nbsp;GitHub</Nav.Link>
                  </ul>
                </Nav>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NavbarComponent;

/* 
  - Firstly created a Navigation bar(Navbar) component.
  - Then wrote the navigation bar JSX that heavily relies on bootstrap and react-bootstrap libraries.
  - The first major JSX item is the Favourites Page Link/Button.
  - The second major JSX item is the Github Repository Link Button that redirects the user to this Application's source code repository.
*/