import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserPlus, faCartPlus} from '@fortawesome/free-solid-svg-icons';


function NavScrollExample() {
    const Style = {
        color: "#ffffff",
        height: '25px',
        width: '25px',

    }

  return (
    // <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className='navbar-logo'><img src='./src/images/navbar-logo.PNG' alt="navbar-logo " /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  className="toggler-icon"  />
        {/* <Navbar.Toggle aria-controls="navbarScroll"  className="toggler-icon" style={{ color: 'white', borderColor: 'white'}} /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Products" id="navbarScrollingDropdown" className="dropdown">
              <NavDropdown.Item href="#action3">Smart Phone</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Laptop </NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Headphone </NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form className="d-flex">
        <Navbar.Collapse id="navbarScroll">
            <Nav.Link><FontAwesomeIcon icon={faMagnifyingGlass} style={Style} className="me-3" id='navbar-icon'/> </Nav.Link>
            <Nav.Link> <FontAwesomeIcon icon={faUserPlus} style={Style}  className="me-3"id='navbar-icon'/></Nav.Link>
            <Nav.Link> <FontAwesomeIcon icon={faCartPlus} style={Style} className="me-4" id='navbar-icon'/></Nav.Link>
            </Navbar.Collapse>
          </Form>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
