import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/index.css';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar">
                <Container>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href="/" className="navText">Home</Nav.Link>
                        <Nav.Link href="/resume" className="navText">Resume</Nav.Link>
                        <Nav.Link href="/unpublications" className="navText">(Un)-Publications</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default NavBar;