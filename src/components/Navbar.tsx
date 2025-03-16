import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../styles/index.css';

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="navbar">
            <Container>
                <Nav className="navbar-nav mx-auto">
                    <Link to="/" className="navText">Home</Link>
                    <Link to="/resume" className="navText">Resume</Link>
                    <Link to="/unpublications" className="navText">(Un)-Publications</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
