import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import SignIn from './SignIn'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faUserPlus,
    faCartPlus
} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types

function NavScrollExample() {
    //function NavScrollExample({ onIconClicked }) {

    const Style = {
        color: '#ffffff',
        height: '25px',
        width: '25px'
    }

    //Initiate a value to show the sign in form by using useState hook
    // const [showForm, setShowForm] = useState(false)

    // const handleUserIconClick = () => {
    //     // When user icon is clicked a sign in form will appear.
    //     setShowForm(true)

    //     //This function is passed as a prop to the NavBar component
    //     // it only works when the user icon is clicked to hide the Hero component
    //     onIconClicked()
    // }

    return (
        // <Navbar collapseOnSelect expand="lg"  variant="dark">
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container fluid>
                        {/* <Navbar.Brand href="/" className="navbar-logo">
                            <img
                                src="./src/images/navbar-logo.PNG"
                                alt="navbar-logo "
                            />
                        </Navbar.Brand> */}
                        <Link className="navbar-logo Brand" to="/">
                            <img
                                src="./src/images/navbar-logo.PNG"
                                alt="navbar-logo "
                            />
                        </Link>
                        <Navbar.Toggle
                            aria-controls="navbarScroll"
                            className="toggler-icon"
                        />
                        {/* <Navbar.Toggle aria-controls="navbarScroll"  className="toggler-icon" style={{ color: 'white', borderColor: 'white'}} /> */}
                        <Navbar.Collapse
                            id="navbarScroll"
                            style={{ width: '200px' }}
                        >
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ width: '200px' }}
                                navbarScroll
                            >
                                <NavDropdown
                                    title="Products"
                                    id="navbarScrollingDropdown"
                                    className="dropdown"
                                >
                                    <NavDropdown.Item href="smartphones">
                                        Smart Phone
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="laptop">
                                        {' '}
                                        Laptop{' '}
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="headphone">
                                        {' '}
                                        Headphone{' '}
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Form className="d-flex">
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav.Link>
                                        <Link to="/searchproduct">
                                            <FontAwesomeIcon
                                                icon={faMagnifyingGlass}
                                                style={Style}
                                                className="me-3"
                                                id="navbar-icon"
                                            />
                                        </Link>{' '}
                                    </Nav.Link>
                                    <Nav.Link>
                                        {' '}
                                        <Link to="/signin">
                                            <FontAwesomeIcon
                                                icon={faUserPlus}
                                                style={Style}
                                                className="me-3"
                                                id="navbar-icon"
                                            />{' '}
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link>
                                        <Link to="/cart">
                                            {' '}
                                            <FontAwesomeIcon
                                                icon={faCartPlus}
                                                style={Style}
                                                className="me-4"
                                                id="navbar-icon"
                                            />
                                        </Link>
                                    </Nav.Link>
                                </Navbar.Collapse>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* <div className="sign-component">{showForm && <SignIn />}</div> */}
            </div>
        </>
    )
}

export default NavScrollExample
