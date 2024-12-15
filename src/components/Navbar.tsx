import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/App.css';
import '../styles/index.css';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="/resume" className="navText me-5">Resume</Nav.Link>
                        <Navbar.Brand href="/">
                            <img src="/images/phi.png" alt="logo" width={75} height={75} className="image-inverted" />
                        </Navbar.Brand>
                        <Nav.Link href="/projects" className="navText ms-5">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}


export default NavBar;