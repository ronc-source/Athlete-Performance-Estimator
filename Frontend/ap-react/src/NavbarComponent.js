import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComponent.css';

function NavbarComponent() {
    return (
       <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
            <Nav.Item>
                <Navbar.Brand href="/">Athlete Performance Estimator</Navbar.Brand>
            </Nav.Item>
            <Nav.Item className="Navbar-style">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Tool">Tool</Nav.Link>
            </Nav.Item>
        </Nav>
       </Navbar>
    );
}

export default NavbarComponent